const router = require('express').Router();
let Admin = require('../models/admin.model');
const bcrypt = require("bcrypt");
const session = require('express-session');



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
          res.json('Logged in!');
        }
        else{
          err => res.status(400).json('Error' + err);
        }
    }
    else{
      res.status(401).send('Incorrect username!');
    }
  })
})


// // Sign in

// router.route('/login').post((req, res) => {
//     let {username, password} = req.body;
//     Admin.findOne({username: username}, 'username email password', (err, userData) => {
//         if (!err){
//             let passwordCheck = bcrypt.compareSync(password, userData.password);
//             if(passwordCheck){
//                 req.session.loggedin=true;
//                 req.session.admin = {
//                     email: userData.email,
//                     username: userData.username,
//                     id: userData._id
//                 };
//                 res.status(200).send('You are logged in!');
//             }
//             else{
//                 res.status(401).send('Incorrect password!');
//             }
//         }
//         else{
//             res.status(401).send('Invalid login credentials!');
//         }
//     } )
// })


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


// // Logout

// app.all('/logout', (req, res) => {
//     req.session.destroy();
//     res.status(200).send('logout successful')
//   })

/*
  //authorization
  app.use((req, res, next) => {
    if (req.session.admin) {
      next();
    } else {
      res.status(401).send('Authrization failed! Please login');
    }
  });
  
  app.get('/protected', (req, res) => {
    res.send(`You seeing this because you have a valid session.
          Your username is ${req.session.admin.username} 
          and email is ${req.session.admin.email}.
      `)
  })

*/

module.exports = router;