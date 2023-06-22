const dbService = require('../services/dbService')

const getDoctors = async () => {
  console.log('Repository: getDoctors')
    const connection = await dbService.connect()
    const doctors = await connection.query('SELECT `id`, `last_name` FROM doctors;');
    return await doctors
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

const getPatientName = async (patientId) => {
  console.log('Repository: getPatientName');
  try {
    const connection = await dbService.connect();
    const query = 'SELECT * FROM patients WHERE id = ?';
    const result = await connection.query(query, [patientId]);
    return result[0]; // Assuming patientId is unique and returns only one row
  } catch (error) {
    console.error('Failed to get patient name:', error);
    throw new Error('Failed to get patient name.');
  }
};

const getAppointments = async (date, doctorId) => {
  console.log('Repository: getAppointments')
  const connection = await dbService.connect()
  const appointments = await connection.query('SELECT `id`,`patientId`, `time`, `reason` FROM appointments WHERE `date` = ? AND `doctorId` = ?;', [date, doctorId]);
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

const getPatientRecord = async (patientId) => {
  console.log('Repository: getPatientRecord');
  const connection = await dbService.connect();
  let query = `
    SELECT appointments.id, doctors.last_name AS doctor, time, date, reason, records.notes, records.prescriptions
    FROM appointments
    INNER JOIN records 
    ON appointments.id = records.appointmentId
    INNER JOIN doctors
    ON appointments.doctorId = doctors.id
    WHERE appointments.patientId = ?
`;
  return connection.query(query, [patientId]);
};


const postPatientRecord = async (record) => {
  console.log('Repository: postPatientRecord');
  const connection = await dbService.connect();

  const {appointmentId, notes, prescriptions} = record;

  const query = 'INSERT INTO records (appointmentId, notes, prescriptions) VALUES (?, ?, ?)';
  const values = [appointmentId, notes, prescriptions];

  return connection.query(query, values);
}

module.exports.getDoctors = getDoctors
module.exports.getPatientId = getPatientId
module.exports.getPatientName = getPatientName;
module.exports.getAppointments = getAppointments
module.exports.addAppointment = addAppointment
module.exports.postLogin = postLogin
module.exports.getPatientRecord = getPatientRecord
module.exports.postPatientRecord = postPatientRecord
