var mysql = require("mysql");

// if i's on heroku use this
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
// if not on heroku use local machine
else {
  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "!ntr0_Retr",
    database: "burgers_db"
  });
}


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
