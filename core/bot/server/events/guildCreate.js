const chalk = require("chalk");
const Discord = require('discord.js')
module.exports = {
	config:{
		name:'guildCreate'
	},
	run:(client, guild) => {
        client.log.ready(client);

        // Find the first channel which the bot can send messages in.
        let theChannel;
        guild.channels.cache.forEach((channel) => {
			if (!theChannel && channel.type === "text" && channel.permissionsFor(guild.me).has("SEND_MESSAGES")){
                theChannel = channel;
            };
		});
		if (!theChannel) return;

        const hi = new Discord.MessageEmbed()
		.setTitle("<:wremovebgpreview:826574917465538560> Hi!")
		.setAuthor(client.user.tag, client.user.avatarURL())
        .setThumbnail(client.user.avatarURL())
        .addFields(
            {name:"Prefix:", value:"`"+client.config.prefix+"`", inline:true},
            {name:"Invite:", value:`Click [here](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)!`, inline:true}
        )
        .setDescription(client.config.description)
        .setTimestamp();
		theChannel.send(hi);
    }
};