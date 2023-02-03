const exp = require('constants');
const Usermodel = require('../models/userModel')

const user = require('../models/userModel')

class UserController{

    static async getalluser(req,res){
        var results = await Usermodel.getusers();
        if(results)
        console.log(results)
        res.send(results)

    }

    static async getalldata(req,res){
        var results = await Usermodel.getdata();
        if(results)
        console.log(results)
        res.send(results)
    }

    static async uploadimage(req,res){
        var id = req.body.id;
        var name = req.body.name;
        var data = req.body.data;
        res.send(id+" "+name+" "+data);
        console.log(id+name+data);
    }
}
module.exports = UserController