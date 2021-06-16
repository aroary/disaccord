const {MessageEmbed} = require('discord.js');
const permission = require('../../../utilities/permission');
module.exports = {
    config:{
        name:'message'
    },
    run:(client, message) => {
        // Do nothing if user executing a message is a bot.
        if (message.author.bot) return;

        // Commands
        if(message.content.toLowerCase().startsWith(client.config.prefix)){
            var args=message.content.split(' ');
            const command=args[0].slice(client.config.prefix.length);
            args = args.slice(1);
            
            // Find command.
            const cmdFile = client.commands.get(command) || client.commands.get(client.aliases.get(command));

            // location error message.
            const e = new MessageEmbed()
            .setColor('RED')
            .setTitle('Oops!')
            .setDescription('You cant do that here!');

            if(cmdFile){
                // Check for permission.
                if(message.guild){
                    // Check if command can be used in server.
                    if(cmdFile.config.availability.channel === "all" || cmdFile.config.availability.channel === "guild"){
                        const check = permission(message.member, cmdFile.config.info.permissions);
                        if(check){
                            const b = new MessageEmbed()
                            .setColor('RED')
                            .setTitle('Oops!')
                            .setDescription(`You are missing permissions to execute this command:\n${check.map( el =>`\`${el}\``).join('\n')}`);
                            return message.channel.send(b);
                        };
                    }else{
                        return message.channel.send(e);
                    };
                }else{
                    // Check if command can be used in DM.
                    if(cmdFile.config.availability.channel !== "all" && cmdFile.config.availability.channel !== "direct"){
                        return message.channel.send(e);
                    };
                };

                // Check if command is public.
                if(cmdFile.config.availability.public || client.config.testers.includes(message.author.id)){
                    // check for client permissions (coming soon)
                    cmdFile.execute(client, message, args);
                    client.log.command(`${message.author.id} executed ${cmdFile.config.info.name.toUpperCase()} args: ${args.length > 0 ? `\n${args.map(el => el).join(', ')}` : 'None.'}`);
                }else{
                    const a = new MessageEmbed()
                    .setColor('RED')
                    .setTitle('Oops!')
                    .setDescription('This command is not available to you right now.');
                    return message.channel.send(a);
                };
            };
        };

        // Triggers
        if(client.triggers){
            client.triggers.forEach((value, key, map)=>{
                if(message.content.includes(key)){
                    // Get our trigger
                    const trigger = client.triggers.get(key);
                    if(trigger){
                        const available = trigger.config.availability;
                        if((available.position.startsWith("start") && message.content.startsWith(key)) || (available.position.startsWith("end") && message.content.endsWith(key)) || (available.position.startsWith("include") && message.content.includes(key))){
                            // Check for permission.
                            if(message.guild){
                                // Check if command can be used in server.
                                if(available.channel === "all" || available.channel === "guild"){
                                    const check = permission(message.member, trigger.config.info.permissions);
                                    if(check){
                                        return;
                                    };
                                }else{
                                    return;
                                };
                            }else{
                                // Check if command can be used in DM.
                                if(available.channel !== "all" || available.channel !== "direct"){
                                    return;
                                };
                            };
                            // Check if command is public.
                            if(available.public || client.config.testers.includes(message.author.id)){
                                // check for client permissions (coming soon)
                                trigger.execute(client, message, args);
                                client.log.command(`${message.author.id} triggered ${trigger.config.info.name}`);
                            }else{
                                return;
                            };
                        };
                    };
                };
            });
        };
    }
};