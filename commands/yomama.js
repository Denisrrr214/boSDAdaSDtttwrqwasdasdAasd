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
          const yoMamma = require('yo-mamma').default;
          const insult = yoMamma();

   const embed = new Discord.RichEmbed()
   .setDescription(insult)
   .setColor(`RANDOM`);
    message.channel.send(embed)
  

}


module.exports.config = {
    command: "yomamma"
}