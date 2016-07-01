var discord = require("discord.js");

var bot = new discord.Client();

var commands = {

		"ping": {
				description: "responds pong, useful for checking if bot is alive",
				process: function(bot, message, suffix) {
					if(messsage.content === "!ping") {
						bot.sendMessage(message, "pong!");
						if(suffix){
							bot.sendMessage(msg.channel, "Note that !ping takes no arguments.");
						}
					}
				}

		}

}

bot.on("message", function(message) {

	var input = message.content.toUpperCase();

	/*if (message.content.includes("PING")) {

			bot.reply(message, "pong");

	}*/

	if (input === "HELLO") {

		bot.reply(message, "Hello!");

	}

	if (input === "HI") {

		bot.reply(message, "Hey there!");

	}

	if (input === "!TEST") {

		bot.reply(message, "test successful");

	}

	/*if (input === "!PING") {

		bot.sendMessage(message, "Pong!");

	}*/

	if (input === "!AYYLMAO") {

		bot.sendFile(message, "http://i.imgur.com/i6Ks73p.png");

	}

	if (input === "!COINFLIP") {

		var r = Math.floor((Math.random() * 2) + 1);
 		bot.sendMessage(message, (r == 1) ? "**Heads!**" : "**Tails!**");

	}


});
