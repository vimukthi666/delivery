let mongoose = require('mongoose');
let express = require('express');
let router = express.Router();

// Importing the delivery model

let deliverySchema = require('../Models/Delivery');


//Create the delivery 

router.route('/Adddelivery').post((req,res,next) =>{
    deliverySchema.create(req.body, (error,data)=> {
        if(error){
            return next(error)
        }else{
            console.log(data)
            res.json(data)
        }
    })

})


module.exports = router;