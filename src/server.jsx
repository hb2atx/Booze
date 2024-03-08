const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const SnackOrBoozeApi = require('./Api'); 
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/snacks', async (req, res) => {
  try {
    const result = await SnackOrBoozeApi.addSnack(req.body);
    res.json(result);
  } catch (error) {
    console.error("Error getting items:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/drinks', async (req, res) => {
  try {
    const result = await SnackOrBoozeApi.addDrink(req.body);
    res.json(result);
  } catch (error) {
    console.error(`Error adding ${type}:`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
