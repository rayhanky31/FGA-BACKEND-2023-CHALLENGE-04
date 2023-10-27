
const { ResponseTemplate } = require('../helper/template.helper')
const Joi = require('joi');

function CheckPostReq(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().max(255).required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        identity_type: Joi.string().required(),
        identity_number: Joi.string().required(),
        address: Joi.string().required(),

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