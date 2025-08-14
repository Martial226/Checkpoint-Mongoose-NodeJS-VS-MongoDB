require('./server'); // établit la connexion
const controller = require('./controllers/personController');

// Exemple : créer et sauvegarder une personne
controller.createAndSavePerson((err, data) => {
  if (err) return console.error("createAndSavePerson err:", err);
  console.log("createAndSavePerson result:", data);

  // Exemple : créer plusieurs personnes
  const arrayOfPeople = [
    { name: "Mary", age: 25, favoriteFoods: ["Salad", "Fries"] },
    { name: "Steve", age: 40, favoriteFoods: ["Burritos"] },
    { name: "Anna", age: 22, favoriteFoods: ["Pasta", "Ice Cream"] }
  ];

  controller.createManyPeople(arrayOfPeople, (err, people) => {
    if (err) return console.error("createManyPeople err:", err);
    console.log("createManyPeople:", people);

    // Exemple : find by name
    controller.findPeopleByName("Mary", (err, found) => {
      console.log("findPeopleByName 'Mary':", found);

      // Exemple : query chain
      controller.queryChain((err, chainRes) => {
        console.log("queryChain result:", chainRes);
        // Fin du test
        process.exit(0);
      });
    });
  });
});
