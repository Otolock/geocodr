module.exports = gocoder;
function gocoder(opt) {
  // optional params
  opt = opt || {};

  if (!opt.api_key) {
    throw new Error('No API key provided');
  }

  // private data
  var api_key = opt.api_key;
  var api = opt.api || 'google';

  // API/data for end-user
  return {
    api_key: api_key,
    api: api,
  };

  // private functions
  function parse() {}
}
