console.log("patata");

// * OTROS LOOPS

let palabra = "bananarama";

for (let i = 0; i < palabra.length; i++) {
  let eachCharacter = palabra[i];
  // console.log(eachCharacter)
}

// FOR IN => itera sobre un string o array y nos da el index de cada elemento
// let counter = 0;
for (let posicion in palabra) {
  // console.log(posicion)
  let eachCharacter = palabra[posicion];
  // console.log(eachCharacter)
  // if (eachCharacter === "a") {
  //   counter++
  // }
}

// console.log(counter)

// FOR OF => itera sobre un string o array y nos da el valor de cada character/elemento
for (let eachCharacter of palabra) {
  // console.log(eachCharacter)
}

// WHILE
let i = 0;
while (i < 0) {
  // console.log("ejecutando el bucle")
  i++;
}

// DO WHILE
let j = 0;
do {
  // esto se ejecuta por lo menos una vez
  // console.log("ejecutando el bucle do while")
  j++;
} while (j < 0);





// * ARRAYS

// ["hola", "adios", 42423, true, undefined, {name: "Luis"}, [[]]]

let cities = [
  "Madrid",
  "Barcelona",
  "Huelva",
  "Buenos Aires",
  "Burgos",
  "Tokyo",
];

// cantida de elementos del array
console.log(cities.length);

// la primera ciudad
console.log(cities[0]);

// la cantidad de caracteres de primera ciudad
console.log(cities[0].length);

// la primera letra de la primera ciudad
console.log(cities[0][0]); // "M"
console.log(cities[0].charAt(0)); // "M"

// la ultima ciudad del array
console.log(cities[cities.length - 1]); // Tokyo

// el ultimo caracter de la ultima ciudad
let lastCity = cities[cities.length - 1];

let lastCharacter = lastCity[lastCity.length - 1];
//                  "Tokyo" [5               - 1]
//                  "Tokyo" [4]

console.log(lastCharacter);

console.log(cities.slice(-1)[0].slice(-1));



// * METODOS DE ARRAY

// quiero una seccion del array con las tres primeras ciudades.
// resultado: ["Madrid", "Barcelona", "Huelva"]

// un array con las ciudades 1,2,3
console.log(cities.slice(0, 3));

// console.log(  )
// let newArr = [];
// for (let i = 0; i <= 2; i++) {
//   newArr = newArr + cities[i]; // agregar los elementos al array
// }

// console.log(newArr)

// quiero un array todas las ciudades menos la primera
console.log(cities.slice(1, cities.length));
console.log(cities.slice(1));

// quiero un array con los dos ultimos elementos del array

console.log(cities.slice(cities.length - 2));
console.log(cities.slice(-2));

// quiero un array con la primera y con la ultima ciudad del array
// ["Madrid", "Tokyo"]

console.log(cities[0]);

let newArr2 = [cities[0], cities[cities.length - 1]];
console.log(newArr2);

// METODOS PARA BUSCAR ELEMENTOS Y POSICIONES (tambien aplican para str)

let indexOfHuelva = cities.indexOf("Huelva");
console.log(indexOfHuelva); // 2

let indexOfCaracas = cities.indexOf("Caracas");
console.log(indexOfCaracas); // -1 no existe en el array

// cuando no nos interesa la posicion, tenemos .includes

let includesBarcelona = cities.includes("Barcelona");
console.log(includesBarcelona); // true

let includesParis = cities.includes("Paris");
console.log(includesParis); // false




// * MUTABILIDAD

let str = "hola";

console.log(str[0]);

str[0] = "X"; // los strings son inmutables

// "Xola"
console.log(str);

let friends = ["Ross", "Monica", "Rachel", "Phoebe", "Joey", "Chandler"];

console.log(friends[0]);
friends[0] = "Mike";

console.log(friends);

// OBJECTOS INCLUYENDO ARRAYS SON MUTABLES

console.log(friends.slice(0, 3)); // hace un copia de una seccion del array
console.log("despues del slice", friends);

//aunque los array no mutables, no todos los metodos mutan el array

// metodos que modifican el array original

// .pop() // retorna el ultimo elemento. LO SACA DEL ARRAY ORIGINAL.
let elementRemoved = friends.pop();
console.log(elementRemoved);
console.log("despues del pop", friends);

// .shift() // retorna el primer elemento. LO SACA DEL ARRAY ORIGINAL.
let elementRemoved2 = friends.shift();
console.log(elementRemoved2);
console.log("despues del shift", friends);

// .push() // agregar un nuevo elemento al final del array. tambien retorna la posicion donde la agrega
friends.push("Gunther");
console.log("despues del push", friends);

// .unshift() // agregar un nuevo elemento al inicio del array
friends.unshift("Emily");
console.log("despues del unshift", friends);



// .splice()
// remover una seccion del array
// agregar varios elementos al array


friends.splice(1, 1, "Janice", "Robert", "Iñigo", "Carolina")
// arg1. posicion donde empezar
// arg2. cantidad de elementos a remover
// arg3. elementos a agregar

console.log("despues del splice", friends)



// * REFERENCIAS

let age1 = 34;
let age2 = 34;

console.log( age1 === age2 );

