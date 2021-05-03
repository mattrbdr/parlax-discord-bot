const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let adhesionembed = new Discord.RichEmbed()

        .setTitle("**DEMANDE D'ADHESION**")
        .setColor("RANDOM")
        .setDescription("Voici la page vous permettant de faire une demande d'adhésion pour rejoindre l'association.")
        .addField("Adhésion -->", "https://forms.gle/fiXKsij3bFTvdyuF7")
        .addField("Accord parental si vous êtes mineur -->", "https://forms.gle/MzsbymLG97sQGZF69");


    message.channel.send(adhesionembed);

    message.delete();
}
module.exports.help = {
    name: "adhesion"
}