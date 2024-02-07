var con = require("../database/connection");

var sql = "CREATE TABLE IF NOT EXISTS products (id INT(11) AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, price VARCHAR(255) NOT NULL, img VARCHAR(255) NOT NULL, qty VARCHAR(255) NOT NULL, product_code INT(11) NOT NULL UNIQUE, discount INT(11) NOT NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)";

con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
});

con.query("SELECT * FROM products", function (err, result, fields) {
    if (err) throw err;
    return result;
});

con.end();
