const db = require("quick.db")

module.exports.run = (client) => {
  console.log("Sayu Chan is online" )
  client.user.setActivity(db.get(`status`) || "No Status :D"); 
}