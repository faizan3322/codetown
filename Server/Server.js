const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://kfaizanahmad35:NDeaIWWHYqJWnd3P@cluster0.0refn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define the schema for the form data
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const FormData = mongoose.model('FormData', formSchema);

// POST endpoint to receive form data and save it to MongoDB
app.post('/submit-form', async (req, res) => {
    try {
      console.log("Received Data:", req.body); // Debug incoming data
      const { name, email, message } = req.body;
  
      const newFormData = new FormData({
        name,
        email,
        message,
      });
  
      await newFormData.save();
      res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (err) {
      console.error("Error saving data:", err);
      res.status(500).json({ message: 'Error submitting form', error: err });
    }
  });
  

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
