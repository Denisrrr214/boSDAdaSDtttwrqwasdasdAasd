module.exports.run = async (bot, message, args) => {
    
    const Discord   = require('discord.js');
    const fs        = require('fs');
  const snekfetch = require('snekfetch');

    //Code Start
      if (message.channel.type == "dm") return;
      const { body } = await snekfetch.get('https://random.dog/woof.json');
    const embed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setImage(body.url)
        .setTitle("Boop my nose :heart:");

    message.channel.send(embed)
  

  


    //Code End

}

module.exports.config = {
    command: "dog"
}