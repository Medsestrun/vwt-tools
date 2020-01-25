const ServerError = require('../errors/ServerError');

module.exports = (logger) => {
    return (err, req, res, next) => {
        logger.error({ message: err.message, ...err, user: req.user });

        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        if (req.app.get('env') !== 'development') {
            delete err.stack;
            delete err.data;
        }

        delete err.level;
        res.status(err.statusCode || 500);
        res.json(err.statusCode ? err : new ServerError(err.message));
    };
};

