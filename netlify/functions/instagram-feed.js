const { fetchInstagramFeed, jsonResponse } = require('../../instagram-feed-service');

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return jsonResponse({}, 204);
  }

  try {
    const params = event.queryStringParameters || {};
    const data = await fetchInstagramFeed({
      token: process.env.INSTAGRAM_ACCESS_TOKEN,
      limit: params.limit || process.env.INSTAGRAM_FEED_LIMIT
    });
    return jsonResponse({ data });
  } catch (error) {
    return jsonResponse({
      error: error.message || 'Unable to load Instagram feed'
    }, error.statusCode || 500);
  }
};
