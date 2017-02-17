# logger

## install

```
$ npm install 70-10/node-logger
```

## Usage

```js
const Logger = require("logger");

const logger = Logger.create("observer");

logger.trace("this is trace log");
logger.debug("this is debug log");
logger.info("this is info log");
logger.warn("this is warn log");
logger.error("this is error log");
logger.fatal("this is fatal log.");
```
