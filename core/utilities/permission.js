const Discord = require("discord.js");
const perms = require('../constants/permissions');
/**
 * @param {Discord.Client} client - Client to check
 * @param {Discord.GuildMember} member - Member to check
 * @param {Array} permission - Array of permissions
 * @returns Returns false if client and member have all requred permissions.
 */
module.exports = (client, member, permission) => {
    const missing = {user:[], client:[]};
    permission.forEach(perm => {
        if(!perms.includes(perm))throw new Error('Invalid Permission in permission array, refer to constants/permissions.js');
        
        // Check for permissions for both client and member.
        if(!client.hasPermission(perm))missing.client.push(perm);
        if(!member.hasPermission(perm))missing.user.push(perm);
    });

    // Return results.
    if(missing.user.length === 0)missing.user = false;
    if(missing.client.length === 0)missing.client = false;
    if(missing.user || missing.client)return missing;
    else return false;
};