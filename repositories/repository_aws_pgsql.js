const config = require('config-yml');
var pgp = require("pg-promise")(/*options*/);

let pgdb = {};
config.db.pgsql.map((c)=>{
    pgdb = pgp(`postgres://${c.username}:${c.password}@${c.host}:${c.port}/${c.database}`);
});

exports.pgsql_db = pgdb;
