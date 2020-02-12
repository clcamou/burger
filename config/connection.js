//set up mysql
let mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL); 
} else {
     connection = mysql.createConnection({
        host: "localhost", 
        port: 3306, 
        user: "root", 
        password: "Greenapples_45", 
        database: "burgers_db"
    });
};

//make connection 
connection.connect(function(err){
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});


    mysql://l0od1ugshspvafn9:akz1pj6s9k9rk8pl@wiad5ra41q8129zn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ldpkrrlc6qa837l9

//export connection for our ORM to use
module.exports = connection;
