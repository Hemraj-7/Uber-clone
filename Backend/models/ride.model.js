const mongooes = require('mongoose');


const rideSchema = new mongooes.Schema({
    user: {
        type: mongooes.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    captain: {
        type: mongooes.Schema.Types.ObjectId,
        ref: 'Captain'
    },
    pickup: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    fare: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'ongoing', 'completed', 'cancelled'],
        default: 'pending'
    },
    duration: {
        type: Number
    }, // in seconds
    distance: {
        type: Number
    }, // in meters
    paymentId: {
        type: String
    },
    orderId: {
        type: String
    },
    signature: {
        type: String
    },
    otp:{
        type:String,
        select: false,
        required: true
    }
})

module.exports = mongooes.model('ride', rideSchema);