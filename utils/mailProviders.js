const mailProviders = [
  // "почтовый домен", "название почтового сервиса","адрес для входа в почту"
  "yandex.com",
  "Yandex.Mail",
  "https://mail.yandex.com/",
  "gmail.com",
  "Gmail",
  "https://mail.google.com/",
  "googlemail.com",
  "Gmail",
  "https://mail.google.com/",
  "outlook.com",
  "Outlook.com",
  "https://mail.live.com/",
  "hotmail.com",
  "Outlook.com (Hotmail)",
  "https://mail.live.com/",
  "live.com",
  "Outlook.com (live.com)",
  "https://mail.live.com/",
  "me.com",
  "iCloud Mail",
  "https://www.icloud.com/",
  "icloud.com",
  "iCloud Mail",
  "https://www.icloud.com/",
  "yahoo.com",
  "Yahoo! Mail",
  "https://mail.yahoo.com/"
];

const mailProviderObjects = mailProviders.reduce((final, cur, index) => {
  if (index % 3 === 0) {
    final.push({});
    final[final.length - 1].host = cur;
  } else if (index % 3 === 1) {
    final[final.length - 1].name = cur;
  } else {
    final[final.length - 1].href = cur;
  }
  return final;
}, []);

export default email => {
  const [, host] = email.split("@");
  const provider = mailProviderObjects.find(prov => prov.host.includes(host));
  return provider;
};
