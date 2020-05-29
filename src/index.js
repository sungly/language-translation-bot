module.exports = async function App(context) {
  if (context.event.isText) {
    console.log('Request message: ', context.event.text);

    await context.sendText('dfasdfsa');
  }
};
