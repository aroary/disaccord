const chalk = require('chalk');
const moment = require("moment");
const ts = `[${moment().format('YYYY-MM-DD HH:mm:ss')}]:`;

module.exports = {
    log:(data) => console.log(`${ts} ${chalk.black.bgWhite("LOG       ")} ${data}`),
    command:(data) => console.log(`${ts} ${chalk.bgMagenta("COMMAND   ")} ${data}`),
    warn:(data) => console.log(`${ts} ${chalk.black.bgYellow("WARN      ")} ${data}`),
    error:(data) => console.log(`${ts} ${chalk.bgRed("ERROR     ")} ${data}`),
    rateLimit:(data) => console.log(`${ts} ${chalk.bgCyan("RATELIMIT ")} ${data}`),
    load:(data) => console.log(`${ts} ${chalk.bgGray("LOAD      ")} ${data}`),
    ready:(client) => console.log(`${ts} ${chalk.bgGreen("READY     ")} ${client.user.username} is online in ${client.guilds.cache.size} servers for ${client.users.cache.size} users!`),
    presence:(type, name) => console.log(`${ts} ${chalk.bgBlue("STATUS    ")} ${type} ${name}`)
};