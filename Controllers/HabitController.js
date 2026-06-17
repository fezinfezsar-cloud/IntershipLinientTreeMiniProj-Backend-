const supabase = require("../config/supabase");

// GET /habits
const getHabits = async (req, res) => {
  const { data, error } = await supabase
    .from("habits")
    .select("*")
    .order("id");

  if (error) {
    return res.status(500).json(error);
  }

  res.status(200).json(data);
};

// GET /habits/:id
const getHabitById = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("habits")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return res.status(404).json(error);
  }

  res.status(200).json(data);
};

// POST /habits
const createHabit = async (req, res) => {
  const {
    habit_name,
    category,
    frequency,
    start_date,
  } = req.body;

  const { data, error } = await supabase
    .from("habits")
    .insert([
      {
        habit_name,
        category,
        frequency,
        start_date,
        status: "Pending",
      },
    ])
    .select();

  if (error) {
    return res.status(400).json(error);
  }

  res.status(201).json(data);
};

// PUT /habits/:id
const updateHabit = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("habits")
    .update(req.body)
    .eq("id", id)
    .select();

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};

// DELETE /habits/:id
const deleteHabit = async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase
    .from("habits")
    .delete()
    .eq("id", id);

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json({
    message: "Habit deleted successfully",
  });
};

// PATCH /habits/:id/status
const updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const { data, error } = await supabase
    .from("habits")
    .update({ status })
    .eq("id", id)
    .select();

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};

module.exports = {
  getHabits,
  getHabitById,
  createHabit,
  updateHabit,
  deleteHabit,
  updateStatus,
};