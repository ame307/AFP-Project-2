const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load input validation
const validateLoginInput = require("../../validation/login");

// Load User model
const Admin = require("../../models/admin.model");


router.post("/login", (req, res) => {

    // Form Validation
    const {errors, isValid} = validateLoginInput(req.body);

    // Check Validation
    if(!isValid){
        return res.status(400).json(errors);
    }

    const username = req.body.username;
    const password = req.body.password;

    // Find user by username
    Admin.findOne({username})
        .then(admin => {
            // Check if user exists
            if(!admin){
                return res.status(404).json({ usernamenotfound: "Username not found!"});
            }
            
            //Check password
            if(password == admin.password){
                // Create JWT Payload
                const payload = {
                    id: admin.id,
                    username: admin.username
                };

                // Sign token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 3600
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
            }
            else{
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect!"});
            }
        });
});

module.exports = router;