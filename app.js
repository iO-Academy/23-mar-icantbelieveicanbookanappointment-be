const express = require('express')
const router = require('./config/routes')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const session = require('express-session')
const cors = require('cors')


dotenv.config()

const app = express()
const port = 3001

// Parse JSON request bodies
app.use(bodyParser.json())

app.use(session({
  secret : 'doctorLogin',
  resave : true,
  saveUninitialized : true,
  cookie : {secure: false, expires: 6000000}
}))

app.use(cors())

// * Add all the routes to app
router(app)

app.listen(port, () => {
  console.log(`I can't believe I can book an appointment app running. Listening on ${port}`);
})
