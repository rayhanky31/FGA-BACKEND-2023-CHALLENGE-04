const { ResponseTemplate } = require('../helper/template.helper')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

//fugsi Handle error
function TestUser(req, res) {
    let resp = ResponseTemplate(null, 'success', null, 200)
    res.json(resp)
}
//Insett Bank Account
async function InsertAccount(req, res) {

    const { bank_name, bank_account_number, balance, user_id } = req.body;

    try {
        // Create 
        const account = await prisma.bank_account.create({
            data: {
                bank_name,
                bank_account_number,
                balance,
                user_id,
            },
        });

        const resp = ResponseTemplate(account, 'success', null, 200);
        res.json(resp);
        return
    } catch (error) {
        const resp = ResponseTemplate(null, 'Internal server error', error, 500);
        res.status(500).json(resp);
        return
    }
}

//GetAkun
async function GetAccount(req, res) {

    const { bank_name, user_id } = req.query

    const payload = {}

    if (bank_name) {
        payload.bank_name = bank_name
    }
    if (user_id) {
        payload.user_id = user_id
    }

    try {

        const users = await prisma.bank_account.findMany({
            where: payload,
        },

        );

        let resp = ResponseTemplate(users, 'success', null, 200)
        res.json(resp)
        return

    } catch (error) {
        let resp = ResponseTemplate(null, 'internal server error', error, 500)
        res.json(resp)
        return


    }
}

//GetBankAccountByID
async function GetAccountById(req, res) {
    const { id } = req.params;

    try {
        const user = await prisma.bank_account.findUnique({
            where: {
                id: parseInt(id),
            },
        })


        let resp = ResponseTemplate(user, 'success', null, 200)
        res.json(resp)
        return

    } catch (error) {
        let resp = ResponseTemplate(null, 'internal server error', error, 500)
        res.json(resp)
        return


    }
}

module.exports = {
    TestUser,
    InsertAccount,
    GetAccount,
    GetAccountById

}