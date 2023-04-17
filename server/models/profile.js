import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String,
        unique: true
    },
    password: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    surname: String

})

const Profile = mongoose.model('Profile', ProfileSchema);

export default Profile