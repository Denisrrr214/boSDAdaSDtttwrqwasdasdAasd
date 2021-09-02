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
            let messageArray1 = message.content.split(" ");
    let command = messageArray1[0];
    let args1 = messageArray1.slice(1);
      const sayMessage = args1.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);

  

}


module.exports.config = {
    command: "say"
}