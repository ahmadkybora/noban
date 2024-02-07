var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "ahmadkybora",
    password: "09392141724abc",
    database: "noban"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con;
