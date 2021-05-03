const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    //!addrole @andrew Dog Person
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Vous n'avez pas les perms");
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.reply("Je ne trouve pas cet utilisateur");
    let role = args.join(" ").slice(22);
    if (!role) return message.reply("Spécifiez un role");
    let gRole = message.guild.roles.find(`name`, role);
    if (!gRole) return message.reply("Je ne trouve pas ce role");

    if (rMember.roles.has(gRole.id)) return message.reply("Cet utilisateur possède déja ce role");
    await (rMember.addRole(gRole.id));

    try {
        await rMember.send(`Félicitations vous avez bien reçu le role ${gRole.name}`)
    } catch (e) {
        console.log(e.stack);
        message.channel.send(`Félicitation a <@${rMember.id}>, qui a  bien reçu le role **${gRole.name}**.`)
    }
}

module.exports.help = {
    name: "addrole"
}