const chalk = require('chalk');
const moment = () => {
    return require("moment")().format('YYYY-MM-DD HH:mm:ss');
}
module.exports = {
    // Log types
    log:(data) => console.log(`[${moment()}]: ${chalk.black.bgWhite("LOG       ")} ${data}`),
    web:(data) => console.log(`[${moment()}]: ${chalk.bgBlackBright("WEBAPP    ")} ${data}`),
    command:(data) => console.log(`[${moment()}]: ${chalk.bgMagenta("COMMAND   ")} ${data}`),
    warn:(data) => console.log(`[${moment()}]: ${chalk.black.bgYellow("WARN      ")} ${data}`),
    error:(data) => console.log(`[${moment()}]: ${chalk.bgRed("ERROR     ")} ${data}`),
    rateLimit:(data) => console.log(`[${moment()}]: ${chalk.bgCyan("RATELIMIT ")} ${data}`),
    load:(data) => console.log(`[${moment()}]: ${chalk.black.bgGray("LOAD      ")} ${data}`),
    ready:(client) => console.log(`[${moment()}]: ${chalk.bgGreen("READY     ")} ${client.user.username} is online in ${client.guilds.cache.size} servers for ${client.users.cache.size} users!`),
    presence:(type, name) => console.log(`[${moment()}]: ${chalk.bgBlue("STATUS    ")} ${type} ${name}`)
};