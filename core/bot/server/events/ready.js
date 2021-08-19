const discord = require("discord.js");
const fs = require("fs");
const Entry = require("../../../utilities/logger");

/**
 * @description Log that we are ready.
 * @param {discord.Client} client - The client
 */
function run(client) {
    new Entry().setName("ready").setValue(`${client.user.username} is online with the ${client.secrets.intents} intents.`).setColor("green").log();

    // Load data for slash commands
    if (client.secrets.redeploy) fs.readdir("core/bot/client/slashCommands", (error, files) => {
        if (error) return new Entry().setName("error").setValue(error).setColor("red");
        files.filter(file => file.split(".").pop() === "js").forEach(file => {
            // Get and create slash command.
            const slashCommand = require(`../../client/slashCommands/${file}`);
            
            // Register the slash command data.
            client.application?.commands.create(slashCommand.data);
        });
    });
};

module.exports = { name: "ready", run };