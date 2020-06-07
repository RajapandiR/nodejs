import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name : { type: String, unquie: true },
    age : { type: String },
}, { timestamp: true });

const User = mongoose.model('user', userSchema)

export default User;