const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete().catch(console.error);

    waiting = await message.channel.send("**En cours de chargement .........**").catch(console.error);

    var pingEmbed = new Discord.RichEmbed()
        .setAuthor("Latence du bot & de l'api discord.js", bot.user.avatarURL)
        .setColor("RANDOM")
        .addField("**🤖 ParalXBOT :**", "> `" + `${waiting.createdTimestamp - message.createdTimestamp}` + "ms`", true)
        .addField("**<:discordjs:584156631206592529> API discord.js :**", "> `" + Math.round(bot.ping) + "ms`", true)
        .setTimestamp(message.createdAt)
        .setFooter("ParalXBOT | demandé par @" + message.author.tag, bot.user.avatarURL)
    waiting.edit(pingEmbed).catch(console.error);
}
module.exports.help = {
    name: "ping"
}
