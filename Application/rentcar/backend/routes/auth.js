const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');


const Admin = require('../models/admin.model');

router.post('/', (req, res) => {
    const {username, password} = req.body;

    // Simple validation
    if(!username || !password){
        return res.status(400).json({ msg: 'Please enter all fields!'});
    }

    // Check for existing user
    Admin.findOne({username})
    .then(admin =>{
        if(!admin) return res.status(400).json({ msg: 'User does not exist'});
        
        // Validate password

        if(password != admin.password) return res.status(400).json({ msg: 'Invalid credentials!'});

        jwt.sign(
            { id: admin.id},
            config.get('jwtSecret'),
            { expiresIn: 3600},
            (err, token) => {
              if(err) throw err;
              res.json({
                token,
                admin
              })
            }
          )

    })
}) 

router.get('/admin', auth, (req, res) => {
    Admin.findById(req.admin.id)
        .select('-password')
        .then(admin => res.json(admin)); 
});

module.exports = router;