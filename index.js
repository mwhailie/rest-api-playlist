const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/restapi');
mongoose.Promise = global.Promise;


app.use(bodyParser.json());

//use
app.use('/api',require('./webapp/app'));

//error handling middleware
app.use(function(err, req, res, next){
  // console.log(err);
  res.status(422).send({error: err.message});
});

//listen for requests
app.listen(process.env.port || 4000, function(){
  console.log('listening');
});
