import mongoose from "../db/connection.js";

const Schema = mongoose.Schema

const EventSchema = new Schema({
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
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    postId: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
    },
    eventId: {
        type: Schema.Types.ObjectId,
        ref: 'Event',
    }
})

export default mongoose.model('Event', EventSchema)