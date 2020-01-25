module.exports = function NotFound(message, errorCode, data) {
    Error.captureStackTrace(this, this.constructor);

    this.type = this.constructor.name;
    this.message = message || 'The requested resource couldn\'t be found';
    this.data = data;
    this.statusCode = 404;
    this.errorCode = errorCode || 404;
};

require('util').inherits(module.exports, Error);