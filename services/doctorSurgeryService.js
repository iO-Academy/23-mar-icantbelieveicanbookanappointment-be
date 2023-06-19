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

module.exports.getDoctors = getDoctors
module.exports.getAppointments = getAppointments
module.exports.addAppointment = addAppointment
