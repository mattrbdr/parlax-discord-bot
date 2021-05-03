const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!rUser) return message.channel.send("Je ne trouve pas cet utilisateur");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
        .setDescription("__**REPORT**__")
        .setColor("#15f153")
        .addField("Utilisateur signalé", `${rUser} ID : ${rUser.id}`)
        .addField("Signalé par", `${message.author} ID : ${message.author.id}`)
        .addField("Channel ", message.channel)
        .addField("Raison", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if (!reportschannel) return message.channel.send("Je ne trouve pas le channel `report` si il n'existe pas merci de bien vouloir le créer.");


    message.delete().catch(O_o => { });
    reportschannel.send(reportEmbed);

    message.reply(`L'utilisateur **${rUser}** à bien été report pour **${rreason}**`);

}

module.exports.help = {
    name: "report"
}
