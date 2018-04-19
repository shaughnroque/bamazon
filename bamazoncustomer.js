var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
});

function customerProducts() {
    console.log("Welcome To Bamazon!");
    var table = ("SELECT * FROM products")
    connection.query(table, function (err, results) {
        if (err) throw err;
        console.log(results);
    })
};

function productId() {
    inquirer.prompt([
        {
            name: "productId",
            type: "input",
            message: "What is the Id of the product you want to purchase?"
        },
        {
            name: "stock",
            message: "How many would you like?",
            type: "input"

        }
    ])
        .then(answers => {
            connection.query("SELECT * FROM products WHERE product_id = ?", answers.productId, function (err, results) {
                for (var i = 0; i < results.length; i++) {
                    console.log(results[i].product_name + " has this much in stock " + results[i].stock_quantity)
                    if (answers.stock > results[i].stock_quantity) {
                        console.log("Sorry you missed the drop try again next time");
                        customerProducts();
                    }
                    if (answers.stock < results[i].stock_quantity) {
                        console.log("Got Em!")
                        connection.query("UPDATE products SET stock_quantity = ? WHERE item_id= ?", function (err, results) {
                            connection.query("SELECT product_id, product_name,department_name,price,stock_quantity", function (err, results) {
                                for (var i = 0; i < results.length; i++) {

                                    console.log(results[i].product_id, results[i].product_name, results[i].department_name, results[i].price, results[i], stock_quantity);

                                }
                            });

                        });
                    }
                }
            })
            productId();

        })
}
productId();
customerProducts();