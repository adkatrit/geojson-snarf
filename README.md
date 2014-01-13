geojson-snarf
=============

Here is a shell function for quickly gist'ing a remote url.


```
function geogist(){
  DIRECTORY=/tmp/
  command -v gist >/dev/null 2>&1 || echo "gist is not installed. try this:  gem install gist && gist --login" && \
  RANDO=$RANDOM && \
  wget -nv -O $DIRECTORY$RANDO.geojson $1 && \
  gist $DIRECTORY$RANDO.geojson && \
  rm $DIRECTORY$RANDO.geojson
}

```


`geogoogle.js` will search google for filetype:geojson and spit out the top 50 results.  

