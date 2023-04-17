const {check} = require('express-validator');
const validateResults = require('../utils/handleValidator');
const validatorCreateEmail = [
    check('name').exists().notEmpty(),
    check('email').exists().notEmpty().isEmail(),
    check('message').exists().notEmpty(),
    
    (req, res, next) => validateResults(req, res, next)
    
];


module.exports = { validatorCreateEmail}