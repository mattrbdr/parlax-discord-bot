const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!bUser) return message.channel.send("Je ne trouve pas cet utilisateur !");
    let bReason = args.join(" ").slice(22);
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Tu n'as pas les permissions");
    if (bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("Cet utilisateur ne peut pas être expulsé ou banni");

    let banEmbed = new Discord.RichEmbed()
        .setTitle("__**BAN**__")
        .setColor("#bc0000")
        .addField("Utilisateur Banni", `${bUser} ID : ${bUser.id}`)
        .addField("Banni par", `<@${message.author.id}> ID : ${message.author.id}`)
        .addField("Channel", message.channel)
        .addField("À", message.createdAt)
        .addField("Raison", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "incidents");
    if (!incidentchannel) return message.channel.send("Je ne trouve pas le channel `incidents` si il n'existe pas merci de bien vouloir le créer.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);

    message.reply(`L'utilisateur **${bUser}** à bien été __**BAN**__ pour **${bReason}**.`);
}

module.exports.help = {
    name: "ban"
}