exports.run = (client, message, args) =>
  {
    let msg = args.join(" ");

    client.user.setActivity("NK LIVE", {type: 'STREAMING', url : '"'+msg+'"'}).catch(console.error);

    message.channel.send(msg);
}