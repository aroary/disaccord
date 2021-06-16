const Discord = require('discord.js');
const fs = require('fs');

/**
 * Initializes Client reactions.
 * @param {Discord.Client} client - Your Client
 */

module.exports = (client) => {
    // Define a collection for both reactions
    client.reactions = new Discord.Collection();

    // Read the command directory.
    fs.readdir(`core/bot/client/reactions`, (err, dir) => {
        // If an error occurs, log it to the console and abort command initialization.
        if (err) return client.log.error(`Could not read directory: ${err.message}`);

        // Help command catagories array
        client.help.reactions=new Map();

        // Filter for only JS files and log the amount found.
        const jsFiles = dir.filter(fileName => fileName.split('.').pop() === 'js');
        client.log.log(`Loading ${jsFiles.length} reactions from client/reactions.`);

        // Loop for each JS file and add it to the collection.
        jsFiles.forEach(file => {
            const rct = require(`../bot/client/reactions/${file}`);
            client.reactions.set(rct.config.emoji, rct);

            // Log that each command has succesfully loaded.
            client.log.load(`Reaction Loaded: ${rct.config.emoji}.`);
        });
    });
};