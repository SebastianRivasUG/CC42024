const mysql = require('mysql2');
const conn = mysql.createConnection(
    {
        host:  "root-user.mysql.database.azure.com",
        user: "main",
        password: "Abc123456",
        database: "backend",
    }
)

conn.connect( (err) => {
    if(err){
        console.log("Error en DB",err)
    } else {
        console.log("Conectado a DB")
    }
});

module.exports = conn;