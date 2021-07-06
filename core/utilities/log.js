const fs = require("fs");
module.exports = (client, content) =>{
    // // Create the timestamp
    // const moment = () => { return require("moment")().format('YYYY-MM-DD HH:mm:ss'); }

    // // Seperate the times.
    // const time = moment().split(" ");
    // const day = time[0].split("-");
    // const hour = time[1].split(":");

    // // Define the folders for the times
    // const yearFolder = `logs/bot/${day[0]}`;
    // const monthFolder = `logs/bot/${day[0]}/${day[1]}`;
    // const dayFolder = `logs/bot/${day[0]}/${day[1]}/${day[2]}`;

    // // Create a folder and file if it doesnt exist.
    // if (!fs.existsSync(dayFolder)) {
    //     fs.mkdirSync(dayFolder);
    //     client.log.log(`New directory created: ${dayFolder}`);
    // };

    // if (!fs.existsSync(monthFolder)) {
    //     fs.mkdirSync(monthFolder);
    //     client.log.log(`New directory created: ${monthFolder}`);
    // };

    // // Write our log to the file.
    // fs.writeFileSync(dayFolder, `\n[${moment()}]: ${content}`, { flag: 'w+' });
};