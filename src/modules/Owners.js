const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    name: {
        type: "string",
        required: true
    },
    contact: {
        phoneNumber: {
            type: "string",
            required: true
        },
        address: {
            postCode: {
                type: "string",
                required: true
            },
            city: {
                type: "string",
                required: true
            },
            street: {
                type: "string",
                required: true
            },
            houseNumber: {
                type: "string",
                required: true
            },
        }
    },
    notes: {
    }
});

const Owners = mongoose.model('Owners', ownerSchema);

const getOwners = (callback, limit) => {
    Owners.find(callback).limit(limit);
}

const getOwnerById = (id, callback) => {
    Owners.findById(id, callback);
}

const addOwner = (owner, callback) => {
    Owners.create(owner, callback);
}

const updateOwner = (id, owner, options, callback) => {
    const query = {_id: id};
    const update = {
        name: owner.name,
        phoneNumber: owner.phoneNumber,
        postCode: owner.postCode,
        city: owner.city,
        street: owner.street,
        houseNumber: owner.houseNumber,
        notes: owner.notes
    }
    Owners.findOneAndUpdate(query, update, options, callback);
}

const removeOwner = (id, callback) => {
    const query = {_id: id};
    Owners.remove(query, callback);
}

module.exports = {
    ownerSchema: ownerSchema,
    Owners: Owners,
    getOwners: getOwners,
    getOwnerById: getOwnerById,
    addOwner: addOwner,
    updateOwner: updateOwner,
    removeOwner: removeOwner
}
