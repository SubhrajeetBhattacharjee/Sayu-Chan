const { Random } = require("something-random-on-discord")
 
module.exports = {
  name: "neko",
   category: "fun",
   usage: "neko",
  
  description: "It's waifu time baby",
run: async (client, message, args) => {
  
    let data = await Random.getNeko()
    message.channel.send({embeds: [data.embed]})
  
}
}
