const{GuildMember} = require("discord.js");
const perms = require('../constants/permissions');
/**
 * Checks whether or not a user has permissions.
 * @param {Array} permission - Array of permissions. 
 * @param {GuildMember} member - Member to check
 * @returns Returns and array if the member fails any permissions checks, returns false if they pass them all.
 */
module.exports = (member, permission) => {
    const missingArray = [];
    permission.forEach(perm => {
        if (!perms.includes(perm)) throw new Error('Invalid Permission in permission array, refer to /perms.js');
        if(!member.hasPermission(perm))missingArray.push(perm);
    });
    if(missingArray.length > 0)return missingArray;
    else return false;
};