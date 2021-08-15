/**
 * @file Initiation of initiation.
 * @author aroary
 * @license MIT
 * @copyright Ⓒ 2021 aroary
 */

const discord =  require("discord.js");
const fs = require("fs");

/**
 * @description Initiate the Initiation.
 * @param {discord.Client} client - The client.
 */
function initiate(client) {
    // Read initiation directory.
    fs.readdir("core/initiation", (error, files) => {
        // Terminate process on error.
        if (error) throw new Error(error);

        // Loop through the initiation file initiating each one.
        else files.filter(file => file.split(".").pop() === "js").forEach(file => {
            require(`../initiation/${file}`)(client);
        });
    });

    // Other initiation files.
    require("./status")(client);
};

module.exports = initiate;