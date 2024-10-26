import mongoose from 'mongoose';
const Schema = mongoose.Schema

//title, date, name of service, address, name
const jobSchema = new Schema({
    title: {
        type: String,
        require: true,
        trim: true
    },
    description: {
        type: String,
        default: 'No description provided.'
    },
    price: {
        type: Number,
        default: 10000
    },
    location: {
        type: String,
        default: 'no location'
    },
    contractorId: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    imageId: {
        type: String
    }
})

export const Job = mongoose.model('Job', jobSchema);