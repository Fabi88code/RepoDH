let fs = require('fs');  // importo libreria para leer archivos de texto
let moment = require('moment'); // importo libreria para fechas
let seriesImportadas = require('./series/index');


//console.log("mis series son: ");
console.log(seriesImportadas);

let datosTexto = fs.readFileSync(__dirname + '/texto.txt', 'utf-8'); // leo archivo de texto

//console.log(datosTexto);

//console.log("La fecha de hoy es: " + moment().format('DD MM YYYY'));

