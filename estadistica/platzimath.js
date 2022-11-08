const PlatziMath = {}

const calificaciones = [10,10,8,8,9.8,8.6,10,7,8.2,9.6,9.1,10,6.9,10,9,7];

PlatziMath.calcularPromedio = function calcularPromedio(arr){
    return arr.reduce((previous, current) => previous + current, 0) / arr.length;
}

PlatziMath.esPar = (lista) => lista.length % 2 == 0;

PlatziMath.calcularMediana = function calcularMediana(listaDesordenada){

    const lista = this.ordenarLista(listaDesordenada);

    const listaEsPar = this.esPar(lista);

    if(listaEsPar){
        const mitad1ListaPar = lista[lista.length / 2];
        const mitad2ListaPar = lista[(lista.length / 2)- 1];

        const listaMitades = [mitad1ListaPar, mitad2ListaPar];
        const medianaListaPar = this.calcularPromedio(listaMitades);

        return medianaListaPar;

    }else{
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar];
        return medianaListaImpar;
    }
}

PlatziMath.ordenarLista = function ordenarLista(listaDesordenada){
    // function ordenarListaSort(valorAcumulado, nuevoValor){
    //     // Ordenar lista de mayor a menor

    //     if(valorAcumulado > nuevoValor){
    //         return -1;
    //     }else if(valorAcumulado == nuevoValor){
    //         return 0;
    //     }else if(valorAcumulado < nuevoValor){
    //         return 1;
    //     }

    //     return valorAcumulado - nuevoValor;
    // }
    const lista = listaDesordenada.sort((a, b) => a - b);
    return lista;
}

PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada){
    const lista = listaDesordenada.sort((a, b) => b[1] - a[1]);
    return lista;
}

PlatziMath.obtenerModa = function obtenerModa(lista){
    const listaCount = {};

    for (let i = 0; i < lista.length; i++) {
        const element = lista[i];
        if(listaCount[element]){
            listaCount[element] += 1;
        }else{
            listaCount[element] = 1;
        }
    }

    const listaArray = Object.entries(listaCount);
    const listaArrayOrdenada = this.ordenarListaBidimensional(listaArray);

    const moda = listaArrayOrdenada[0][0];
    const modaCount = listaArrayOrdenada[0][1];
    const modaCount2 = listaArrayOrdenada[1][1];

    if(modaCount == modaCount2){
        return "No hay moda porque hay mas de un termino que aparece la mayor cantidad de veces"
    }
    console.log(`La moda es: ${moda}, porque aparece: ${modaCount} veces`);
}


PlatziMath.solution = function solution(obj){
    const arrObj = Object.entries(obj);

    const arrNew = [];

    for (let i = 0; i < arrObj.length; i++) {
        const element = arrObj[i];
        arrNew.push(
            {
                id: element[0],
                name: element[1]
            }
        )
    }
    return arrNew;
}

const obj = {
    123: 'Juanito Alcachofa',
    456: 'Juanita Alcaparra',
};

PlatziMath.calcularMediaPonderada = function calcularMediaPonderada(arr){
    
    let sumaCredit = 0;
    let noteCredit = 0;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        noteCredit += element['result'] * element['credit'];
        sumaCredit += element['credit'];
    }

    const mediaPonderada = noteCredit / sumaCredit;
    return mediaPonderada;
}

const notasGeometria = [
    {
        name: "Parcial 1",
        result: 95,
        credit: 20
    },
    {
        name: "Parcial 2",
        result: 75,
        credit: 25
    },
    {
        name: "Parcial 3",
        result: 85,
        credit: 25
    },
    {
        name: "Proyecto Final",
        result: 80,
        credit: 30
    },
]

const notes = [
    {
        course: "Educación Física",
        result: 10,
        credit: 2,
    },
    {
        course: "Programación",
        result: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        result: 7,
        credit: 5,
    },
];