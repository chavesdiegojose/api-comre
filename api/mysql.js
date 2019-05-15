const mysql = require ('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'comre'
});

mysqlConnection.connect(function (err) {

    if(err){console.log(err); return;}
    else {console.log('Mysql is connect');}

});

module.exports = mysqlConnection;