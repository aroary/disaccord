const discord = require("discord.js");

const oldData = {
    userCount: 0,
    guildCount: 0,
    user: {
        username: "",
        avatarURL: ""
    }
};

/**
 * @param {discord.Client} client - The client.
 * @returns Public client data 
 */
function data(client) {
    oldData.userCount = client.users.cache.size;
    oldData.guildCount = client.guilds.cache.size;
    return oldData;
};

module.exports = { oldData, data };