const fs = require('fs');

module.exports = {
  config: {
    name: "file",
    version: "1.0",
    author: "ᏋᎷᎮᏋᏒᏋᏬᏒ ᏕᎤᎥᎴ",
    countDown: 5,
    role: 0,
    shortDescription: "Send bot script",
    longDescription: "Send bot specified file ",
    category: "owner",
    guide: "{pn} file name. Ex: .{pn} filename"
  },

  onStart: async function ({ message, args, api, event }) {
    const permission = ["61550814914251"];
    if (!permission.includes(event.senderID)) {
      return api.sendMessage("༺🖕(°ㅂ° ╬)🖕|𝘵𝘶 𝚗'𝚎𝚜 𝚙𝚊𝚜 ᏋᎷᎮᏋᏒᏋᏬᏒ ᏕᎤᎥᎴ✨ 𝙲𝚘𝚗𝚗𝚊𝚛𝚍😷𝚍𝚎́𝚐𝚊𝚐𝚎༻  ", event.threadID, event.messageID);
    }
    
    const fileName = args[0];
    if (!fileName) {
      return api.sendMessage("𝚟𝚘𝚞𝚜 𝚊𝚟𝚎𝚣 𝚋𝚎𝚜𝚘𝚒𝚗 𝚍𝚎 𝚚𝚞𝚎𝚕  𝚏𝚒𝚌𝚑𝚒𝚎𝚛 ?༺𝙱𝙾𝚂𝚂༻? ಠωಠ.", event.threadID, event.messageID);
    }

    const filePath = __dirname + `/${fileName}.js`;
    if (!fs.existsSync(filePath)) {
      return api.sendMessage(`💫𝔫𝔬𝔱 𝔣𝔬𝔲𝔫𝔡 [✖]: ${fileName}.js`, event.threadID, event.messageID);
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    api.sendMessage({ body: fileContent }, event.threadID);
  }
};
