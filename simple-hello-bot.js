const builder = require("botbuilder");

const conenctor = new builder.ConsoleConnector();

conenctor.listen();

const bot = new builder.UniversalBot(conenctor, function (session) {
  session.send("Hello !!");
});