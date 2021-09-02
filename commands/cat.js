module.exports.run = async (bot, message, args) => {
    
    const Discord   = require('discord.js');
    const fs        = require('fs');
  const request = require('request'); 

    //Code Start
      if (message.channel.type == "dm") return;
          request('http://edgecats.net/random', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                    let emb = new Discord.RichEmbed()
                    .setImage(body)
                    .setColor("#00ff00")
                    .setTitle("Love :heart:")
                              
                   message.channel.send(emb)  
            }
        });
  

  


    //Code End

}

module.exports.config = {
    command: "cat"
}