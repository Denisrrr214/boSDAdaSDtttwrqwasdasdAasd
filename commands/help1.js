module.exports.run = async (bot, message, args) => {
    
    const Discord   = require('discord.js');
    const fs        = require('fs');

    //Code Start
      if (message.channel.type == "dm") return;
  
  
  
  
  
  
  const action = args[0];
  
  switch(action) {
    default:
      const embedhelp1 = new Discord.RichEmbed()
    .setTitle("Help command")
    .addField(":grinning: General", "**^^help general**")
    .addField("😋 Fun", "**^^help fun**")
    .addField(":relieved: Moderation", "**^^help moderation**")
    .addField(":musical_note: Music", "**^^help music**")
    .addField(":shell: Ticket", "**^^help ticket**")
    .setTimestamp()
    .setFooter("Help Command")
    .setColor(`RANDOM`)
    message.channel.send(embedhelp1)
      break;
    case 'fun':
    const embedhelp2 = new Discord.RichEmbed()
    .setTitle("😋 Fun Commands")
    .setDescription("**cat\ndog\ncow\nmeme\npepe\nyomamma\n8ball\n\nPrefix:^^**")
    .setTimestamp()
    .setFooter("😋 Fun Commands")
    .setColor(`RANDOM`)
    message.channel.send(embedhelp2)
      break;
      case 'general':
    const embedhelp3 = new Discord.RichEmbed()
    .setTitle("😀 General Commands")
    .setDescription("**serverinfo\ninvite\nwhois\navatar\nstats\nsay\n\nPrefix:^^**")
    .setTimestamp()
    .setFooter("😀 General Commands")
    .setColor(`RANDOM`)
    message.channel.send(embedhelp3)
      break;
      case 'moderation':
    const embedhelp4 = new Discord.RichEmbed()
    .setTitle("😌 Moderation Commands")
    .setDescription("**kick\nban\nwarn\naddrole\n\nPrefix:^^**")
    .setTimestamp()
    .setFooter("😌 Moderation Commands")
    .setColor(`RANDOM`)
    message.channel.send(embedhelp4)
      break;
      case 'music':
    const embedhelp5 = new Discord.RichEmbed()
    .setTitle("🎵 Music Commands")
    .setDescription("**Music will be added in the next update!**")
    .setTimestamp()
    .setFooter("🎵 Music Commands")
    .setColor(`RANDOM`)
    message.channel.send(embedhelp5)
      break;
      case 'ticket':
    const embedhelp6 = new Discord.RichEmbed()
    .setTitle(":shell: Ticket Commands")
    .setDescription("**new\nclose\nsetup\n\nPrefix:^^**")
    .setTimestamp()
    .setFooter("🐚 Ticket Commands")
    .setColor(`RANDOM`)
    message.channel.send(embedhelp6)
      break
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    }
  


    //Code End



module.exports.config = {
    command: "help"
}