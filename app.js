const express = require('express');
const requestId = require('@krish1712/express-request-id');

const app = express();
const port = process.env.PORT || 3000;

// Add this before routes so every request receives an ID.
app.use(requestId());

app.get('/', (req, res) => {
  console.log(`[${req.id}] GET /`);
  res.json({
    message: 'Hello from the request ID demo!',
    requestId: req.id,
    header: 'X-Request-ID',
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', requestId: req.id });
});

app.listen(port, () => {
  console.log(`Demo server listening at http://localhost:${port}`);
});
