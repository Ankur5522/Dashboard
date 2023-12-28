const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const projectRoutes = require('./routes/projectRoutes.js');
require('dotenv').config();

const app = express();

app.use(cors(
  {
    origin: ["https://dashboard-5lf5.vercel.app"],
    methods: ['POST','GET'],
    optionsSuccessStatus: 200,
    credentials: true
  }
));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI);

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.error('MongoDB disconnected');
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.use('/project', projectRoutes);

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
});
