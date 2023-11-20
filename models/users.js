import mongoose from "../db/connection.js";
// import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const SALT_ROUNDS = 8

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        minLength: 8,
        required: true
    },
    notifications: {
        type: [String],
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
},{
    timestamps: true,
    toJSON: {
        transform: function(doc, user){
            delete user.password
            return user
        }
    }
})

// userSchema.pre('save', async function(next){
//     if (!this.isModified('password')) return next()
//     this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
//     return next()
// })

export default mongoose.model('User', UserSchema)
