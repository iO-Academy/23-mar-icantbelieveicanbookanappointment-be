const doctorSurgeryController = require('../controllers/doctorSurgeryController')

const routes = (app) => {
  // * Get doctors
  app.get('/doctors', doctorSurgeryController.getDoctors)
  // * Get patient ID
  app.post('/patient', doctorSurgeryController.getPatientId)
  // * Get appointments
  app.get('/appointments/:date/:doctorId', doctorSurgeryController.getAppointments)
  // * Add an appointment
  app.post('/appointment', doctorSurgeryController.addAppointment) //email API
  // * Doctor Login Authentication
  app.post('/login', doctorSurgeryController.postLogin)
  // * Doctor LogOut
  app.post('/logout', doctorSurgeryController.postLogOut)
  // * Add patient record
  //app.post('/record', doctorSurgeryController.postRecord)
  // * Update patient appointment
  //app.put('/update', doctorSurgeryController.putAppointment) //email API
  // * Delete patient appointment
  //app.delete('/delete', doctorSurgeryController.deleteAppointment) //email API
  // * Get patient records
  //app.get('/records', doctorSurgeryController.getRecords)
}

module.exports = routes;