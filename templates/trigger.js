const Discord = require('discord.js');
module.exports = {
    config:{
        info:{
            name:"name",
            description:"description",
            permissions:[]
        },
        availability:{
            find:true,
            public:true,
            channel:"all", // all, server, private
            position:"start" // start, end, include
        }
    },
    execute:(client, message, args) => {
        const me=new Discord.MessageEmbed()
        .setTitle(client.user.username)
        .setAuthor(client.user.tag, client.user.avatarURL())
        .addFields(
            {name:"Prefix:", value:client.config.prefix, inline:true}
        )
        .setDescription(client.config.description)
        .setTimestamp()
        return message.channel.send(me);
    }
};