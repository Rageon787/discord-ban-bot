const fs = require("node:fs");
const path = require("node:path");
const Sqlize = require("sequelize");
const { Client, Collection, Events, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();

// Grab all the command files from the commands directory you created earlier
const foldersPath = path.join(__dirname, "commands");
const commandFolder = fs.readdirSync(foldersPath);
const commandFiles = fs
  .readdirSync(foldersPath)
  .filter((file) => file.endsWith(".js"));
console.log(commandFiles);

for (const file of commandFiles) {
  const filePath = path.join(foldersPath, file);
  const command = require(filePath);
  // Set a new item in the Collection with the key as the command name and the value as the exported module
  if ("data" in command && "execute" in command) {
    client.commands.set(command.data.name, command);
  } else {
    console.log(
      `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`,
    );
  }
}
// We read of the files of the event folder
// extract all the .js files

// for each file, you will setup a client event
// require the event file
const eventPath = path.join(__dirname, "events"); // path of the events folder
const eventFiles = fs
  .readdirSync(eventPath)
  .filter((file) => file.endsWith("js"));
for (const file of eventFiles) {
  const filePath = path.join(eventPath, file);
  const event = require(filePath);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}
client.login(token);
