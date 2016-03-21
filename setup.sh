#!/bin/bash

cd "$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

npm install babel-preset-es2015 --save-dev
npm install browserify

echo '{ "presets": ["es2015"] }' > .babelrc

echo ' ./node_modules/browserify/bin/cmd.js app.js  -t babelify --outfile bundle.js' > compile.sh
echo 'node bundle.js' > run.sh

chmod +x *.sh

touch app.js
