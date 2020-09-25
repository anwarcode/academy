exports.run = function (client)
{
  client.on("messageReactionAdd", (r, u) =>                 
  {
        
    if (u.bot) return;
        
    if (r.message.id == client.db.get("reactionmsg").value())
    {
      try{}
      catch (err) { console.log(err); }
    }
    
    // Discord Link
    if (r.message.id == client.db.get("custommsg").value())
    {
    
      try {}
      
      catch (err) { console.log(err); }
    }
    
    // Welcome new members
    if (r.message.id == client.db.get("welcomemsg").value())
    {
      
      try { }
      catch (err) { console.log(err); }
    }
  });

  client.on("messageReactionRemove", (r, u) => 
  {
    if (r.message.id == client.db.get("reactionmsg").value())
    {
  
      try { }
      catch (err) { console.log(err); }
    }
    
    // Custom Games
    if (r.message.id == client.db.get("custommsg").value())
    {
      
      try {}
      
      catch (err) { console.log(err); }
    }
  });

  // check for unloaded messages aswell
  client.on('raw', packet => {
    if (!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(packet.t)) return;
    const channel = client.channels.get(packet.d.channel_id);
    if (channel.messages.has(packet.d.message_id)) return;
    channel.fetchMessage(packet.d.message_id).then(message => {
      const emoji = packet.d.emoji.id ? `${packet.d.emoji.name}:${packet.d.emoji.id}` : packet.d.emoji.name;
      const reaction = message.reactions.get(emoji);
      if (packet.t === 'MESSAGE_REACTION_ADD') { client.emit('messageReactionAdd', reaction, client.users.get(packet.d.user_id)); }
      if (packet.t === 'MESSAGE_REACTION_REMOVE') { client.emit('messageReactionRemove', reaction, client.users.get(packet.d.user_id)); }
    });
  });
}