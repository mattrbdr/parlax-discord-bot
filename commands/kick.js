const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!kickUser) return message.channel.send("Je ne trouve pas cet utilisateur");
    let KickReason = args.join(" ").slice(22);
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Tu n'as pas les permissions");
    if (kickUser.hasPermission("KICK_MEMBERS")) return message.channel.send("Cet utilisateur ne peut pas être expulsé ou banni");

    let KickEmbed = new Discord.RichEmbed()
        .setTitle("__**KICK**__")
        .setColor("#2772ea")
        .addField("Utilisateur Kick :", `${kickUser} ID : ${kickUser.id}`)
        .addField("Expulsé par :", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("Channel", message.channel)
        .addField("À", message.createdAt)
        .addField("Raison", KickReason);

    let KickChannel = message.guild.channels.find(`name`, "incidents")
    if (!KickChannel) return message.channel.send("Je ne trouve pas le channel `incidents` si il n'existe pas merci de bien vouloir le créer.")

    message.guild.member(kickUser).kick(KickReason)
    KickChannel.send(KickEmbed);

    message.reply(`L'utilisateur **${kickUser}** à bien été __**KICK**__ pour **${KickReason}**.`);

    return;
}
module.exports.help = {
    name: "kick"
}