import React from 'react';

const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')
const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key:'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'
    }
}))

function sendemail(email) {
    return(
        transporter.sendMail({
            to:'vimukthijayasinghe98@gmail.com',
            from: 'roshendesilva1@gmail.com',
            subject:'Payment Success',
            html:'<h3>Payment Successfull</h3>'
        })
     
    );

    
}