/* The bot of Justice Module exports.

THIS IS BASICALLY THE SYSTEM OF THE BOT. */

function sendWithEditStyle(message, string) {
	message.channel.send(string.charAt(0)).then(function(message) { 
		for (var i = 1; i < string.length; i++) {
			message.edit(string.substr(0, i + 1));
		}
	});
}

function sendInEmbed(chnl, string, color) {
	plainEmbed = new Discord.MessageEmbed()
		.setColor(color)
		.setDescription(string)
	
	chnl.send(plainEmbed);
}

function sendWithReact(msg, string) {
	for (var i = 0; i < string.length; i++) {
		if (string.charAt(i).toLowerCase() == "a") msg.react("🇦");
		if (string.charAt(i).toLowerCase() == "b") msg.react("🇧");
		if (string.charAt(i).toLowerCase() == "c") msg.react("🇨");
		if (string.charAt(i).toLowerCase() == "d") msg.react("🇩");
		if (string.charAt(i).toLowerCase() == "e") msg.react("🇪");
		if (string.charAt(i).toLowerCase() == "f") msg.react("🇫");
		if (string.charAt(i).toLowerCase() == "g") msg.react("🇬");
		if (string.charAt(i).toLowerCase() == "h") msg.react("🇭");
		if (string.charAt(i).toLowerCase() == "i") msg.react("🇮");
		if (string.charAt(i).toLowerCase() == "j") msg.react("🇯");
		if (string.charAt(i).toLowerCase() == "k") msg.react("🇰");
		if (string.charAt(i).toLowerCase() == "l") msg.react("🇱");
		if (string.charAt(i).toLowerCase() == "m") msg.react("🇲");
		if (string.charAt(i).toLowerCase() == "n") msg.react("🇳");
		if (string.charAt(i).toLowerCase() == "o") msg.react("🇴");
		if (string.charAt(i).toLowerCase() == "p") msg.react("🇵");
		if (string.charAt(i).toLowerCase() == "q") msg.react("🇶");
		if (string.charAt(i).toLowerCase() == "r") msg.react("🇷");
		if (string.charAt(i).toLowerCase() == "s") msg.react("🇸");
		if (string.charAt(i).toLowerCase() == "t") msg.react("🇹");
		if (string.charAt(i).toLowerCase() == "u") msg.react("🇺");
		if (string.charAt(i).toLowerCase() == "v") msg.react("🇻");
		if (string.charAt(i).toLowerCase() == "w") msg.react("🇼");
		if (string.charAt(i).toLowerCase() == "x") msg.react("🇽");
		if (string.charAt(i).toLowerCase() == "y") msg.react("🇾");
		if (string.charAt(i).toLowerCase() == "z") msg.react("🇿");
	}
}

module.exports {
	sendWithEditStyle: sendWithEditStyle,
	sendInEmbed, sendInEmbed
}
