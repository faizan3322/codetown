import mongoose from 'mongoose';

// MongoDB URI
const dbURI = 'mongodb+srv://kfaizanahmad35:NDeaIWWHYqJWnd3P@cluster0.0refn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return;
  }
  await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
};

// Define the schema for the form data
const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

// Create a model from the schema
const FormData = mongoose.model('FormData', formSchema);

export default async (req, res) => {
  // Ensure the database is connected
  await connectDB();

  // Only accept POST requests
  if (req.method === 'POST') {
    try {
      // Extract the data from the request body
      const { name, email, message } = req.body;

      // Create a new document using the data
      const newFormData = new FormData({
        name,
        email,
        message,
      });

      // Save the data to MongoDB
      await newFormData.save();

      // Send a success response
      res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (err) {
      console.error('Error saving data:', err);
      res.status(500).json({ message: 'Error submitting form', error: err });
    }
  } else {
    // Handle unsupported methods
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
