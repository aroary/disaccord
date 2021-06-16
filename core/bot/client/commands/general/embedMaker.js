const Discord = require('discord.js');
module.exports = {
    config:{
        info:{
            name:"embed",
            usage:"embed <JSON>",
            description:"Create a message embed with raw json",
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
        // Parse JSON data
        try {
            const data = JSON.parse(args.join(" "));
            message.channel.send(data);
            console.log(data);
        }catch(error){
            message.channel.send("There was a problem converting that to json.");
        };
    }
};