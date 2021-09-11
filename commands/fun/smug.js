const { Random } = require("something-random-on-discord")

module.exports = {
  name: "smug",
  category: "fun",
  usage: "slap",

  description: "Who made you smile like that boi ^-^",
  run: async (client, message, args) => {

    let data = await Random.getAnimeImgURL("smug")
    message.channel.send(data)

  }
}