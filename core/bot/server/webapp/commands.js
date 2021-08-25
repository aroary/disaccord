const discord = require("discord.js");
const path = require("path");
const express = require("express");
const Entry = require("../../../utilities/logger");


/**
 * @description Commands.
 * @param {discord.Client} client - The client.
 * @param {express.Request} req - The request.
 * @param {express.Response} res - The response.
 */
function send(client, req, res) {
    const data = require("../../../data/publicData").data(client);
    data.commands = client.commands;
    res.status(200).set('Content-Type', 'text/html').render(path.join(__dirname, "../../client/webPages/commands/commands.ejs"), data);
    new Entry("webapp", req.url).setColor("brown").log();
};

module.exports = { configuration: { path: ["/commands"], static: "core/bot/client/webPages/commands" }, send };