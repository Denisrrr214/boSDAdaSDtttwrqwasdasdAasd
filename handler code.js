module.exports.run = async (bot, message, args) => {
    
    const Discord   = require('discord.js');
    const fs        = require('fs');

    //Code Start
      if (message.channel.type == "dm") return;
    const embedhelp = new Discord.RichEmbed()
    .setTitle("Help Command")
    .addField("Fun", 'Cooming Soon!')
    .addField("Moderation", 'Cooming Soon!')
    .addField("Dm", 'Cooming Soon!')
    .addField("Gen", 'Cooming Soon!')
    .addField("Music", 'Cooming Soon!')
    .addField("General", "$avatar")
    .setColor("8A2BE2")
    message.channel.send(embedhelp)
    }
  


    //Code End lmfao



module.exports.config = {
    command: "help"
}