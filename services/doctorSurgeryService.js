const doctorSurgeryRepository = require('../repositories/doctorSurgeryRepository');

const getDoctors = async () => {
  console.log('Service: getDoctors');
  return await doctorSurgeryRepository.getDoctors();
}

const getAppointments = async (date, doctorId) => {
  console.log('Service: getAppointments')
  return await doctorSurgeryRepository.getAppointments(date, doctorId);
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
module.exports.getLogin = getLogin