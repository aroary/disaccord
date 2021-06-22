const Discord = require('discord.js');
const bars = require("../../../../constants/wifiBars.json");
module.exports = {
    config:{
        info:{
            name:"pong",
            usage:"pong",
            description:"pong the bot",
            aliases:[],
            permissions:["SEND_MESSAGES"]
        },
        availability:{
            find:false,
            
            public:false,
            channel:"all",
        }
    },
    execute:(client, message, args) => {
        message.channel.send(".")
        .then(msg => {
            const ws = client.ws.ping;
            const pong = msg.createdTimestamp - message.createdTimestamp;
            const total = ws + pong;
            var sevarity = -1;
            var i = 0
            while(sevarity < 4 && i < total){
                sevarity ++;
                i += 150;
            };
            const data = new Discord.MessageEmbed()
            .setTitle("Ping!")
            .setDescription(`‏‏‎‏‏‎‏‏‎‏‏‎ ‎‎${ws} *ws*\n__+${pong}__ *api*\n**${total}** *ms*`)
            .setThumbnail(bars[sevarity])
            .setFooter("🏓", "https://cdn.discordapp.com/attachments/766316423306805269/855079663415328778/rss-5-xxl.png")
            .setTimestamp();
            msg.edit("", data);
        });
    }
};