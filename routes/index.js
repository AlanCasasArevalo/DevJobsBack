const express = require('express');
const router = express.Router();

module.exports = () => {

    router.get('/', (req, res) => {
       res.status(200).json({
           ok: true,
           message: 'Todo ok'
       })
    });

    return router
};







