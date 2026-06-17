const express = require("express");
const router = express.Router();
const HabitController = require("../controllers/habitController");

// Get all habits
router.get("/", HabitController.getAllHabits);

// Get a single habit by ID
router.get("/:id", HabitController.getHabitById);

// Create a new habit
router.post("/", HabitController.createHabit);

// Update a habit by ID
router.put("/:id", HabitController.updateHabit);

// Delete a habit by ID
router.delete("/:id", HabitController.deleteHabit);

// Get all habits of a specific user
router.get("/user/:userId", HabitController.getHabitsByUserId);

module.exports = router;