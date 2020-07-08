const router = require('express').Router();
const productsController = require('../../../controller');
const auth = require('../../../service/middleware/auth');
var valTest = process.env.NODE_ENV === "test" ? false : true; 


router.post('/products', valTest === false ? productsController.createProducts : auth, productsController.createProducts);
router.get('/products', valTest === false ? productsController.getAllProduct : auth, productsController.getAllProduct);
router.get('/products/:id', valTest === false ? productsController.getAllProduct : auth, productsController.getProductId);
router.get('/paginate', valTest === false ? productsController.productPaginate : auth, productsController.productPaginate);
router.put('/productsUpdate/:id', valTest === false ? productsController.updateProducts : auth, productsController.updateProducts);
router.delete('/deleteProducts/:id', valTest === false ? productsController.deleteProducts : auth, productsController.deleteProducts);

module.exports = router;