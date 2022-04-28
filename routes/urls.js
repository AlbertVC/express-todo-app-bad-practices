const express = require('express')
const router = express.Router();
const toDoController = require('../controllers/toDoControllers.controller')
const ENDPOINT_TEXT = require('../utils/utils.js')

// index endpoint
router.get('/', toDoController.index)

// get all tasks
app.get(`${ENDPOINT_TEXT}`, toDoController.get)

// create a task
app.post(`${ENDPOINT_TEXT}/task`, toDoController.create)

// delete a task
app.delete(`${ENDPOINT_TEXT}/:id`, toDoController.delete)

// update a task
app.patch(`${ENDPOINT_TEXT}/:id`, toDoController.update)

module.exports= router