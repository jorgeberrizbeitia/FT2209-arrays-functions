console.log("patata")



let palabra = "bananarama";

for (let i = 0; i < palabra.length; i++) {
  let eachCharacter = palabra[i]
  // console.log(eachCharacter)
}

// FOR IN => itera sobre un string o array y nos da el index de cada elemento
// let counter = 0;
for (let posicion in palabra) {
  // console.log(posicion)
  let eachCharacter = palabra[posicion]
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
  i++
}


// DO WHILE
let j = 0;
do {
  // esto se ejecuta por lo menos una vez 
  // console.log("ejecutando el bucle do while")
  j++
}
while (j < 0)



// ARRAYS


// ["hola", "adios", 42423, true, undefined, {name: "Luis"}, [[]]]

let cities = ["Madrid", "Barcelona", "Huelva", "Buenos Aires", "Burgos", "Tokyo"]


// cantida de elementos del array
console.log( cities.length );

// la primera ciudad
console.log( cities[0] )

// la cantidad de caracteres de primera ciudad
console.log( cities[0].length )

// la primera letra de la primera ciudad
console.log( cities[0][0] ) // "M"
console.log( cities[0].charAt(0) ) // "M"

// la ultima ciudad del array
console.log( cities[cities.length - 1] ) // Tokyo


// el ultimo caracter de la ultima ciudad
let lastCity = cities[cities.length - 1]

let lastCharacter = lastCity[lastCity.length - 1]
//                  "Tokyo" [5               - 1]
//                  "Tokyo" [4]

console.log(lastCharacter )

console.log( cities.slice(-1)[0].slice(-1) )



// METODOS DE ARRAY

// quiero una seccion del array con las tres primeras ciudades.
// resultado: ["Madrid", "Barcelona", "Huelva"]

// un array con las ciudades 1,2,3
console.log( cities.slice(0, 3) )

// console.log(  )
// let newArr = [];
// for (let i = 0; i <= 2; i++) {
//   newArr = newArr + cities[i]; // agregar los elementos al array
// }

// console.log(newArr)

// quiero un array todas las ciudades menos la primera
console.log(cities.slice(1, cities.length))
console.log(cities.slice(1))

// quiero un array con los dos ultimos elementos del array

console.log(cities.slice(cities.length - 2))
console.log(cities.slice(-2))

// quiero un array con la primera y con la ultima ciudad del array
// ["Madrid", "Tokyo"]

console.log(cities[0])

let newArr2 = [cities[0], cities[cities.length - 1]]
console.log(newArr2)


// METODOS PARA BUSCAR ELEMENTOS Y POSICIONES (tambien aplican para str)

let indexOfHuelva = cities.indexOf("Huelva")
console.log(indexOfHuelva) // 2

let indexOfCaracas = cities.indexOf("Caracas")
console.log(indexOfCaracas) // -1 no existe en el array

// cuando no nos interesa la posicion, tenemos .includes

let includesBarcelona = cities.includes("Barcelona")
console.log(includesBarcelona) // true

let includesParis = cities.includes("Paris")
console.log(includesParis) // false


