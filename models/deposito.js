const Sequelize = require('sequelize');
const database = require('../config/db.js');

const Deposito = database.define('deposito',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    cor:{
        type:Sequelize.STRING,
        allowNull:true
    },
    und:{
        type:Sequelize.STRING,
        allowNull:true
    },
    quant:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
},
{
    schema:'api_pcr'                      
  });


module.exports = Deposito;