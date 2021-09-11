const { Random } = require("something-random-on-discord")

module.exports = {
  name: "pat",
  category: "fun",
  usage: "pat",

  description: "aww , here *pat pat*",
  run: async (client, message, args) => {

    let data = await Random.getAnimeImgURL("pat")
    message.channel.send(data)

  }
}