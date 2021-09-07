const express = require("express");
const router = express.Router();
const db = require("../model");

router.get('/', async (req,res) => {
    const todo = await db.todo.find({});
    res.json(todo);
});


router.post("/", async (req,res) => {
    const addTodo = await db.todo.create(req.body);
    res.status(201).json(addTodo);

});

router.get("/:task_id", async (req,res) => {
    const {task_id} = req.params;
    const findTodo = await db.todo.findById(task_id);
    res.status(200).json(findTodo);
});

router.put("/:task_id", async (req,res) => {
    const {task_id} = req.params;
    const task = req.body;
    const updateTodo = await db.todo.findByIdAndUpdate(task_id,task , {new: true});
    res.status(200).json(updateTodo);
});

router.delete("/:task_id", async (req,res) => {
    const {task_id} = req.params;
    const deleteTodo = await db.todo.findByIdAndDelete(task_id);
    res.status(200).json(deleteTodo);
});


module.exports = router;