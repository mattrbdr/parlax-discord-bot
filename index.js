const Discord = require("discord.js")
const config = require("./config.json")
const bot = new Discord.Client();
const fs = require("fs");
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("Je ne trouve pas les commandes");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} chargée!`);
        bot.commands.set(props.help.name, props);
    });

    fs.readdir("./events/", (error, f) => {
        if (error) console.log(error);
        console.log(`${f.length} events en chargement`);

        f.forEach((f) => {
            const events = require(`./events/${f}`);
            const event = f.split(".")[0];

            client.on(event, events.bind(null, client));
        });
    });

});


bot.on("ready", () => {
    console.log(bot.user.username + " est en ligne ! Je suis prêt a vous aider")
});

bot.on("message", async message => {
    //a little bit of data parsing/general checks
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
    let content = message.content.split(" ");
    let command = content[0];
    let args = content.slice(1);
    let prefix = config.prefix;


    //checks if message contains a command and runs it
    let commandfile = bot.commands.get(command.slice(prefix.length));
    if (commandfile) commandfile.run(bot, message, args);
})

var jeuxs = [
    `Comment allez vous ?`,
    `SWAFORD est moche`,
    `%help --> pour de l'aide`];

setInterval(function () {

    var jeux = jeuxs[Math.floor(Math.random() * jeuxs.length)];

    bot.user.setPresence({
        game: {
            name: jeux
        }
    });
}, 7000);


bot.login(config.token)
