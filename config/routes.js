const doctorSurgeryController = require('../controllers/doctorSurgeryControllers')

const routes = (app) => {
  // * Get doctors
  app.get('/doctors', doctorSurgeryController.getDoctors)
  // * Get appointments
  app.get('/appointments', doctorSurgeryController.getAppointments)
  // // * Add a product
  // app.post('/products', robotStoresController.addProduct)
  // // * Get all categories
  // app.get('/categories', robotStoresController.getCategories)
  // // * Get all characters
  // app.get('/characters', robotStoresController.getCharacters)
}

module.exports = routes;