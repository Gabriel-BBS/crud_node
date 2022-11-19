const Sequelize = require("sequelize");
const sequelize = new Sequelize('colorindo','postgres','postgres',{
    dialect:'postgres',
    host: 'localhost',
    port:'5432'
});

module.exports = sequelize;