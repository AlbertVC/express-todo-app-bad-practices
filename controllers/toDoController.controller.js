const toDo = require('../services/toDo.service');
const todoItems = require('../models/todoItems')

async function get(req, res, next) {
  try {
    return res.json({ data: todoItems, status: "success" });
  } catch (err) {
      console.error(`Error while getting programming all the items`);
      next(err);
  }
}

async function create(req, res, next) {
  try {
    todoItems.push({
        index: index++,
        value: req.body.value,
        done: false,
    })
    return res.json({ data: todoItems, status: 'success'});
  } catch (err) {
    console.error(`Error while creating new item`);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    todoItems.filter(d => d.index == +req.params.id)[0].done = req.body.done
    return res.json({ data: todoItems, status: 'success' })
  } catch (err) {
    console.error(`Error while updating the items`);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    const todoItems = todoItems.filter(d => d.index != +req.params.id)
    return res.json({ data: todoItems, status: 'success' });
  } catch (err) {
    console.error(`Error while deleting the items`,);
    next(err);
  }
}

module.exports = {
  get,
  create,
  update,
  remove
};