exports.run = (client, message, args) =>
{
  let name = args.join(" ");
  let ch1 = message.guild.channels.find(channel => channel.name === "[Q] Queue");
  let ch2 = message.member.voiceChannel;
  
  if (!ch2) return message.channel.send("You aren't in a voice channel!");
  
 // ch1.members.forEach(m => m.setVoiceChannel(ch2));

   ch1.members.random().setVoiceChannel(ch2);
	ch1.members.random().setVoiceChannel(ch2);
  message.channel.send("All members moved from `" + ch1.name + "` to `" + ch2.name + "`");
}