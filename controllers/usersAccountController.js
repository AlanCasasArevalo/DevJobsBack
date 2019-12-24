const mongoose = require('mongoose');
const Users = require('../models/Users');

exports.userCreation = async (req, res, next) => {
    const user = new Users(req.body);
    const userToSave = await user.save();
    if (userToSave && typeof userToSave !== 'undefined') {
        res.status(203).json({
            ok: true,
            message: 'Usuerio creado ok',
            userToSave
        })
    } else {
        res.status(500).json({
            ok: false,
            message: 'No se pudo crear este registro en la base de datos'
        })
    }
};


