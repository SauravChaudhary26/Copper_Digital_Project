// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
   .connect(process.env.MONGODB_URI)
   .then(() => console.log("MongoDB connected"))
   .catch((err) => console.log(err));

// Todo model
const Todo = mongoose.model(
   "Todo",
   new mongoose.Schema({
      text: { type: String, required: true },
      completed: { type: Boolean, default: false },
   })
);

// Routes
app.get("/todos", async (req, res) => {
   const todos = await Todo.find();
   res.json(todos);
});

app.post("/todos", async (req, res) => {
   const newTodo = new Todo({
      text: req.body.text,
   });
   await newTodo.save();
   res.json(newTodo);
});

app.delete("/todos/:id", async (req, res) => {
   await Todo.findByIdAndDelete(req.params.id);
   res.json({ message: "Todo deleted" });
});

app.listen(process.env.PORT, () => {
   console.log(`Server is running on port ${process.env.PORT}`);
});
