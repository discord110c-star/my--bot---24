const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
    host: 'SELVER02.aternos.me', 
    port: 23397,
    username: 'Guard_Bot'
});

bot.on('spawn', () => {
    console.log('Bot is online!');
    setInterval(() => {
        bot.swingArm('right');
        bot.setControlState('jump', true);
        setTimeout(() => bot.setControlState('jump', false), 500);
    }, 20000);
});

bot.on('error', (err) => {
    console.log('Error details:', err.message);
});

bot.on('end', () => {
    console.log('Bot disconnected');
});
