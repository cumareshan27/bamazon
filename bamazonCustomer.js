var mysql = require("mysql");
const cTable = require('console.table');
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Password123",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  queryProducts();
  

});

function queryProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    // for (var i = 0; i < res.length; i++) {
    //   console.log(res[i].id + " | " + res[i].pruduct_name + " | " + res[i].department_name+ " | " + res[i].genre);
    // }
    console.table(res);
    start(); //
  });
  
}

function start() {
    inquirer
      .prompt([{
        name: "id",
        type: "input",
        message: "Give the ID of the Product",
        
      },{
          name: "units",
          type: "input",
          message: "how many units do you need",
      }])
      .then(function(answer) {
        // based on their answer, either call the bid or the post functions
        connection.query("SELECT * FROM products where ?",{id:answer.id}, function(err, results) {
            if (err) throw err;
            //console.table(results);
            var itemprice = results[0].price;
            console.log("Price per your item: " + itemprice);
            if(results[0].stock_quantity > answer.units){
                connection.query(
                    "UPDATE  products SET ? WHERE ?",
                    [
                      {
                        stock_quantity: results[0].stock_quantity - answer.units,   
                      },
                      {
                        id: answer.id
                      }
                    ],
                    function(error) {
                      if (error) throw err;
                      console.log("stock_quantity updated successfully");
                      queryProducts();
                    }
                  );
                  var total = itemprice * answer.units;
                  console.log("Your total price for the items: " + total);
            }else{
              console.log("Your requested quantity cannot be fullfilled")
            }
            console.log(results[0].stock_quantity);
            //console.log(results);
        })
      });
  }
