/**
 * @file Reaction trigger initiation.
 * @author aroary
 * @license MIT
 * @copyright Ⓒ 2021 aroary
 */

 const discord = require("discord.js");
 const fs = require("fs");
 const Entry = require("../utilities/logger");
 
 /**
  * @description Initiate the reaction triggers.
  * @param {discord.Client} client - The client.
  */
 function initiateTriggers(client) {
     client.reactions = new Array();
 
     // Read trigger directory.
     fs.readdir("core/bot/client/reactions", (error, files) => {
         // If an error occurs, log it to the console and abort command initialization.
         if (error) return new Entry("error", error).setColor("red").log();
 
         // Filter for relevant files.
         files = files.filter(file => file.split`.`.pop() === "js");
         new Entry("load", `Found ${files.length} reaction files.`).setColor("grey", "white").log();
 
         // Loop through the files and add each to the reactions array.
         files.forEach(file => {
             const reaction = require(`../bot/client/reaction/${file}`);
             client.reactions.push(reaction);
             new Entry("load", `Reaction ${reaction.config.name}`).setColor("white", "black").log();
         });
     });
 };
 
 module.exports = initiateTriggers;