const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let webtvembed = new Discord.RichEmbed()

        .setTitle("**WEBTV :fire:**")
        .setColor("RANDOM")
        .setDescription("Hey nous avons une web TV tu peut nous regarder lorsque nous sommes en stream ;)")
        .addField("Lien -->", "https://www.twitch.tv/paralxtv")


    message.channel.send(webtvembed);

    message.delete();
}
module.exports.help = {
    name: "webtv"
}