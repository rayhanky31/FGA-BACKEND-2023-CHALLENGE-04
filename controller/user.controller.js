const { ResponseTemplate } = require('../helper/template.helper')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

//fugsi Handle error
function TestUser(req, res) {
    let resp = ResponseTemplate(null, 'success', null, 200)
    res.json(resp)
}

// Insert User dan Profile
async function InsertUser(req, res) {

    const { name, email, password, identity_type, identity_number, address } = req.body;

    try {
        const user = await prisma.users.create({
            data: {
                name,
                email,
                password,
                profiles: {
                    create: {
                        identity_type,
                        identity_number,
                        address,
                    },
                },
            },
            include: {
                profiles: true,
            },
        });

        const resp = ResponseTemplate(user, 'success', null, 200);
        res.json(resp);
        return
    } catch (error) {
        console.error("Prisma Error:", error);
        const resp = ResponseTemplate(null, 'Internal server error', error, 500);
        res.status(500).json(resp);
        return
    }

}


//GetUSer
async function GetUser(req, res) {

    const { name, email } = req.query

    const payload = {}

    if (name) {
        payload.name = name
    }

    if (email) {
        payload.email = email
    }

    try {

        const users = await prisma.users.findMany({
            where: payload,
        });

        let resp = ResponseTemplate(users, 'success', null, 200)
        res.json(resp)
        return

    } catch (error) {
        let resp = ResponseTemplate(null, 'internal server error', error, 500)
        res.json(resp)
        return


    }
}

//GetUserByID
async function GetUserWithProfile(req, res) {
    const { id } = req.params;

    try {
        const user = await prisma.users.findUnique({
            where: {
                id: parseInt(id),
            },
            include: {
                profiles: true,
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
    InsertUser,
    GetUser,
    GetUserWithProfile
}