const mysql = require("mysql2");
const config = require("./config");

//connection
const connection = mysql.createConnection(config);

//update value

// const updateCTNAccount = "UPDATE Account SET clientTypeName = ? ";
// const value = "newValue";

// connection.query(updateCTNAccount, value);

//update Account individualName
const updateAccount =
  "UPDATE Client  JOIN Individual ON Individual.clientId =  Client.id JOIN Account ON Account.individualId = Individual.id SET Account.individualName = ? where Client.name = 'Kate'";
const updateValue = "updateValue";

connection.query(updateAccount, updateValue, function (err, result) {
  err ? console.error(err.message) : console.log(result);
});

connection.end();
