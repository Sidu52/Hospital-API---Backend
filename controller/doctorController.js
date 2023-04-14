const jwt = require('jsonwebtoken');
const doctor = require('../model/doctor');

//doctorRegister Here Using name and password
module.exports.register = async (req, res) => {
    try {
        let findDoctor = await doctor.findOne({ username: req.body.username });
        if (findDoctor) {
            return res.status(200).json({
                message: "Already Registered, Please Login to Continue!",
                data: {
                    doctor: findDoctor
                }
            });
        }
        findDoctor = await doctor.create(req.body);
        return res.status(200).json({
            message: "Doctor Register Succesfull",
            data: {
                doctor: findDoctor
            }
        })
    } catch (err) {
        return res.status(404).json({
            message: "Internal Server Error",
            err: err
        });
    }
}

//doctorLogin Controller
module.exports.login = async (req, res) => {
    try {
        let findDoctor = await doctor.findOne({ username: req.body.username });
        if (findDoctor && req.body.password == findDoctor.password) {

            return res.status(200).json({
                message: "Login Sucesfully",
                data: {
                    //genrate Web token for authenticate by baber token
                    token: jwt.sign(findDoctor.toJSON(), 'Sidhu', { expiresIn: '2000000' })
                }
            });
        }
        return res.status(422).json({
            message: "Username/Password Not Match"
        })
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error",
            err: err
        });
    }
}