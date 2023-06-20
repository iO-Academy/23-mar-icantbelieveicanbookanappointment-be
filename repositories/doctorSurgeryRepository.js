const dbService = require('../services/dbService')

const getDoctors = async () => {
  console.log('Repository: getDoctors')
  try {
    const connection = await dbService.connect()
    const doctors = await connection.query('SELECT `id`, `last_name` FROM doctors;');
    return await doctors
  } catch {

  }
}

const getPatientId = async (email) => {
  {
    console.log('Repository: getPatientId')
    console.log(email)
    const connection = await dbService.connect()
    let query = `
        SELECT id FROM patients 
        WHERE email = "${email}"
        `;
    return connection.query(query);
  }
}

const getAppointments = async (date, doctorId) => {
  console.log('Repository: getAppointments')
  const connection = await dbService.connect()
  const appointments = await connection.query('SELECT `patientId`, `time`, `reason` FROM appointments WHERE `date` = ? AND `doctorId` = ?;', [date, doctorId]);
  return await appointments
}

const addAppointment = async (appointment) => {
  console.log('Repository: addAppointment');
  const connection = await dbService.connect();

  // Assuming the appointment object properties match the fields in the appointments table
  const { patientId, doctorId, time, date, reason } = appointment;

  const query = 'INSERT INTO appointments (patientId, doctorId, time, date, reason) VALUES (?, ?, ?, ?, ?)';
  const values = [patientId, doctorId, time, date, reason];

  const result = await connection.query(query, values);
  const newAppointmentId = result.insertId;

  // Retrieve the newly created appointment from the database
  return await connection.query('SELECT * FROM appointments WHERE id = ?', [newAppointmentId]);
};

const postLogin = async (user_email_address) => {
  {
    console.log('Repository: postLogin')
    const connection = await dbService.connect()
    let query = `
        SELECT * FROM doctors 
        WHERE email = "${user_email_address}"
        `;
    return connection.query(query);
  }
}

module.exports.getDoctors = getDoctors
module.exports.getPatientId = getPatientId
module.exports.getAppointments = getAppointments
module.exports.addAppointment = addAppointment
module.exports.postLogin = postLogin
