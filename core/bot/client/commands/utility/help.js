const discord = require("discord.js");

/**
 * @description Send a big red button.
 * @param {discord.Client} client - The client.
 * @param {discord.Message} message - The message.
 * @param {Array} args - The args.
 */
function run(client, message, args) {
    var helpEmbed = new discord.MessageEmbed().setTimestamp();

    var help = args[0].toLowerCase();
    help = client.commands.get(help) || client.commands.get(client.aliases.get(help)) || client.categorieID.get(help) || client.categorieID.get(client.categories.get(help));

    if (help.type = "command category") {
        // REASEARCH 'toJSON' FUNCTION RETURN VALUES
        const commands = client.commands.filter(command => command.type === help.name || command.type === help.id).map(command => command = `**\`${command.config.name}\`**: ${command.config.description}`).toJSON().join`\n`;
        helpEmbed.setTitle(`${help.name} commands`).setDescription(commands);
        return message.reply(helpEmbed);
    } else if (help.type = "command") {
        if (!help.config.available) return;
        helpEmbed
            .setTitle(help.config.name)
            .addFields(
                { name: "Description:", value: help.config.usage, inline: false },
                { name: "Usage:", value: help.config.usage, inline: false },
                { name: "aliases:", value: help.config.alias.join`, ` || "None", inline: true },
                { name: "Permissions:", value: help.config.permission.join`, ` || "None", inline: true }
            )
        return message.reply(helpEmbed);
    } else {
        if (client.categorieID.size) client.categorieID.forEach(category => helpEmbed.addField(category.name, category.description, true));
        return message.reply(helpEmbed);
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
        log: true
    },
    run
};