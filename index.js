/**
 * @file Main file for running your discord bot.
 * @author aroary
 * @license MIT License
 * @copyright Ⓒ 2021 aroary
 * @requires ^14.17.5 Nodejs
 */

const discord = require("discord.js");
const Entry = require("./core/utilities/logger");

// Load our bots secrets.
const secrets = JSON.parse(require("fs").readFileSync("./.secrets.json"));

// Create out client.
const client = new discord.Client({ intents: secrets.intents });

// Online.
client.secrets = secrets;
client.online = false;

// Initiate our bot.
require("./core/utilities/initiate")(client);

// Login.
client.login(client.secrets.token).then(() => {
    client.online = true;
    new Entry("login", `Client logged in succesfully with discord.js v${discord.version}`).setColor("green").log();
}).catch(error => new Entry("error", error).setColor("red").log());