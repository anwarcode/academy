exports.run = (client, message, args) =>
{
  message.channel.send({embed: {
    title: "__**IRL Server Rules - قواعد السيرفر**__",
    thumbnail: {url: "https://f.top4top.io/p_1717d7is91.png"},
    description: "**(1) Respect** \n `-` Be respectful. Hate-speech, racism, sexual harassment, personal attacks, threats, impersonation, abuse or trolling to the point that people feel uncomfortable is not allowed. \n \n **(2) Spam** \n `-` This means do not send the same message over and over again or make emote chains. \n \n **(3) Chat** \n `-` Sending/Linking any harmful material such as viruses, IP grabbers or harmware results in an immediate and permanent ban also Use proper grammar and spelling and don't spam. \n \n **(4) Channels** \n `-` Act civil in Voice Chat, Post content in the correct channels & Dont beg for roles. \n \n **(5) Respect Staff** \n  `-` Listen to what Staff says & Mentioning the Moderators without proper reason is prohibited \n \n **الاحترام (1)** \n `-` كن محترما. لا يُسمح بالكلام الذي يحض على الكراهية أو العنصرية أو التحرش الجنسي أو الهجمات الشخصية أو التهديدات أو انتحال الهوية أو إساءة المعاملة أو التصيد لدرجة أن الناس يشعرون بعدم الارتياح. \n \n **(2) السبام** \n `-` هذا يعني عدم إرسال نفس الرسالة مرارًا وتكرارًا أو إنشاء سلاسل من الإيموتات. \n \n **(3) الشات العام** \n `-` ينتج عن إرسال أي روابط ضارة مثل الفيروسات أو برامج التقاط IP أو البرامج الغير أمنة حظرًا فوريًا ودائمًا أيضًا يستحسن استخدم كلمات صحيحة وعدم إرسال رسائل غير مرغوب فيها و أيضا نشر سيرفرات ديسكورد.. \n \n **(4) الرومات** \n `-` تصرف بطريقة مدنية في الدردشة الصوتية ، وانشر المحتوى الخاص بك في القنوات الصحيحة ولا ممنوع طلب الرتب. \n \n **(5) احترام المشرفين** \n `-` استمع إلى ما يقوله المشرفين وممنوع منشن للأعضاء أو المشرفين دون سبب وجيه",
    color: client.config.color
  }})
  .then(msg =>
  {
    let emoji = message.guild.emojis.find(e => e.name == "saqr");
    if (emoji) msg.react(emoji);
    
    client.db.set("welcomemsg", msg.id).write();
  });
}