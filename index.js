const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'SELVER02.aternos.me
', 
    port: 23397, 
    username: 'Guard_Bot', 
    version: '1.21.1'
  })

  bot.on('login', () => console.log('Bot is online!'))
  bot.on('end', () => {
    console.log('Bot disconnected, reconnecting...')
    setTimeout(createBot, 5000)
  })
  bot.on('error', (err) => console.log(err))
}

createBot()
