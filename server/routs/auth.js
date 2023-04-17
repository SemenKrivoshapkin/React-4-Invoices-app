import  express from "express"
import Profile from "../models/profile.js"
import { generateJWT } from "../utils/jwt.utils.js"


const authRouter = express.Router()

authRouter.post('/', async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await Profile.find({username, password})
        if(user.length) {
            return res.status(200).send({ name: user[0].name, surname: user[0].surname})
        }
        res.status(403).send({status: 'not found'})
    } catch (error) {
        res.status(401).send({ status: "err"})
    }
})

export default authRouter
