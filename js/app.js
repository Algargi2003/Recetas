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
    let texto = `<div class="columna-doble prueba-columna row row-cols-1  ">`;
    //let texto="";

    let nuevalistaRecetas = listaRecetas.sort(sortArray);
    nuevalistaRecetas.forEach((element) => {
        texto += `
        <div class="col micol">
            <div id='${element.id}' class="card sin-bordes">
                <img src="./assets/img/${element.nombreBuscar}.jpg" class="card-img-top">
                <div class="card-body prueba">
                    <h5 class="card-title texto-reloj">${element.nombre}</h5>
                    <p class=" texto-reloj"><img src="./assets/icons/wall-clock.ico" class="icono-reloj"> ${element.tiempoPreparacion} min</p>
                    
                    
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
    let boton = document.getElementsByClassName("sin-bordes");
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
    let cosa=[];
    listaRecetas.forEach((element) => {
        if (element.nombreBuscar==busqueda) {
            f = element;
        }else if(element.nombreBuscar.includes(busqueda)&&element.nombreBuscar!=busqueda){
            cosa.push(element);
        }
    });
    if (busqueda == "") {
        pintaArticulos();
    }else if(cosa.length>0){
       verCoincidencias(cosa);
    }else if(f!=null){
        verSoloUna(f.id,f.personas);
    }else{
        alert("La receta no existe");
    }
}
function verCoincidencias(lista) {
    let contenedor = document.getElementById("contenedor");
    let texto = `<div class="columna-doble prueba-columna row row-cols-1  ">`;
    //let texto="";

    let nuevalistaRecetas = lista.sort(sortArray);
    nuevalistaRecetas.forEach((element) => {
        texto += `
        <div class="col micol">
            <div id='${element.id}' class="card sin-bordes">
                <img src="./assets/img/${element.nombreBuscar}.jpg" class="card-img-top">
                <div class="card-body prueba">
                    <h5 class="card-title texto-reloj">${element.nombre}</h5>
                    <p class=" texto-reloj"><img src="./assets/icons/wall-clock.ico" class="icono-reloj"> ${element.tiempoPreparacion} min</p>
                    
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


function verSoloUna(idBuscar, comensales) {
    let contenedor = document.getElementById("contenedor");
    let buscada = listaRecetas.find((e) => e.id == idBuscar);
    let texto="";

    texto += `
        <div class=" columnas">
            <div class="card sin-bordes">
                <img src="./assets/img/${buscada.nombreBuscar}.jpg" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${buscada.nombre}</h5>
                    <p class="card-text"><b>Ingredientes:</b></p>
                    <ul>`;
    

    buscada.ingredientes.forEach((i) => {
        let division=i.cantidad/buscada.personas;
        let multiplicacionComensales=division*comensales;
        let valorFinal=Math.round(multiplicacionComensales);
        texto += `
            
                <li>${i.info}</li>
            
            `;
            
    });

    texto += `</ul>
                <p class="card-text"><b>Preparaci??n:</b></p>
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
    // let botonVolver = document.getElementById("botonVolv");
    // botonVolver.addEventListener("click", function(){
    //     verCategorias();
    //     document.getElementById("busqueda").value="";
    // });
    let botonReset = document.getElementById("reinicio");
    botonReset.addEventListener("click", function(){
        verCategorias();
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
let listaCategorias = ["salado", "dulce","japones","chino","valenciano","barbacoa"];

function verCategorias(){
    let contenedor = document.getElementById("contenedor");
    let texto = `<div class="columna-triple prueba-columna row row-cols-1  ">`;

    listaCategorias.forEach((element) => {
        texto += `
        <div class="col micol">
            <div id='${element}' class="card botones-categoria">
                <img src="./assets/img/${element}.jpg" class="card-img-top">
                <div class="text-center">${element}</div>
                    
                    `;

        texto += `
                
            </div>
        </div>
        
        `;
    });
    texto+=`</div>`;

    contenedor.innerHTML = texto;
    funcionBotonCat();
    
}
function verPorCategoria(categoria){
    let contenedor = document.getElementById("contenedor");
    
    let texto = `<div class="columna-doble prueba-columna row row-cols-1  ">`;
    // //let texto="";

    // let nuevalistaRecetas = lista.sort(sortArray);
    // nuevalistaRecetas.forEach((element) => {
    //     texto += `
    //     <div class="col micol">
    //         <div id='${element.id}' class="card sin-bordes">
    //             <img src="./assets/img/${element.nombreBuscar}.jpg" class="card-img-top">
    //             <div class="card-body prueba">
    //                 <h5 class="card-title texto-reloj">${element.nombre}</h5>
    //                 <p class=" texto-reloj"><img src="./assets/icons/wall-clock.ico" class="icono-reloj"> ${element.tiempoPreparacion} min</p>
                    
    //                 `;

    //     texto += `
    //             </div>
    //         </div>
    //     </div>
        
    //     `;

    // });
    let arrayBueno=[];
    listaRecetas.forEach((element) => {
        if (element.tipo==categoria) {
            arrayBueno.push(element);
        }
    });
    // listaNuevaCategoria.forEach(i => console.log(i));
    arrayBueno.forEach(element => {
        texto += `
             <div class="col micol">
                 <div id='${element.id}' class="card sin-bordes">
                     <img src="./assets/img/${element.nombreBuscar}.jpg" class="card-img-top">
                     <div class="card-body prueba">
                         <h5 class="card-title texto-reloj">${element.nombre}</h5>
                         <p class=" texto-reloj"><img src="./assets/icons/wall-clock.ico" class="icono-reloj"> ${element.tiempoPreparacion} min</p>
                  
                         `;
             texto += `
                     </div>
                 </div>
             </div>
      
             `;
    });
    contenedor.innerHTML = texto;
    ponFuncionBoton();
    botonCom();
    // switch (categoria) {
    //     case "salado":
            
    //         break;
    
    //     default:
    //         break;
    // }
}
function funcionBotonCat(){
    let boton = document.getElementsByClassName("botones-categoria");
    let botonesArray = [...boton];
    botonesArray.forEach((e) => {
        let cat = listaCategorias.find((i) => i == e.id);
        e.addEventListener("click", function () {
            // verPorCategoria(receta.nombreBuscar);
            verPorCategoria(cat);
        });
    });
}
window.onload = () => {
    // pintaArticulos();
    enterBoton();
    verCategorias();
};
