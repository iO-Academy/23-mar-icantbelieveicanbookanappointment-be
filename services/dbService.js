const mysql = require('promise-mysql');
const dotenv = require('dotenv')

dotenv.config()

const connectionConfig = {
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DBNAME
}

// const connectionConfig = {
//   host: '127.0.0.1',
//   user: 'root',
//   password: 'password',
//   database: 'doctor_surgery'
// }

const connect = async () => {
  return await mysql.createConnection(connectionConfig)
}

module.exports.connect = connect;