const Discord = require('discord.js');
module.exports = {
    config:{
        info:{
            name:"invite",
            usage:"invite",
            description:"invite the bot",
            aliases:[],
            permissions:[]
        },
        availability:{
            find:true,
            public:true,
            channel:"all",
        }
    },
    execute:(client, message, args) => {
        return message.channel.send(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`);
    }
};