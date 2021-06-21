const chalk = require('chalk');
const moment = require("moment");
module.exports = {
    // Log types
    log:(data) => console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]: ${chalk.black.bgWhite("LOG       ")} ${data}`),
    command:(data) => console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]: ${chalk.bgMagenta("COMMAND   ")} ${data}`),
    warn:(data) => console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]: ${chalk.black.bgYellow("WARN      ")} ${data}`),
    error:(data) => console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]: ${chalk.bgRed("ERROR     ")} ${data}`),
    rateLimit:(data) => console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]: ${chalk.bgCyan("RATELIMIT ")} ${data}`),
    load:(data) => console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]: ${chalk.bgGray("LOAD      ")} ${data}`),
    ready:(client) => console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]: ${chalk.bgGreen("READY     ")} ${client.user.username} is online in ${client.guilds.cache.size} servers for ${client.users.cache.size} users!`),
    presence:(type, name) => console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]: ${chalk.bgBlue("STATUS    ")} ${type} ${name}`)
};