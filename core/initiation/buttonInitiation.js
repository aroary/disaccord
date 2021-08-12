/**
 * @file Button initiation handler.
 * @author aroary
 * @license MIT
 */

const discord = require("discord.js");
const fs = require("fs");
const Entry = require("../utilities/logger");

/**
 * @description Load all buttons from buttons folder.
 * @param {discord.Client} client - The client.
 */
function initiateButtons(client) {
    // Declare our buttons.
    client.buttons = new discord.Collection();

    // Read the directory.
    fs.readdir('core/bot/client/buttons', (error, files) => {
        // Terminate loading process if there is an error.
        if (error) return new Entry().setName("error").setValue(error).setColor({ backGround: "red" }).log();
        
        // Loop through relevant files.
        const buttonFiles = files.filter(file => file.split('.').pop() === 'js');
        new Entry("load", `Found ${buttonFiles.length} button files.`).setColor("grey").log();
        buttonFiles.forEach(file => {
            // Set the collection values.
            const button = require(`../bot/client/buttons/${file}`);
            client.buttons.set(button.name, button.run);

            new Entry("load", `Button ${button.name}`).setColor("white", "black").log();
        });
    });
};

module.exports = initiateButtons;