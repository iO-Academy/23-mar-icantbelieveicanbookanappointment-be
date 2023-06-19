const doctorSurgeryController = require('../controllers/doctorSurgeryController')

const routes = (app) => {
  // * Get doctors
  app.get('/doctors', doctorSurgeryController.getDoctors)
  // * Get appointments
  app.get('/appointments/:date/:doctorId', doctorSurgeryController.getAppointments)
  // * Add an appointment
  app.post('/appointment', doctorSurgeryController.addAppointment)
  // * Doctor Login Authentication
  app.post('/login', doctorSurgeryController.postLogin)
  // * Doctor LogOut
  app.post('/logout', doctorSurgeryController.postLogOut)
}

module.exports = routes;