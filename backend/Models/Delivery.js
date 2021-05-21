const mongoose = require('mongoose')
const Schema = mongoose.Schema

let deliverySchema = new Schema({

    contactName : {
        type: String 
    },
    address : {
        type: String
    },
    country : {
        type: String
    },
    postalCode : {
        type: String
    },
    email : {
        type: String
    }

},{
    collection: 'deliverys'
})

module.exports = mongoose.model('Delivery', deliverySchema)
