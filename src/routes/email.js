const express = require ('express');
const router  = express.Router();
const {validatorCreateEmail} = require('../validators/email')
const { sendEmail } =  require('../controllers/email');

router.post('/email', validatorCreateEmail, sendEmail);
// router.get('/email/', (req, res, next) => {
//     console.log('hola')
//     res.send("hola")
// });

module.exports = router;
