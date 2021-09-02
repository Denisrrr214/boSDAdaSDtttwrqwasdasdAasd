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
    if(args[0] == "help"){
    let helpembxd = new Discord.RichEmbed()
    .setColor("#00ff00")
    .addField("Addrole Command", "Usage: !addrole <@user> <role>")

    message.channel.send(helpembxd);
    return;
  } 

  let xdemb = new Discord.RichEmbed()
  .setColor("#00ff00")
  .setTitle(`Addrole command`)
  .addField("Description:", "Add role to member", true)
  .addField("Usage", "!addrole [user] [role]", true)
  .addField("Example", "!addrole @Aiko Member")

  const embedc = new Discord.RichEmbed()
  .setDescription("You don't have premmsions to do that!")
     .setColor(`RANDOM`);
  
    const embedl = new Discord.RichEmbed()
  .setDescription("Specify a role!")
     .setColor(`RANDOM`);
  
      const embedp = new Discord.RichEmbed()
  .setDescription("This user already have that role.")
     .setColor(`RANDOM`);
  
        const embedv = new Discord.RichEmbed()
  .setDescription("Couldn't find that role.")
     .setColor(`RANDOM`);
 

  
  
  
  
  
  
  
  
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(embedc);
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send(xdemb);

  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send(embedl);
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send(embedv);

  if(rMember.roles.has(gRole.id)) return message.channel.send(embedp);
  await(rMember.addRole(gRole.id));
  
         const embed1 = new Discord.RichEmbed()
  .setDescription(`***I just gave ${rMember.user.username} the ${gRole.name} role!***`)
     .setColor(`RANDOM`);

    await message.channel.send(embed1)
  

}


module.exports.config = {
    command: "addrole"
}