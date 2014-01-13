geojson-snarf
=============

shell function for quickly visualizing geojson data using gists

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
