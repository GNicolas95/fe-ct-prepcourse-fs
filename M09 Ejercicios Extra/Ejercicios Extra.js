/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arrayDeArray = [];
   var claves = Object.keys(objeto);
   for (var i = 0; i < claves.length; i++) {
      var clave = claves[i];
      var valor = objeto[clave];
      arrayDeArray.push([clave, valor]);
   }
      return (arrayDeArray);
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.//
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var objeto = {};
   var array = string.split("").sort().join("")
   for (var i = 0; i < array.length; i ++) {
      var letra = array[i];
      if (letra in objeto) {
         objeto[letra]++;
      } else {
         objeto[letra] = 1;
      }
   }
      return (objeto);
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayuscula = "";
   var minuscula = "";
   for (var i = 0; i < string.length; i++) {
      if (string[i].toUpperCase() === string[i]) {
         mayuscula = mayuscula + string[i];
      } else {
         minuscula = minuscula + string[i];
      }
   }
      return (mayuscula + minuscula);
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var resultado = [];
   var palabras = frase.split(" ");
   for (var i = 0; i < palabras.length; i++) {
      resultado = resultado + palabras[i].split("").reverse().join("");
      if (i != palabras.length - 1) {
         resultado = resultado + " ";
      }  
   }
      return (resultado);
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var str = numero.toString();
   var resultado = "Es capicua";
   for (var i = 0; i < str.length; i++) {
      if (str[i] != str[str.length - 1 - i]) {
         resultado = "No es capicua";
      }
   }
      return (resultado);
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var resultado = "";
   for ( var i = 0; i < string.length; i++) {
      if (string[i] != "a" && string[i] != "b" && string[i] != "c") {
         resultado = resultado + string[i];
      }
   }
      return (resultado);

}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings = arrayOfStrings.sort((a, b) => a.length - b.length);
      return (arrayOfStrings);
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var arreglo = [];
   for (var i = 0; i < array2.length; i++) {
      if (array1.includes(array2[i])) {
         arreglo.push(array2[i])
      }
   }
      return (arreglo);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
