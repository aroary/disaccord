/**
 * @file Express app initiation.
 * @author aroary
 * @license MIT
 * @copyright Ⓒ 2021 aroary
 */

const discord = require("discord.js");
const socket = require("socket.io");
const ejs = require("ejs");
const path = require("path");
const express = require("express");
const fs = require("fs");
const Entry = require("../utilities/logger");
const data = require("../data/publicData").data;

const app = express();
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

/**
 * @description Start the website.
 * @param {discord.Client} client - The client.
 * @listens client.secrets.port - The specified port.
 */
function initiateWebsite(client) {
    // Set main page.
    app.use(express.static(path.join(__dirname, "../bot/client/webPages/home")));
    app.get("/", (req, res) => res.status(200).set('Content-Type', 'text/html').render(path.join(__dirname, "../bot/client/webPages/home/home.ejs"), data(client)));

    // More coming soon!

    // Set default page.
    app.get("*", (req, res) => res.status(301).redirect(`${req.protocol}://${req.get('host')}/`));

    // Listen at specified port.
    app.listen(client.secrets.port, () => new Entry("webapp", `Listening at http://localhost:${client.secrets.port}/`).setColor("brown").log());
};

module.exports = initiateWebsite;