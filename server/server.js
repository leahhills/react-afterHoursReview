//require the dependencies we just got
const express= require('express');
const bodyParser = require('body-parser');
const controller = require('./controller.js');
const cors = require('cors');

let app = express();
app.use(bodyParser.json());
app.use(cors())
//app.use(express.static(__dirname +'/../app/build')); //this line not totally necessary at this moment

let port = 3030;




//created endpoint hey i want api products hekoful to have controller whrere cb are
app.get('/api/products',controller.getProducts);




app.listen(port,()=>{
    console.log("Started server on port "+port);


})

//server is all set up at this point! sweet
// server running backend server running frontend