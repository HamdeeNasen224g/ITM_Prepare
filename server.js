const express =  require("express");
const mydb = require('./config/db')
const routeUser = require("./routes/userRouter")
const app = express();
const path = require('path');
const port = process.env.port || 3002;
app.use(express.json());

//path to view
app.set('view engine','ejs')
app.set("views", "views")

//path to images,css
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images',express.static('images'));

//path to page
app.use("/user",routeUser);  

app.listen(port,()=> console.log('Server is running on port '+port));



