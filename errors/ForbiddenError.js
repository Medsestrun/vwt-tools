module.exports = function Forbidden(message, errorCode, data) {
    Error.captureStackTrace(this, this.constructor);

    this.type = this.constructor.name;
    this.message = message || 'Forbidden';
    this.data = data;
    this.statusCode = 403;
    this.errorCode = errorCode || 403;
};

require('util').inherits(module.exports, Error);
