const Discord = require('discord.js');
const fs = require('fs');

const prefix = "!!"
const talkedRecently = new Set();
let tokens = JSON.parse(fs.readFileSync('./tokens.js' , 'utf8'));

for (let i = 0; i < tokens.length; i++) {
  const client = new Discord.Client();
  //client.push('token', tokens[i]);
  client.login(tokens[i]);
client.on('ready', () => {
  console.log('I am ready!', client.user.tag);

});
}; 
