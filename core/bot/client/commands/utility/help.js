const discord = require("discord.js");

/**
 * @description Send a big red button.
 * @param {discord.Client} client - The client.
 * @param {discord.Message} message - The message.
 * @param {Array} args - The args.
 */
function run(client, message, args) {
    args[0] ? args[0] = args[0].toLowerCase() : undefined;

    // Help categories
    const categoryIDs = client.categorieID, aliases = client.aliases, categories = client.categories, commands = client.commands, triggers = client.triggers;

    if (args[0]) {
        // Check each type of help.
        const category = categories.get(args[0]) || categories.get(categoryIDs.get(args[0].toUpperCase())),
            command = commands.get(args[0]) || commands.get(aliases.get(args[0])),
            trigger = triggers.filter(t => t.config.name.toLowerCase() === args[0])[0];
        if (category && (category.helpMessage || client.secrets.developer.includes(message.author.id))) {
            // Filter for allowed commands and format allowed commands.
            const cmds = commands
                .filter(cmd => cmd.category === category.id.toUpperCase() && cmd.config.help)
                .map(cmd => cmd = `**\`${cmd.config.name}\`**: ${cmd.config.description}`)
                .join`\n`;

            const help = new discord.MessageEmbed()
                .setTitle(category.name)
                .setDescription(cmds ? cmds : "Coming soon!")
                .setFooter(category.id.toUpperCase())
                .setTimestamp();

            message.channel.send({ embeds: [help] });
        } else if (command && (command.config.help || client.secrets.developer.includes(message.author.id))) {
            const help = new discord.MessageEmbed()
                .setTitle(command.config.name)
                .setDescription(command.config.description)
                .addFields(
                    { name: "Usage:", value: command.config.usage },
                    { name: "Aliases:", value: command.config.alias.length ? command.config.alias.join`, `.toLowerCase() : "None." },
                    { name: "Permissions:", value: command.config.permission.length ? command.config.permission.join`, `.replace("_", " ").toLowerCase() : "None." }
                )
                .setTimestamp();

            message.channel.send({ embeds: [help] });
        } else if ((trigger && (trigger.config.help || client.secrets.developer.includes(message.author.id))) || args[0] === "triggers") {
            if (args[0] === "triggers") {
                // Filter for allowed triggers and format allowed triggers.
                const triggerHelp = triggers
                    .filter(t => t.config.help)
                    .map(t => t = `**\`${t.config.name}\`**: ${t.config.description}`)
                    .join`\n`;

                const help = new discord.MessageEmbed()
                    .setTitle("Triggers")
                    .setDescription(triggerHelp)
                    .setTimestamp();

                message.channel.send({ embeds: [help] });
            } else if (trigger && (trigger.config.help || client.secrets.developer.includes(message.author.id))) {
                const t = new discord.MessageEmbed()
                    .setTitle(trigger.config.name)
                    .setDescription(trigger.config.description)
                    .addFields(
                        { name: "Permissions:", value: trigger.config.permissions.length ? trigger.config.permissions.join`, `.replace("_", " ").toLowerCase() : "None." }
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
        var embed = new discord.MessageEmbed()
            .setTitle("Help")
            .setFooter(`${client.secrets.prefix}help (interaction | category | alias)`)
            .setTimestamp();

        // Add each category.
        categories.forEach(category => {
            if (category.helpMessage || client.secrets.developer.includes(message.author.id)) embed.addField(category.name, category.description, true);
        });

        // Add the trigger category
        embed.addField("triggers", "The triggers", true)

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
        available: true,
        help: true,
        log: true
    },
    run
};