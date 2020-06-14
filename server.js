const express = require('express');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const PORT = process.env.PORT || 3001;

const csrfProtection = csrf({ cookie: true });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('home route')
});

app.listen(PORT, () => {
  console.log(`API server running on port http://localhost:${PORT}`)
});
