const path = require('path');

module.exports = {
  entry: 'test.js', // Chemin vers votre fichier JavaScript principal
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};