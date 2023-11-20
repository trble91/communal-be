const express = require('express')
const router = express.Router()

const usersCtrl = require('../controllers/users.js')

router.post('/', usersCtrl.create)
router.post('/login', usersCtrl.logIn)

module.exports = router
