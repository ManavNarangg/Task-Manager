const TodoModel = require("../models/ToDoModel.js");

const getToDo = async (req, res) => {
  try {
    const toDo = await TodoModel.find();
    res.send(toDo);
  } catch (err) {
    console.error("Error while fetching todos:", err.message);
    res.status(500).send("Error while fetching todos");
  }
};

const saveToDo = async (req, res) => {
  try {
    const newToDo = new TodoModel({ text: req.body.text });
    const savedToDo = await newToDo.save();
    console.log("Added successfully");
    res.send(savedToDo);
    console.log(savedToDo);
  } catch (err) {
    console.error("Error while saving todo:", err.message);
  }
};

const UpdateTodo = async (req, res) => {
  try {
    await TodoModel.findByIdAndUpdate(
      { _id: req.body._id },
      { text: req.body.text }
    );
    res.send("Updated Successfully");
  } catch (error) {
    res.send(error);
  }
};

const DeleteTodo = async (req, res) => {
  const { _id } = req.body;
  try {
    await TodoModel.findByIdAndDelete({ _id });
    res.send("Deleted Successfully");
  } catch (error) {
    res.send(error);
  }
};

module.exports = { getToDo, saveToDo, UpdateTodo, DeleteTodo };
