const isNode = (typeof process !== 'undefined') && (process.release.name === 'node');

export function logger(logTag: string) {
  return isNode
    ? function nodeLoggerFn(format: string, ...args: any[]) {
      const time = new Date().toISOString();
      const firstArgument = `${time} \x1b[36m${logTag}\x1b[0m ${format}`;
      console.log(firstArgument, ...args); // eslint-disable-line
    }
    : function universalLoggerFn(format: string, ...args: any[]) {
      const _format = `%c${logTag}%c ${format}`;
      console.log(_format, 'color: #0aa8b3', 'color: black', ...args); // eslint-disable-line
    };
}
