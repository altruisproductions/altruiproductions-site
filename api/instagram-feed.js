const { fetchInstagramFeed } = require('../instagram-feed-service');

module.exports = async function instagramFeed(request, response) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  response.setHeader('Cache-Control', 'public, max-age=300, s-maxage=300');

  if (request.method === 'OPTIONS') {
    response.status(204).end();
    return;
  }

  try {
    const limit = request.query && request.query.limit ? request.query.limit : process.env.INSTAGRAM_FEED_LIMIT;
    const data = await fetchInstagramFeed({
      token: process.env.INSTAGRAM_ACCESS_TOKEN,
      limit
    });
    response.status(200).json({ data });
  } catch (error) {
    response.status(error.statusCode || 500).json({
      error: error.message || 'Unable to load Instagram feed'
    });
  }
};
