const discord = require("discord.js");
const fs = require("fs");
const Entry = require("../../../utilities/logger");

/**
 * @description Log that we are ready.
 * @param {discord.Client} client - The client
 */
function run(client) {
    if (client.secrets.redeploy) fs.readdir("core/bot/client/slashCommands", (error, files) => {
        if (error) return new Entry().setName("error").setValue(error).setColor("red");
        files.filter(file => file.split(".").pop() === "js").forEach(file => {
            // Get and create slash command.
            const slashCommand = require(`../../client/slashCommands/${file}`);
            client.application?.commands.create(slashCommand.data);
        });
    });

    new Entry().setName("ready").setValue(`${client.user.username} is online!`).setColor("green").log();
};

module.exports = { name: "ready", run };