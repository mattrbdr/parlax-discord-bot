const Discord = require("discord.js")
const os = require('os')
const cpuStat = require("cpu-stat");
const moment = require("moment")


module.exports.run = async (bot, message, args) => {

    let { version } = require("discord.js");

    cpuStat.usagePercent(function (err, percent, seconds) {
        if (err) {
            return console.log(err);
        }


        //let duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        let embedStats = new Discord.RichEmbed()
            .setTitle("Informations du bot ")
            .setColor("RANDOM")
            .addField("RAM Utilisée <:ram:584164343248060429>", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
            .addField("En ligne depuis ⏲", (Math.round(bot.uptime / (1000 * 60 * 60 * 24)) % 30) + " Jours, " + (Math.round(bot.uptime / (1000 * 60 * 60))) + " h, " + (Math.round(bot.uptime / (1000 * 60)) % 60) + " min, est " + (Math.round(bot.uptime / 1000) % 60) + " sec", true)
            .addField("Utilisateurs :baby::skin-tone-2: ", `${bot.users.size.toLocaleString()}`, true)
            .addField("Serveurs  <:bot:584159597812776970>", `${bot.guilds.size.toLocaleString()}`, true)
            .addField("Discord.js <:discordjs:584156631206592529>", `v${version}`, true)
            .addField("Node <:js:584165206461251593>", `${process.version}`, true)
            .addField("CPU <:cpu:584164343596318740>", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
            .addField("Utilisation du CPU ", `\`${percent.toFixed(2)}%\``, true)
            .addField("Architecture", `\`${os.arch()}\``, true)
            .addField("Platforme", `\`\`${os.platform()}\`\``, true)
            .addField("Language de Dev du bot :", "Javascript <:javas:584165252866768918>")
            .setFooter("ParalX Infos")

        message.channel.send(embedStats)
    })


}

module.exports.help = {
    name: "botinfo"
}