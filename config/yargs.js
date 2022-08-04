const { describe } = require("yargs");

const argv = require("yargs")
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    default: 10,
    describe: 'base de la tabla de multiplicar',
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    demandOption: true,
    default: 10,
    describe: 'numero de multiplos',
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'muestra la tabla',
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'la base tienen que ser un numero'
    }
    return true;
  })
  .argv;

module.exports = argv;