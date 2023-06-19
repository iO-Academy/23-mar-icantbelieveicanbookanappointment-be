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
      await doctorSurgeryRepository.getLogin(user_email_address)
          .then((result) => {
              console.log(result[0].password)
              let res = (result[0].password === user_password ? "Redirect to doctor admin page" : "Incorrect email or password")
              console.log(res)
              return res
          })
  }
}

module.exports.getDoctors = getDoctors
module.exports.getAppointments = getAppointments
module.exports.addAppointment = addAppointment
module.exports.getLogin = getLogin
