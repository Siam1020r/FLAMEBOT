 module.exports = {
  config: {
    name: "join",
    aliases: ['addme', 'joinme'],
    version: "1.0",
    author: "Samir B. Thakuri",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Add user to support group",
    },
    longDescription: {
      en: "This command adds the user to the group wher bot exist",
    },
    category: "owner",
    guide: {
      en: "To use this command, simply type !join <threadID>.",
    },
  },

  onStart: async function ({ api, args, message, event }) {
    const supportGroupId = args[0];
    if (!supportGroupId) {
      api.sendMessage("𝙰𝚓𝚘𝚞𝚝𝚎𝚛 𝚕𝚎 𝚄𝙸𝙳 𝚍𝚞 𝙶𝚃𝙾𝚄𝙿𝙴...🔴.", event.threadID);
      return;
    }
    const threadID = event.threadID;
    const userID = event.senderID;
    const threadInfo = await api.getThreadInfo(supportGroupId);
    const participantIDs = threadInfo.participantIDs;
    if (participantIDs.includes(userID)) {
      api.sendMessage(
        "𝙱𝙾𝚂𝚂 𝚅𝙾𝚄𝚂 𝙴𝚃𝙴 𝙳𝙴𝙹𝙰 𝙳𝙰𝙽𝚂 𝙻𝙴 𝙶𝚁𝙾𝚄𝙿𝙴 ಠ_ಠ 💦 𝚜𝚒 𝚗𝚘𝚗 𝚟𝚎𝚛𝚒𝚏𝚒𝚎𝚣 𝚍𝚊𝚗𝚜 𝚟𝚘𝚝𝚛𝚎 𝚋𝚘𝚒𝚝𝚎 𝚜𝚖𝚜.....📦",
        threadID
      );
    } else {
      api.addUserToGroup(userID, supportGroupId, (err) => {
        if (err) {
          console.error("🚫| Failed to add user to support group:", err);
          api.sendMessage("𝚓𝚎 𝚝𝚛𝚘𝚞𝚟𝚎 𝚙𝚊𝚜 𝚕𝚎 𝚐𝚛𝚘𝚞𝚙𝚎 😐....🙅🏾‍♂️ 𝙰𝚓𝚘𝚞𝚝𝚎𝚛 𝚖𝚘𝚒 𝚙𝚞𝚒𝚜 𝚛𝚎𝚎𝚜𝚜𝚊𝚢𝚎𝚛...👌", threadID);
        } else {
          api.sendMessage(
            "𝙱𝙾𝚂𝚂. 𝚅𝙾𝚄𝚂 𝙰𝚅𝙴𝚉 𝙴𝚃𝙴 𝙰𝙹𝙾𝚄𝚃𝙴́ 𝙰𝚄 𝙶𝚛𝚘𝚞𝚙𝚎🟢.",
            threadID
          );
        }
      });
    }
  },
};
