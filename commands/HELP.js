const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let helpembed = new Discord.RichEmbed()

        .setTitle("<:help:584367772922806282> __**AIDE**__ <:help:584367772922806282>")
        .setDescription("Voici les commandes d'aide, les commandes utilitaires peuvent être utilisées par tout le monde tandis que les commandes de modération peuvent être utilisées uniquement par des membres du staff ♥")
        .setColor("#732dff")
        .addField("**>  INFOS** <:help:584367772922806282>", "Le préfixe du bot est : **%** veillez a bien le mettre devant les commandes que vous utilisez. Nous vous rappelons que tout usage abusif des commandes de ce bot sera séverement sanctionné")
        .addField("**>  UTILITAIRES** ⚒", "`addrole @user role`**,** `removerole @user role`**,** `serverinfo`**,** `userinfo @user`**,** `ping`, `botinfo`**,** `help`**.**")
        .addField("**>  MODERATION** ⚔️", "`ban @user raison`**,** `kick @user raison`**,** `tempmute @user temps(s/d)`**,** `warn @user raison`**,** `warnlevel @user`**,** ")
        .addField("**>  AMUSEMENT** 🎉", "`8ball question`**,** `dog`**,** `cat`**.**")
        .addField("**>  ASSOCIATION** <:paralxlogo:584379713632337930>", "`adhesion`**,** `site`**,** `statuts`**,** `webtv`**.** ");

    message.channel.send(helpembed);

    message.delete();
}
module.exports.help = {
    name: "help"
}