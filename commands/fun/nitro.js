const Discord = module.require("discord.js");

module.exports = {
  name: "nitro",
  description: "Fake a nitro gift",
  category:"fun",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    var links = [
      `https://dis.cord.gifts/c/zGnzr2N6cRYtYUlF`,
      `https://discordgift.site/EjZpOZQZuiyHx9EQ`,
      `https://discordgift.site/c/cEFnfFknrBgpLMMd`,
      `https://discordgift.site/c/cEFnfFknrBgpLMMd`,
      
    ];
    var images = [
      `https://cdn.discordapp.com/attachments/716917641209708647/748945266979242106/IMG_20200828_215650.jpg`,
      `https://cdn.discordapp.com/attachments/716917641209708647/748945228907413675/IMG_20200828_220208.jpg`,
    ];
    const embed = new Discord.MessageEmbed()
      .setTitle("Here is your Nitro")
      .setDescription(links[Math.floor(Math.random() * links.length)])
      .setImage(images[Math.floor(Math.random() * images.length)])
      .setColor("RANDOM");
    message.channel.send({ embeds: [embed] });
  },
};