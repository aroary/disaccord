const Discord = require('discord.js');
const permission = require('../../../utilities/permission');
module.exports = {
    config: {
        name: "messageReactionAdd"
    },
    /**
     * @param {Discord.Client} client - Your client
     * @param {Discord.MessageReaction} reaction - The message reaction 
     * @param {Discord.User} user - The member
     */
    run: (client, reaction, user) => {
        // Return if the reactor is our client.
        if (user.id === client.user.id) return;
        if (user.bot)return;

        // Reactions
        if (client.reactions) {
            // Find our reaction trigger.
            const trigger = client.reactions.get(reaction.emoji.name);

            // Run our reaction trigger if we have one.
            if (client.online && trigger) {
                // Check for permissions.
                const check = permission(reaction.message.guild.me,reaction.message.member, trigger.config.permissions);
                if(check)return;

                // Run the execute function.
                trigger.execute(client, reaction, user);
                client.log.reaction(`${user.username} Reacted with ${reaction.emoji.name}`);
            };
        };
    }
};