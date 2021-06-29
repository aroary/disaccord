const Discord = require("discord.js");
const OS = require("os");
module.exports = {
    config:{
        info:{
            name:"host",
            usage:"host",
            description:"Get host machine data and specs.",
            aliases:["os", "ip"],
            permissions:["SEND_MESSAGES"]
        },
        availability:{
            find:false,
            public:false,
            channel:"direct"
        }
    },
    /**
     * @param {Discord.Client} client - Your client 
     * @param {Discord.Message} message - The message
     * @param {Array} args - The message arguments (mesage.content.split(" "))
     */
    execute:(client, message, args) => {
        // Load cpu data
        var iteration = 0;
        var cpuData = "";
        OS.cpus().forEach(cpu => {
            const cpus = `cpu ${iteration}:\n`;
            const times = `+ ~ idle: ${cpu.times.idle}\n+ ~ irq: ${cpu.times.irq}\n+ ~ nice: ${cpu.times.nice}\n+ ~ system: ${cpu.times.sys}\n+ ~ user: ${cpu.times.user}`
            cpuData += `\n${cpus}+ model: ${cpu.model}\n+ speed: ${cpu.speed}\n+ times: ${times}\n`
            
            iteration ++;
        });

        // Build message
        const data = `\`\`\`diff
~ endianness: ${OS.endianness()}
${cpuData}
+ free memory: ${OS.freemem()}
- priority: ${OS.getPriority()}
+ home directory: ${OS.homedir()}
+ host name: ${OS.hostname()}
+ network interfaces: ${OS.networkInterfaces()}
+ platform: ${OS.platform()}
+ release: ${OS.release()}
+ temporary directory: ${OS.tmpdir()}
~ total memory: ${OS.totalmem()}
+ type: ${OS.type()}
+ uptime: ${OS.uptime()}

userinfo:
~ shell: ${OS.userInfo({encoding:"utf-8"}).shell}
~ username: ${OS.userInfo({encoding:"utf-8"}).username}
+ version: ${OS.version()}\`\`\``;

        const m = new Discord.MessageEmbed()
        .setDescription(data)
        .setTimestamp();
        message.channel.send(m);
    }
};