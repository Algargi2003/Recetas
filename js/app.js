function sortArray(x,y){
    if(x.nombreBuscar<y.nombreBuscar){return -1;};
    if(x.nombreBuscar>y.nombreBuscar){return 1;};
    return 0;
}

function pintaArticulos() {
    let contenedor = document.getElementById("contenedor");
    let texto = "";

    let nuevalistaRecetas=listaRecetas.sort(sortArray);
    nuevalistaRecetas.forEach((element) => {
        
        texto += `
        <div class="col">
            <div class="card ">
                <img src="./assets/img/${element.nombre}.jpg" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${element.nombre}</h5>
                    <p class="card-text"><b>Ingredientes:</b></p>
                    <ol>`;

        element.ingredientes.forEach((i) => {
            texto += `
            
                <li>${i.nombre}: ${i.cantidad}</li>
            
            `;
        });

        texto += `</ol>
                <p class="card-text"><b>Preparación:</b></p>
                <ol>`;
        element.instrucciones.forEach((x) => {
            texto += `
                <li>${x.info}</li>
            `;
        });

        texto += `
                </div>
            </div>
        </div>
        `;
    });

    contenedor.innerHTML = texto;
}

function obtenerBuscada() {
    let busqueda = document.getElementById("busqueda").value.toLowerCase();
    let f;
    let cosa;
    listaRecetas.forEach((element) => {
        if (element.nombreBuscar == busqueda) {
            f = element;
        }
    });
    if (busqueda == "todos") {
        pintaArticulos();
    } else if(f == undefined){
        alert("La receta no existe");
    }else{
        verSoloUna(f.id);
    }
    
}

function verSoloUna(idBuscar) {
    let contenedor = document.getElementById("contenedor");
    let existe = listaRecetas.findIndex(e=> e.id == idBuscar);
    let buscada = listaRecetas.find((e) => e.id == idBuscar);
    let texto;
    
    
        texto += `
        <div class="col ">
            <div class="card ">
                <img src="./assets/img/${buscada.nombre}.jpg" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${buscada.nombre}</h5>
                    <p class="card-text"><b>Ingredientes:</b></p>
                    <ol>`;

        buscada.ingredientes.forEach((i) => {
            texto += `
            
                <li>${i.nombre}: ${i.cantidad}</li>
            
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
                
        texto+=`</div>
            </div>
        </div>
        `;
        contenedor.innerHTML = texto;
    }


window.onload = () => {
    pintaArticulos();
};
