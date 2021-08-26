const discord = require("discord.js");
const Entry = require("../../../utilities/logger");
const checkPermissions = require("../../../utilities/checkPermissions");

/**
 * @description Messages
 * @param {discord.Client} client - The client.
 * @param {discord.Message} message - The message.
 */
function run(client, message) {
    // Return if the author is a bot.
    if (message.author.bot) return;

    // Check for commands.
    if (message.content.startsWith(client.secrets.prefix)) {
        const args = message.content.split` `;
        const command = args.shift().toLowerCase().slice(client.secrets.prefix.length);

        const execute = client.commands.get(command) || client.commands.get(client.aliases.get(command));
        if (execute && (execute.config.available || client.secrets.developer.includes(message.author.id.toString()))) {
            if (message.guild && !checkPermissions(message.channel, message.guild.me, message.member, execute.config.permission)) {
                execute.run(client, message, args);
                if (execute.config.log) new Entry("command", execute.config.name).setColor("purple").log();
            } else {
                const missing = checkPermissions(message.guild.me, message.member, execute.config.permissions);
                if (missing.client && !missing.client.includes("SEND_MESSAGES")) {
                    var missingMessage = "";
                    missingMessage += missing.user ? `You are missing:\n\`\`\`\n${missing.user.join("\n")}\`\`\`` : "";
                    missingMessage += missing.client ? `I am missing:\n\`\`\`\n${missing.client.join("\n")}\`\`\`` : "";
                    const badPerms = new discord.MessageEmbed()
                        .setAuthor(message.author.tag, message.author.avatarURL())
                        .setTitle("Oops!")
                        .setDescription(`You do not have permission to do this!\n${missingMessage}`)
                        .setColor("RED")
                        .setTimestamp();

                    message.channel.send(badPerms);
                };
            };
        };
    };

    // Check for triggers.
    client.triggers.forEach(trigger => {
        if (trigger.execute.conditions(client, message) && (trigger.config.available || client.secrets.developers.includes(message.author.id.toString()))) {
            const missing = checkPermissions(message.channel, message.guild.me, message.member, trigger.config.permissions);
            if (message.guild && !missing) {
                trigger.execute.run(client, message);
                if (trigger.config.log) new Entry("trigger", trigger.config.name).setColor("purple").log();
            } else {
                if (missing.client && !missing.client.includes("SEND_MESSAGES")) {
                    var missingMessage = "";
                    missingMessage += missing.user ? `You are missing:\n\`\`\`\n${missing.user.join("\n")}\`\`\`` : "";
                    missingMessage += missing.client ? `I am missing:\n\`\`\`\n${missing.client.join("\n")}\`\`\`` : "";
                    const badPerms = new discord.MessageEmbed()
                        .setAuthor(message.author.tag, message.author.avatarURL())
                        .setTitle("Oops!")
                        .setDescription(`You do not have permission to do this!\n${missingMessage}`)
                        .setColor("RED")
                        .setTimestamp();

                    message.channel.send({ embeds: [badPerms] });
                };
            };
        };
    });
};

module.exports = { name: "messageCreate", run };