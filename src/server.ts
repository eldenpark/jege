const chalk = require('chalk');
const util = require('util');

function getLogArgs({
  args,
  buildStep = '',
  format,
  tag,
}) {
  const _buildStep = buildStep.length > 0
    ? ' ' + chalk.magenta('build>' + buildStep)
    : '';
  const _msg = format ? util.format(format, ...args) : '';
  const _tag = chalk.cyan(tag);
  const _time = new Date().toISOString();

  return {
    _buildStep,
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
      format,
      tag: logTag,
    });
    console.log(`${_time} ${_tag}${_buildStep} ${_msg}`); //eslint-disable-line
  };
}

export function logger(logTag) {
  return function loggerFn(format: string, ...args: any[]) {
    const {
      _msg,
      _tag,
      _time,
    } = getLogArgs({
      args,
      format,
      tag: logTag,
    });
    console.log(`${_time} ${_tag} ${_msg}`); //eslint-disable-line
  };
}
