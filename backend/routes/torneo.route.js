const express = require('express');
const router = express.Router();
const Torneo = require('../models/Torneo');

// CREATE Torneo
router.post('/crear', async (req, res, next) => {
    try {
        const data = await Torneo.create(req.body);
        console.log(data);
        res.json(data);
    } catch (error) {
        return next(error);
    }
});

// READ Torneo
router.get('/', async (req, res, next) => {
    try {
        const data = await Torneo.find();
        res.json(data);
    } catch (error) {
        return next(error);
    }
});

// UPDATE Torneo
router.route('/editar/:id')
    .get(async(req, res, next) => {
        try {
            const data = await Torneo.findById(req.params.id);
            res.json(data);
        } catch (error) {
            return next(error);
        }
    })
    .put(async(req,res,next) => {
        try {
            const data = await Torneo.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true }
            );
            console.log(data);
            res.json(data);
        } catch (error) {
            return next(error);
        }
    });

// DELETE Torneo
router.delete('/eliminar/:id', async(req, res, next) => {
    try {
        const data = await Torneo.findByIdAndDelete(req.params.id);
        res.status(200).json({
            msg: data,
        });
    } catch (error) {
        return next(error);
    }
});

module.exports = router;