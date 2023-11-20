import mongoose from "../db/connection.js";

const Schema = mongoose.Schema

const PostSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    text:{
        type: String,
        required: true,
    },
    likes:[{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    dislikes:[{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    imageUrl: {
        type: String,
        default: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: false
        }
    },
    category: {
        type: String,
        // enum: ['Grooming', 'Healthcare', 'Nutrition', 'Training', 'Other'],
        required: true
    }
}, {
    timestamps: true
    })


export default mongoose.model('Post', PostSchema)
