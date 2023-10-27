const express = require('express')
const router = express.Router()
const userRoute = require('./user.route')
const userAccount = require('./account.route')
const userTransaction = require('./transaction.route')
const morgan = require('morgan')

router.use(morgan('dev'))



router.use('/api/v1/users', userRoute)
router.use('/api/v1/accounts', userAccount)
router.use('/api/v1/transactions', userTransaction)




module.exports = router