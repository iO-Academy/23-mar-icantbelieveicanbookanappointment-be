const doctorSurgeryController = require('../controllers/doctorSurgeryControllers')

const routes = (app) => {
  // * Get doctors
  app.get('/doctors', doctorSurgeryController.getDoctors)
  // * Get appointments
  app.get('/appointments/', doctorSurgeryController.getAppointments)
  // // * Add an appointment
  // app.post('/appointments', robotStoresController.addAppointments)
  // * Doctor Login Authentication
  app.get('/login', doctorSurgeryController.getLogin)
  // * Doctor LogOut
  app.get('/logout', doctorSurgeryController.getLogOut)
}

module.exports = routes;