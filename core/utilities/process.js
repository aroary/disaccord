const Discord = require("discord.js");
/**
 * 
 * @param {Discord.Message} message - the message
 */
module.exports=(message)=>{
    const p = process.cpuUsage();
    const m = process.memoryUsage();
    const r = process.resourceUsage();

    // Memory usage values
    const mu = new Map();
    for(let key in m){
        mu.set(key, Math.round(m[key] / 1024 / 1024 * 100) / 100);
    };

    const data = `\`\`\`diff
~ title: ${process.title}
+ version: ${process.version}
~ up time: ${process.uptime()}

CPU:
+ system: ${p.system}
+ user: ${p.user}

memory usage:
+ external: ${mu.get("external")} MB
+ heap total: ${mu.get("heapTotal")} MB
+ heap used: ${mu.get("heapUsed")} MB
~ RSS: ${mu.get("rss")} MB

resource usage:
+ FS read: ${r.fsRead}
+ FS write: ${r.fsWrite}
- IPC recieved: ${r.ipcReceived}
- IPC sent: ${r.ipcSent}
~ major page defult: ${r.majorPageFault}
~ minor page defult: ${r.minorPageFault}
~ max RSS: ${r.maxRSS}
- shared memory size: ${r.sharedMemorySize}
- signals count: ${r.signalsCount}
- swapped out: ${r.swappedOut}
+ system CPU time: ${r.systemCPUTime}
+ user CPU time: ${r.userCPUTime}
- unshared data size: ${r.unsharedDataSize}
- unshared stack size: ${r.unsharedStackSize}
- resource usage involuntary context switches: ${r.involuntaryContextSwitches}
- resource usage voluntary context switches: ${r.voluntaryContextSwitches}
\`\`\``;
    const embed = new Discord.MessageEmbed()
    .setDescription(data)
    .setTimestamp();

    message.channel.send(embed)
};