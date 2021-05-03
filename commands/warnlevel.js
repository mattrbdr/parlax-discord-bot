const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {


    if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Vous n'avez pas les permissions requises <:cancel:584336228212539392>");
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if (!wUser) return message.reply("Merci de mentionner un utilisateur !");
    if (wUser.hasPermission("ADMINISTRATOR")) return message.reply("Cet utilisateur a des permissions trop élevées ou égales au votres <:cancel:584336228212539392>");

    if (!warns[wUser.id]) warns[wUser.id] = {
        warns: 0
    };


    let warnlevelembed = new Discord.RichEmbed()
        .setTitle(`__**Avertissement de l'utilisateur ${wUser}**__`)
        .setAuthor(message.author.username)
        .setColor("#fc6400")
        .addField("Utilisateur", wUser.id)
        .addField("Nombre de Warn", warns[wUser.id].warns)

    let warnchannel = message.guild.channels.find(`name`, "incidents");
    if (!warnchannel) return message.reply("Je ne trouve pas le channel `incidents` si il est inexistant merci de le créer");

    message.channel.send(warnlevelembed);


} 

module.exports.help = {
    name: "warnlevel"
}