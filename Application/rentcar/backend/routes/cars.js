const router = require('express').Router();
let Car = require('../models/car.model');

router.route('/').get((req, res) =>{
    Car.find()
        .then(cars => res.json(cars))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const brand = req.body.brand;
    const model = req.body.model;
    const consumption = Number(req.body.consumption);
    const plateNumber = req.body.plateNumber;

    const newCar = new Car({
        brand,
        model,
        consumption,
        plateNumber
    });

    newCar.save()
    .then(() => res.json('Car added!'))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/:id').get((req, res) => {
    Car.findById(req.params.id)
        .then(car => res.json(car))
        .catch(err => res.status(400).json('Error' + err));
});

router.route('/:id').delete((req, res) => {
    Car.findByIdAndDelete(req.params.id)
        .then(car => res.json('Car deleted!'))
        .catch(err => res.status(400).json('Error' + err));
});

router.route('/update/:id').post((req, res) => {
    Car.findById(req.params.id)
        .then(car => {
            car.brand = req.body.brand;
            car.model = req.body.model;
            car.consumption = Number(req.body.consumption);
            car.plateNumber = req.body.plateNumber;

            car.save()
                .then(car => res.json('Car updated!'))
                .catch(err => res.status(400).json('Error' + err));
        })
        .catch(err => res.status(400).json('Error' + err));
});

module.exports = router;