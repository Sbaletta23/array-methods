# Práctica de Arrays

## Intro a arrays

Los array sirven para almacenar listas.
```js
const items = ['cámara', 'celular', 'reloj']
```

Esas listas pueden almacenar cualquier tipo de dato y no todos los elementos tienen por que ser del mismo tipo.
```js
const weirdItems = ['cámara', 2, 'reloj']
```

Cualquier tipo, incluyendo otros arrays.
```js
const extraWeirdItems = ['cámara', 2, 'reloj', [], ['por', 'que', '?']]
```

Podemos acceder a sus elementos por índice, los arrays inician desde el índice 0.
```js
const numArray = ['cero', 'uno', 'dos']
numArray[1] // => 'uno'
```

Podemos modificar los elementos por índice también
```js
numArray[1] = 'one'
numArray // => [ 'cero', 'one', 'dos' ]
```

Los arrays poseen numerosas propiedades y métodos que podemos usar para interactuar con ellos.

```js
numArray.length // 3
numArray.forEach(num => console.log(`número: ${num}`)) // 'número: N'
```

Algunos de estos métodos suelen usarse para modificar u obtener copias del array, los métodos que modifican el array original se los llaman métodos mutables.

```js
const mutableArray = [1, 2, 3]
// Agregar un elemento al final
mutableArray.push(4)
// Eliminar el primer elemento
mutableArray.shift()
mutableArray // [2, 3, 4]
```

Los métodos que devuelven una copia modificada sin modificar el array original, se los llama métodos inmutables.

```js
const immutableArray = [1, 2, 3]
// Agregar un elemento al final
const concatenatedArray = immutableArray.concat(4)
// Eliminar el primer elemento
const shiftedArray = immutableArray.slice(1)
immutableArray // [1, 2, 3]
concatenatedArray // [1, 2, 3, 4]
shiftedArray // [2, 3]
```

En este ejercicio vamos a estar haciendo cambios a una aplicación React, donde se aconseja no debemos mutar los estados ya que esto puede interferir con el resultado esperado, por ende vamos a centrarnos en algunos de los métodos inmutables como .concat, .filter, .map, .reduce o .some.


## Array methods

# .reduce
Ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

```js
const array1 = [1, 2, 3, 4];
const initialValue = 0;

const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10
```
El siguiente ejemplo usa reduce() para crear un total de precio por productos comprados.
```js
const total = () => {
    return items.reduce( (acc,item) => {
      return acc + item.price
    }, 0);
  };
```


# .concat
Se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.

```js
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
```


# .map
 Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

```js
const numbers = [1, 5, 10, 15];
const doubles = numbers.map( x => (x * 2));
;
// doubles is now [2, 10, 20, 30]
```


# .filter
Crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

El siguiente ejemplo usa filter() para crear un array filtrado que excluye todos los elementos con valores inferiores a 10.

```js
function esSuficientementeGrande(elemento) {
  return elemento >= 10;
}
var filtrados = [12, 5, 8, 130, 44].filter(esSuficientementeGrande);
// filtrados es [12, 130, 44]
```


# .every
Determina si todos los elementos en el array satisfacen una condición.
El siguiente ejemplo prueba si todos los elementos de un arreglo son mayores que 10.

```js
function esSuficientementeGrande(elemento) {
    return elemento >= 10;
}
const array1 = [12, 5, 8, 130, 44].every(esSuficientementeGrande);   // false
const array2 = [12, 54, 18, 130, 44].every(esSuficientementeGrande); // true
```
El siguiente ejemplo prueba si el producto tiene valido todos los atributos,
si todo se cumple lo valida.

```js
  const isValid = () => {
    return items.every((item) => {
      return item.name && item.status && item.count > 0 && item.price > 0 ;
    });
  };
  ```



# .some
Comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
El siguiente ejemplo verifica si algún elemento del array es mayor a 10.

```js
function isBiggerThan10(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

El siguiente ejemplo comprueba si el producto posee alguno de todos los atributos,
si todo se cumple lo valida, pero en este caso lo negamos para que sea isInvalid
```js
  const isInvalid = () => {
    return !items.some((item) => {
      return !item.name || !item.status || item.count < 0 || item.price < 0 ;
    });
  };
  ```


