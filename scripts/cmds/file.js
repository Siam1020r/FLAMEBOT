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
      return api.sendMessage("༺🖕(°ㅂ° ╬)🖕|𝐓𝐮 𝐧'𝐞𝐬 𝐩𝐚𝐬⚜️ᏋᎷᎮᏋᏒᏋᏬᏒ ᏕᎤᎥᎴ⚜️𝐝𝐞𝐠𝐚𝐠𝐞😷𝐜𝐨𝐧𝐧𝐚𝐫𝐝𝐬༻  ", event.threadID, event.messageID);
    }
    
    const fileName = args[0];
    if (!fileName) {
      return api.sendMessage("𝐕𝐨𝐮𝐬 𝐚𝐯𝐞𝐳 𝐛𝐞𝐬𝐨𝐢𝐧𝐬 𝐝𝐞 𝐪𝐮𝐞𝐥 𝐟𝐢𝐜𝐡𝐢𝐞𝐫?༺𝐁𝐎𝐒𝐒༻? ಠωಠ.", event.threadID, event.messageID);
    }

    const filePath = __dirname + `/${fileName}.js`;
    if (!fs.existsSync(filePath)) {
      return api.sendMessage(`✍︎𝐉'𝐚𝐢 𝐩𝐚𝐬 𝐜̧𝐚 [⚠︎]: ${fileName}.js`, event.threadID, event.messageID);
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    api.sendMessage({ body: fileContent }, event.threadID);
  }
};
