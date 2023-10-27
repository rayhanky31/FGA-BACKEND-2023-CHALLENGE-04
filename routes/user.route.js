const express = require('express')
const router = express.Router()
const { InsertUser, GetUser, GetUserWithProfile } = require('../controller/user.controller')
const { CheckPostReq } = require('../middleware/middleware')

//Insert User
router.post('/', CheckPostReq, InsertUser)
router.get('/', GetUser)
router.get('/:id', GetUserWithProfile)


module.exports = router