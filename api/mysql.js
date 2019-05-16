const mysql = require ('mysql');
//localhost
/*const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'comre'
});*/

//dev
const mysqlConnection = mysql.createConnection({
    host: 'b5nyh9u5ocrhixl8r6ux-mysql.services.clever-cloud.com',
    user: 'ulzi2ogu8xsr28vp',
    password: 'qKLYl5MZ3yMqXIl29Jt1',
    database: 'b5nyh9u5ocrhixl8r6ux'
});

mysqlConnection.connect(function (err) {

    if(err){console.log(err); return;}
    else {console.log('Mysql is connect');}

});

module.exports = mysqlConnection;