//backend server

//importing required modules
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");

//initializing express
const app = express();

//MiddlewAare
app.use(cors());
app.use(bodyParser.json());

//Creating APIs End-Points (Routes)
//creating a new task
app.post("/tasks", (req, res) => {
  //   console.log(req.body);
  const { title, description, due_date } = req.body;
  const status = req.body.status || "Pending"; //settinf default status as pendinf if not provided

    if (!title || !description || !due_date) {
        return res.status(400).json({ error: "All fields are required!" });
    }

  db.run(
    `INSERT INTO Task (title, description, due_date, status) VALUES (?, ?, ?, ?)`,
    [title, description, due_date, status],
    function (err) {
      if (err) {
        res.status(400).json({ error: err.message });
      } else {
        console.log(req.body);
        res.status(200).json({ id: this.lastId });
      }
    }
  );
});

//getting all tasks
app.get("/tasks", (req, res) => {
  db.all(`SELECT * FROM Task`, [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

//updating a task
app.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { title, description, due_date, status } = req.body;

  if (!title || !description || !due_date) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  db.run(
    `UPDATE Task SET title = ?, description = ?, due_date = ?, status = ?, WHERE id = ?`,
    [title, description, due_date, status, id],
    function (err) {
      if (err) {
        res.status(400).json({ error: err.message });
      } else {
        res.json({ updatedRows: this.changes });
      }
    }
  );
});

//deleting a task
app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  db.run(`DELETE FROM Task WHERE id = ?`, [id], function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.json({ deletedRows: this.changes });
    }
  });
});

//starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
