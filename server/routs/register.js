import express from 'express'
import Profile from '../models/profile.js'
import JWT from '../models/jwt.js'
import { generateJWT } from '../utils/jwt.utils.js'

const registerRouter = express.Router()

registerRouter.post('/', async (req, res) => {
    try {
        const {username, password, name, sername} = req.body
        const jwt = new JWT({username, expirationDue: new Date(Date.now() + 60_000), accessToken: generateJWT(), refreshToken: generateJWT()})
        const profile = new Profile ({username, password, name, sername})
        await profile.save()
        await jwt.save()
        res.status(200).send(jwt)
    } catch (err) {
        res.status(500).send({err})
    }
})


export default registerRouter