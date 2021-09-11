const { Random } = require("something-random-on-discord")

module.exports = {
  name: "kiss",
  category: "fun",
  usage: "kiss",

  description: "kiss your partner :)",
  run: async (client, message, args) => {

    let data = await Random.getAnimeImgURL("kiss")
    message.channel.send(data)

  }
}