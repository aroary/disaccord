const discord = require("discord.js");

/**
 * @description Check if we want to run the trigger.
 * @param {discord.Client} client - The client.
 * @param {discord.Message} message - The message.
 */
function conditions(client, message) {
    if (message.mentions.members.has(client.user.id) && message.content.length < 30) return true;
    else return false;
};

/**
 * @description Run if the condition returns true.
 * @param {discord.Client} client - The client.
 * @param {discord.Message} message - The message.
 */
function run(client, message) {
    const botEmbed = new discord.MessageEmbed()
        .setTitle(client.user.username)
        .setDescription(client.secrets.description)
        .addFields(
            { name: "Prefix:", value: `**\`${client.secrets.prefix}\`**`, inline: true },
            { name: "Help:", value: `\`${client.secrets.prefix}help\``, inline: true },
        )
        .setThumbnail(client.user.avatarURL())
        .setTimestamp();
    message.channel.send({ embeds: [botEmbed] });
};

module.exports = {
    config: {
        name: "@bot",
        description: "Send a description of the bot.",
        permissions: ["SEND_MESSAGES"],
        help: true,
        available: true,
        log: true
    },
    execute: {
        conditions,
        run
    }
};