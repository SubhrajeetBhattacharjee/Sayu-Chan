const { Random } = require("something-random-on-discord")

module.exports = {
  name: "punch",
  category: "fun",
  usage: "punch",

  description: "Become virtual Mike Tyson",
  run: async (client, message, args) => {

    let data = await Random.getAnimeImgURL("punch")
    message.channel.send('GET REKT !')
    message.channel.send(data)

  }
}