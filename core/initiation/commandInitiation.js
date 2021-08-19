/**
 * @file Command initiation.
 * @author aroary
 * @license MIT
 * @copyright Ⓒ 2021 aroary
 */

const discord = require("discord.js");
const fs = require("fs");
const Entry = require("../utilities/logger");

/**
 * @description
 * @param {discord.Client} client 
 */
function initiateCommands(client) {
    // Define a collection for both commands themselves and their aliases.
    client.commands = new discord.Collection();
    client.aliases = new discord.Collection();
    client.categories = new discord.Collection();
    client.categorieID = new discord.Collection();

    // Read the command directory.
    fs.readdir("core/bot/client/commands", (err, dir) => {
        // If an error occurs, log it to the console and abort command initialization.
        if (err) return client.log.error(`Could not read directory: ${err.message}`);

        // Read folders in commands folder.
        dir.forEach(folder => {
            fs.readdir(`core/bot/client/commands/${folder}`, (error, files) => {
                // If an error occurs, log it to the console and abort command initialization.
                if (error) return new Entry("error", `Could not read directory: ${error.message}`);

                // Find catagory config folder.
                console.log(files);
                const settings = files.filter(name => name.split`.` === ["settings", "json"])[0];
                console.log(settings);
                if (!settings) return new Entry("warn", `No settings file found for '${folder}' folder.`).setColor("yellow", "black").log();
                const categoryConfiguration = require(`../bot/client/commands/${folder}/${settings}`);

                // Set category details.
                categoryConfiguration.type = "command category"
                client.categories.set(categoryConfiguration.name.toLowerCase(), categoryConfiguration);
                client.categorieID.set(categoryConfiguration.id.toLowerCase(), categoryConfiguration.name.toLowerCase());

                // Filter for only command files.
                const commands = files.filter(fileName => fileName.split`.`.pop() === 'js');

                // Loop for each JS file and add it to the collection.
                commands.forEach(file => {
                    const command = require(`../bot/client/commands/${folder}/${file}`);

                    command.category = categoryConfiguration.id.toUpperCase();
                    command.type = "command";
                    client.commands.set(cmd.config.name.toLowerCase(), command);

                    // Add command aliases to the collection.
                    command.config.aliases.forEach(alias => {
                        client.aliases.set(alias.toLowerCase(), command.config.name.toLowerCase());
                    });
                });
            });
        });
    });
};

module.exports = initiateCommands;