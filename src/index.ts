function isNode() {
  return typeof process !== 'undefined' && process && process.versions && process.versions.node;
}

const nodeCyan = (str: string) => `\x1b[36m${str}\x1b[0m`;

export function logger(logTag: string) {
  function nodeLoggerFn(format: string, ...args: any[]) {
    const time = new Date().toISOString();
    const firstArgument = `${time} ${nodeCyan(logTag)} ${format}`;

    console.log(firstArgument, ...args); // eslint-disable-line
  }

  function universalLoggerFn(format: string, ...args: any[]) {
    const date = new Date();
    const second = date.getSeconds().toString().padStart(2, '0');
    const milliseconds = date.getMilliseconds();
    const _format = `%c${second}:${milliseconds} %c${logTag}%c ${format}`;

    console.log( // eslint-disable-line
      _format,
      'color: #bbbbbb',
      'color: #0aa8b3',
      'color: black',
      ...args,
    );
  }

  return isNode() ? nodeLoggerFn : universalLoggerFn;
}
