import sqlite3 from "sqlite3";
import { open } from "sqlite";

sqlite3.verbose();

export class Database {
  conn; // connection the database
  guildId; // the guild id
  constructor(guildId) {
    // this will connect to the database of the given guild
    // what if the database doesn't exist?
    // we will create one
    this.guildId = guildId;
    (async () => {
      this.conn = await open({
        filename: `/tmp/database_${this.guildId}.db`,
        driver: sqlite3.cached.Database,
      });
    })();
  }
  // Now think about what methods you might need?
  // A method to create the database
  async createTable() {
    const query = `
         CREATE TABLE IF NOT EXISTS 
            banlist (
              userId INTEGER PRIMARY KEY, 
              username TEXT, 
              banType  TEXT,  
              banDuration INTEGER,
              unbanDuration INTEGER, 
              whenUnban INTEGER
         )
  `;

    await this.conn.exec(query);
  }
}
