



function previos(){
    let contenedor = document.getElementById("contenedor-admin");
    let texto="";
    texto = `
      <div class=" d-flex flex-column w-50">
        <h1>Intoduce datos</h1>
        <input id="cantidadIngredientes" type="text" placeholder="Cantidad ingredientes">
        <input id="cantidadPasos" type="text" placeholder="Cantidad Pasos">
        <button id="btn-siguiente">Siguiente</button>
      </div>
    `
    contenedor.innerHTML=texto;
    saberCantidad();
  }
  function saberCantidad(){
    let contenedor = document.getElementById("contenedor-admin");
    let cantIng = document.getElementById("cantidadIngredientes");
    let cantPas = document.getElementById("cantidadPasos");
    let boton = document.getElementById("btn-siguiente");
    boton.addEventListener("click", function(){
      contenedor.innerHTML="";
      pintaTodo(cantIng.value, cantPas.value);
    });
    
  }
  function pintaTodo(cantidIngr, cantidPasos){
    let contenedor = document.getElementById("contenedor-admin");
    let texto;
    texto = `
      <div class=" d-flex flex-column w-50">
      <input id="idReceta" type="number" placeholder="Id numerico, preguntar Alvaro">
      <input id="nombreReceta" type="text" placeholder="Nombre">
      <input id="nombreRecetaBuscar" type="text" placeholder="Nombre imagen">
      <input id="tipoReceta" type="text" placeholder="Tipo">
      <input id="tiempoCocinaReceta" type="text" placeholder="Tiempo cocina">
      <input id="personasReceta" type="text" placeholder="Personas">
      <br>
    `;
    for (let i = 0; i < cantidIngr; i++) {
      texto+=`<input id="ingrediente${i}" class="input-ingredient" type="text" placeholder="Ingrediente ${i+1}-> Harina de trigo: 500gr">`;
      
    }  
    texto+=`<br>`;           
    for (let e = 0; e < cantidPasos; e++) {
        texto+=`<input id="paso${e}" class="input-pasos" type="text" placeholder="Paso ${e+1}">`;
    }   
    texto+=`
        <button id="fin">Finalizar</button>
      </div>
    `;
    contenedor.innerHTML=texto;
    obtenDatos();
  }
  
  function obtenDatos(){
    let id = document.getElementById("idReceta");
    let nombreReceta = document.getElementById("nombreReceta");
    let nombreABuscar = document.getElementById("nombreRecetaBuscar");
    let tipoReceta= document.getElementById("tipoReceta");
    let tiempoCocin= document.getElementById("tiempoCocinaReceta");
    let personas= document.getElementById("personasReceta");
    let ingredientes = document.getElementsByClassName("input-ingredient");
    let ingredientesArray = [...ingredientes];
    let arrayIngredientesFinal = [];
    let pasos = document.getElementsByClassName("input-pasos");
    let pasosArray = [...pasos];
    let arrayPasosFinal = [];
    let boton = document.getElementById("fin");
    
    boton.addEventListener("click",function(){
      ingredientesArray.forEach(e=>{
        arrayIngredientesFinal.push(e.value);
      });
      pasosArray.forEach(e =>{
        arrayPasosFinal.push(e.value);
      });
      // console.log(nombreReceta.value);
      // console.log();
      // console.log();
      // console.log();
      // console.log();
      // console.log(arrayIngredientesFinal);
      // console.log(arrayPasosFinal);
      anyadirReceta(id.value, nombreABuscar.value, nombreReceta.value, tipoReceta.value, tiempoCocin.value, personas.value, arrayIngredientesFinal, arrayPasosFinal);
      previos();
    });
  }
  // function construirJson(nombreBusqueda, nombreCompleto, tipo, tiempoPreparacion, personas,ingredientes=[], preparacion=[]) {
  //   let id = listaRecetas.length;
  //   let ultimoArray = {
  //     "id": id+1,
  //     "nombreBuscar": nombreBusqueda,
  //     "nombre": nombreCompleto,
  //     "descripcion": "",
  //     "tipo": tipo,
  //     "tiempoPreparacion": tiempoPreparacion,
  //     "personas": personas,
  //   };
  //   listaRecetas.push(ultimoArray);
  //   // console.log(ultimoArray);
  // }
  
  function anyadirReceta(idBusqueda, nombreBusqueda, nombreCompleto, tipo, tiempoPreparacion, personas,ingredientes=[], preparacion=[]) {
    
    return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:3000/recetas/");
        
        if (idBusqueda == "" || nombreBusqueda == "" ||nombreCompleto == "" ||tipo == "" ||tiempoPreparacion == null || personas == null || ingredientes == null|| preparacion == null ) {
            alert("Introduce todos los campos");
        } else {
          let ultimoIngredientes = [];
          ingredientes.forEach(e =>{
            ultimoIngredientes.push({"info": e});
          });
          let ultimoPasos = [];
          preparacion.forEach(e =>{
            ultimoPasos.push({"info": e});
          });
          // ultimoIngredientes.forEach(i =>console.log(i));
            let miPost = {
                id: parseInt(idBusqueda),
                nombreBuscar: nombreBusqueda,
                nombre: nombreCompleto,
                descripcion: "",
                tipo: tipo,
                tiempoPreparacion: parseInt(tiempoPreparacion),
                personas: parseInt(personas),
                ingredientes: ultimoIngredientes,
                instrucciones: ultimoPasos
            };
  
            xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
            xhr.send(JSON.stringify(miPost));
            xhr.onload = function () {
                if (xhr.status == 201) {
                    resolve(xhr.response);
                    alert("Receta introducida");
                } else {
                    reject("Error " + xhr.status + " " + xhr.statusText);
                }
            };
        }
    });
  }
  
  window.onload = () =>{
    previos();
  }