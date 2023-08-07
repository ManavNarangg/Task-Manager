const { Router } = require("express");
const {getToDo, saveToDo, DeleteTodo, UpdateTodo} = require("../controllers/ToDocontroller");
const router = Router();

router.get("/", getToDo);
router.post("/save", saveToDo);
router.put("/update", UpdateTodo)
router.delete("/delete", DeleteTodo);

module.exports = router;