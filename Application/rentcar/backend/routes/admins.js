const router = require('express').Router();
let Admin = require('../models/admin.model');

router.route('/').get((req, res) =>{
    Admin.find()
        .then(admins => res.json(admins))
        .catch(err => res.status(400).json('Error: ' + err));
});

/*
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
*/

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

router.post('/login', function (req, res) {
  let username = req.body.username;
  let password = req.body.password;
  Admin.findOne({username: username}, (err, userData) => {
    if(!err && userData !== null){
        if(password == userData.password){

          req.session.username = username;
          const sessUser = req.session.username;
          res.status(200).send('Login successful!');
        }
        else{
          res.status(401).send('Incorrect password!');
        }
    }
    else{
      res.status(401).send('Incorrect username!');
    }
  })
})

// Logout

router.all('/logout', (req, res) => {
  const sessUser = req.session.username;
  if(sessUser){
    req.session.destroy();
    res.status(200).send('Logout successful!');
  }
  else{
    res.status(401).send("You're not logged in!");
  }
})

// // Sign up

// router.route('/signup').post((req, res) => {
//     let {username, email, password} = req.body;

//     let adminData = {
//         username,
//         email,
//         password: bcrypt.hashSync(password, 5)
        
//     };

//     let newAdmin = new Admin(adminData);
//     newAdmin.save()
//         .then(() => res.json('Admin added!'))
//         .catch(err => res.status(400).json('Error ' + err));
// })

module.exports = router;