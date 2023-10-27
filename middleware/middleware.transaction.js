
const { ResponseTemplate } = require('../helper/template.helper')
const Joi = require('joi');

function CheckPostReq(req, res, next) {
    const schema = Joi.object({
        //Bank_acount
        amount: Joi.number().integer().required(),
        source_account_id: Joi.number().integer().required(),
        destination_account_id: Joi.number().integer().required(),
    })

    const { error } = schema.validate(req.body)
    if (error) {
        let respErr = ResponseTemplate(null, 'invalid request',
            error.details[0].message, 400)
        res.json(respErr)
        return
    }

    next()
}

module.exports = {
    CheckPostReq
}