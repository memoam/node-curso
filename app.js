const { crearArchivo } = require('./helpers/crearArchivo');
const colors = require('colors');
const argv = require('./config/yargs');

crearArchivo(argv.b, argv.l, argv.h)
  .then(result => console.log(result, 'creado'))
  .catch(err => console.log(err));
