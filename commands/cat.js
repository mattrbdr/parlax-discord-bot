const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

    let waiting = await message.channel.send("Je cherche.......").catch(console.error);

    let { body } = await superagent
        .get(`http://aws.random.cat/meow`);

    if (!{ body }) return message.channel.send("Oups ! L'API à bug fait '!bug et la description pour nous signaler le bug'")

    let catembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(":cat: Un chat :cat:")
        .setImage(body.file);

    waiting.edit(catembed).catch(console.error);



}

module.exports.help = {
    name: "cat"
}