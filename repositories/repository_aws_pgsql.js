const { Sequelize, Model, DataTypes } = require("sequelize");
//const logger = require('../logger/api.logger');

const   config = require('config-yml'),

//const connect = () => {

const hostName = config.db.pgsql.host;
const userName = config.db.pgsql.user;
const password = config.db.pgsql.password;
const database = config.db.pgsql.database;
const dialect = config.db.pgsql.dialect;

const sequelize = new Sequelize(database, userName, password, {
    host: hostName,
    dialect: dialect,
    operatorsAliases: false,
    pool: {
        max: 10,
        min: 0,
        acquire: 20000,
        idle: 5000
    }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("../model/user.model")(sequelize, DataTypes, Model);
exports.db = db
    //return db;

//}

/*module.exports = {
    connect
}*/