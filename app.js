var express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors')

const database = require('./config/db');
// const Deposito = require('./models/deposito');
// database.sync();
const DepRouter = require('./routes/dep.router') 

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/deposito',DepRouter);

app.get('/', function(req, res){
   res.send("Hello World!");
});

app.listen(3000,function(){
  console.log('Servidor está rodando!');
});