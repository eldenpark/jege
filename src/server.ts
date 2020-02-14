const chalk = require('chalk');
const util = require('util');

function getLogArgs({
  args,
  buildStep = '',
  fileName,
  format,
  tag,
}) {
  const _buildStep = buildStep.length > 0
    ? ' ' + chalk.magenta('build>' + buildStep)
    : '';
  const _fileName = fileName ? ` [${fileName}]` : '';
  const _msg = format ? ' ' + util.format(format, ...args) : '';
  const _tag = chalk.cyan(tag);
  const _time = new Date().toISOString();

  return {
    _buildStep,
    _fileName,
    _msg,
    _tag,
    _time,
  };
}

export function buildLogger(logTag: string) {
  return function buildLoggerFn(buildStep: string, format: string, ...args: any[]) {
    const {
      _buildStep,
      _msg,
      _tag,
      _time,
    } = getLogArgs({
      args,
      buildStep,
      fileName: undefined,
      format,
      tag: logTag,
    });
    console.log(`${_time} ${_tag}${_buildStep} ${_msg}`); //eslint-disable-line
  };
}

export function logger(tag, opts: Options = {}) {
  const { fileName } = opts;
  let trimmedFileName;
  if (fileName) {
    const idx = fileName.lastIndexOf('/');
    trimmedFileName = fileName.substring(idx + 1);
  }

  return function loggerFn(format: string, ...args: any[]) {
    const {
      _fileName,
      _msg,
      _tag,
      _time,
    } = getLogArgs({
      args,
      fileName: trimmedFileName,
      format,
      tag,
    });
    console.log(`${_time} ${_tag}${_fileName}${_msg}`); //eslint-disable-line
  };
}

interface Options {
  fileName?: string;
}
