const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    //!tempmute @user 1s/m/h/d

    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.reply("Je ne trouve pas cet utilisateur");
    if (tomute.hasPermission("ADMINISTRATOR")) return message.reply("Cet utilisateur a des permissions trop élevées ou égales au votres <:cancel:584336228212539392>");
    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false,
                    SPEAK: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
    //end of create role
    let mutetime = args[1];
    if (!mutetime) return message.reply("Vous n'avez pas spécifiez de temps");

    await (tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> a bien été mute pour ${ms(ms(mutetime))}`);

    setTimeout(function () {
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> a bien été démute après le temps convenu`);
    }, ms(mutetime));


    //end of module
}

module.exports.help = {
    name: "tempmute"
}