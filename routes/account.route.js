const express = require('express')
const router = express.Router()
const { InsertAccount, GetAccount, GetAccountById } = require('../controller/account.controller')
const { CheckPostReq } = require('../middleware/middleware.account')

//Insert User
router.post('/', CheckPostReq, InsertAccount)
router.get('/', GetAccount)
router.get('/:id', GetAccountById)


module.exports = router