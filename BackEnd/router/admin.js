const express = require('express');
const router = express.Router()
const adminController = require('../app/controllers/adminController');
const { checkTokenAdmin } = require('../middlewares/checkToken') 

// POST /api/admin/register
router.post('/register', adminController.register)

// POST /api/admin/login
router.post('/login', adminController.login)

// POST /api/admin/update-password
router.post('/update-password', checkTokenAdmin, adminController.updatePassword)

module.exports = router