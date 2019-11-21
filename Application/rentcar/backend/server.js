const express = require('express');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('config');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// app.use(session({
//     name: 'test',
//     secret: 'secret',
//     saveUninitialized: true,
//     resave: true,
//     username: 'admin'
//   }));

const uri = config.get('ATLAS_URI');
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, function(err, db) {
    if (err) {
        console.log('Unable to connect to the server. Please start the server. Error:', err);
    } else {
        console.log('Connected to Server successfully!');
    }
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB databes connection established succesfully");
})


const adminsRouter = require('./routes/admins');
const carsRouter = require('./routes/cars');
const reservationsRouter = require('./routes/reservations');

app.use('/admins', adminsRouter);
app.use('/cars', carsRouter);
app.use('/reservations', reservationsRouter);
app.use('/auth', require('./routes/auth'));


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
