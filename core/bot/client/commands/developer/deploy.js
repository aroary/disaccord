const discord = require("discord.js");
const fs = require("fs");
const Entry = require("../../../../utilities/logger");

/**
 * @description Deploy slash commands.
 * @param {discord.Client} client - The client.
 * @param {discord.Message} message - The message.
 * @param {Array} args - The arguments.
 */
function run(client, message, args) {
    if (args[0]) {
        // Load data for slash commands.
        fs.readdir("core/bot/client/slashCommands", (error, files) => {
            if (error) return new Entry().setName("error").setValue(error).setColor("red");

            // Loop through the slash command files to deploy.
            files.filter(file => file.split(".").pop() === "js").forEach(file => {
                // Get and create slash command.
                const slashCommand = require(`../../slashCommands/${file}`);

                // Register the slash command data.
                if (slashCommand.data.name === args[0].toLowerCase()) client.application?.commands.create(slashCommand.data);
            });
        });
    } else {
        if (client.deployed) {
            const e = new discord.MessageEmbed()
                .setTitle("Deployment")
                .setDescription("Already deployed.")
                .setTimestamp();
            message.channel.send({ embeds: [e] });
        } else {
            // Load data for slash commands.
            fs.readdir("core/bot/client/slashCommands", (error, files) => {
                if (error) return new Entry().setName("error").setValue(error).setColor("red");

                var deployed = new discord.MessageEmbed()
                    .setTitle("Deployment")
                    .setTimestamp();

                var files = "";

                // Loop through the slash command files to deploy.
                files.filter(file => file.split(".").pop() === "js").forEach(file => {
                    // Get and create slash command.
                    const slashCommand = require(`../../slashCommands/${file}`);

                    // Register the slash command data.
                    if (slashCommand.configuration.deploy) {
                        client.application?.commands.create(slashCommand.data);
                        files += `, ${slashCommand.data.name}`;
                    };
                });

                // Set the deployed state.
                client.deployed = true;
                message.channel.send({ embeds: [deployed.setDescription(files)] });
            });
        };
    };
};

module.exports = {
    config: {
        name: "NAME",
        usage: "USAGE",
        description: "DESCRIPTION",
        alias: [],
        permission: ["SEND_MESSAGES"],
        direct: false,
        server: true,
        help: true,
        available: true,
        log: true
    },
    run
};