// en data primitiva, siempre se analiza el valor neto de la data

let agesArr1 = [10, 14, 52]; // ref. 1234
let agesArr2 = [10, 14, 52]; // ref. 4567

console.log(agesArr1 === agesArr2) // false
console.log(agesArr1 == agesArr2) // false

console.log(agesArr1[0] === agesArr2[0]) // true

// en objetos (no primitivo) siempre se analiza la referencia de la data
// cuando asignamos valores en objectos, se asigna la referencia.

let agesArr3 = agesArr1;
// agesArr1 => ref. 1234
// agesArr3 => ref. 1234
console.log( agesArr3 === agesArr1 ) // true

agesArr3.pop()
agesArr3.pop()
agesArr3.pop()

console.log(agesArr3)
console.log(agesArr1)



// metodos que nos permiten clonar el array
let agesArrClone = structuredClone(agesArr1)
// agesArr1 => ref 1234
// agesArrClone => ref AWSD
console.log("agesArrClone",agesArrClone)
console.log( agesArrClone === agesArr1 )





// * FUNCIONES


// declara una funcion (crearla)
function myFirstFunction( /* opcionalmente unos parametros*/) {
  // .todo el codigo de la funcionalidad de la funcion.

  // opcionalmente tendremos un return. que sacara una nuevo valor.
}

// ejecucion o invocacion de la function.
myFirstFunction()


function printName(name) {
  // let name = "Jorge"
  // let parametro = argumento
  // parametros es lo que personaliza la funcion
  console.log(`Mi nombre es ${name}`)
}


printName("Jorge") // ejecuta la funcion
//          |
//        argumentos

printName("Iñigo")
printName("Carolina")




// palabra return

function sumNumbers(num1, num2) {
  let sum = num1 + num2
  // console.log(sum)
  // return es, necesito sacar un valor como resultado de esta funcion
  return sum
}

let result = sumNumbers(8, 9) // 17
// que pasa si yo necesito el valor de la suma fuera de la funcion

console.log(`el total de la suma es ${result}`)
console.log(`el total de la suma es ${sumNumbers(10, 22)}`)



let listOfTAs = ["iñigo", "carolina"]

console.log( `nuestro excelentes TAs son: ${listOfTAs[0]} y ${listOfTAs[1]}` )


function capitalize(string) {
  let capString = string[0].toUpperCase() + string.slice(1)
  return capString;
}

let ta1 = capitalize(listOfTAs[0])
let ta2 = capitalize(listOfTAs[1])

console.log( `nuestro excelentes TAs son: ${ta1} y ${ta2}` )


// * TIPOS DE FUNCIONES

// 1. funcion de declaracion.
function functionDeclaration(parametros) {
  // codigo
  return 
} // ES5-

// 2. funcion de expression.
const functionExpression = function(parametros) {
  // codigo
  return
} // ES6

// 3. function de flechita
const arrowFunction = (parametros) => {
  // codigo
  return
} // ES6

functionDeclaration()
functionExpression()
arrowFunction()





// * EJERCICIO 1.

function sinEspacios(word) {

  // console.log(word)

  // for of => iterar sobre todos los caracteres de un str

  let wordNoSpaces = "";

  // for (let char of word) {
  //   if (char !== " ") {
  //     // console.log(char)
  //     wordNoSpaces = wordNoSpaces + char
  //     // console.log(wordNoSpaces)
  //   }
  // }

  for (let char of word) {
    // clausulas de guardia
    if (char === " ") {
      continue
    }
    wordNoSpaces = wordNoSpaces + char
  }

  return wordNoSpaces
}

// "ba na na ra ma "
// "bananarama"

console.log( sinEspacios("ba na na ra ma ") ) // "bananarama"
console.log( sinEspacios("patata     super     ") ) 



// * EJERCICIO 2

// function recibe 2 argumentos
// 1. un array de vegetales (string)
// 2. un string de un vegetal

// 1. si no consigue el vegetal en el array me diga: 
// -  no hay ese vegetal en el array
// 2. si consigue ese vegetal en el array me diga:
// - hay X cantidad de (vegetal) en el array
// 3. si el array está vacio. 
// - "no hay vegetales, no me engañes! :("

function countVeggies(listOfVeggies, singleVeggie) {

  console.log(listOfVeggies)

  // clausula de guardia
  if (listOfVeggies.length === 0) {
    return "no hay vegetales, no me engañes! :("
    // return hace dos cosas:
    // 1. le da el valor retornado fuera de la funcion
    // 2. detiene la ejecucion de la funcion
  }

  // ... ahora que pasa si si hay vegetales en el array

  let counter = 0;

  for (let i = 0; i < listOfVeggies.length; i++) {
    if (listOfVeggies[i] === singleVeggie) {
      // console.log(listOfVeggies[i])
      counter++
    }
  }

  console.log(counter)
  if (counter === 0) {
    return "no hay ese vegetal en el array"
  } else {
    return `hay ${counter} de ${singleVeggie} en el array`
  }

}


let array = ["tomate", "lechuga", "lechuga", "patata"]

// console.log( countVeggies([], "patata") )
console.log( countVeggies(array, "pepino") )