const fs = require("fs");
const Discord = require('discord.js');

// Create our client.
const client = new Discord.Client();

// Load secrets.
var secrets = fs.readFileSync("./.secrets.json",{encoding:"utf-8"});
secrets = JSON.parse(secrets);
client.secrets = secrets;
client.config = secrets;

// Initiate bot.
require("./core/initiate/initiate")(client);

// Login.
client.login(client.secrets.token)
.then(() => {
	client.online = true;
	client.log.log("Logged in, getting ready...");
})
.catch(() => {
	client.log.error("Failed to log in. Check token and internet connection");
});