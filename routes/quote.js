const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')

router.get('/:username', ctrl.quote.getQuotes)

module.exports = router