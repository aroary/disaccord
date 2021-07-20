const Discord = require('discord.js');
module.exports = {
    config: {
        emoji: "",
        permissions: []
    },
    /**
     * @param {Discord.Client} client - Your client
     * @param {Discord.MessageReaction} reaction - The reaction
     * @param {Discord.User} user - The user who reacted
     * @event messageReactionAdd
     * @template
     */
    execute: (client, reaction, user) => {
        // Code
    }
};