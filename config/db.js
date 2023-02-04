const mysql = require("mysql");

//mysql connection
const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'love',
    port:'3306'
})


db.getConnection(()=>{
    console.log('MSQL successfull connection!');
})


module.exports = db;

