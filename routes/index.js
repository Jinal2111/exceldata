const router = require('express').Router()
const controller = require('../controller/controller');

router.get('/', controller.student);

module.exports = router;