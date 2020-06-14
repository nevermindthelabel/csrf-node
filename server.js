const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();

app.get('/', (req, res) => {
  res.send('home route')
});

app.listen(PORT, () => {
  console.log(`API server running on port http://localhost:${PORT}`)
});
