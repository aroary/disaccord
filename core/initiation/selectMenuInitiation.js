/**
 * @file menu initiation.
 * @author aroary
 * @license MIT
 * @copyright Ⓒ 2021 aroary
 */

 const discord = require("discord.js");
 const fs = require("fs");
 const Entry = require("../utilities/logger");
 
 /**
  * @description Load all menus from menus folder.
  * @param {discord.Client} client - The client.
  */
 function initiateSelectMenus(client) {
     // Declare our menus.
     client.menus = new discord.Collection();
 
     // Read the directory.
     fs.readdir('core/bot/client/selectMenus', (error, files) => {
         // Terminate loading process if there is an error.
         if (error) return new Entry().setName("error").setValue(error).setColor("red").log();
         
         // Loop through relevant files.
         const menuFiles = files.filter(file => file.split('.').pop() === 'js');
         new Entry("load", `Found ${menuFiles.length} Select Menu files.`).setColor("grey").log();
         menuFiles.forEach(file => {
             // Set the collection values.
             const menu = require(`../bot/client/selectMenus/${file}`);
             client.menus.set(menu.configuration.name, menu);
 
             new Entry("load", `Select Menu ${menu.configuration.name}`).setColor("white", "black").log();
         });
     });
 };
 
 module.exports = initiateSelectMenus;