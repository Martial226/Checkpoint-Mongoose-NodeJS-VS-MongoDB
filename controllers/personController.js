const Person = require('../models/Person.js');

// 1 Créer et sauvegarder une personne
const createAndSavePerson = async (done) => {
  try {
    const person = new Person({
      name: "John Doe",
      age: 30,
      favoriteFoods: ["Pizza", "Burger"]
    });
    const data = await person.save();
    done(null, data);
  } catch (err) {
    done(err);
  }
};

// 2 Créer plusieurs personnes
const createManyPeople = async (arrayOfPeople, done) => {
  try {
    const people = await Person.create(arrayOfPeople);
    done(null, people);
  } catch (err) {
    done(err);
  }
};

// 3 Trouver toutes les personnes par nom
const findPeopleByName = async (personName, done) => {
  try {
    const people = await Person.find({ name: personName });
    done(null, people);
  } catch (err) {
    done(err);
  }
};

// 4 Trouver une personne par aliment préféré
const findOneByFood = async (food, done) => {
  try {
    const person = await Person.findOne({ favoriteFoods: food });
    done(null, person);
  } catch (err) {
    done(err);
  }
};

// 5 Trouver par ID
const findPersonById = async (personId, done) => {
  try {
    const person = await Person.findById(personId);
    done(null, person);
  } catch (err) {
    done(err);
  }
};

// 6 Find -> Edit -> Save
const findEditThenSave = async (personId, done) => {
  const foodToAdd = "hamburger";
  try {
    const person = await Person.findById(personId);
    person.favoriteFoods.push(foodToAdd);
    const updatedPerson = await person.save();
    done(null, updatedPerson);
  } catch (err) {
    done(err);
  }
};

// 7 findOneAndUpdate
const findAndUpdate = async (personName, done) => {
  const ageToSet = 20;
  try {
    const updatedPerson = await Person.findOneAndUpdate(
      { name: personName },
      { age: ageToSet },
      { new: true } // retourne le document mis à jour
    );
    done(null, updatedPerson);
  } catch (err) {
    done(err);
  }
};

// 8 Supprimer par ID
const removeById = async (personId, done) => {
  try {
    const removed = await Person.findByIdAndRemove(personId);
    done(null, removed);
  } catch (err) {
    done(err);
  }
};

// 9 Supprimer plusieurs personnes nommées "Mary"
const removeManyPeople = async (done) => {
  try {
    const result = await Person.deleteMany({ name: "Mary" });
    done(null, result);
  } catch (err) {
    done(err);
  }
};

// 10 Chaînage de recherche
const queryChain = async (done) => {
  try {
    const data = await Person.find({ favoriteFoods: "Burritos" })
      .sort({ name: 1 })
      .limit(2)
      .select("-age"); // masquer age
    done(null, data);
  } catch (err) {
    done(err);
  }
};

module.exports = {
  createAndSavePerson,
  createManyPeople,
  findPeopleByName,
  findOneByFood,
  findPersonById,
  findEditThenSave,
  findAndUpdate,
  removeById,
  removeManyPeople,
  queryChain
};
