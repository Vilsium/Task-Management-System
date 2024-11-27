//SQLite databse connection

//importing the required modules
const sqlite3 = require("sqlite3").verbose();
const dbPath = process.env.DB_PATH || "./tasks.db";

//making the schema
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Error opening database: ", err.message);
  } else {
    console.log("Connected to SQLite Database!");
    db.run(
      `
        CREATE TABLE IF NOT EXISTS Task (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            due_date TEXT,
            status TEXT DEFAULT 'Pending'
        )
            `,
      (err) => {
        if (err) {
          console.error("Error creating table: ", err.message);
        } else {
          console.log("Task table is ready!");
        }
      }
    );
  }
});

module.exports = db;