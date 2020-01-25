module.exports = function ServerError(message, errorCode, data) {
    Error.captureStackTrace(this, this.constructor);

    this.type = this.constructor.name;
    this.message = message || 'Something went wrong';
    this.data = data;
    this.statusCode = 500;
    this.errorCode = errorCode || 500;
};

require('util').inherits(module.exports, Error);
