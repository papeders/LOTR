const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')

router.get('/:username', ctrl.quote.getQuotes)
router.post('/:username', ctrl.quote.addQuote)
router.delete('/:id', ctrl.quote.deleteQuote)

module.exports = router