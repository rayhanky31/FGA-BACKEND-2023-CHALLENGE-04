const { ResponseTemplate } = require('../helper/template.helper')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

//fugsi Handle error
function TestUser(req, res) {
    let resp = ResponseTemplate(null, 'success', null, 200)
    res.json(resp)
}

//Insett Transaction
async function InsertTransaction(req, res) {

    try {
        const { amount, source_account_id, destination_account_id } = req.body;

        // Pastikan kedua akun sumber dan tujuan ada
        const sourceAccount = await prisma.bank_account.findUnique({
            where: { id: source_account_id },
        });

        const destinationAccount = await prisma.bank_account.findUnique({
            where: { id: destination_account_id },
        });

        if (!sourceAccount || !destinationAccount) {
            return res.status(404).json({ message: 'Akun sumber atau tujuan tidak ditemukan' });
        }

        // Buat transaksi baru
        const newTransaction = await prisma.transactions.create({
            data: {
                amount,
                source_account_id,
                destination_account_id,
            },
        });
        res.status(201).json(newTransaction);
        const resp = ResponseTemplate(account, 'success', null, 200);
        res.json(resp);
        return
    } catch (error) {
        const resp = ResponseTemplate(null, 'Internal server error', error, 500);
        res.status(500).json(resp);
        return
    }
}

//GetTransaksi
async function GetTransaction(req, res) {

    // const { bank_name, user_id } = req.query

    const payload = {}

    // if (bank_name) {
    //     payload.bank_name = bank_name
    // }
    // if (user_id) {
    //     payload.user_id = user_id
    // }

    try {

        const users = await prisma.transactions.findMany({
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
//GetTransByID
async function GetTransById(req, res) {
    const { id } = req.params;

    try {
        const user = await prisma.transactions.findUnique({
            where: {
                id: parseInt(id),
            },
            include: {
                source: true,
                destination: true,
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
    InsertTransaction,
    GetTransaction,
    GetTransById

}