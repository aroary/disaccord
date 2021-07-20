const chalk = require('chalk');
/**
 * @returns {String} - Moment date formatted to 'YYYY-MM-DD HH:mm:ss'
 */
const moment = () => {
    return require("moment")().format('YYYY-MM-DD HH:mm:ss');
};

// Requires package https://github.com/aroary/remote_logger_utility for custom endpoint.

// Build url.
const secure = true;
const ip = "";
const domain = "logs.aroary.repl.co";
const port = null;
const endpoint = "/";
var url = `http${secure ? "s" : ""}://${ip ? ip : domain}${port ? `:${port}` : ""}${endpoint || endpoint === "/" ? "" : endpoint}?data=`;
var logging = true;


if (!ip && !domain) url = false;

const axios = require('axios');
/**
 * @param {any} data - data to log
 * @returns {undefined}
 * @author aroary
 */
function log(data) {
    console.log(data);

    // Send data.
    if (!logging) return;
    axios.get(url + encodeURIComponent(data)).catch(error => {
        console.log(`[${moment()}]: ${chalk.bgRed("ERROR     ")} Log ${error}`);
        logging = false;
    });
};

module.exports = {
    // Log types
    /**
     * @param {String} data - Data to log to the colsole
     * @returns {undefined}
     * @author aroary
     */
    log: data => log(`[${moment()}]: ${chalk.black.bgWhite("LOG       ")} ${data}`),
    /**
     * @param {String} data - Data to log to the colsole
     * @returns {undefined}
     * @author aroary
     */
    web: data => log(`[${moment()}]: ${chalk.bgBlackBright("WEBAPP    ")} ${data}`),
    /**
     * @param {String} data - Data to log to the colsole
     * @returns {undefined}
     * @author aroary
     */
    command: data => log(`[${moment()}]: ${chalk.bgMagenta("COMMAND   ")} ${data}`),
    /**
     * @param {String} data - Data to log to the colsole
     * @returns {undefined}
     * @author aroary
     */
    warn: data => log(`[${moment()}]: ${chalk.black.bgYellow("WARN      ")} ${data}`),
    /**
     * @param {String} data - Data to log to the colsole
     * @returns {undefined}
     * @author aroary
     */
    error: data => log(`[${moment()}]: ${chalk.bgRed("ERROR     ")} ${data}`),
    /**
     * @param {String} data - Data to log to the colsole
     * @returns {undefined}
     * @author aroary
     */
    rateLimit: data => log(`[${moment()}]: ${chalk.bgCyan("RATELIMIT ")} ${data}`),
    /**
     * @param {String} data - Data to log to the colsole
     * @returns {undefined}
     * @author aroary
     */
    load: data => log(`[${moment()}]: ${chalk.black.bgGray("LOAD      ")} ${data}`),
    /**
     * @param {String} data - Data to log to the colsole
     * @returns {undefined}
     * @author aroary
     */
    ready: client => log(`[${moment()}]: ${chalk.bgGreen("READY     ")} ${client.user.username} is online in ${client.guilds.cache.size} servers for ${client.users.cache.size} users!`),
    /**
     * @param {String} data - Data to log to the colsole
     * @returns {undefined}
     * @author aroary
     */
    presence: (type, name) => log(`[${moment()}]: ${chalk.bgBlue("STATUS    ")} ${type} ${name}`),
    /**
     * @param {String} data - Data to log to the colsole
     * @returns {undefined}
     * @author aroary
     */
    alarm: data => log(`[${moment()}]: ${chalk.bgMagenta("ALARM     ")} ${data}`),
    /**
     * @param {String} data - Data to log to the colsole
     * @returns {undefined}
     * @author aroary
     */
    reaction: data => log(`[${moment()}]: ${chalk.bgMagenta("REACTION  ")} ${data}`),
    
    //
    url,
    logging
};