# Detect user-agent is a bot/spider/crawler


```js

// const { isBot } = require('@morioh/is-bot');

const isBot = require('@morioh/is-bot');

console.log(isBot('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'));
// return true

```