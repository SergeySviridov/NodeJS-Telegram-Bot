const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token='569418321:AAHUpVyk0Gex6myrTDqjpXKuTtGMrWfA-Rw';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});


/*
var notes=[];
var notes[0]={'111','18:12','УРА ! '};
bot.onText(/\/напомни (.+) в (.+)/,function(msg,match){
		var userId=msg.from.id;
		var text=match[1];
		var time=match[2];
		notes.push({'uid':userId,'time':time,'text':text});
		bot.sendMessage(userId,'Отлично! Я обязательно напомню, если не сдохну :)');});
setInterval(function(){
	for(var i=0;i<notes.length;i++){
		var curDate=new Date().getHours()+':'+new Date().getMinutes();
		if(notes[i]['time']==curDate){bot.sendMessage(notes[i]['uid'],'Напоминаю, что вы должны: '+notes[i]['text']+' сейчас.');
		notes.splice(i,1);}
	}
},1000);
*/
