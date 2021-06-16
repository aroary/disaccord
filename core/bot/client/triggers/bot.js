const Discord = require('discord.js');
module.exports = {
    config:{
        info:{
            name:"@",
            description:"Get the bots info when pinged",
            permissions:[]
        },
        availability:{
            find:true,
            public:true,
            channel:"all",
            position:"include"
        }
    },
    execute:(client, message, args) => {
        if(message.mentions.users.first()){
            if(message.mentions.users.first().id===client.user.id){
                const me=new Discord.MessageEmbed()
                .setTitle(client.user.username)
                .setAuthor(client.user.tag, client.user.avatarURL())
                .setThumbnail(client.user.avatarURL())
                .addFields(
                    {name:"Prefix:", value:"`"+client.config.prefix+"`", inline:true},
                    {name:"Invite:", value:`Click [here](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)!`, inline:true}
                )
                .setDescription(client.config.description)
                .setTimestamp()
                return message.channel.send(me);
            };
        };
    }
};