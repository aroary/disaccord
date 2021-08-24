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
app.set('views', path.join(__dirname, '../bot/client/webPages/'));
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
    app.get(["/", "home"], (req, res) => res.status(200).set('Content-Type', 'text/html').render(path.join(__dirname, "../bot/client/webPages/home/home.ejs"), data(client)));

    // Load all the rest of the webfiles.
    const files = fs.readdirSync("core/bot/server/webapp", { encoding: "utf-8" }).filter(file => file.split`.`.pop() === "js");
    new Entry("load", `Found ${files.length} Webpage files.`).setColor("grey").log();
    files.forEach(file => {
        const page = require(`../bot/server/webapp/${file}`);

        // Set the page.
        if (page.configuration.static) app.use(express.static(path.join(__dirname, `../../${page.configuration.static}`)));
        app.get(page.configuration.path, (req, res) => page.send(client, req, res));
        new Entry("load", `Webapp ${page.configuration.path}`).setColor("white", "black").log();
    });

    // Set default page.
    app.get("*", (req, res) => res.status(307).redirect(`${req.protocol}://${req.get('host')}/`));

    // Listen at specified port.
    app.listen(client.secrets.port, () => new Entry("webapp", `Listening at http://localhost:${client.secrets.port}/`).setColor("brown").log());
};

module.exports = initiateWebsite;