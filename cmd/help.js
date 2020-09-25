exports.run = (client, message, args) =>
{
  const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
    .setAuthor("IRL Academy Help Menu")
    .setThumbnail(client.user.avatarURL)
    .setColor(client.config.color)
    .setDescription("Here's my list of commands!");
  
  const cmds =
  [
    [
      "Developer",
      "eval",
      "ping"
    ],
    [
      "Admin",
      "dm <message>",
      "help",
      "pin [<#channel>] <message>",
      "ping",
      "rules",
      "say <message>",
      "social",
      
    ]
  ];
  
  for (let i = 0; i < cmds.length; i++)
  {
    embed.addField(cmds[i].shift(), join(cmds[i]));
  }
  
  message.channel.send(embed);
}

function join(array)
{
  let msg = "";
  for (let i = 0; i < array.length; i++) msg += "- `!irl " + array[i] + "`\n";
  return msg;
}