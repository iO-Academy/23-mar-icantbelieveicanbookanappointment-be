const doctorSurgeryController = require('../controllers/doctorSurgeryControllers')

const routes = (app) => {
  // * Get doctors
  app.get('/doctors', doctorSurgeryController.getDoctors)
  // // * Get all products
  // app.get('/products', robotStoresController.getProducts)
  // // * Add a product
  // app.post('/products', robotStoresController.addProduct)
  // // * Get all categories
  // app.get('/categories', robotStoresController.getCategories)
  // // * Get all characters
  // app.get('/characters', robotStoresController.getCharacters)
}

module.exports = routes;