const discord = require("discord.js");

/**
 * @description Get the clients latency.
 * @param {discord.Client} client - The client.
 * @param {discord.Interaction} interaction - The interation.
 */
function run(client, interaction) {
    const ws = client.ws.ping;
    const time = interaction.createdTimestamp - new Date();
    const ping = new discord.MessageEmbed().setDescription(`*api **\`${time}\`***\n*ws  **\`${ws}\`***`);
    interaction.reply({ embeds: [ping], ephemeral: true });
};

module.exports = {
    configuration: {
        log: true,
        permission: ["SEND_MESSAGES"]
    },
    data: {
        name: "ping",
        description: "Get a latency of the bot."
    },
    run
};