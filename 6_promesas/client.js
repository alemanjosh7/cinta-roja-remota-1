/*
  Explicación del bloque de código
*/

// ¿Cómo funcionan Math.random y Math.floor?
// const number = Math.floor((Math.random() * 10));

// console.log(number);
// Math.random genera un valor aleatorio entre 0 y 1
// console.log(Math.random() * 10);

// Math.floor trunca el valor hacia abajo.
// console.log( Math.floor(Math.random() * 10) );

/**
 *  Ejemplo de Promesa 
 */

// const promesaEdad = new Promise((resolve, reject) => {
//   const edad = 99;
//   if (edad >= 18) resolve("simon!")
//   reject("nelson");
// });

// promesaEdad
//   .then(resolucion => console.log(`PROMESA RESUELTA: ${resolucion}`))
//   .catch(rechazo => console.log(`PROMESA RECHAZADA: ${rechazo}`));


/**
 *  Ejemplo de Promesa con Bloque de arriba (numero aleatorio)
 */

// const promise = new Promise((resolve, reject) => {
//   const number = Math.floor(Math.random() * 10);

//   setTimeout(() => number > 5 
//       ? resolve(number) 
//       : reject(new Error('El numero es menor a 5'))
//   , 1500)
// });

// console.log(promise);
 
// promise
//   .then(number => console.log(number))
//   .catch(error => console.error(error));

/**
 *  CRUD de Peticiones empleando PROMESAS
 */
const request = require('request');

const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com';

//  Create - POST
const createPromise = (name, last_name, nacionalidad, biography, gender, age) => {
  const URL = `${URL_BASE}/api/v1/authors/`
  const jsonSend = {
    "name": name,
    "last_name": last_name,
    "nacionalidad": nacionalidad,
    "biography": biography,
    "gender": gender,
    "age": age
  };

  return new Promise((resolve, reject) => {
    request.post(URL, { form: jsonSend }, (err, res, body) => {
      res.statusCode === 201
        ? resolve(JSON.parse(body))
        : reject({ message: 'Error creating author', body: body })
    });
  })
}

createPromise("Pedro", "Páramo", "ABC", "Anda buscando a su papá en Comala", "M", 34)
  .then(res => console.log(res))
  .catch(err => console.log(err));

