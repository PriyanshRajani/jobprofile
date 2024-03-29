const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Mock database
const users = [];

// User registration
app.post('/register', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send('Email and password are required');
  }
  const newUser = { email, password };
  users.push(newUser);
  return res.status(201).send('User registered successfully');
});

// User login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).send('Invalid email or password');
  }
  return res.status(200).send('Login successful');
});

app.listen(PORT, () => {
  console.log(Server is running on port ${PORT});
});