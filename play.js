exports.run = (client, message, args) =>
  {
    client.user.setActivity("!saqr help", {type: 'PLAYING'}).catch(console.error);

    message.channel.send("َActivity Changed Successfuly");
    message.delete();
}