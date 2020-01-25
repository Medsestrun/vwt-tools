const BadRequestError = require('./BadRequestError');
const ForbiddenError = require('./ForbiddenError');
const NotFoundError = require('./NotFoundError');
const ServerError = require('./ServerError');
const UnauthorizedError = require('./UnauthorizedError');
const ValidationError = require('./ValidationError');

module.exports = {
    BadRequestError,
    ForbiddenError,
    NotFoundError,
    ServerError,
    UnauthorizedError,
    ValidationError,
};
