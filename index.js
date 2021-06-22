const fs = require("fs");
const Discord = require('discord.js');
const Child = require("child_process");

console.log("\x1b[31m%s\x1b[0m", require("./core/constants/logo.json"));

// Ping discord.gg to check our connection
// Child.exec("ping discord.gg", (error, stdout, stderr) => {
//     if(error)return console.log(`error: ${error.message}`);
//     if(stderr)return console.log(`stderr: ${stderr}`);s
//     console.log(`stdout: ${stdout}`);
// });

// Create our client.
const client = new Discord.Client();

// Load secrets.
var secrets = fs.readFileSync("./secrets.conf", {encoding:"utf-8"});
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