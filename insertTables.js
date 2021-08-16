const mysql = require("mysql2");
const config = require("./config");

//connection
const connection = mysql.createConnection(config);

//insert in ClientType

const inClientType = "INSERT INTO ClientType (name) VALUES ?";
const clientTypeName = [["Type1"], ["Type2"], ["Type3"]];

connection.query(inClientType, [clientTypeName], function (err) {
  err ? console.log(err.message) : console.log("insert in ClientType");
});

//insert in Client

const inClient = "INSERT INTO Client (name, clientTypeId) VALUES ?";
const clientName = [
  ["Kate", 1],
  ["Hanna", 2],
  ["Mark", 3],
];

connection.query(inClient, [clientName], function (err) {
  err ? console.log(err.message) : console.log("insert in Client");
});

//insert in Individual

// const arrClientId = [1, 2, 3];
// const individualName = [];

// arrClientId.forEach((id) => {
//   for (let i = 1; i <= 50; i++) {
//     individualName.push([id, `IndividualName${i}`]);
//   }
// });

// console.log(individualName, "yes");

// const inIndividual = "INSERT INTO Individual (clientId, name) VALUES ?";

// connection.query(inIndividual, [individualName], function (err) {
//   err ? console.log(err.message) : console.log("insert in Individual");
// });

//insert in Account
const selectIndividual = "SELECT * FROM Individual";
const inAccount = "INSERT INTO Account (individualId, name) VALUES ?";

connection.query(selectIndividual, function (err, result, fields) {
  err ? console.log(err.message) : console.log(result, fields);
  if (err) return;

  const accValues = result.map((individual) => [
    individual.id,
    `accountNameFor${individual.name}`,
  ]); // [individualId, name] for account table insert
  console.log(result, accValues, "dfdssfd");

  connection.query(inAccount, [accValues], function (err) {
    err ? console.log(err.message) : console.log("insert in Account");
  });

  connection.end();
});
