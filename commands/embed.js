module.exports.run = async (bot, message, args) => {
    
    const Discord = require('discord.js');
  const client = require('discord.js')
  args.slice(0).join(" ")
      if (!message.member.hasPermission("KICK_MEMBERS")  && message.author.id !== "411603739582005270") return message.channel.send("Nu ai permisiune la news....");
  var text = message.content.split(' ').slice(1).join(' ');
  const embed0 = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle("Anunt!")
      .setTimestamp()
    .setFooter("Rocraft Watcher")
  .setDescription(text);
  
  
  message.channel.send(embed0)
  message.delete()
  }
module.exports.config = {
    command: "news"
}