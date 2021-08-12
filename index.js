/**
 * @file Main file for running your discord bot.
 * @author aroary
 * @license MIT License
 * Copyright (c) 2021 aroary
 * 
 * Permission is hereby granted, free of charge, to a
 * ny person obtaining a copy of this software and as
 * sociated documentation files (the "Software"), to 
 * deal in the Software without restriction, includin
 * g without limitation the rights to use, copy, modi
 * fy, merge, publish, distribute, sublicense, and/or
 *  sell copies of the Software, and to permit person
 * s to whom the Software is furnished to do so, subj
 * ect to the following conditions:
 * 
 * The above copyright notice and this permission not
 * ice shall be included in all copies or substantial
 *  portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY
 *  OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NO
 * T LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FI
 * TNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
 * . IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDE
 * RS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABI
 * LITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OT
 * HERWISE, ARISING FROM, OUT OF OR IN CONNECTION WIT
 * H THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 */

const discord = require("discord.js");
const Entry = require("./core/utilities/logger");

// Load our bots secrets.
const secrets = JSON.parse(require("fs").readFileSync("./.secrets.json"));

// Create out client.
const client = new discord.Client({ intents: secrets.intents });

// Online.
client.secrets = secrets;
client.online = false;

require("./core/utilities/initiate")(client);

// Login.
client.login(client.secrets.token)
    .then(() => {
        client.online = true;
        new Entry("login", "Client logged in succesfully.").setColor("green").log();
    })
    .catch(error => new Entry("error", error).setColor("red").log());