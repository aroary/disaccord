const Discord = require("discord.js");
const OS = require("os");
module.exports = {
    config:{
        info:{
            name:"host",
            usage:"host",
            description:"get host machine data",
            aliases:["os"],
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
        const data = `\`\`\`


        \`\`\``;
    }
};

// const data = `\`\`\`diff
// OS.cpus().forEach(cpu => {
//     cpu.model
//     cpu.speed
//     cpu.times
// }),
// endianness: ${OS.endianness()}
// freemem: ${OS.freemem()}
// priority: ${OS.getPriority()}
// homedir: ${OS.homedir()}
// hostname: ${OS.hostname()}
// OS.loadavg().forEach(avg => {
//     avg
// }),
// network interfaces: ${OS.networkInterfaces()}
// platform: ${OS.platform()}
// release: ${OS.release()}
// tmpdir: ${OS.tmpdir()}
// totalmem: ${OS.totalmem()}
// type: ${OS.type()}
// uptime: ${OS.uptime()}
// userinfo:
// ~ gid: ${OS.userInfo({encoding:"utf-8"}).gid}
// ~ homedir: ${OS.userInfo({encoding:"utf-8"}).homedir}
// ~ shell: ${OS.userInfo({encoding:"utf-8"}).shell}
// ~ uid: ${OS.userInfo({encoding:"utf-8"}).uid}
// ~ username: ${OS.userInfo({encoding:"utf-8"}).username}
// version: ${OS.version()}
// \`\`\``;
// console.log(data);