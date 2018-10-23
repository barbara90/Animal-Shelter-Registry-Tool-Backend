const MongoClient = require('mongodb').MongoClient;
const url = require('./database.config').url;

/*
*Creating the database
*/
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log('Database created!');
    db.close();
});

/*
*Creating the collection: animals
*/
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    let dbo = db.db("animalshelterregister");
    dbo.createCollection("animals", function (err, res) {
            if (err) throw err;
            console.log("Collection created!");
            db.close();
    });
});

/*
*Creating the collection: owners
*/
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    let dbo = db.db("animalshelterregister");
    dbo.createCollection("owners",function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});

/**
 * Providing some test data for the first run into animals collection
 */
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    let dbo = db.db("animalshelterregister");
    let myobjAnimal = [
        {
            adopted: false,
            name: 'Pajti',
            dateOfBirth: '2012-01-02',
            registrationDate: '2018-01-02',
            breed: 'Dog',
            chipId: '',
            color: 'white',
            notes: ''
        },
        {
            ownerId: 0,
            adopted: true,
            name: 'Cili',
            dateOfBirth: '2012-01-02',
            registrationDate: '2018-01-02',
            breed: 'Cat',
            chipId: '',
            color: 'white',
            notes: ''
        }];
    dbo.collection("animals").insertMany(myobjAnimal, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted into animals");
        db.close();
    });
});

/**
 * Inserting some test data into the database collection owners
 */
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    let dbo = db.db("animalshelterregister");
    let ownerobj = {
        name: 'OwnerTest', 
        contact: {
            phoneNumber: '423651', address: {
                postCode: '67576',
                city: 'hjkfd',
                street: '87lkj',
                houseNumber: '879'
            }
        },
        notes: ''
    };
    dbo.collection("owners").insertOne(ownerobj, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted into owners");
        db.close();
    });
});