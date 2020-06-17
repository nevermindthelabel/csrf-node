const express = require('express');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const PORT = process.env.PORT || 3001;

const csrfToken = csrf({ cookie: true });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('home route')
});

app.get('/token', csrfToken, async (req, res) => {
  const result = await res.send(`token route hit, token is ${req.csrfToken()}`);
  console.log(result);
});

app.listen(PORT, () => {
  console.log(`API server running on port http://localhost:${PORT}`)
});
