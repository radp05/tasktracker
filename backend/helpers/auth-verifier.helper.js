var UserModel = require('../models/user.model');

var authHelper = {}

authHelper.verifyUser = async (req,res) => {
   
    try {
        let result = await UserModel.findOne({ userName: req.body.userName, password: req.body.password });
        return {
            message: "success",
            data:result
        };
    } catch (err) {
        return {
            message: "Internal Error",
            error: error
          };
    } 
}

module.exports = authHelper;
