const express = require("express");
const router = express.Router();

const {
  getHabits,
  getHabitById,
  createHabit,
  updateHabit,
  deleteHabit,
  updateStatus,
} = require("../Controllers/HabitController");

router.get("/", getHabits);
router.get("/:id", getHabitById);
router.post("/", createHabit);
router.put("/:id", updateHabit);
router.delete("/:id", deleteHabit);
router.patch("/:id/status", updateStatus);

module.exports = router;