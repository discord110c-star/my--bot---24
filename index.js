const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
    host: 'blackfish.aternos.host', 
    port: 23397,
    username: 'BodyGuard', 
    auth: 'offline',
    checkTimeoutInterval: 90000,
    hideErrors: true
});

bot.on('spawn', () => {
    console.log('BOT IS IN THE SERVER NOW');
    setInterval(() => {
        bot.swingArm('right');
    }, 10000);
});

bot.on('error', (err) => {
    console.log('Error:', err.code);
});

bot.on('end', () => {
    console.log('Reconnecting...');
});
