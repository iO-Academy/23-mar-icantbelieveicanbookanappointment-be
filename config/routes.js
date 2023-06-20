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
  // * Add patient record
  //app.post('/record', doctorSurgeryController.postRecord)
  // * Update patient appointment
  //app.put('/update', doctorSurgeryController.putAppointment)
  // * Delete patient appointment
  //app.delete('/delete', doctorSurgeryController.deleteAppointment)
  // * Get patient records
  //app.get('/records', doctorSurgeryController.getRecords)
}

module.exports = routes;