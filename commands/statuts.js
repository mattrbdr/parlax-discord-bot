const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let statutsembed = new Discord.RichEmbed()

        .setTitle("**STATUTS DE L'ASSOCIATION**")
        .setColor("RANDOM")
        .addField("Voici tous les statuts de l'Association -->", "https://www.paralx-esport.com/a-propos/nos-statuts")


    message.channel.send(statutsembed);

    message.delete();
}
module.exports.help = {
    name: "statuts"
}