const discord = require("discord.js");

const oldData = {};

/**
 * @param {discord.Client} client - The client.
 * @returns Public client data 
 */
function data(client) {
    oldData.userCount = client.users.cache.size;
    oldData.guildCount = client.guilds.cache.size;
    oldData.repository = client.secrets.repository;
    return oldData;
};

module.exports = { oldData, data };