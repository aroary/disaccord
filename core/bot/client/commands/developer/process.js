const Discord = require('discord.js');
const hostData = require("../../../../utilities/process")
module.exports = {
    config:{
        info:{
            name:"process",
            usage:"process",
            description:"Get the host specs and performance data",
            aliases:["memory", "cpu"],
            permissions:["SEND_MESSAGES"]
        },
        availability:{
            find:false,
            public:false,
            channel:"direct",
        }
    },
    execute:(client, message, args) => {
        hostData(message);
    }
};