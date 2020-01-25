module.exports = function Unauthorized(message, errorCode, data) {
    Error.captureStackTrace(this, this.constructor);

    this.type = this.constructor.name;
    this.message = message || 'Unauthorized';
    this.data = data;
    this.statusCode = 401;
    this.errorCode = errorCode || 401;
};

require('util').inherits(module.exports, Error);