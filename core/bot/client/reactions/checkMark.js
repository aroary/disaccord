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
        reaction.message.channel.send(reaction.emoji.name)
            .then(message => {
                message.delete({ timeout: 5000, reason: "testing" })
            });
    }
};