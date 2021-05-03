const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!args[2]) return message.reply("Merci d'entrer une question !");
    let replies = [
        "Oui",
        "Non",
        "Peut-être !",
        "Flemme de répondre ;)",
        "Tu sais quoi ? Je m'en balec complet :joy:",
        "Ta gueule",
        "Redemande moi plus tard je suis en pleine game !"
    ]

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ");

    let ballembed = new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setColor("RANDOM")
        .setTitle(":8ball: 8Ball :8ball:")
        .addField("Tu m'as demandé :", question)
        .addField("Eh bien je te répond", replies[result]);

    message.channel.send(ballembed);
}

module.exports.help = {
    name: "8ball"
}