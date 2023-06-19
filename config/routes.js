const doctorSurgeryController = require('../controllers/doctorSurgeryControllers')

const routes = (app) => {
  // * Get doctors
  app.get('/doctors', doctorSurgeryController.getDoctors)
  // * Get appointments
  app.get('/appointments/:date/:doctorId', doctorSurgeryController.getAppointments)
  // * Add an appointment
  app.post('/appointment', doctorSurgeryController.addAppointment)
  // * Doctor Login Authentication
  app.post('/login', doctorSurgeryController.getLogin)
  // * Doctor LogOut
  app.get('/logout', doctorSurgeryController.getLogOut)
}

module.exports = routes;