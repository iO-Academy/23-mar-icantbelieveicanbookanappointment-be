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

const getLogin = (user_email_address, user_password) => {
  console.log('Service: getLogin')
  if(user_email_address && user_password)
    doctorSurgeryRepository.getLogin(user_email_address).then((result) => {
      if(result.length > 0)
      {
        for(let count = 0; count < data.length; count++)
        {
          return data[count].user_password === user_password;
        }
      }
      else
      {
        return false;
      }
    })
}

module.exports.getDoctors = getDoctors
module.exports.getAppointments = getAppointments
module.exports.addAppointment = addAppointment
module.exports.getLogin = getLogin
