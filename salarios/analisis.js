console.log(salarios);

// Analisis personal para Juanita

function encontrarPersona(personaEnBusqueda){
    return salarios.find((persona) => persona.name == personaEnBusqueda);
}

function medianaPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    const salarios = trabajos.map(trabajo => trabajo.salario);

    const medianaSalarios = PlatziMath.calcularMediana(salarios);

    console.log(medianaSalarios);

    return medianaSalarios;
}

function proyeccionPorPersona(nombrePersona){{ 
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let porcentajesCrecimiento = [];

    for(let i = 1; i < trabajos.length; i++){
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento)
    }

    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento)

    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
    const nuevoSalario = ultimoSalario + aumento;
    
    return nuevoSalario;
 }}


//  Analisis Empresarial

const empresas = {};

for (let persona of salarios) {
    for (const trabajo of persona.trabajos) {
        if(!empresas[trabajo.empresa]){
            empresas[trabajo.empresa] = {};
        }

        if(!empresas[trabajo.empresa][trabajo.year]){
            empresas[trabajo.empresa][trabajo.year] = []
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}


console.log(empresas);

// Salarios Empresariales
// Calcular la mediana de una empresa

function medianaEmpresaAño( nombreEmpresa, añoEmpresa ){
    if(!empresas[nombreEmpresa]){
        return console.warn("La empresa no existe!")
    }
    if(!empresas[nombreEmpresa][añoEmpresa]){
        return console.warn("El año especificado no existe!")
    }

    return PlatziMath.calcularMediana(empresas[nombreEmpresa][añoEmpresa]);

}


// Proyeccion de salarios por empresas

function proyeccionPorEmpresa( nombre ){
    if(!empresas[nombre]){
        return console.warn("La empresa no existe")
    }

    const empresaYears = Object.keys(empresas[nombre]);
    const listaMedianaYears = empresaYears.map((year) => {
        return medianaEmpresaAño(nombre, year)
    })

    let porcentajesCrecimiento = [];

    for(let i = 1; i < listaMedianaYears.length; i++){
        const salarioActual = listaMedianaYears[i];
        const salarioPasado = listaMedianaYears[i - 1];
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento)
    }

    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento)

    const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];
    const aumento = ultimaMediana * medianaPorcentajesCrecimiento;
    const nuevaMediana = ultimaMediana + aumento;

    console.log(nuevaMediana);
    
    return nuevaMediana;
}

