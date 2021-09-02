module.exports.run = async (bot, message, args) => {
    
    const Discord   = require('discord.js');
    const fs        = require('fs');

    //Code Start
      if (message.channel.type == "dm") return;
  
    const embedhelp1 = new Discord.RichEmbed()
    .setTitle("Help Command")
    .addField("General", '^^serverinfo\n^^invite\n^^whois\n^^avatar\n^^stats\n^^say')
    .addField("Fun", "^^cat\n^^dog\n^^cow\n^^pepe\n^^yomamma\n^^8ball\n^^meme")
    .addField("Moderation", '^^kick\n^lmaiooo^ban\n^^warn\n^^addrole')
    .addField("Economy", "Soon!")
    .addField("Music", 'Soon!')
    .addField("Ticket", "^^new\n^^close\n^^setup")
    .setColor("8A2BE2");
    message.channel.send(embedhelp1)
    }
  


    //Code End



module.exports.config = {
    command: "help11"
}