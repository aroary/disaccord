const fs = require("fs");
const Discord = require('discord.js');

// Logo.
console.log("\x1b[31m%s\x1b[0m", require("./core/constants/logo.json"));

// Create our client.
const client = new Discord.Client();

// Load secrets.
var secrets = fs.readFileSync("./.secrets.json", { encoding: "utf-8" });
secrets = JSON.parse(secrets);
client.config = secrets;

// Initiate bot.
require("./core/initiate/initiate")(client);

// Login.
client.login(client.config.token)
	.then(() => {
		client.online = true;
	})
	.catch(async () => {
		client.log.error("Failed to log in. Check token and internet connection.");
		client.log.warn("Reattempting to log in, in 300000 ms.");
		await require("./core/utilities/delay").delay(300000);
		client.login(client.config.token)
			.then(() => {
				client.online = true;
			})
			.catch(() => {
				client.log.error("Failed to log in. Check token and internet connection.");
				client.log.warn("Process is exiting");
				process.exit(0);
			});
	});