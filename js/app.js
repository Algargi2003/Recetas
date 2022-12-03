function sortArray(x, y) {
    if (x.nombreBuscar < y.nombreBuscar) {
        return -1;
    }
    if (x.nombreBuscar > y.nombreBuscar) {
        return 1;
    }
    return 0;
}

function pintaArticulos() {
    let contenedor = document.getElementById("contenedor");
    let texto = `<div class="columna-doble prueba-columna row row-cols-1 row-cols-md-6 g-4">`;
    //let texto="";

    let nuevalistaRecetas = listaRecetas.sort(sortArray);
    nuevalistaRecetas.forEach((element) => {
        texto += `
        <div class="col micol">
            <div class="card sin-bordes">
                <img src="./assets/img/${element.nombre}.jpg" class="card-img-top">
                <div class="card-body prueba">
                    <h5 class="card-title">${element.nombre}</h5>
                    <p class="card-text"><b>Descripcion:</b></p>
                    <p class=" card-text">${element.descripcion}</p>
                    
                    <button id='${element.id}' class="btn-info ">Más info</button>
                    `;

        texto += `
                </div>
            </div>
        </div>
        
        `;
    });
    // texto+=`</div>`;

    contenedor.innerHTML = texto;
    ponFuncionBoton();
}
function ponFuncionBoton() {
    let boton = document.getElementsByClassName("btn-info");
    let botonesArray = [...boton];
    botonesArray.forEach((e) => {
        let receta = listaRecetas.find((i) => i.id == e.id);
        e.addEventListener("click", function () {
            buscar(receta.nombreBuscar);
        });
    });
    
}
function obtenerBuscada() {
    let busqueda = document.getElementById("busqueda").value.toLowerCase().trim();
    buscar(busqueda);
}
function buscar(busqueda) {
    let f;
    let cosa;
    listaRecetas.forEach((element) => {
        if (element.nombreBuscar == busqueda) {
            f = element;
        }
    });
    if (busqueda == "") {
        pintaArticulos();
    } else if (f == undefined) {
        alert("La receta no existe");
    } else {
        verSoloUna(f.id,f.personas);
    }
}

function verSoloUna(idBuscar, comensales) {
    let contenedor = document.getElementById("contenedor");
    let buscada = listaRecetas.find((e) => e.id == idBuscar);
    let texto="";

    texto += `
        <div class=" columnas">
            <div class="card sin-bordes">
                <img src="./assets/img/${buscada.nombre}.jpg" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${buscada.nombre}</h5>
                    <label>Comensales: 
                    <input type="number" placeholder="${buscada.personas}" min="1" value="${comensales}" id="${buscada.id}pers" class="ancho-comensales"></input>&nbsp<button class=" btn btn-info boton-pers"id="${buscada.id}">H</button>
                    <p class="card-text"><b>Ingredientes:</b></p>
                    <ol>`;
    

    buscada.ingredientes.forEach((i) => {
        texto += `
            
                <li>${i.nombre}: ${(i.cantidad/buscada.personas)*comensales} ${i.medida}</li>
            
            `;
    });

    texto += `</ol>
                <p class="card-text"><b>Preparación:</b></p>
                <ol>`;
    buscada.instrucciones.forEach((x) => {
        texto += `
                <li>${x.info}</li>
            `;
    });

    texto += ` </ol><br> <div class="d-flex justify-content-center">
                    <button id="botonVolv" class=" btn btn-info">Volver</button>
                </div>
                </div>
            </div>
        
        `;
        
    contenedor.innerHTML = texto;
    botonCom();

}
function botonCom(){
    let boton = document.getElementsByClassName("boton-pers");
    let botonesArray = [...boton];
    
    botonesArray.forEach((e) => {
        let articulo = listaRecetas.find((i) => i.id == e.id);
        e.addEventListener("click", function () {
            let inputPersonas = document.getElementById(articulo.id+"pers").value;
            verSoloUna(articulo.id, inputPersonas);
        });
    });
    let botonVolver = document.getElementById("botonVolv");
    botonVolver.addEventListener("click", function(){
        pintaArticulos();
        document.getElementById("busqueda").value="";
    })
}

function enterBoton(){
    let botonBusc = document.getElementById("busqueda");
    botonBusc.addEventListener("keyup", function(e){
        if (e.code === 'Enter') {
            document.getElementById("btn-buscar").click();
        }
        
    });
    document.getElementById("btn-buscar").onclick = function() {
        obtenerBuscada();
    }
}
window.onload = () => {
    pintaArticulos();
    enterBoton();
    
};
