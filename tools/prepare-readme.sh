#/bin/sh

set -e

node ./tools/generate-readmes.js
node ./tools/jsdoc-to-markdown.js ./src/components/README.hbs --components "./src/components/*/index.js" > ./src/components/README.md
node ./tools/jsdoc-to-markdown.js ./README.hbs --components "./src/components/*/index.js" > ./README.md
node ./tools/jsdoc-to-markdown.js ./SUMMARY.hbs --components "./src/components/*/index.js" > ./SUMMARY.md
