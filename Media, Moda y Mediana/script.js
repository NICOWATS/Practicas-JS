function obtenerMediana(numeros) {
    if (!Array.isArray(numeros)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    if (!numeros.every(e => typeof e === 'number')) {
        throw TypeError('Todos los elementos del arreglo deben ser números.');
    }

    numeros = numeros.sort((x, y) => x - y);

    let mitad = Math.floor(numeros.length / 2);

    return numeros.length % 2 == 1 ? numeros[mitad] : (numeros[mitad - 1] + numeros[mitad + 2]) / 2;
}

try {
    console.log(obtenerMediana([10, 12, 100, 2, -10, 10])); // 55
} catch (e) {
    console.error(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerMediana({a: 1})); // Error: Es un objeto
} catch (e) {
    console.error(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerMediana([10, 12, 100, 'a', -10])); // Error: Algun elemento no es un numero 
} catch (e) {
    console.error(`Error: ${e.message}`);
}


function obtenerMedia(list){
    if (!Array.isArray(list)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    if (!list.every(e => typeof e === 'number')) {
        throw TypeError('Todos los elementos del arreglo deben ser números.');
    }

    const sumList = list.reduce(function(valoresAc = 0, nuevoElemento){
        return valoresAc + nuevoElemento
    })

    const media = sumList / list.length

    return media

}


try {
    console.log(obtenerMedia([10, 12, 100, 2, -10, 10])); // 20.666666666666668
} catch (e) {
    console.error(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerMedia({a: 1})); // Error: Es un objeto
} catch (e) {
    console.error(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerMedia([10, 12, 100, 'a', -10])); // Error: Algun elemento no es un numero 
} catch (e) {
    console.error(`Error: ${e.message}`);
}


const lista1 = [1, 2, 1, 3, 5, 4, 1, 5, 2, 2, 1 ]

const lista1Count = {}

lista1.map(
    function (elemento) {
        if (lista1Count[elemento]){
            lista1Count[elemento] += 1
        } else{
            lista1Count[elemento] = 1
        }
    }
)
/*No muestra solo el elemento que se repite mas veces sino que muestra todos los elementos
y cuantas veces se repite cada uno, Por ejemplo [1, 1, 1, 2, 3, 5, 4, 1, 2, 3, 4, 1]
1: 5
2: 2
3: 2
4: 2
5: 1 */   