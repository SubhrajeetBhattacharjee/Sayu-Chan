const Discord = module.require("discord.js");
const djsGames = require('djs-games')

module.exports = {
  name: "fasttype",
  description: "Type as fast as you can.",
  category:"games",
  run: async (client, message, args) => {
    const FastTyper = new djsGames.FastTyper()
    FastTyper.startGame(message)
  },};