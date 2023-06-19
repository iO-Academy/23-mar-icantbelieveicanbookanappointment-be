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

const postLogin = async (user_email_address, user_password) => {
  console.log('Service: postLogin')
  if(!user_email_address || !user_password) {
      return "Incomplete login credentials"
  } else {
      try {
        const result = await doctorSurgeryRepository.postLogin(user_email_address)
        result[0]['login'] = result[0].password === user_password
        result[0]['status'] = 200
      } catch {
        result[0]['status'] = 500
      }
    return result
  }
}

module.exports.getDoctors = getDoctors
module.exports.getAppointments = getAppointments
module.exports.addAppointment = addAppointment
module.exports.postLogin = postLogin
