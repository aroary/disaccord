const { Client, MessageEmbed, Message } = require('discord.js');
const permission = require('../../../utilities/permission');
module.exports = {
    config: {
        name: 'message'
    },
    /**
     * @param {Client} client - your client
     * @param {Message} message - the message
     */
    run: (client, message) => {
        // Do nothing if user executing a message is a bot.
        if (message.author.bot) return;

        // Commands
        if (client.commands) {
            if (message.content.toLowerCase().startsWith(client.config.prefix)) {
                // Check for command.
                var args = message.content.split(' ');
                const command = args[0].slice(client.config.prefix.length).replace("\n", "").toLowerCase();
                args = args.slice(1);

                // Find command.
                const cmdFile = client.commands.get(command) || client.commands.get(client.aliases.get(command));
                if (!client.online && cmdFile && cmdFile.config.info.name !== "dnd") return;
                // location error message.
                const e = new MessageEmbed()
                    .setColor('RED')
                    .setTitle('Oops!')
                    .setDescription('You cant do that here!');

                if (cmdFile) {
                    // Check for permission.
                    if (message.guild) {
                        // Check if command can be used in server.
                        if (cmdFile.config.availability.channel.toLowerCase() === "all" || cmdFile.config.availability.channel.toLowerCase() === "guild") {
                            const check = permission(message.guild.me, message.member, cmdFile.config.info.permissions);

                            // If client is missing permissions check if they can send messages
                            if (check && check.client) {
                                if (!check.client.includes("SEND_MESSAGES")) {
                                    const m = new MessageEmbed()
                                        .setColor('RED')
                                        .setTitle('Oops!')
                                        .setDescription(`You are missing permissions to execute this command:\n${check.client.map(el => `\`${el}\``).join('\n')}`);
                                    return message.channel.send(m);
                                } else if (!check.client.includes("ADD_REACTIONS")) return message.react("❎");
                            } else

                                // If user is missing permissions send missinfg permissions.
                                if (check && check.user) {
                                    const b = new MessageEmbed()
                                        .setColor('RED')
                                        .setTitle('Oops!')
                                        .setDescription(`You are missing permissions to execute this command:\n${check.user.map(el => `\`${el}\``).join('\n')}`);
                                    return message.channel.send(b);
                                };
                        } else return message.channel.send(e);
                    } else {
                        // Check if command can be used in DM.
                        if (cmdFile.config.availability.channel.toLowerCase() !== "all" && cmdFile.config.availability.channel.toLowerCase() !== "direct") return message.channel.send(e);
                    };

                    // Check if command is public.
                    if (cmdFile.config.availability.public || client.config.testers.includes(message.author.id)) {
                        // check for client permissions (coming soon)
                        cmdFile.execute(client, message, args);
                        client.log.command(`${message.author.username} executed ${cmdFile.config.info.name.toUpperCase()} args: ${args.length > 0 ? `${args.map(el => el).join(', ')}` : 'None.'}`);
                    } else {
                        const a = new MessageEmbed()
                            .setColor('RED')
                            .setTitle('Oops!')
                            .setDescription('This command is not available to you right now.');
                        return message.channel.send(a);
                    };
                };
            }
        } else return client.log.warn("No commands found.");

        // Triggers
        if (client.triggers) {
            client.triggers.forEach((value, key, map) => {
                if (message.content.includes(key)) {
                    // Get our trigger
                    const trigger = client.triggers.get(key);
                    if (!client.online) return;
                    if (trigger) {
                        const available = trigger.config.availability;
                        if ((available.position.startsWith("start") && message.content.startsWith(key)) || (available.position.startsWith("end") && message.content.endsWith(key)) || (available.position.startsWith("include") && message.content.includes(key))) {
                            // Check for permission.
                            if (message.guild) {
                                // Check if command can be used in server.
                                if (available.channel === "all" || available.channel === "guild") {
                                    const check = permission(message.guild.me, message.member, trigger.config.info.permissions);
                                    if (check && !check.user && check.client) return message.react("❎");
                                } else return;
                            } else {
                                // Check if command can be used in DM.
                                if (available.channel !== "all" || available.channel !== "direct") return;
                            };
                            // Check if command is public.
                            if (available.public || client.config.testers.includes(message.author.id)) {
                                // check for client permissions (coming soon)
                                trigger.execute(client, message, args);
                                client.log.trigger(`${message.author.username} triggered ${trigger.config.info.name}`);
                            } else return;
                        };
                    };
                };
            });
        } else return client.log.warn("No triggers found.");
    }
};