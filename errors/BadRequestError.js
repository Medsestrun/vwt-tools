module.exports = function BadRequest(message, errorCode, data) {
    Error.captureStackTrace(this, this.constructor);

    this.type = this.constructor.name;
    this.message = message || 'Bad request';
    this.data = data;
    this.statusCode = 400;
    this.errorCode = errorCode || 400;
};

require('util').inherits(module.exports, Error);