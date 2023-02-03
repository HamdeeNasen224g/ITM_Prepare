const mysql = require("mysql2");

//mysql connection
const db = mysql.createPool({
    host:'sql12.freesqldatabase.com',
    user:'sql12593903',
    password:'UpDj4QnW2m',
    database:'sql12593903',
    port:'3306'
})


db.getConnection(()=>{
    console.log('MSQL successfull connection!');
})


module.exports = db;

