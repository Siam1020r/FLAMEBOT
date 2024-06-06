module.exports = {
    config: {
        name: "🥷",
        version: "1.0",
        author: "ᏋᎷᎮᏋᏒᏋᏬᏒ ᏕᎤᎥᎴ",
        countDown: 5,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
    onStart: async function(){}, 
    onChat: async function({
        event,
        message,
        getLang
    }) {
        if (event.body && event.body.toLowerCase() == "🥷") return message.reply("𝐉𝐞 𝐬𝐮𝐢𝐬 𝐥𝐞 𝐬𝐞𝐮𝐥𝐞 𝐧𝐢𝐧𝐣𝐚 𝐢𝐜𝐢 𝐜𝐨𝐦𝐩𝐫𝐢𝐞 (ง'̀-'́)ง✫ 𝐚𝐥𝐨𝐫𝐬 𝐚𝐫𝐫𝐞̂𝐭 𝐝𝐞 𝐦𝐞 𝐜𝐨𝐩𝐢𝐞́  ಠ_ಠ ");
    }
    }
