require("dotenv").config();

const express = require("express");
const cors = require("cors");

const habitRoutes = require("./routes/habitroutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/habits", habitRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});