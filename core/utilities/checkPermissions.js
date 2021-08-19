/**
 * @file Check permissions of client or user in a channel.
 * @author aroary
 * @license MIT
 * @copyright Ⓒ 2021 aroary
 */

const discord = require("discord.js");
const perms = require("../../documentation/permissions.json");

/**
 * @description Checks for permissions for client and user.
 * @param {discord.Channel} channel - The channel to check in.
 * @param {discord.GuildMember} client - Client to check.
 * @param {discord.GuildMember} member - Member to check.
 * @param {Array} permission - Array of permissions.
 * @returns {Object} Returns false if client and member have all requred permissions.
 * @example checkPermissions(channel, guild.me, member, [])
 */
module.exports = (channel, client = null, member = null, permission) => {
    const missing = {};
    if (client) missing.client = [];
    if (member) missing.user = [];

    permission.forEach(perm => {
        if (!perms.includes(perm)) throw new Error('Invalid Permission in permission array.');

        // Check for permissions for both client and member.
        if (missing.client && !client.permissionsIn(channel.id).has(perm, true)) missing.client.push(perm);
        if (missing.user && !member.permissionsIn(channel.id).has(perm, true)) missing.user.push(perm);
    });

    // Return results.
    if (missing.user && !missing.user.length) missing.user = false;
    if (missing.client && !missing.client.length) missing.client = false;
    if (missing.user || missing.client) return missing;
    else return false;
};