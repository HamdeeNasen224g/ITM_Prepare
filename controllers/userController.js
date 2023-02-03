const Usermodel = require('../models/userModel')

const user = require('../models/userModel')

class UserController{

    static async getalluser(req,res){
        var results = await Usermodel.getusers();
        if(results)
        console.log(results)
        res.send(results)

    }
}
module.exports = UserController