const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let siteembed = new Discord.RichEmbed()

        .setTitle("**SITE WEB**")
        .setColor("RANDOM")
        .addField("NOTRE SITE -->", "https://www.paralx-esport.com/")


    message.channel.send(siteembed);

    message.delete();
}
module.exports.help = {
    name: "site"
}