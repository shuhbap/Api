const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('API Running ✅');
});

// Downloading API
app.get('/download', (req, res) => {
  const url = req.query.url;

  res.json({
    status: true,
    file: url,
    message: 'Download API Working'
  });
});

// Converting API
app.get('/convert', (req, res) => {
  const text = req.query.text;

  res.json({
    status: true,
    converted: text.toUpperCase()
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
