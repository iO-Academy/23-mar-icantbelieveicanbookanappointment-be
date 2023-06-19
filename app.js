const express = require('express');
const router = require('./config/routes');
const dotenv = require('dotenv')
const bodyParser = require('body-parser');

dotenv.config()

const app = express();
const port = 3001;

// Parse JSON request bodies
app.use(bodyParser.json());

// * Add all the routes to app
router(app);

app.listen(port, () => {
  console.log(`I can't believe I can book an appointment app running. Listening on ${port}`);
});
