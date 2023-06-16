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
  let doctorId = req.params.doctorId
  let date = req.params.date
  doctorSurgeryService.getAppointments(date, doctorId).then((allAppointments) => {
    let result = {
      "message": "Successfully found appointments.",
      'data': allAppointments
    }
    res.json(result)
  })
}

module.exports.getDoctors = getDoctors
module.exports.getAppointments = getAppointments