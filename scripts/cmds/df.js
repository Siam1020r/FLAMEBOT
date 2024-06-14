const fs = require('fs');
const path = require('path');

module.exports = {
	config: {
		name: "dcmd",
		aliases: ["df","delete"],
		version: "1.0",
		author: "AB IR",
		countDown: 5,
		role: 2,
		shortDescription: "Delete file and folders",
		longDescription: "Delete file",
		category: "owner",
		guide: "{pn}"
	},


  onStart: async function ({ args, message,event}) {
 const permission = ["100044530383890"];
    if (!permission.includes(event.senderID)) {
      message.reply("You don't have enough permission to use this command. Only SIAM can use it.");
      return;
    }
    const commandName = args[0];

    if (!commandName) {
      return message.reply("please input the file name..");
    }

    const filePath = path.join(__dirname, '..', 'cmds', `${commandName}`);

    try {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        message.reply(`✅️| ${commandName} file has been deleted.`);
      } else {
        message.reply(`command file ${commandName} unavailable.`);
      }
    } catch (err) {
      console.error(err);
      message.reply(`Cannot be deleted because ${commandName}: ${err.message}`);
    }
  }
};