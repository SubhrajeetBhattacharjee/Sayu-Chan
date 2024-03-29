const db = require("quick.db")
const { addexp } = require("../handlers/xp.js");
const { ownerID, default_prefix } = require("../config.json");

let cooldown = {}

module.exports.run = async (client, message) => {
  if (message.author.bot || !message.guild) return;
  addexp(message); //Add XP to the user profile


  let prefix = db.get(`prefix_${message.guild.id}`);
  if (prefix === null) prefix = default_prefix;
  if (!message.content.startsWith(prefix)) return;
  if (!message.member) message.member = await message.guild.members.fetch(message);

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;
  let cmdx = db.get(`cmd_${message.guild.id}`)
  if (cmdx) {
    let cmdy = cmdx.find(x => x.name === cmd)
    if (cmdy) message.channel.send(cmdy.responce)
  }

  let command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (!command) return;

   /* P E R M I S S I O N S */
  if (command.botPermission) {
    const Permissions = command.botPermission.filter(x => !message.guild.me.permissions.has(x)).map(x => "`" + x + "`")
    if (Permissions.length) return message.channel.send(`I need ${Permissions.join(", ")} permission(s) to execute the command!`)
  } 
  
  if (command.authorPermission) {
    const Permissions = command.authorPermission.filter(x => !message.member.permissions.has(x)).map(x => "`" + x + "`")
    if (Permissions.length) return message.channel.send(`You need ${Permissions.join(", ")} permission(s) to execute this command!`)
  }

  /* O W N E R */
  if (command.ownerOnly) {
    if (message.author.id !== ownerID) return message.channel.send("This command can only be use by owner :C")
  }

  /* C O O L - D O W N */
  let uCooldown = cooldown[message.author.id];
  if (!uCooldown) {
    cooldown[message.author.id] = {}
    uCooldown = cooldown[message.author.id]
  }

  let time = uCooldown[command.name] || 0
  if (time && (time > Date.now())) return message.channel.send(`You can again use this command in ${Math.ceil((time - Date.now()) / 1000)} second(s)`) 
  cooldown[message.author.id][command.name] = Date.now() + command.cooldown;

  if (command) command.run(client, message, args);
}


//-------------------------------------------- F U N C T I O N ------------------------------------------





module.exports.run = async (client, message) => {
  if (message.author.bot || !message.guild) return;
  addexp(message); //Add XP to the user profile



  let prefix = db.get(`prefix_${message.guild.id}`);
  if (prefix === null) prefix = default_prefix;
  if (!message.content.startsWith(prefix)) return;
  if (!message.member) message.member = await message.guild.members.fetch(message);

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;
  let cmdx = db.get(`cmd_${message.guild.id}`)
  if (cmdx) {
    let cmdy = cmdx.find(x => x.name === cmd)
    if (cmdy) message.channel.send(cmdy.responce)
  }

  let command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (!command) return;

   /* P E R M I S S I O N S */
  if (command.botPermission) {
    const Permissions = command.botPermission.filter(x => !message.guild.me.permissions.has(x)).map(x => "`" + x + "`")
    if (Permissions.length) return message.channel.send(`I need ${Permissions.join(", ")} permission(s) to execute the command!`)
  } 
  
  if (command.authorPermission) {
    const Permissions = command.authorPermission.filter(x => !message.member.permissions.has(x)).map(x => "`" + x + "`")
    if (Permissions.length) return message.channel.send(`You need ${Permissions.join(", ")} permission(s) to execute this command!`)
  }

  /* O W N E R */
  if (command.ownerOnly) {
    if (message.author.id !== ownerID) return message.channel.send("This command can only be use by owner :C")
  }

  /* C O O L - D O W N */
  let uCooldown = cooldown[message.author.id];
  if (!uCooldown) {
    cooldown[message.author.id] = {}
    uCooldown = cooldown[message.author.id]
  }

  let time = uCooldown[command.name] || 0
  if (time && (time > Date.now())) return message.channel.send(`You can again use this command in ${Math.ceil((time - Date.now()) / 1000)} second(s)`) 
  cooldown[message.author.id][command.name] = Date.now() + command.cooldown;

  if (command) command.run(client, message, args);
}


//-------------------------------------------- F U N C T I O N ------------------------------------------
