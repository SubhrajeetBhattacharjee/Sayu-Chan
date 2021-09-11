const { Random } = require("something-random-on-discord")

module.exports = {
  name: "slap",
  category: "fun",
  usage: "slap",

  description: "Slap them hard",
  run: async (client, message, args) => {

    let data = await Random.getAnimeImgURL("slap")
    message.channel.send(data)

  }
}