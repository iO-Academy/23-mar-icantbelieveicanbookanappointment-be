const dbService = require('../services/dbService')

const getDoctors = async () => {
  console.log('Repository: getDoctors')
  const connection = await dbService.connect()
  const doctors = await connection.query('SELECT `id`, `last_name` FROM doctors;');
  return await doctors
}

const getAppointments = async (date, doctorId) => {
  console.log('Repository: getAppointments')
  const connection = await dbService.connect()
  const appointments = await connection.query('SELECT `patientId`, `time`, `reason` FROM appointments WHERE `date` = ? AND `doctorId` = ?;', [date, doctorId]);
  return await appointments
}

const getLogin = async (user_email_address) => {
  {
    const connection = await dbService.connect()
    let query = `
        SELECT * FROM doctors 
        WHERE email = "${user_email_address}"
        `;
    return connection.query(query);
  }
}

module.exports.getDoctors = getDoctors
module.exports.getAppointments = getAppointments
module.exports.getLogin = getLogin