var googleapis = require('googleapis');

/*
 Example of using google apis module to discover the URL shortener module, and shorten
 a url
 @param params.url : the URL to shorten
 */
exports.googleapis = function(params, cb) {
  googleapis.discover('urlshortener', 'v1').execute(function(err, client) {
    var req1 = client.urlshortener.url.insert({
      longUrl: params.url || 'https://www.feedhenry.com'
    });

    req1.execute(function(err, response) {
      console.log('Short URL is', response.id);
      return cb(null, response);
    });
  });
};