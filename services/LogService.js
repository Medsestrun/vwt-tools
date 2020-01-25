const winston = require('winston');
const { Loggly } = require('winston-loggly-bulk');
const { combine, timestamp, printf } = winston.format;

class LogService {
    init(options) {
        if (!('toJSON' in Error.prototype)) {
            Object.defineProperty(Error.prototype, 'toJSON', {
                // Error context
                value: function () {
                    const alt = {};

                    Object.getOwnPropertyNames(this).forEach((key) => {
                        alt[key] = this[key];
                    }, this);

                    return alt;
                },
                configurable: true,
                writable: true,
            });
        }

        const myFormat = printf(info => {
            return `${info.timestamp} [${info.level}]: ${info.message}`;
        });

        const transports = [];
        if (options.environment === 'production') {
            transports.push(new Loggly({
                token: options.access_key,
                subdomain: options.subdomain,
                tags: [options.tag],
                json: true,
            }))
        }

        transports.push(new winston.transports.Console({
            format: combine(
                winston.format.colorize(),
                timestamp(),
                myFormat
            ),
        }));

        this.logger = winston.createLogger({
            transports,
        });
    }

    warn(message) {
        this.logger.log('warn', message);
    }

    info(message) {
        this.logger.log('info', message);
    }

    error(data) {
        this.logger.log('error', data);
    }
}

module.exports = new LogService();
