const MyMemory = require('./MyMemory');

const {
  myMemoryBaseUrl,
  myMemoryUsername,
  myMemoryPassword,
} = require('./config');

const myMemory = new MyMemory({
  url: myMemoryBaseUrl,
  username: myMemoryUsername,
  password: myMemoryPassword,
});

module.exports = async function App(context) {
  if (context.event.isText) {

    context.sendSenderAction('typing_on');

    const result = await myMemory.translateText(context.event.text, 'en', 'km');

    await context.sendText(result);
  }
};
