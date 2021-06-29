const Discord = require('discord.js');
const bars = require("../../../../constants/wifiBars.json");
module.exports = {
    config:{
        info:{
            name:"ping",
            usage:"ping",
            description:"ping the bot",
            aliases:["latency","%"],
            permissions:["SEND_MESSAGES"]
        },
        availability:{
            find:true,
            public:true,
            channel:"all",
        }
    },
    /**
     * @param {Discord.Client} client - Your client 
     * @param {Discord.Message} message - The message
     * @param {Array} args - The message arguments (mesage.content.split(" "))
     */
    execute:(client, message, args) => {
        message.channel.send(".")
        .then(msg => {
            const ws = client.ws.ping;
            const ping = msg.createdTimestamp - message.createdTimestamp;
            const total = ws + ping;
            var sevarity = -1;
            var i = 0
            while(sevarity < 4 && i < total){
                sevarity ++;
                i += 150;
            };
            const data = new Discord.MessageEmbed()
            .setTitle("Pong!")
            .setDescription(`‏‏‎‏‏‎‏‏‎‏‏‎\` ‎‎${ws}\` *ws*\n__\`+${ping}\`__ *api*\n**\`${total}\`** *ms*`)
            .setThumbnail(bars[sevarity])
            .setFooter("🏓", "https://cdn.discordapp.com/attachments/766316423306805269/855079663415328778/rss-5-xxl.png")
            .setTimestamp();
            msg.edit("", data);
        });
    }
};