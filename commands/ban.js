module.exports.run = async (bot, message, args) => {
    
    const Discord   = require('discord.js');
    const fs        = require('fs');
  const { Client, RichEmbed } = require("discord.js");
      function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";



    };

    //Code Star
      if (message.channel.type == "dm") return;
  
            const embedv = new Discord.RichEmbed()
  .setDescription("I cannot ban this user!")
     .setColor(`RANDOM`);
  
            const embedc = new Discord.RichEmbed()
  .setDescription("Error! Try again")
     .setColor(`RANDOM`);
  
            const embedx = new Discord.RichEmbed()
  .setDescription("I can't ban my owner!")
     .setColor(`RANDOM`);
  
              const embed7 = new Discord.RichEmbed()
  .setDescription("Sorry, you don't have permission to use this!")
     .setColor(`RANDOM`);
  
              const embed8 = new Discord.RichEmbed()
  .setDescription("You can't ban yourself!")
     .setColor(`RANDOM`);
  

  
  
let xdemb = new Discord.RichEmbed()
        .setColor("#00ff00")
        .setTitle("Ban Command")
        .addField("Description:", `Ban a member`, true)
        .addField("Usage:", `^^ban [user] [reason]`, true)
        .addField("Example:", `^^ban @Aiko spam`)

        if(!message.member.hasPermission("BAN_MEMBERS") && message.author.id !== "411603739582005270") return message.channel.send(embed7);

        let member = message.mentions.members.first();
        if(!member) return message.channel.send(xdemb)
        if(!member.bannable) return message.channel.send(embedv)
        if(member.user.id === "411603739582005270") return message.channel.send(embedx)

        if(member.id === message.author.id) return message.channel.send(embed8)
        let messageArray1 = message.content.split(" ");
    let command = messageArray1[0];
    let args1 = messageArray1.slice(1);
        let reason = args1.slice(1).join(" ");

        if(!reason) {
            res = "No reason given";
        } else {
            res = reason
        }

        await member.ban(reason)

        let bean = new Discord.RichEmbed()
        .setColor("#00ff00")
        .setTitle(`Ban | ${member.user.tag}`)
        .addField("User", member, true)
        .addField("Moderator", message.author, true)
        .addField("Reason", res)
        .setTimestamp()

        message.channel.send(bean)
  

}


module.exports.config = {
    command: "ban"
}