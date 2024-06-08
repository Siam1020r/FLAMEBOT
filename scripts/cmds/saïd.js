module.exports = {
	config: {
		name: "Saïd",
		aliases: ["Said"],
		version: "1.0",
		author: "Saïd Z", // do not change this credits
		countDown: 5,
		role: 0,
		shortDescription: "send you pic of Saïd",
		longDescription: "sends u pic of Saïd",
		category: "meme",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {
	 var link = [ 
"https://i.ibb.co/8xmqs5T/image.jpg", "https://i.ibb.co/0n2k541/image.jpg",
"https://i.ibb.co/b2KF8FR/image.jpg",
"https://i.ibb.co/5Wyk7jw/image.jpg",
  ]
let img = link[Math.floor(Math.random()*link.length)]
message.send({
  body: '💦👑𝐄𝐌𝐏𝐄𝐑𝐄𝐔𝐑 𝐒𝐀𝐈̈𝐃👑💦',attachment: await global.utils.getStreamFromURL(img)
})
}
  }
