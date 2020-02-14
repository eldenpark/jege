const { logger } = require('../lib/server');

const log = logger('[jege]');

log('some log: %s', 123);
log('some log2');

const log2 = logger('[jege]', {
  fileName: __filename,
});

log2('some log withFileName: %s', 123);
