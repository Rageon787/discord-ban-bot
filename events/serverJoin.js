// Event for when a bot is added to the server
// Create a new database for the server ban list
const { Events } = require("discord.js");
import { Database } from "../utils/database";

module.exports = {
  name: Events.GuildCreate,
  once: true,
  execute(guild) {
    // Create a new database for the guild name "guildId.db"
    const db = Database(guild.id);
    db.createTable(); // creates a banlist
  },
};
