const Discord = require("discord.js");
const bot = new Discord.Client();
bot.aliases = new Discord.Collection();
bot.commands= new Discord.Collection();
const figlet = require('figlet');

const client = new Discord.Client();

const colors = require('colors');

const prefix = "^^"

const readline = require('readline');

const fs = require('fs');

const usedCommandRecently4 = new Set();

const PREFIX = "^^"


bot.on("ready", () => {

    console.log("done")

    bot.user.setStatus('Version v1')

    bot.user.setPresence({

        game: {

            name: `Yo dont mess with me i got Wave Power  | ^^help`,

            type: "WATCHING",

            url: "https://www.twitch.tv/monstercat"

        }

    });

});

fs.readdir('./commands/', (err, files) => {


    if(err) console.error(err);
  
 



    var jsfiles = files.filter(f => f.split('.').pop() === 'js');

    if(jsfiles.length <= 0) {return console.log('No commands found...')}

    else { console.log(jsfiles.length + ' commands found')}



    var space = "";

    jsfiles.forEach((f, i) => {

        for(let i = 0; i < 50 - f.length; i++) space += " ";

        delete require.cache[require.resolve(`./commands/${f}`)]

        var cmds = require(`./commands/${f}`);


        console.log(`Command ${f} ${space}loading...`);

        space = "";

        bot.commands.set(cmds.config.command, cmds);

        if (cmds.config.aliases) cmds.config.aliases.forEach(alias => {

            bot.aliases.set(alias, cmds.config.command);

        });

    })

})
    

bot.on('message', (message) => {
  
  if(message.author.bot) return;

  if (message.content.startsWith(PREFIX)){
    
        let messageArray = message.content.split(" ");
    let command = messageArray[0];

    var args = messageArray.slice(1);

      //===================================================

      let argument = message.content.slice(PREFIX.length).trim().split(/ +/g);

      let cmd = argument.shift().toLowerCase();



      //===================================================

      if (bot.commands.has(cmd)){

          command = bot.commands.get(cmd);

      }else if (bot.aliases.has(cmd)){

          command = bot.commands.get(bot.aliases.get(cmd));

      }
      //===================================================

      message.content = message.content.toLowerCase();

      //===================================================

      try { command.run(bot, message, args); } catch (e) { ;}

      //===================================================

  }else{

  //you can put here xp system or some other stuff that should trigger on message send but dont put commands here like if //msg.cont.startsWith(PREFIX + "command") you create special file for the commands
  }
});

bot.on("message", message => {//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch
  //fix
  if (message.content.startsWith(prefix + "ping")) {  //muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch
    var ping = Date.now() - message.createdTimestamp + " ms"; //muie glitch //muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch
    message.channel.send( //muie glitch
      "Pong! `" + `${Date.now() - message.createdTimestamp}` + " ms`" //muie glitch
    ); //muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch
  } //plm
}); //muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch//muie glitch

       
       
bot.login("ODI3NTgyMjQwNzUzODQ0MjU0.YGdIBQ.zJJM7iSkfdu8QHVAgpYfnEyuqJ4"); //muie glitch
