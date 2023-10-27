const express = require('express')
const router = express.Router()
const { InsertTransaction, GetTransaction, GetTransById } = require('../controller/transaction.controller')
const { CheckPostReq } = require('../middleware/middleware.transaction')

//Insert User
router.post('/', CheckPostReq, InsertTransaction)
router.get('/', GetTransaction)
router.get('/:id', GetTransById)


module.exports = router