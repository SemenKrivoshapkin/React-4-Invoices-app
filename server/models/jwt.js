import mongoose from "mongoose";

const JWTSchema = new mongoose.Schema({
    username: String,
    expirationDue: Date,
    accessToken: String,
    refreshToken: String
})

const JWT = mongoose.model('JWT', JWTSchema)
export default JWT