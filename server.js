const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
app.get('/', (req, res) => {
 res.json({
 message: 'Welcome to the Internship API Server'
 });
});
app.listen(PORT, () => {
 console.log(`Server running at http://localhost:${PORT}`);
});