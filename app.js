const express = require('express');
const router = require('./config/routes');
const dotenv = require('dotenv')

dotenv.config()

const app = express();
const port = 3001;

// * Add all the routes to app
router(app);

app.listen(port, () => {
  console.log(`I can't believe I can book an appointment app running. Listening on ${port}`);
});
