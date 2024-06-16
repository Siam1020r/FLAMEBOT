const fs = require("fs");

module.exports = {
  config: {
    name: "approved",
    author: "Jun",
    countDown: 5,
    role: 0,
    category: "owner",
    shortDescription: {
      en: ""
    }
  },
  
  onLoad: async function() {
    const dataPath = __dirname + "/cache/approvedThreads.json";
    const pendingPath = __dirname + "/cache/pendingThreads.json";
    
    if (!fs.existsSync(dataPath)) {
      fs.writeFileSync(dataPath, JSON.stringify([]));
    }
    
    if (!fs.existsSync(pendingPath)) {
      fs.writeFileSync(pendingPath, JSON.stringify([]));
    }
  },
  
  onStart: async function({ event, api, args }) {
    const { threadID, messageID, senderID } = event;
    const dataPath = __dirname + "/cache/approvedThreads.json";
    const pendingPath = __dirname + "/cache/pendingThreads.json";
    let data = JSON.parse(fs.readFileSync(dataPath));
    let pending = JSON.parse(fs.readFileSync(pendingPath));
    let msg = "";
    let idBox = args[0] || threadID;
    
    if (args[0] == "list") {
      msg = "LIST OF APPROVED BOXES! ";
      let count = 0;
      
      for (const e of data) {
        msg += `${count += 1}. ID: ${e}`;
      }
      
      api.sendMessage(msg, threadID, messageID);
    } else if (args[0] == "del") {