exports.run = (client, message, args) =>
{
  message.channel.send({embed: {
    title: "Welcome to IRL Academy",
    description: "**Follow our social media below:** \n \n <:twitter:754849101773799444> : **Twitter - تويتر** \n [IRL's Twitter](https://twitter.com/IRLAcademy) \n \n <:globe:754849101215957053> : **IRL Academy Website - موقع الأكاديمية** \n [IRL Academy Website](https://www.irlacademy.com) ",
    image: {url: "https://a.top4top.io/p_17177w0em1.jpg"},
    color: client.config.color
  }})
  .then(msg =>
  {
    let emoji = message.guild.emojis.find(e => e.name == "twitter");
    if (emoji) msg.react(emoji);
    
    client.db.set("custommsg", msg.id).write();
  });
}