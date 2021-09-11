/**
 * Required package
 */
const { Random } = require("something-random-on-discord")


module.exports = {
  name: "advice",
  category: "fun",
  usage: "advice",
  description: "Get Fresh Advice :D",
  run: async (client, message, args) => {

    let data = await Random.getAdvice()
    message.channel.send({ embeds: [data.embed] })

  }
}
