const db = require('../config/db')

class Usermodel {

    static async getusers() {

        return new Promise(resolve => {
            db.query("select * from user", [], (error, results) => {
                if (!error) {
                    resolve(results)
                }
            })
        })
    }
    static async getdata() {

        return new Promise(resolve => {
            db.query("select * from image", [], (error, results) => {
                if (!error) {
                    resolve(results)
                }
            })
        })
    }

    static async insertImg(id, name, data) {
        return new Promise(resolve => {
        db.query("insert into image (name,id,data ) value (?,?,?)", [id, name, data], (err, result) => {
            if (!err)
                resolve(true)
            else
                console.log("error", err)
            resolve(false)
        })
    })
    }


}

module.exports = Usermodel