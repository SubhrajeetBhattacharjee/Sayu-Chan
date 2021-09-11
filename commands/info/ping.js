module.exports = {
  name: "ping",
  aliases: ['p'],
  category: "info",
  description: "Get bot ping :/",
  usage: "ping",
  run: (client, message) => {
    message.channel.send({ content: `🏓 **Pong** , Am having a ping of ||${client.ws.ping}ms|| 😳`});
  }
  
}