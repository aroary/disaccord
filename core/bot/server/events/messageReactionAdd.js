const discord = require("discord.js");
const Entry = require("../../../utilities/logger");

/**
 * @description Handle reactions.
 * @param {discord.Client} client - The client.
 * @param {discord.MessageReaction} reaction - The reaction.
 * @param {discord.User} user - The user who reacted.
 */
function run(client, reaction, user) {
    // Return if the author is a bot.
    if (user.bot) return;

    // Check for reaction triggers.
    client.reactions.forEach(r => {
        if (r.execute.conditions(client, reaction, user) && (r.config.available || client.secrets.developers.includes(reaction.message.author.id.toString()))) {
            if ((reaction.message.guild && r.config.server) || (!reaction.message.guild && r.config.direct)) {
                r.execute.run(client, reaction, user);
                if (r.config.log) new Entry("reaction", r.config.name).setColor("purple").log();
            } else {
                // Bad location.
            };
        };
    });
};

module.exports = { name: "messageReactionAdd", run };