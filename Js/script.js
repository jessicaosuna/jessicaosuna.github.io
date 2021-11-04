var tablaCoche = "",
    tabla = document.getElementById('coches'),
    seleccion = document.getElementById('cata');

var Automoviles = [
    { marca: "Honda", modelo: "Accord", tipo: "austero", precio: 617900 },
    { marca: "Audi", modelo: "R8", tipo: "lujo", precio: 3009000 },
    { marca: "Nissan", modelo: "March", tipo: "austero", precio: 89900 },
    { marca: "Hummer", modelo: " H3Sensation", tipo: "lujo", precio: 250000 },
    { marca: "Peugeot", modelo: "206", tipo: "compacto", precio: 80000 },
    { marca: "Volkswagen", modelo: "Golft", tipo: "compacto", precio: 300000 },
    { marca: "BMW", modelo: "Serie 2", tipo: "deportivo", precio: 820000 },
    { marca: "Hyundai", modelo: "Accent", tipo: "compacto", precio: 274400 },
    { marca: "Ford", modelo: "Mustang", tipo: "deportivo", precio: 11476000 },
    { marca: "Jeep", modelo: "Liberty", tipo: "lujo", precio: 150000 }
];
todos();

seleccion.addEventListener("click", select, false);

function select() {
    tabla.innerHTML = "";
    tablaCoche = "";
     if (seleccion.value == "todos") {
        todos();
    } else {
        let total = 0;
        let cocheTipo = Automoviles
            .filter(coche => coche.tipo === seleccion.value);
        for (let cocheSelect of cocheTipo) {
            total += cocheSelect.precio;
            tablaCoche += `<tr><td>${cocheSelect.marca}</td>
    <td>${cocheSelect.modelo}</td>
    <td>${cocheSelect.tipo}</td>
    <td>$${cocheSelect.precio}</td></tr>`;
        }
        tabla.innerHTML = `${tablaCoche}<tr><td></td><td></td><th>Total a Pagar es:</th><td>$${total}</td></tr>`;

    }
}

function todos() {
    for (var cocheMovil of Automoviles) {
        tablaCoche += `<tr><td>${cocheMovil.marca}</td>
    <td>${cocheMovil.modelo}</td>
    <td>${cocheMovil.tipo}</td>
    <td>$${cocheMovil.precio}</td></tr>`;
    }
    tabla.innerHTML = tablaCoche;
}