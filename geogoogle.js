var google = require('google');

google.resultsPerPage = 25;
var nextCounter = 0;

/*
  Prints out the top 50 geojson files from a google search
*/
google("filetype:geojson", function(err, next, links){
  if (err) console.error(err);
  for (var i = 0; i < links.length; ++i) {
    console.log(links[i].link);
  }
  if (nextCounter < 4) {
    nextCounter += 1;
    if (next) next();
  }
});
