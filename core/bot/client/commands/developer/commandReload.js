const Discord = require('discord.js');
const fs = require("fs");
module.exports = {
    config: {
        info: {
            name: "commandreload",
            usage: "commandreload <command(s)>",
            description: "Reload and reset a command",
            aliases: [],
            permissions: ["SEND_MESSAGES"]
        },
        availability: { find: false, public: false, channel: "all" }
    },
    /**
     * @param {Discord.Client} client - Your client 
     * @param {Discord.Message} message - The message
     * @param {Array} args - The message arguments (mesage.content.split(" "))
     */
    execute: (client, message, args) => {
        if (args[0]) {
            var reloaded = { success: [], fail: [] };
            args = [...new Set(args.map(arg => arg.toUpperCase()))];
            fs.readdirSync(`core/bot/client/commands`).forEach(folder => {
                // Read commands folder for command category folders.
                fs.readdirSync(`core/bot/client/commands/${folder}`).filter(fileName => fileName.split('.').pop() === 'js').forEach(file => {
                    const cmd = require(`../../commands/${folder}/${file}`);
                    if (args.includes(cmd.config.info.name.toUpperCase())) {
                        client.commands.set(cmd.config.info.name.toLowerCase(), cmd);

                        // Add command aliases to the collection.
                        cmd.config.info.aliases.forEach(alias => {
                            client.aliases.set(alias.toLowerCase(), cmd.config.info.name.toLowerCase());
                        });

                        // Log that each command has succesfully reloaded.
                        client.log.load(`Command Reloaded: ${cmd.config.info.name.toUpperCase()}.`);
                        reloaded.success.push(cmd.config.info.name.toUpperCase());
                    };
                });
            });
            // Find commands that failed.
            args.forEach(arg => {
                if (!reloaded.success.includes(arg.toUpperCase())) reloaded.fail.push(arg.toUpperCase());
            });

            // Build the resullts message.
            reloaded.success = reloaded.success.length > 0 ? "\n+ " + reloaded.success.sort().join("\n+ ") : "\n- none";
            reloaded.fail = reloaded.fail.length > 0 ? "\n- " + reloaded.fail.sort().join("\n- ") : "\n+ none";

            const re = new Discord.MessageEmbed()
                .setTitle("Reload")
                .setDescription(`${args.length} commands attempted\n\`\`\`diff\nSuccess:${reloaded.success}\nFail:${reloaded.fail}\n\`\`\``)

            return message.channel.send(re);
        } else {
            const r = new Discord.MessageEmbed()
                .setDescription("Please specify a command to reload.")
                .setTimestamp();
            return message.channel.send(r);
        };
    }
};