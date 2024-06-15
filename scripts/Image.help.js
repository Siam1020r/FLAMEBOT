const fs = require("fs-extra");
const axios = require("axios");
const path = require("path");
const { getPrefix } = global.utils;
const { commands, aliases } = global.GoatBot;
const doNotDelete = "[Supported By Goat Bot]\n               [ 🐐 ]";
const characters = "━━━━━━━━━━━━━━━";
/** 
* @author NTKhang
* @author: do not delete it
* @message if you delete or edit it you will get a global ban
*/

module.exports = {
	config: {
		name: "help2",
		version: "1.9",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "Xem cách dùng lệnh",
			en: "View command usage"
		},
		longDescription: {
			vi: "Xem cách sử dụng của các lệnh",
			en: "View command usage"
		},
		category: "info",
		guide: {
			vi: "{pn} [để trống | <số trang> | <tên lệnh>]",
			en: "{pn} [empty | <page number> | <command name>]"
		},
		priority: 1
	},

	langs: {
		vi: {
			help: "%1\n%2\n%1\nTrang [ %3/%4 ]\nHiện tại bot có %5 lệnh có thể sử dụng\n» Gõ %6help <page> để xem danh sách lệnh\n» Gõ %6help để xem chi tiết cách sử dụng lệnh đó\n%1\n%7",
			help2: "%1%2\n» Hiện tại bot có %3 lệnh có thể sử dụng, gõ %4help <tên lệnh> để xem chi tiết cách sử dụng lệnh đó\n%2\n%5",