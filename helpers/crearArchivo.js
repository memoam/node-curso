const fs = require('fs');

const crearArchivo = async (base, l, h) => {
  try {
    let salida = '';
    for (let i = 1; i <= h; i += 1)
      salida += (`${base} x ${i} = ${base * i}\n`);
    fs.writeFileSync(`./salida/tabla${base}.txt`, salida); // crea el achivo
    if (l) {
      console.log(salida);
    }
    return (`tabla${base}.txt`);
  }
  catch (err) {
    throw err;
  }
}
module.exports = {
  crearArchivo,
}
/* fs.writeFile(`tabla${base}.txt`, salida, (err) => {
  if (err) throw err;
  console.log('Tabla creada');
}) */
