const express =  require("express");

 const mydb = require('./config/db')

 const routeUser = require("./routes/userRouter")
const app = express();
const port = process.env.port || 3002;
app.use(express.json());


app.set('view engine','ejs')
app.set("views", "views")
 app.use("/user",routeUser);

app.listen(port,()=> console.log('Server is running on port '+port));


