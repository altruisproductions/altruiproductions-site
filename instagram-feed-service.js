const INSTAGRAM_FIELDS = 'id,caption,media_type,media_url,permalink,thumbnail_url,timestamp';

function normalizeInstagramItems(payload) {
  const items = Array.isArray(payload) ? payload : payload.data;
  return (items || []).map((item) => {
    const image = item.media_type === 'VIDEO'
      ? item.thumbnail_url || item.media_url
      : item.media_url || item.thumbnail_url;

    return {
      id: item.id,
      caption: item.caption || '',
      media_type: item.media_type,
      media_url: item.media_url,
      thumbnail_url: item.thumbnail_url || '',
      image,
      permalink: item.permalink || 'https://www.instagram.com/theotherfilmaker/',
      timestamp: item.timestamp || ''
    };
  }).filter((item) => item.image);
}

async function fetchInstagramFeed({ token, limit = 18 }) {
  if (!token) {
    const error = new Error('Missing INSTAGRAM_ACCESS_TOKEN environment variable');
    error.statusCode = 500;
    throw error;
  }

  const maxItems = Math.max(1, Math.min(Number(limit) || 18, 50));
  let url = `https://graph.instagram.com/me/media?fields=${INSTAGRAM_FIELDS}&limit=${Math.min(maxItems, 25)}&access_token=${encodeURIComponent(token)}`;
  const collected = [];

  while (url && collected.length < maxItems) {
    const response = await fetch(url, { cache: 'no-store' });
    const payload = await response.json();

    if (!response.ok) {
      const error = new Error(payload.error && payload.error.message ? payload.error.message : `Instagram API error ${response.status}`);
      error.statusCode = response.status;
      throw error;
    }

    collected.push(...normalizeInstagramItems(payload));
    url = payload.paging && payload.paging.next ? payload.paging.next : '';
  }

  return collected.slice(0, maxItems);
}

function jsonResponse(body, statusCode = 200) {
  return {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Cache-Control': 'public, max-age=300, s-maxage=300',
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(body)
  };
}

module.exports = {
  fetchInstagramFeed,
  jsonResponse
};
