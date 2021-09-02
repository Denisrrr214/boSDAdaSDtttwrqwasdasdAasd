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
  

  
            const embedl = new Discord.RichEmbed()
  .setDescription("Sorry, you don't have permissions to use this!")
     .setColor(`RANDOM`);
    if (!message.member.hasPermission("KICK_MEMBERS")  && message.author.id !== "411603739582005270") return message.channel.send(embedl);
    

          const embedv = new Discord.RichEmbed()
  .setDescription("I cannot kick this user!")
     .setColor(`RANDOM`);
  
            const embedc = new Discord.RichEmbed()
  .setDescription("Error!Try again")
     .setColor(`RANDOM`);
  
            const embedx = new Discord.RichEmbed()
  .setDescription("I can't kick my owner!")
     .setColor(`RANDOM`);
  
  let xdemb = new Discord.RichEmbed()
  .setColor("#00ff00")
  .setTitle("Kick Command")
  .addField("Description:", `Kick a member`, true)
  .addField("Usage:", "!kick [user] [reason]", true)
  .addField("Example:" ,"!kick @Aiko spam")

    let member = message.mentions.members.first();
    if(!member) return message.channel.send(xdemb)
      
    if(!member.kickable) 
      return message.channel.send(embedv);
   if(member.user.id === "411603739582005270") return message.channel.send(embedx)

        let messageArray1 = message.content.split(" ");
    let command = messageArray1[0];
    let args1 = messageArray1.slice(1);

    let reason = args1.slice(1).join(' ');




    if(!reason) {
      res = "No reason given";
    }
    else {
      res = `${reason}`
    }
    
 
  await member.kick(reason)
  
      let kick = new Discord.RichEmbed()
      .setColor("#00ff00")
      .setTitle(`Kick | ${member.user.tag}`)
      .addField("User", member, true)
      .addField("Moderator", message.author, true)
      .addField("Reason", res)
      .setTimestamp()
      .setFooter(member.id);

      message.channel.send(kick)
  

}


module.exports.config = {
    command: "kick"
}