const router = require('express').Router();
const userController = require('../../../controller');
const auth = require('../../../service/middleware/auth');
var valTest = process.env.NODE_ENV === "test" ? false : true;

router.get('/user', valTest === false ?  userController.getUserAll : auth, userController.getUserAll );
router.get('/user/:id', valTest === false ? userController.getUser : auth, userController.getUser);
router.post('/user', userController.createUser);

module.exports = router;