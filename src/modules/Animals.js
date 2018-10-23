const mongoose = require('mongoose');

const animalSchema = mongoose.Schema({
                name: {
                    type: "string",
                    required: true
                },
                dateOfBirth: {
                    type: "date",
                       required: true
                },
                registrationDate: {
                    type: "date",
                       required: true
                },
                breed: {
                    type: "string",
                    reuired: true
                },
                color: {
                    type: "string",
                    required: true
                },
                adopted: {
                    type: "bool",
                        description: "Must be a boolean, default value is false and is required"
                },
                chipId: {
                    type: "string",
                    //enum: ["dog"],itt ki kell javítani a validációt
                    maximum: 50
                },
                notes: {
                    //type: Schema.Types.Mixed
                }
});

const Animals = mongoose.model('Animals', animalSchema);

const getAnimals = (callback, limit) => {
    Animals.find(callback).limit(limit);
}
const getAnimalById = (id, callback) => {
    Animals.findById(id, callback);
}

const addAnimals = (animal, callback) => {
    Animals.create(animal, callback);
}

const updateAnimal = (id, animal, options, callback) => {
    let query = { _id: id };
    let update = {
        name: animal.name,
        phoneNumber: animal.phoneNumber,
        postCode: animal.postCode,
        city: animal.city,
        street: animal.street,
        houseNumber: animal.houseNumber,
        notes: animal.notes
    }
    Animals.findOneAndUpdate(query, update, options, callback);
}

const deleteAnimal = (id, callback) => {
    let query = { _id: id };
    Animals.remove(query, callback);
}

module.exports = {
    animalSchema: animalSchema,
    getAnimals: getAnimals,
    getAnimalById: getAnimalById,
    addAnimals: addAnimals,
    updateAnimal: updateAnimal,
    deleteAnimal: deleteAnimal
}