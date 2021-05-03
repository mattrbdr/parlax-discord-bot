const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
    let inline = true
    let resence = true
    const status = {
        online: "<:online:584159597384957973> En ligne",
        idle: "<:inactif:584159597456130048> Inactif",
        dnd: " <:dnd:584159597456130058> Ne pas dérenger",
        offline: "<:offline:584159597447741441> Hors-Ligne/Invisble"
    }
    let mentionedUser = message.mentions.users.first() || message.author;

    const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
    let target = message.mentions.users.first() || message.author

    if (member.user.bot === true) {
        bot = "Oui";
    } else {
        bot = "Non";
    }


    let embed = new Discord.RichEmbed()
        //.setAuthor(member.user.username)
        .setThumbnail((target.displayAvatarURL))
        .setColor("#00ff00")
        .addField("Pseudo :two_women_holding_hands:", `${member.user.tag}`, inline)
        .addField("ID :id:", member.user.id, inline)
        .addField("Bot <:bot:584159597812776970>", `${bot}`, inline, true)
        .addField("Statut", `${status[member.user.presence.status]}`, inline, true)
        .addField("Joue à 🎮 ", `${member.user.presence.game ? `${member.user.presence.game.name}` : "<:nop:584161031677542402> Ne joue pas"}`, inline, true)
        .addField("Roles", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "<:nop:584161031677542402>N'a pas de roles !"}`, true)
        .addField("A rejoint Discord le :", moment(member.user.createdAt).format("LL"), true)
        .setFooter(`Information a propos de ${member.user.username}`)
        .addField('📅 Arriver sur le serveur', moment(message.guild.members.get(member.id).joinedAt).format("LL"), true)
        .setFooter("ParalXBOT 2019")
        .setThumbnail(mentionedUser.displayAvatarURL)
        .setTimestamp()

    message.channel.send(embed);

    message.delete();
}

module.exports.help = {
    name: "userinfo"
}