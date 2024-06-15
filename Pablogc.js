const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
  config: {
    name: "support",
    aliases: ["supportgc"],
    version: "1.0",
    author: "AceGun",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "",
      en: "add user in thread"
    },
    longDescription: {
      vi: "",
      en: "add any user to bot owner group chat"
    },
    category: "GroupMsg",
    guide: {
      en: "{pn}lordgc"
    }
  },

  onStart: async function ({ api, event, args }) {
    const threadID = "69696996969696";
    try {
      // Check if the user is already in the group chat
      const threadInfo = await api.getThreadInfo(threadID);
      const participants = threadInfo.participantIDs;

      if (participants.includes(event.senderID)) {
        api.sendMessage("Check your spam box", event.threadID);

        // Set ⚠ reaction for already added user
        api.setMessageReaction("⚠", event.messageID, "🥷", api);
      } else {
        // If not, add the user to the group chat
        await api.addUserToGroup(event.senderID, threadID);
        api.sendMessage("", event.threadID);

        // Set 👌🏽 reaction for successfully added user
        api.setMessageReaction("✅", api);
      }
    } catch (error) {
      api.sendMessage("🙅🏾", event.threadID);

      // Set 🙍🏾 reaction for failed adding user
      api.setMessageReaction("💀", event.messageID, "👍", api);
    }
  }
}
