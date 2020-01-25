module.exports = function ValidationError(message, errorCode, fields) {
    Error.captureStackTrace(this, this.constructor);

    this.type = this.constructor.name;
    this.message = message || 'Validation error';
    this.fields = fields;
    this.statusCode = 400;
    this.errorCode = errorCode || 400;
};

require('util').inherits(module.exports, Error);