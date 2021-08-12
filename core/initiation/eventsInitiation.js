/**
 * @file Event listending initiation handler.
 * @author aroary
 * @license MIT
 */

const discord = require("discord.js");
const fs = require("fs");
const Entry = require("../utilities/logger");

/**
 * @description Load all events from the events folder.
 * @param {discord.Client} client - The client.
 */
function loadEvents(client) {
    fs.readdir('core/bot/server/events', (error, files) => {
        // Terminate loading process if there is an error.
        if (error) return new Entry().setName("error").setValue(error).setColor({ backGround: "red" }).log();
        
        // Loop through relevant files.
        const eventFiles = files.filter(file => file.split('.').pop() === 'js');
        new Entry("load", `Found ${eventFiles.length} event files.`).setColor("grey").log();
        eventFiles.forEach(file => {
            // Listen for events.
            const event = require(`../bot/server/events/${file}`);
            client.on(event.name, event.run.bind(null, client));

            new Entry("load", `Event ${event.name}`).setColor("white", "black").log();
        });
    });
};

module.exports = loadEvents;