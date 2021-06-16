const Discord = require('discord.js');
module.exports = {
    config:{
        name:"rateLimit",
    },
    run:(client, data) => {
        client.log.rateLimit(`${data.path} ${data.limit} ${data.timeout} ${data}`);
    }
};