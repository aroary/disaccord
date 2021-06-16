const Discord = require('discord.js');
module.exports = {
    config:{
        info:{
            name:"COMMAND_NAME",
            usage:"COMMAND_USAGE (no prefix)",
            description:"COMMAND DESCRIPTION",
            aliases:[],
            permissions:[]
        },
        availability:{
            find:true, // apears in the help command
            public:true, // available to non developers
            channel:"all", // all, server, private set where the command can be used
        }
    },
    execute:(client, message, args) => {
        return message.channel.send("Pong!");
    }
};