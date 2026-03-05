const { saveUser } = require('../models/userModel')

const createUser = async (req, res, next) =>{
    try{
        const user = await saveUser(req.body)
        res.status(201).json({
            success: true,
            data: user
        })
    }catch(err){
        next(err)
    }
}

module.exports = {createUser}