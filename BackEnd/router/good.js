const express = require('express');
const router = express.Router()
const goodController = require('../app/controllers/goodController');
const { checkTokenUser, checkTokenAdmin } = require('../middlewares/checkToken')

// POST /api/good/add
router.post('/add', checkTokenAdmin, goodController.add)

// POST /api/good/get-list
router.post('/get-list', goodController.getList)

// POST /api/good/update
router.post('/update', checkTokenAdmin, goodController.update)

// POST /api/good/update-priceSell
router.post('/update-priceSell', checkTokenAdmin, goodController.updatePriceSell)

// POST /api/good/remove
router.post('/remove', checkTokenAdmin, goodController.remove)

module.exports = router