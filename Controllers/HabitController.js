const supabase = require("../config/supabase");

// Get all habits of a user
const getUserHabits = async (req, res) => {
  const { userId } = req.params;

  const { data, error } = await supabase
    .from("habits")
    .select("*")
    .eq("user_id", userId);

  if (error) {
    return res.status(400).json(error);
  }

  res.json(data);
};

// Get one habit of a user
const getHabitById = async (req, res) => {
  const { userId, habitId } = req.params;

  const { data, error } = await supabase
    .from("habits")
    .select("*")
    .eq("id", habitId)
    .eq("user_id", userId)
    .single();

  if (error) {
    return res.status(404).json(error);
  }

  res.json(data);
};

// Create habit for user
const createHabit = async (req, res) => {
  const { userId } = req.params;

  const { name, streak } = req.body;

  const { data, error } = await supabase
    .from("habits")
    .insert([
      {
        name,
        streak,
        user_id: userId,
      },
    ])
    .select();

  if (error) {
    return res.status(400).json(error);
  }

  res.status(201).json(data);
};

// Update habit
const updateHabit = async (req, res) => {
  const { userId, habitId } = req.params;

  const { data, error } = await supabase
    .from("habits")
    .update(req.body)
    .eq("id", habitId)
    .eq("user_id", userId)
    .select();

  if (error) {
    return res.status(400).json(error);
  }

  res.json(data);
};

// Delete habit
const deleteHabit = async (req, res) => {
  const { userId, habitId } = req.params;

  const { error } = await supabase
    .from("habits")
    .delete()
    .eq("id", habitId)
    .eq("user_id", userId);

  if (error) {
    return res.status(400).json(error);
  }

  res.json({
    message: "Habit deleted successfully",
  });
};

module.exports = {
  getUserHabits,
  getHabitById,
  createHabit,
  updateHabit,
  deleteHabit,
};