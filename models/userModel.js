const db = require('../config/db')

class Usermodel {

    static async getusers() {

        return new Promise(resolve => {
            db.query("select * from users", [], (error, results) => {
                if (!error) {
                    resolve(results)
                }
            })
        })
    }

    static async insertImg(id, name, data) {

        db.query("insert into image (name,id,data ) value (?,?,?)", [id, name, data], (err, result) => {
            if (!err)
                resolve(true)
            else
                console.log("error", err)
            resolve(false)
        })
    }


}

module.exports = Usermodel