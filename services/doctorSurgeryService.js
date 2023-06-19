const doctorSurgeryRepository = require('../repositories/doctorSurgeryRepository');

const getDoctors = async () => {
  console.log('Service: getDoctors');
  return await doctorSurgeryRepository.getDoctors();
}

const getAppointments = async (date, doctorId) => {
  console.log('Service: getAppointments')
  return await doctorSurgeryRepository.getAppointments(date, doctorId);
}

const addAppointment = async (appointment) => {
  console.log('Service: addAppointment');
  try {
    const newAppointment = await doctorSurgeryRepository.addAppointment(appointment);
    console.log('New appointment:', newAppointment);
    return newAppointment;
  } catch (error) {
    console.error('Failed to add appointment:', error);
    throw new Error('Failed to add appointment.');
  }
}

const getLogin = async (user_email_address, user_password) => {
  console.log('Service: getLogin')
  if(!user_email_address || !user_password) {
      return "Incomplete login credentials"
  } else {
      const result = await doctorSurgeryRepository.getLogin(user_email_address)
      result[0]['login'] = result[0].password === user_password
      return result
  }
}

module.exports.getDoctors = getDoctors
module.exports.getAppointments = getAppointments
module.exports.addAppointment = addAppointment
module.exports.getLogin = getLogin
