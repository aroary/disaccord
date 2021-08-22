const discord = require("discord.js");

/**
 * @description Show stats of the bot.
 * @param {discord.Client} client - The client.
 * @param {discord.Message} message - The message.
 * @param {Array} args - The arguments.
 */
function run(client, message, args) {
    const stats = new discord.MessageEmbed()
        .setTitle("Stats")
        .addFields(
            { name: "Servers", value: `**${client.guilds.cache.size}** Servers`, inline: true },
            { name: "Users", value: `**${client.users.cache.size}** Users`, inline: true },
            { name: "Uptime", value: client.uptime, inline: true },
            { name: "Birthday", value: client.user.createdAt, inline: true },
        )
        .setFooter(client.user.tag(), client.user.avatarURL())
        .setTimestamp()
};

module.exports = {
    config: {
        name: "stats",
        usage: "stats (item)",
        description: "Show the bots statistics.",
        alias: ["statistics"],
        permission: ["SEND_MESSAGES"],
        direct: false,
        server: true,
        help: true,
        available: false,
        log: true
    },
    run
};