const Discord = require('discord.js');
module.exports = {
    config: {
        emoji: "✅",
        permissions: ["ADD_REACTIONS"]
    },
    /**
     * @param {Discord.Client} client - The client.
     * @param {Discord.MessageReaction} reaction - The reaction data
     * @param {Discord.User} user - The user who reacted
     * @author aroary
     */
    execute: (client, reaction, user) => {
        reaction.message.react("✅");
    }
};