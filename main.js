var googleapis = require('googleapis');

/*
 Example of using google apis module to discover the URL shortener module, and shorten
 a url
 @param params.url : the URL to shorten
 */
exports.googleapis = function(params, cb) {
 // Note that, a folder named 'public' must be present in the same folder for the cache: { path: 'public' } option to work.
  googleapis.withOpts({ cache: { path: 'public' }}).discover('urlshortener', 'v1').execute(function(err, client) {
    console.log('executing');
    console.log('dirname is ' + __dirname);
    var req1 = client.urlshortener.url.insert({
      longUrl: params.url || 'https://www.feedhenry.com'
    });

    console.log(req1);
    req1.withApiKey(  << place google API key here  >>  );
    req1.execute(function(err, response) {
      console.log(err);
      console.log('Short URL is', response.id);
      return cb(null, response);
    });
  });
};
