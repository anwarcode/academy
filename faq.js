exports.run = (client, message, args) =>
{
  message.channel.send({embed: {
    title: "Frequently Asked Questions - الأسئلة الشائعة",
    description: "**(1) How to join TEAM SAQR ?** \n You should contact our HEAD PR Wrath on twitter : \n [Wrath's Twitter](https://twitter.com/Wrath_FN) \n \n **(2) How to enter TEAM SAQR's Giveaways** \n For more informations about Ramadan Giveaways check NK's twitch stream below : \n [NK's stream](https://www.twitch.tv/saqr_nk) \n \n **(1) كيف أقدر أدخل تيم صقر ؟** \n تواصل مع وراث المشرف حق التيم على اتويتر : \n [وراث تويتر](https://twitter.com/Wrath_FN) \n \n **(2) كيف أقدر أدخل مسابقات تيم صقر ؟** \n للمزيد من المعلومات حول المسابقات و الجوائز أدخل البث حق إنكي من الرابط إسفله : \n [بث NK](https://www.twitch.tv/saqr_nk) \n \n <:site:708520584937734204> - **[https://www.teamsaqr.com/](https://www.teamsaqr.com/)** \n \n <:insta:708521302214049843> - **[https://www.instagram.com/saqr/](https://www.instagram.com/saqrstore/)** \n \n <:twitter:708520586611130398> - **[https://twitter.com/TeamSAQR](https://twitter.com/TeamSAQR)**",
    image: {url: "https://d.top4top.io/p_1589wni881.png"},
    footer: {text: "#SAQRONTOP"},
    color: client.config.color
  }})
  
}