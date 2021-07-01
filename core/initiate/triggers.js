const Discord = require('discord.js');
const fs = require('fs');

/**
 * Initializes Client triggers.
 * @param {Discord.Client} client - Your Client
 */

module.exports = (client) => {
    // Define a collection for both triggers themselves and their aliases.
    client.triggers = new Discord.Collection();

    // Read the trigger directory.
    var loaded = "";
    fs.readdir(`core/bot/client/triggers`, (error, files) => {
        // If an error occurs, log it to the console and abort trigger initialization.
        if (error) return client.log.error(`Could not read directory: ${error.message}`);

        // Filter for only JS files and log the amount found.
        const jsFiles = files.filter(fileName => fileName.split('.').pop() === 'js');
        client.log.log(`Loading ${jsFiles.length} triggers from client/triggers.`);

        // Loop for each JS file and add it to the collection.
        jsFiles.forEach(file => {
            const trigger = require(`../bot/client/triggers/${file}`);
            client.triggers.set(trigger.config.info.name, trigger);

            // Log that each trigger has succesfully loaded.
            client.log.load(`trigger Loaded: ${trigger.config.info.name}.`);

            // Add to help command.
            if (trigger.config.availability.find) {
                const info = trigger.config.info;
                loaded += `**\`${info.name}\`**: ${info.description}\n`;
            };

            // Help
            client.help.trigger = new Discord.MessageEmbed()
                .setTitle("Triggers")
                .setDescription(loaded)
                .setTimestamp();
        });
    });
};