install: npm ci

publish: npm publish --dry-run

make lint: npx eslint

node bin/brain-games.js

node bin/brain-even.js