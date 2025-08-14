// Définition du schéma Mongoose pour une "Person"

const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: { type: String, required: true }, // nom obligatoire
  age: Number,
  favoriteFoods: [String] // tableau de chaînes
});

// Export du modèle Person
module.exports = mongoose.model('Person', personSchema);
