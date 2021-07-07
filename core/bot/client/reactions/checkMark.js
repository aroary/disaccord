const Discord = require('discord.js');
module.exports = {
    config: {
        emoji: "✅",
        permissions: ["ADD_REACTIONS"]
    },
    /**
     * @param {Discord.Client} client 
     * @param {Discord.MessageReaction} reaction 
     * @param {Discord.User} user 
     */
    execute: (client, reaction, user) => {
        reaction.message.react("✅");
    }
};