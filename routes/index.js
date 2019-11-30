const express = require('express');
const homeController = require("../controllers/homeController");
const vacancyController = require("../controllers/vacancyController");
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

    router.get('/vacancies/new',
        vacancyController.newVacancyForm
    );

    router.get('/vacancies/:url',
        vacancyController.showVacancy
    );




    //Security paths
    router.post('/vacancies/new',
        vacancyController.addNewVacancy
    );

    router.get('*', async (req, res) => {
        res.status(404).json({
            result: false,
            message: 'No existe esa direccion'
        })
    });

    router.post('*', async (req, res) => {
        res.status(404).json({
            result: false,
            message: 'No existe esa direccion'
        })
    });

    router.put('*', async (req, res) => {
        res.status(404).json({
            result: false,
            message: 'No existe esa direccion'
        })
    });

    router.delete('*', async (req, res) => {
        res.status(404).json({
            result: false,
            message: 'No existe esa direccion'
        })
    });

    router.patch('*', async (req, res) => {
        res.status(404).json({
            result: false,
            message: 'No existe esa direccion'
        })
    });

    router.head('*', async (req, res) => {
        res.status(404).json({
            result: false,
            message: 'No existe esa direccion'
        })
    });

    router.trace('*', async (req, res) => {
        res.status(404).json({
            result: false,
            message: 'No existe esa direccion'
        })
    });


    router.options('*', async (req, res) => {
        res.status(404).json({
            result: false,
            message: 'No existe esa direccion'
        })
    });
    
    router.patch('*', async (req, res) => {
        res.status(404).json({
            ok: false,
            message: 'Direccion no encontrada'
        })
    });

    router.delete('*', async (req, res) => {
        res.status(404).json({
            ok: false,
            message: 'Direccion no encontrada'
        })
    });

    return router
};







