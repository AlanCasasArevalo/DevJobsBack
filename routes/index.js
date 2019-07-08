const express = require('express');
const homeController = require("../controllers/homeController");
const router = express.Router();

module.exports = () => {

    router.get('/', (req, res) => {
       res.status(200).json({
           ok: true,
           message: 'Todo ok'
       })
    });

    router.get('/home',
        homeController.showJobs
    );

    return router
};







