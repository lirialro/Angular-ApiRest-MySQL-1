let mysql = require("mysql");
let connection = mysql.createConnection({
    host : "localhost",
    user: "root",
    password : null,
    database: "angular"
});


connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE discos (id INT AUTO_INCREMENT PRIMARY KEY, titulo VARCHAR(100), interprete VARCHAR(100), anyoPublicacion INT(4))";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });

/*

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE profesores (id INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(255), asignatura VARCHAR(255))";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });



  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE asignaturas (id INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(255), Profesor VARCHAR(255))";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });

  
  connection.connect(function(err) {
    if (err) throw err;
    var sql = "ALTER TABLE alumnos ADD FechaDeNacimiento VARCHAR(255)";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Column added");
    });
  });

  
  connection.connect(function(err) {
    if (err) throw err;
    var sql = "ALTER TABLE alumnos DROP COLUMN FechaDeNacimiento";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Column deleted");
    });
  });

  connection.connect(function(err) {
    if (err) throw err;
    var sql = "DROP TABLE asignaturas";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table deleted");
    });
  });

  */


  
