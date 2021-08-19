const discord = require("discord.js");

/**
 * @description Send a big red button.
 * @param {discord.Client} client - The client.
 * @param {discord.Message} message - The message.
 * @param {Array} args - The args.
 */
function run(client, message, args) {
    args[0] ? args[0] = args[0].toLowerCase() : undefined;

    const categoryIDs = client.categorieID;
    const aliases = client.aliases;
    const categories = client.categories;
    const commands = client.commands;
    const triggers = client.triggers;

    if (args[0]) {
        const category = categories.get(args[0]) || categories.get(categoryIDs.get(args[0].toUpperCase()));
        const command = commands.get(args[0]) || commands.get(aliases.get(args[0]));
        const trigger = triggers.filter(t => t.config.name.toLowerCase() === args[0])[0];
        if (category && category.helpMessage) {
            const cmds = commands.filter(cmd => cmd.category === category.id.toUpperCase() && cmd.config.help).map(cmd => cmd = `**\`${cmd.config.name}\`**: ${cmd.config.description}`).join`\n`;
            const help = new discord.MessageEmbed()
                .setTitle(category.name)
                .setDescription(cmds)
                .setFooter(category.id.toUpperCase())
                .setTimestamp();

            message.channel.send({ embeds: [help] });
        } else if (command && command.config.help) {
            const help = new discord.MessageEmbed()
                .setTitle(command.config.name)
                .setDescription(command.config.description)
                .addFields(
                    { name: "Usage:", value: command.config.usage },
                    { name: "Aliases:", value: command.config.alias.length ? command.config.alias.join(", ") : "None." },
                    { name: "Permissions:", value: command.config.permission.length ? command.config.permission.join(", ") : "None." }
                )
                .setTimestamp();

            message.channel.send({ embeds: [help] });
        } else if ((trigger && trigger.config.help) || args[0] === "triggers") {
            if (args[0] === "triggers") {
                const triggerHelp = triggers.filter(t => t.config.help).map(t => t = `**\`${t.config.name}\`**: ${t.config.description}`).join`\n`;
                const help = new discord.MessageEmbed()
                    .setTitle("Triggers")
                    .setDescription(triggerHelp)
                    .setTimestamp();

                message.channel.send({ embeds: [help] });
            } else if (trigger && trigger.config.help) {
                const t = new discord.MessageEmbed()
                    .setTitle(trigger.config.name)
                    .setDescription(trigger.config.description)
                    .addFields(
                        { name: "Permissions:", value: trigger.config.permissions.length ? trigger.config.permissions.join(", ") : "None." }
                    )
                    .setTimestamp();
                message.channel.send({ embeds: [t] });
            };
        } else {
            const notFound = new discord.MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL())
                .setTitle("Oops!")
                .setDescription("No interaction, command, trigger, or category found.")
                .setColor("RED")
                .setTimestamp();

            message.channel.send({ embeds: [notFound] });
        };
    } else {
        var embed = new discord.MessageEmbed().setTitle("Help")

        categories.forEach(category => {
            embed.addField(category.name, category.description, true);
        });

        embed.addField("triggers", "The triggers", true)
            .setFooter(`${client.secrets.prefix}help (interaction | category | alias)`)
            .setTimestamp();

        message.channel.send({ embeds: [embed] });
    };
};

module.exports = {
    config: {
        name: "help",
        usage: "help (interaction | category | alias)",
        description: "Help information about a topic or in general.",
        alias: [],
        permission: ["SEND_MESSAGES"],
        direct: false,
        server: true,
        available: true,
        help: true,
        log: true
    },
    run
};