const doctorSurgeryRepository = require('../repositories/doctorSurgeryRepository');
const bcrypt = require('bcrypt')

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
    let response = []
    response['status'] = 400
    response['message'] = "Username/ password is missing"
    return response
  } else {
      try {
        const result = await doctorSurgeryRepository.postLogin(user_email_address)
        result[0]['login'] = await bcrypt.compare(user_password, result[0].password);
        if (result[0]['login']) {
          result[0]['status'] = 200
          result[0]['message'] = 'You successfully logged in'
        } else {
          result[0]['status'] = 401
          result[0]['message'] = 'Your username or password was incorrect'
        }
        return result[0]
      } catch {
        let response = []
        response['status'] = 500
        response['message'] = "There was a problem connecting to the server"
        return response
      }
  }
}

module.exports.getDoctors = getDoctors
module.exports.getAppointments = getAppointments
module.exports.addAppointment = addAppointment
module.exports.postLogin = postLogin
