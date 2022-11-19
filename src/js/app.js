function pintaArticulos() {
    let contenedor = document.getElementById("contenedor");
    let texto = "";

    listaRecetas.forEach((element) => {
        // texto +=
        //     "<div class='col'><div class='card'><img src='./assets/" +
        //     element.id +
        //     ".jpg' class='card-img-top'>||<div class='card-body'> <h5 class='card-title'>" +
        //     element.nombre +
        //     "</h5><p class='card-text'>" +
        //     element.descripcion +
        //     "</p><b><p class='card-text text-center'>" +
        //     element.precio +
        //     "€</p></b></div><button id='" +
        //     element.codigo +
        //     "'  class='btn-success'>comprar</button></div></div>";
        texto += `
        <div class="col">
            <div class="card">
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
        element.instrucciones.forEach(x=>{
            texto+=`
                <li>${x.info}</li>
            `;
        })




             texto+=   `
                </div>
            </div>
        </div>
        `;
    });

    contenedor.innerHTML = texto;
}

function obtenerBuscada(){
    let busqueda = document.getElementById("busqueda").value;
    let f;
    let cosa;
    listaRecetas.forEach(element=>{
        if(element.nombre==busqueda){
            f= element;
        }
        
    })
    if(busqueda=="todos"){
        pintaArticulos();
    }else{
        verSoloUna(f.id);
    }
    
    
    
}


function verSoloUna(idBuscar) {
    let contenedor = document.getElementById("contenedor");
    let existe = listaRecetas.indexOf(listaRecetas[idBuscar]);
    let buscada = listaRecetas.find(e=>e.id==idBuscar);
    let texto;
    if (existe == -1) {
        alert("Esta receta no existe");
    } else {
        texto += `
        <div class="col">
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
                </div>
            </div>
        </div>
        `;
        contenedor.innerHTML=texto;
    }
}

window.onload = () => {
    pintaArticulos();
};
