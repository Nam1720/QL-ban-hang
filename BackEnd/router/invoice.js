const express = require('express');
const router = express.Router()
const invoiceController = require('../app/controllers/invoiceController')
const { checkTokenUser, checkTokenAdmin } = require('../middlewares/checkToken')

// POST /api/invoice/create
router.post('/create', checkTokenUser, invoiceController.create)

// POST /api/invoice/get-list
router.post('/get-list', checkTokenAdmin, invoiceController.getList)

// POST /api/invoice/remove
router.post('/remove', checkTokenAdmin, invoiceController.remove)

module.exports = router