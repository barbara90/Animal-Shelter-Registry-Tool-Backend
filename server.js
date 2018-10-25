const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();
Animals = require('./src/modules/Animals');
Owners  = require('./src/modules/Owners');

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Get all the elements from animals
app.get('/animal', (req, res) => {
    Animals.getAnimals((err, animals) => {
        if(err) throw err;
        res.json(animals);
    });
});

//Get one element from animals
app.get('/animal/:_id', (req, res) => {
    Animals.getAnimalById(req.params._id, (err, animals) => {
        if (err) {
            throw err;
        }
        res.json(animals);
    });
});

//Create new element in animals
app.post('/animal', (req, res) => {
    const animal = req.body;
    Animals.addAnimals(animal, (err, animal) => {
        if (err) {
            throw err;
        }
        res.json(animal);
    });
});

//Update a data in an existing element in animals
app.patch('/animal/:_id', (req, res) => {
    let id = req.params._id;
    let animals = req.body;
    Animals.updateAnimal(id, animals, {}, (err, animals) => {
        if (err) {
            throw err;
        }
        res.json(animals);
    });
});

//Delete an element from animals
app.delete('/animal/:_id', (req, res) => {
    let id = req.params._id;
    Animals.removeAnimal(id, (err, animals) => {
        if (err) {
            throw err;
        }
        res.json(animals);
    });
});

// Get all the elements from owners
app.get('/owner', (req, res) => {
    Owners.getOwners((err, owners) => {
        if(err) throw err;
        res.json(owners);
    });
});

//Get one element from owners
app.get('/owner/:_id', (req, res) => {
    Owners.getOwnerById(req.param._id, (err, owners) => {
        if(err) throw err;
        res.json(owners);
    })
});

//Create new element in owners
app.post('/owner', (req, res) => {
    let owner = req.body;
    Owners.addOwner(owner, (err, owner) => {
        if (err) {
            throw err;
        }
        res.json(owner);
    });
});

//Update a data in an existing element in owners
app.patch('/owner/:_id', (req, res) => {
    let id = req.params._id;
    let owner = req.body;
    Owners.updateOwner(id, owner, {}, (err, owner) => {
        if (err) throw err;
        res.json(owner);
    });
});

//Delete an element from owners
app.delete('/owner/:_id', (req, res) => {
    let id = req.params._id;
    Owners.removeOwner(id, (err, owner) => {
        if (err) {
            throw err;
        }
        res.json(owner);
    });
});

// listen for requests
app.listen(3001, () => {
    console.log('Server is listening on port 3001');
});

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
