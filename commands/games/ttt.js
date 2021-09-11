const Discord = module.require("discord.js");
const simplydjs = require("simply-djs")
category:"games",

module.exports = {
  name: "ttt",
  description: "Tic Tac Toe in discord!",
  category:"games",
  run: async (client, message, args) => {
    simplydjs.tictactoe(message)
  },
};