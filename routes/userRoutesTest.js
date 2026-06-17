const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.route('/all')
  .get(userController.getAllUsers)
  .post(userController.createUser)