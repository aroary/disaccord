const chalk = require('chalk');
const moment = () => {
    return require("moment")().format('YYYY-MM-DD HH:mm:ss');
};

// Build url.
const secure = true;
const ip = "";
const domain = "logs.aroary.repl.co";
const port = null;
const endpoint = "/";
var url = `http${secure ? "s" : ""}://${ip ? ip : domain}${port ? `:${port}` : ""}${endpoint || endpoint === "/" ? "" : endpoint}?data=`;

if (!ip && !domain) url = false;

const axios = require('axios');
function log(data) {
    console.log(data);

    // Send data.
    if (!url) return;
    axios.get(url + encodeURIComponent(data)).catch(error => {
        console.log(`[${moment()}]: ${chalk.bgRed("ERROR     ")} Log ${error}`);
        url = false;
    });
};

module.exports = {
    // Log types
    log: data => log(`[${moment()}]: ${chalk.black.bgWhite("LOG       ")} ${data}`),
    web: data => log(`[${moment()}]: ${chalk.bgBlackBright("WEBAPP    ")} ${data}`),
    command: data => log(`[${moment()}]: ${chalk.bgMagenta("COMMAND   ")} ${data}`),
    warn: data => log(`[${moment()}]: ${chalk.black.bgYellow("WARN      ")} ${data}`),
    error: data => log(`[${moment()}]: ${chalk.bgRed("ERROR     ")} ${data}`),
    rateLimit: data => log(`[${moment()}]: ${chalk.bgCyan("RATELIMIT ")} ${data}`),
    load: data => log(`[${moment()}]: ${chalk.black.bgGray("LOAD      ")} ${data}`),
    ready: client => log(`[${moment()}]: ${chalk.bgGreen("READY     ")} ${client.user.username} is online in ${client.guilds.cache.size} servers for ${client.users.cache.size} users!`),
    presence: (type, name) => log(`[${moment()}]: ${chalk.bgBlue("STATUS    ")} ${type} ${name}`),
    alarm: data => log(`[${moment()}]: ${chalk.bgMagenta("ALARM     ")} ${data}`),
    url
};