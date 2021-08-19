/**
 * @file Trigger initiation.
 * @author aroary
 * @license MIT
 * @copyright Ⓒ 2021 aroary
 */

const discord = require("discord.js");
const fs = require("fs");
const Entry = require("../utilities/logger");

/**
 * @description Initiate the triggers.
 * @param {discord.Client} client - The client.
 */
function initiateTriggers(client) {
    client.triggers = new Array();

    // Read trigger directory.
    fs.readdir("core/bot/client/triggers", (error, files) => {
        // If an error occurs, log it to the console and abort command initialization.
        if (error) return new Entry("error", error).setColor("red").log();

        // Filter for relevant files.
        files = files.filter(file => file.split`.`.pop() === "js");
        new Entry("load", `Found ${files.length} trigger files.`).setColor("grey", "white").log();

        // Loop through the files and add each to the triggers array.
        files.forEach(file => {
            const trigger = require(`../bot/client/triggers/${file}`);
            client.triggers.push(trigger);
            new Entry("load", `Trigger ${trigger.config.name}`).setColor("white", "black").log();
        });
    });
};

module.exports = initiateTriggers;