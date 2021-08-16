const mysql = require("mysql2");
const config = require("./config");

//connection
const connection = mysql.createConnection(config);

const dropAccount = "DROP TABLE Account";
connection.query(dropAccount);
const dropIndividual = "DROP TABLE Individual";
connection.query(dropIndividual);
const dropClient = "DROP TABLE Client";
connection.query(dropClient);
const dropClientType = "DROP TABLE ClientType";
connection.query(dropClientType);

//create table ClientType

const ClientType =
  "CREATE TABLE ClientType (id int primary key auto_increment, name varchar(255) not null)";

connection.query(ClientType, function (err, results) {
  if (err) console.log(err);
  else console.log("Таблица создана ClientType");
});

//create table Client

const Client =
  "CREATE TABLE Client (id int primary key auto_increment,name varchar(255) not null,clientTypeId int, foreign key Client (clientTypeId) references ClientType (id))";

connection.query(Client, function (err, results) {
  if (err) console.log(err);
  else console.log("Таблица создана Client");
});

//create table Individual

const Individual =
  "CREATE TABLE Individual (id int primary key auto_increment, clientId int not null, name varchar(255) not null,foreign key Individual (clientId) references Client (id))";

connection.query(Individual, function (err, results) {
  if (err) console.log(err);
  else console.log("Таблица создана Individual");
});

//create table Account

const Account =
  "CREATE TABLE Account (id int primary key auto_increment, individualId int not null, name varchar(255) not null, individualName varchar(255) null, clientTypeName varchar(255) null, foreign key Account (individualId) references Individual (id))";

connection.query(Account, function (err, results) {
  if (err) console.log(err);
  else console.log("Таблица создана Account");
});

connection.end();
