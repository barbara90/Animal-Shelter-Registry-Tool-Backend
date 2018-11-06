const mongoose = require('mongoose');

const animalSchema = mongoose.Schema({
    name: {
        type: "string",
        required: true
    },
    dateOfBirth: {
        type: "date",
        required: true,
        set: function (v) {
            return new Date(v.getFullYear(), v.getMonth(), v.getDate());
        }
    },
    registrationDate: {
        type: "date",
        required: true,
        set: function (v) {
            return new Date(v.getFullYear(), v.getMonth(), v.getDate());
        }
    },
    breed: {
        type: "string",
        reqired: true,
    },
    color: {
        type: "string",
        required: true
    },
    adopted: {
        type: "bool"
    },
    chipId: {
        type: "string",
        maximum: 50,
        required: function () {
            return this.breed === 'dog';
        }
    },
    notes: {
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
    const query = { _id: id };
    const update = {
        name: animal.name,
        adopted: animal.adopted,
        dateOfBirth: animal.dateOfBirth,
        registrationDate: animal.registrationDate,
        breed: animal.breed,
        color: animal.color,
        chipId: animal.chipId,
        notes: animal.notes,
        ownerId: animal.ownerId
    }
    Animals.findOneAndUpdate(query, update, options, callback);
}

const removeAnimal = (id, callback) => {
    const query = { _id: id };
    Animals.remove(query, callback);
}

module.exports = {
    animalSchema: animalSchema,
    getAnimals: getAnimals,
    getAnimalById: getAnimalById,
    addAnimals: addAnimals,
    updateAnimal: updateAnimal,
    removeAnimal: removeAnimal
}
