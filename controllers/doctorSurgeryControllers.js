const doctorSurgeryService = require('../services/doctorSurgeryService')

const getDoctors = (req, res) => {
  console.log('Controller: getDoctors');
  doctorSurgeryService.getDoctors().then((allDoctors) => {
    let result = {
      "message": "Successfully found doctors.",
      'data': allDoctors
    }
    res.json(result)
  })
}

const getAppointments = (req, res) => {
  console.log('Controller: getAppointments');
  let doctorId = req.query.doctorId
  let date = req.query.date
  console.log(req.body)
  doctorSurgeryService.getAppointments(date, doctorId).then((allAppointments) => {
    let result = {
      "message": "Successfully found appointments.",
      'data': allAppointments
    }
    res.json(result)
  })
}

const addAppointment = (req, res) => {
  console.log('Controller: addAppointment');
  const appointment = req.body; // Assuming the appointment data is sent in the request body

  // You can perform validation or additional processing on the appointment data if needed

  doctorSurgeryService.addAppointment(appointment)
      .then((newAppointment) => {
        const result = {
          message: 'Successfully added appointment.',
          data: newAppointment
        };
        res.json(result);
      })
      .catch((error) => {
        const result = {
          message: 'Failed to add appointment.',
          error: error.message
        };
        res.status(500).json(result);
      });
};

module.exports.getDoctors = getDoctors
module.exports.getAppointments = getAppointments
module.exports.addAppointment = addAppointment