const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Désolé tu n'a pas la permission");
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.reply("Je ne trouve pas cet utilisateur");
    let role = args.join(" ").slice(22);
    if (!role) return message.reply("Merci de bien vouloir spécifier un role");
    let gRole = message.guild.roles.find(`name`, role);
    if (!gRole) return message.reply("Je ne trouve pas ce role !");

    if (!rMember.roles.has(gRole.id)) return message.reply("Cet utilisateur n'a pas ce role");
    await (rMember.removeRole(gRole.id));

    try {
        await rMember.send(`RIP, vous n'avez plus ce role ${gRole.name}`)
    } catch (e) {
        message.channel.send(`RIP à <@${rMember.id}>, le role ${gRole.name} lui a été enlevé !`)
    }
}

module.exports.help = {
    name: "removerole"
}