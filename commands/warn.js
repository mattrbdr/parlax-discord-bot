const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

    //!warn @daeshan <reason>
    if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Tu n'as pas la permission");
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if (!wUser) return message.reply("Je ne trouve pas cet utilisateur");
    if (wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("STOP tu ne peut pas warn cet utilisateur");
    let reason = args.join(" ").slice(22);

    if (!warns[wUser.id]) warns[wUser.id] = {
        warns: 0
    };

    warns[wUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err)
    });

    let warnEmbed = new Discord.RichEmbed()
        .setDescription("Avertissement")
        .setAuthor(message.author.username)
        .setColor("#fc6400")
        .addField("Utilisateur Avertit", `<@${wUser.id}>`)
        .addField("Channel", message.channel)
        .addField("Nombre de Warn", warns[wUser.id].warns)
        .addField("Raison", reason);

    let warnchannel = message.guild.channels.find(`name`, "incidents");
    if (!warnchannel) return message.reply("Je ne trouve pas le channel `incidents` si il n'existe pas merci de bien vouloir le créer.");

    warnchannel.send(warnEmbed);

}

module.exports.help = {
    name: "warn"
}