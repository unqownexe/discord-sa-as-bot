var Discord = require('discord.js');
var client = new Discord.Client();
let kanalID = "770240027694202891"; //SES KANALI
let guildID = "678166659827105802" // SUNUCU ID
let kanaldlink = "https://unqown.codes" // SES KANALININ DAVET LINKI (SINIRSIZ)
let hayıremoji = "" // HAYIR EMOJİSİ \\ ÖRN: <:owo:749251684823334964>
client.on("message", async (message) => {
  if(!message.content == "sa" && !message.content.startsWith("sa ")) return
  if(!message.guild) return
  if(message.author.bot) return
  if(message.guild.id !== guildID) return
  let kanalad = client.channels.cache.get(kanalID).name
  let user = message.member

  if(user.voice.channelID == undefined || user.voice.channelID == null) return user.send(new Discord.MessageEmbed().addField(`${hayıremoji} Selamun Aleyküm, Ezan sistemini dinlemek için alttaki yönergeleri oku.`,`Susturmanı kaldır ve ${kanalad} kanalına katıl ya da [Tıkla](${kanaldlink})!`).setImage("https://cdn.discordapp.com/attachments/732129628407201883/759808060863807538/unknown.png").setColor("RANDOM"))
    if(user.voice.channel && user.selfDeaf == true){
      user.setVoiceChannel(null)
   client.channels.get(kanalID).leave();

return user.send(new Discord.MessageEmbed().addField(`${hayıremoji} Selamun Aleyküm, Ezan sistemini dinlemek için alttaki yönergeleri oku.`,`Susturmanı kaldır ve ${kanalad} kanalına katıl ya da [Tıkla](${kanaldlink})!`).setImage("https://cdn.discordapp.com/attachments/732129628407201883/759808060863807538/unknown.png").setColor("RANDOM"))
    }else if(user.voice.channel && user.voice.channelID == kanalID){

   const path = require("path")
  user.voice.channel.join().then(connection =>{
    const conn = connection.play(path.join(__dirname, "./Ses Dosyalari/ezan.mp3"))
    conn.on("end", end =>{
      user.voice.setChannel(null)
      user.voice.channel.leave()
      console.log("Ezan okundu")  
    })
  }).catch(err => console.log(err));

}else if(!user.voice.channel) return user.send(new Discord.MessageEmbed().addField(`${hayıremoji} Selamun Aleyküm, Ezan sistemini dinlemek için alttaki yönergeleri oku.`,`Susturmanı kaldır ve ${kanalad} kanalına katıl ya da [Tıkla](${kanaldlink})!`).setImage("https://cdn.discordapp.com/attachments/732129628407201883/759808060863807538/unknown.png").setColor("RANDOM"))
})
    client.on("ready", () => {
      console.log("-Aktif-")
    })

client.login('');
