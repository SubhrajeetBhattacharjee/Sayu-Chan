const { token } = require("./config.json");
const { Intents, Client, Collection } = require("discord.js"); 
const mongoose = require('mongoose');
const client = new Client({
  disableEveryone: true ,
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES]
});
mongoose.connect('mongodb+srv://Subhrajeet:slok3188@discordbot.grgnl.mongodb.net/test' , {useNewUrlParser: true, useUnifiedTopology: true})

client.commands = new Collection();
client.aliases = new Collection();

["command", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});


client.login(token);
/*mongodb+srv://Subhrajeet:<password>@discordbot.grgnl.mongodb.net/test*/