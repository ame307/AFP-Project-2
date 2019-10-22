const router = require('express').Router();
let Admin = require('../models/admin.model');

router.route('/').get((req, res) =>{
    Admin.find()
        .then(admins => res.json(admins))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const newAdmin = new Admin({
        username,
        email,
        password
    });

    newAdmin.save()
    .then(() => res.json('Admin added!'))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/:id').get((req, res) => {
    Admin.findById(req.params.id)
        .then(admin => res.json(admin))
        .catch(err => res.status(400).json('Error' + err));
});

router.route('/:id').delete((req, res) => {
    Admin.findByIdAndDelete(req.params.id)
        .then(admin => res.json('Admin deleted!'))
        .catch(err => res.status(400).json('Error' + err));
});

router.route('/update/:id').post((req, res) => {
    Admin.findById(req.params.id)
        .then(admin => {
            admin.username = req.body.username;
            admin.email = req.body.email;
            admin.password = req.body.password;

            admin.save()
                .then(admin => res.json('Admin updated!'))
                .catch(err => res.status(400).json('Error' + err));
        })
        .catch(err => res.status(400).json('Error' + err));
});

module.exports = router;