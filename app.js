const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', version: '1.0.0', timestamp: new Date().toISOString() });
});

// Main route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the CI/CD Demo API 🚀',
    endpoints: [
      { path: '/', method: 'GET', description: 'This response' },
      { path: '/health', method: 'GET', description: 'Health check' },
      { path: '/greet/:name', method: 'GET', description: 'Greet a user' },
      { path: '/add', method: 'POST', description: 'Add two numbers' }
    ]
  });
});

// Greet endpoint
app.get('/greet/:name', (req, res) => {
  const { name } = req.params;
  if (!name || name.trim() === '') {
    return res.status(400).json({ error: 'Name cannot be empty' });
  }
  res.json({ greeting: `Hello, ${name}! 👋 Deployed via CI/CD.` });
});

// Math endpoint
app.post('/add', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'Both a and b must be numbers' });
  }
  res.json({ result: a + b });
});

// Start server (only when not in test mode)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
  });
}

module.exports = app;
