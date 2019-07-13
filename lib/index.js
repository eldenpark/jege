"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logger(logTag) {
    const tagSegment = `%c${logTag}%c `;
    return function universalLoggerFn(format, ...args) {
        const _format = tagSegment + format;
        console.log(_format, 'color: #0aa8b3', 'color: black', ...args); // eslint-disable-line
    };
}
exports.logger = logger;
