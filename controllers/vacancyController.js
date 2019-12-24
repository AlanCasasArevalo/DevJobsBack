const Vacancy = require('../models/Vacancies');

exports.newVacancyForm = (req, res) => {
    res.status(200).json({
        ok: true,
        message: 'Todo desde vacancy'
    })
};

exports.addNewVacancy = async (req, res) => {
    const vacancyBody = await req.body;
    if (vacancyBody && typeof vacancyBody !== 'undefined') {
        const vacancy = new Vacancy(vacancyBody);
        if (typeof vacancyBody.skills == "string") {
            vacancy.skills = vacancyBody.skills.split(',');
        }
        const newVacancy = await vacancy.save();
        if (newVacancy) {
            console.log('', newVacancy);
            let url = `/vacancies/${newVacancy.url}`;
            res.status(203).json({
                ok: true,
                message: 'Creado ok',
                vacancy,
                url
            })
        } else {
            res.status(500).json({
                ok: false,
                message: 'No se pudo crear este registro en la base de datos'
            })
        }

    } else {
        res.status(400).json({
            ok: false,
            message: 'No ha formado bien los datos de envio del cuerpo de la peticion'
        })
    }
};

exports.showVacancy = async (req, res, next) => {
    const vacancy = await Vacancy.findOne({url: req.params.url});
    if (!vacancy) return next();
    if (vacancy && typeof vacancy !== 'undefined') {
        res.status(200).json({
            ok: true,
            message: 'Todo desde URL',
            vacancy
        })
    } else {
        res.status(500).json({
            ok: false,
            message: 'No se pudo crear este registro en la base de datos'
        })
    }
};

exports.formEditVacancy = async (req, res, next) => {
    const vacancy = await Vacancy.findOne({url: req.params.url});

    if (vacancy && typeof vacancy !== 'undefined') {
        res.status(200).json({
            ok: true,
            message: 'Todo desde URL',
            vacancy
        })
    } else {
        res.status(400).json({
            ok: false,
            message: 'No ha formado bien los datos de envio del cuerpo de la peticion'
        })
    }
};

exports.editVacancy = async (req, res) => {
    const vacancyUpdated = req.body;
    if (typeof vacancyUpdated.skills == "string") {
        vacancyUpdated.skills = vacancyUpdated.skills.split(',');
    }
    if (vacancyUpdated && typeof vacancyUpdated !== 'undefined') {
        const vacancyToUpdate = await Vacancy.findOneAndUpdate({url: req.params.url}, vacancyUpdated,
            {
                new: true,
                runValidators: true
            });
        if (vacancyToUpdate && typeof vacancyToUpdate !== 'undefined') {
            console.log('', vacancyToUpdate);
            let url = `/vacancies/${vacancyToUpdate.url}`;
            res.status(203).json({
                ok: true,
                message: 'Actualizado ok',
                vacancyUpdated,
                url
            })
        } else {
            res.status(500).json({
                ok: false,
                message: 'No se pudo crear este registro en la base de datos'
            })
        }
    }
};
