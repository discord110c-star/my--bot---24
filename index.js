const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
    host: 'blackfish.aternos.host', 
    port: 23397,
    username: 'Guard_Bot',
    auth: 'offline',
    checkTimeoutInterval: 60000
});

bot.on('spawn', () => {
    console.log('Bot is IN THE SERVER!');
    setInterval(() => {
        bot.swingArm('right');
    }, 10000);
});

bot.on('error', (err) => {
    console.log('Error:', err.message);
});

bot.on('end', () => {
    console.log('Disconnected... reconnecting');
});
