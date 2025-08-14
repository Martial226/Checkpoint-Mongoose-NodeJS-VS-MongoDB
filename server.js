require('dotenv').config();
const mongoose = require('mongoose');
const controller = require('./controllers/personController');

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log(' MongoDB connecté');

    // Exemple de test : créer une personne
    controller.createAndSavePerson((err, data) => {
      if (err) return console.error(err);
      console.log('Personne créée :', data);
      mongoose.connection.close();
    });

  })
  .catch(err => console.error(' Erreur connexion MongoDB :', err));
