const dbService = require('../services/dbService')

const getDoctors = async () => {
  console.log('Repository: getDoctors')
  const connection = await dbService.connect()
  const doctors = await connection.query('SELECT * FROM doctors;');
  return await doctors
}

module.exports.getDoctors = getDoctors