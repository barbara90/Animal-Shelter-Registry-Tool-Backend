const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();
Animals = require('./src/modules/Animals');
Owners  = require('./src/modules/Owners');

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log('Successfully connected to the database');
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

//CORS
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// Get all the elements from animals
app.get('/animal', (req, res) => {
    Animals.getAnimals((err, animal) => {
        try {
            res.status(200).json(animal);
        } catch (err) {
            res.status(500);
            console.log(res.status, err);
        }
    });
});

//Get one element from animals
app.get('/animal/:_id', (req, res) => {
    Animals.getAnimalById(req.params._id, (err, animal) => {
        try {
            res.status(200).json(animal);
        } catch (err) {
            res.status(500);
            console.log(res.status, err);
        }
    });
});

//Create new element in animals
app.post('/animal', (req, res) => {
    const animal = req.body;
    Animals.addAnimals(animal, (err, animal) => {
         try {
            res.status(201).json(animal);
        } catch (err) {
            res.status(500);
            console.log(res.status, err);
        }
    });
});

//Update a data in an existing element in animals
app.put('/animal/:_id', (req, res) => {
    let id = req.params._id;
    let animal = req.body;
    Animals.updateAnimal(id, animal, {}, (err, animal) => {
        try {
            res.status(200).json(animal);
        } catch (err) {
            res.status(500);
            console.log(res.status, err);
        }
    });
});

//Delete an element from animals
app.delete('/animal/:_id', (req, res) => {
    let id = {_id:req.params._id};
    Animals.removeAnimal(id, (err, animal) => {
        try {
            res.status(200).json(animal);
        } catch (err) {
            res.status(500);
            console.log(res.status, err);
        }
    });
});

// Get all the elements from owners
app.get('/owner', (req, res) => {
    Owners.getOwners((err, owners) => {
        try {
            res.status(200).json(owners);
        } catch (err) {
            res.status(500);
            console.log(res.status, err);
        }
    });
});

//Get one element from owners
app.get('/owner/:_id', (req, res) => {
    Owners.getOwnerById(req.param._id, (err, owner) => {
        try {
            res.status(200).json(owner);
        } catch (err) {
            res.status(500);
            console.log(res.status, err);
        }
    });
});

//Create new element in owners
app.post('/owner', (req, res) => {
    let owner = req.body;
    Owners.addOwner(owner, (err, owner) => {
        try {
            res.status(201).json(owner);
        } catch (err) {
            res.status(500);
            console.log(res.status, err);
        }
    });
});

//Update a data in an existing element in owners
app.put('/owner/:_id', (req, res) => {
    let id = req.params._id;
    let owner = req.body;
    Owners.updateOwner(id, owner, {}, (err, owner) => {
        try {
            res.status(200).json(owner);
        } catch (err) {
            res.status(500);
            console.log(res.status, err);
        }
    });
});

//Delete an element from owners
app.delete('/owner/:_id', (req, res) => {
    let id = {_id: req.params._id};
    Owners.removeOwner(id, (err, owner) => {
        try {
            res.status(200).json(owner);
        } catch (err) {
            res.status(500);
            console.log(res.status, err);
        }
    });
});

// listen for requests
app.listen(3001, () => {
    console.log('Server is listening on port 3001');
});
