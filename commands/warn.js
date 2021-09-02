module.exports.run = async (bot, message, args) => {
    
    const Discord   = require('discord.js');
    const fs        = require('fs');

    //Code Start
      if (message.channel.type == "dm") return;
          let messageArray1 = message.content.split(" ");
    let command = messageArray1[0];
    let args1 = messageArray1.slice(1);
  
  
  
  
  
  let xdemb = new Discord.RichEmbed()
        .setColor("#00ff00")
        .setTitle("Warn Command")
        .addField("Description:", `Warn a member`, true)
        .addField("Usage:", `/warn [user] [reason]`, true)
        .addField("Example:", `/warn @Aiko spam`)
  
            const embedv = new Discord.RichEmbed()
  .setDescription("You don't have premission to do that!")
     .setColor(`RANDOM`);
  
            const embedc = new Discord.RichEmbed()
  .setDescription("You must mention someone to warn them.")
     .setColor(`RANDOM`);
  
            const embedx = new Discord.RichEmbed()
  .setDescription('You must have a reason for the warning.')
     .setColor(`RANDOM`);
  
  
  
  
  
  
  


    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(embedv);
  let reason = args1.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.channel.send(xdemb);
  if (reason.length < 1) return message.channel.send(xdemb);

  
  
  
  
  
  
  
  
  
  
  
  
  
  let dmsEmbed = new Discord.RichEmbed()
  .setTitle("Warn")
  .setColor("#00ff00")
  .setDescription(`You have been warned on \`${message.guild.name}\``)
  .addField("Moderator:", message.author.tag)
  .addField("Reason:", reason);

  user.send(dmsEmbed);

  message.delete();
  
    let em = new Discord.RichEmbed()
  .setTitle("Warn")
  .setColor("#00ff00")
  .addField("User:", `${user.tag}`)
  .addField("Moderator:", message.author.tag)
  .addField("Reason:", reason);
  
  message.channel.send(em)
    }
  


    //Code End



module.exports.config = {
    command: "warn"
}