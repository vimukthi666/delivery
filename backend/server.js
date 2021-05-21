let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyparser = require('body-parser');
let dbConfig = require('./database/db');

//express route

const deliveryRoute = require('../backend/routes/delivery.route')


// mongodb connection

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true
}).then(()=>{
    console.log('Database successfully connected')
},
error=>{
    console.log('Could not connect to the database')
})

//******************************************************** */

//express application
const app = express();

//registering the body parser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));


app.use(cors());

app.use('/deliverys', deliveryRoute)

//port

const port = process.env.PORT || 4000;
const server = app.listen(port, ()=> {  
    console.log('connect to the port ' +port)
})

//not found error

app.use((req,res,next)=>{
    next(createError(404));
   
})


app.use(function(err,req,res,next){
    console.error(err.message);
    if(!err.statusCode)err.statusCode=500;
    res.status(err.statusCode).send(err.message);
})
