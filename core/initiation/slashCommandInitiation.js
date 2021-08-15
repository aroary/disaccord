/**
 * @file Slash command initiation handler.
 * @author aroary
 * @license MIT
 * @copyright Ⓒ 2021 aroary
 */

const discord = require("discord.js");
const fs = require("fs");
const Entry = require("../utilities/logger");

/**
 * @description Load all slash commands from the slash command folder.
 * @param {discord.Client} client - The client.
 */
function initiateSlashCommands(client) {
    // Define the collection of slash commands.
    client.slashCommands = new discord.Collection();
    
    // Read slashcommand folder.
    fs.readdir("core/bot/client/slashCommands", (error, files) => {
        // Terminate loading process if there is an error.
        if (error) return new Entry().setName("error").setValue(error).setColor({backGround: "red"}).log();

        // Loop through the files.
        const slashFiles = files.filter(file => file.split(".").pop() === "js");
        new Entry("load", `Found ${slashFiles.length} slash command files.`).setColor("grey").log();
        slashFiles.forEach(file => {
            // Get and create slash command.
            const slashCommand = require(`../bot/client/slashCommands/${file}`);
            client.slashCommands.set(slashCommand.data.name, slashCommand.run);

            new Entry("load", `Slash command ${slashCommand.data.name}`).setColor("white", "black").log();
        });
    });
};

module.exports = initiateSlashCommands;