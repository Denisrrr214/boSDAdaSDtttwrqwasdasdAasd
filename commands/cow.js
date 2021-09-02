module.exports.run = async (bot, message, args) => {
    
    const Discord   = require('discord.js');
    const fs        = require('fs');
  const snekfetch = require('snekfetch');
  const cows = require('cows');
const rn = require('random-number');

    //Code Start
      if (message.channel.type == "dm") return;
  
    const options = {
        min: 0,
        max: cows().length - 1,
        integer: true
    };
    const random = rn(options);
    message.channel.send(cows()[random], { code: ''});

  

  


    //Code End

}

module.exports.config = {
    command: "cow"
}