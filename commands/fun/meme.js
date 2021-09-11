const { Random } = require("something-random-on-discord")

module.exports = {
  name: "meme",
  category: "fun",
  usage: "meme",

  description: "See some memes and enjoi",
  run: async (client, message, args) => {

    let data = await Random.getMeme()
    message.channel.send({embeds: [data.embed]})

  }
}



