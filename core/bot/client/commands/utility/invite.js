const Discord = require('discord.js');
module.exports = {
    config: {
        info: {
            name: "invite",
            usage: "invite",
            description: "invite the bot",
            aliases: [],
            permissions: ["SEND_MESSAGES"]
        },
        availability: {
            find: true,
            public: true,
            channel: "all",
        }
    },
    /**
     * @param {Discord.Client} client - Your client 
     * @param {Discord.Message} message - The message
     * @param {Array} args - The message arguments (mesage.content.split(" "))
     */
    execute: (client, message, args) => {
        const invite = new Discord.MessageEmbed()
            .setDescription(`Click [here](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8) to invite me to your server`)
        message.channel.send(invite);

        // Get inviters guild invite.
        message.guild.fetchInvites()
            .then(invites => {
                client.log.log(`Invite code found: https://discord.gg/${invites.array()[0].code}`);
            });
    }
};