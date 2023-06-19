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
  console.log(doctorId, date)
  doctorSurgeryService.getAppointments(date, doctorId).then((allAppointments) => {
    let result = {
      "message": "Successfully found appointments.",
      'data': allAppointments
    }
    res.json(result)
  })
}


const getLogin = (req, res, next) => {
  console.log('Controller: getLogin')
  let user_email_address = req.body.email;
  let user_password = req.body.password;
  doctorSurgeryService.getLogin(user_email_address, user_password)

};

const getLogOut = (req, res, next) => {
  req.session.destroy();
  res.redirect("/");
}


module.exports.getDoctors = getDoctors
module.exports.getAppointments = getAppointments
module.exports.getLogin = getLogin
module.exports.getLogOut = getLogOut