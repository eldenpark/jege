# Jege
Isomorphic Logger in JavaScript.

## Installation
```
npm install jege
yarn install jege // using yarn
```

## Usage

### Node.js
```js
const { buildLogger, logger } = require('jege/server');

const buildLog (logger('[foo]'));
const log = logger('[bar]');

buildLog('clean', 'srcPath: %s, targetPath: %s', srcPath, targetPath);
log('something: %s has happend', something);
```

### Browser
```js
const { logger } = require('jege');

const log = logger('[in-browser]');
log('something: %s has happend', 'SOME_THING');
```
