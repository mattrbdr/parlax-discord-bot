const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

    let waiting = await message.channel.send("**Je cherche.......**").catch(console.error);

    let { body } = await superagent
        .get(`https://random.dog/woof.json`);

    if (!{ body }) return message.channel.send("Oups ! L'API à bug fait '!bug et la description pour nous signaler le bug'")

    let dogembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(":dog: Un chien :dog:")
        .setImage(body.url);

    waiting.edit(dogembed).catch(console.error);

}

module.exports.help = {
    name: "dog"
}