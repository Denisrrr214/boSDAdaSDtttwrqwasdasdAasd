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
  
  const embedc = new Discord.RichEmbed()
  .setDescription("Plesae enter a full question with 2 or more words!")
     .setColor(`RANDOM`);
      if(!args[1]) return message.channel.send(embedc);
    let replies = ["Yes", "No", "I don't know", "Ask again later!", "Cyka", "I am not sure!", "Pls No", "You tell me", "Without a doubt", "Cannot predict now", "Without a doubt", ];

    let result = Math.floor((Math.random() * replies.length));
  
          let messageArray1 = message.content.split(" ");
    let command = messageArray1[0];
    let args1 = messageArray1.slice(1);


    let question = args1.join(" ");

    let ballembed = new Discord.RichEmbed()

    .setAuthor(message.author.username)
    .setColor("#00ff00")
    .addField("Question", question)
    .addField("Answer", replies[result]);

    message.channel.send(ballembed)
  

}


module.exports.config = {
    command: "8ball"
}