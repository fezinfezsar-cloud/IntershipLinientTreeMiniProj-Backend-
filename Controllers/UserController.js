// Get all habits
exports.getAllHabits = async (req, res) => {
    const habits = await Habit.find();
    res.json(habits);
};

// Get habit by ID
exports.getHabitById = async (req, res) => {
    const habit = await Habit.findById(req.params.id);

    if (!habit) {
        return res.status(404).json({ message: "Habit not found" });
    }

    res.json(habit);
};

// Create habit
exports.createHabit = async (req, res) => {
    const habit = new Habit(req.body);
    await habit.save();
    res.status(201).json(habit);
};

// Update habit
exports.updateHabit = async (req, res) => {
    const updatedHabit = await Habit.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    if (!updatedHabit) {
        return res.status(404).json({ message: "Habit not found" });
    }

    res.json(updatedHabit);
};

// Delete habit
exports.deleteHabit = async (req, res) => {
    const deletedHabit = await Habit.findByIdAndDelete(req.params.id);

    if (!deletedHabit) {
        return res.status(404).json({ message: "Habit not found" });
    }

    res.json({ message: "Habit deleted successfully" });
};

// Get habits of one user
exports.getHabitsByUserId = async (req, res) => {
    const habits = await Habit.find({
        userId: req.params.userId
    });

    res.json(habits);
};