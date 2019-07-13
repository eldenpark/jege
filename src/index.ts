export function logger(logTag: string) {
  const tagSegment = `%c${logTag}%c `;
  return function universalLoggerFn(format: string, ...args: any[]) {
    const _format = tagSegment + format;
    console.log(_format, 'color: #0aa8b3', 'color: black', ...args); // eslint-disable-line
  };
}
