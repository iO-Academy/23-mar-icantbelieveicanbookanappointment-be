const doctorSurgeryController = require('../controllers/doctorSurgeryControllers')

const routes = (app) => {
  // * Get doctors
  app.get('/doctors', doctorSurgeryController.getDoctors)
  // * Get appointments
  app.get('/appointments', doctorSurgeryController.getAppointments)
  // // * Add an appointment
  app.post('/appointment', doctorSurgeryController.addAppointment)


  // // * Auth (change next line)
  // app.get('/categories', robotStoresController.getCategories)
}

module.exports = routes;