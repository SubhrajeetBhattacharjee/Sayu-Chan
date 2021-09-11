const { Random } = require("something-random-on-discord")

module.exports = {
  name: "cry",
  category: "fun",
  usage: "cry",

  description: "Cry through Gifs ;-;",
  run: async (client, message, args) => {

    let data = await Random.getAnimeImgURL("cry")
    message.channel.send(data)

  }
}
