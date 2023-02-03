const Usermodel = require('../models/userModel')

const user = require('../models/userModel')

class UserController{

    static async getalluser(req,res){
        var results = await Usermodel.getusers();
        if(results)
        console.log(results)
        res.send(results)

    }

    static async uploadimage(req,res){
        var id = req.body.id;
        var name = req.body.name;
        var data = req.body.data;
        res.send(id+" "+name+" "+data);
        // var results = await Usermodel.insertImg(id,name,data);
        // if(results)
        // res.send("data edited successful")
        // else
        // res.send("data edited failed")
    }
}
module.exports = UserController