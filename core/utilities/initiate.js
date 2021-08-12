/**
 * @file Initiation of initiation.
 * @author aroary
 */

const discord =  require("discord.js");
const fs = require("fs");

/**
 * @description Initiate the Initiation.
 * @param {discord.Client} client - The client.
 */
function initiate(client) {
    fs.readdir("core/initiation", (error, files) => {
        if (error) throw new Error(error);
        else files.filter(file => file.split(".").pop() === "js").forEach(file => {
            require(`../initiation/${file}`)(client);
        });
    });
};

module.exports = initiate;