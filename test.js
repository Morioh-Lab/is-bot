// const { isBot } = require('./index');

const {isBot} = require('./dist/cjs/index');

console.log(isBot('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'))