const Discord = require('discord.js');

/**
 * @param {Discord.Client} client - Your client
 * @param {Discord.Presence} oldMember - The member befor the presence update
 * @param {Discord.Presence} newMember - The member after the presence update
 */
function run(client, oldMember, newMember) {
    // Check if the user is a bot, if the guild is the support server and the status changed.
    if (oldMember && oldMember.user.bot && oldMember.guild.id === client.config.supportServer && oldMember.status !== newMember.status) {
        const e = new Discord.MessageEmbed()
            .setAuthor(oldMember.user.tag, oldMember.user.avatarURL())
            .setDescription(`\`${oldMember.status} ➡️ ${newMember.status}\`.`)
            .setTimestamp();
        oldMember.guild.channels.cache.get("864530323353632809").send(e);
    };
};


module.exports = { name: "presenceUpdate", run };