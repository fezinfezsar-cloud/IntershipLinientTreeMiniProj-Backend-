const express = require("express");
const router = express.Router();

const {
  getUsers,
  getUserById,
  createUser,
} = require("../controllers/userController");

const {
  getUserHabits,
  getHabitById,
  createHabit,
  updateHabit,
  deleteHabit,
} = require("../controllers/habitController");

// User routes
router.get("/", getUsers);
router.get("/:userId", getUserById);
router.post("/", createUser);

// Habit routes nested under users
router.get("/:userId/habits", getUserHabits);
router.get("/:userId/habits/:habitId", getHabitById);
router.post("/:userId/habits", createHabit);
router.put("/:userId/habits/:habitId", updateHabit);
router.delete("/:userId/habits/:habitId", deleteHabit);

module.exports = router;