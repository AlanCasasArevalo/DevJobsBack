const mongoose = require('mongoose');
const Users = require('../models/Users');
/*https://express-validator.github.io/*/
const {check, body, validationResult} = require('express-validator');

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

exports.registerValidation = async (req, res, next) => {
    //await check('name', 'El nombre necesita al menos 2 letras').isLength({min: 2}).run(req);
    await check('name', 'El nombre no puede ir vacio').notEmpty().run(req);
    await check('password', 'El password no cumple los requisitos: Minimo 6 caracteres').isLength({min: 6}).run(req);
    await check('email', 'El email introducido no es valido').normalizeEmail().isEmail().run(req);

    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(422).json({errors: result.array()});
    } else {
        next()
    }
};



