//contador de veces que se entro al recuadro para realizar modificiaciones de nombres: 
let cont=0;
const Entrada1 = document.querySelector('.Nombre');
Entrada1.addEventListener('focus',()=>{
    cont++;
    console.log(`Se modifico el Nombre ${cont} veces`)
});

 //contador de veces que se entro al recuadro para realizar modificiaciones en el numnero de telefono: 
let cont2=0;
const Entrada2 = document.querySelector('.Telefono');
Entrada2.addEventListener('focus',()=>{
    cont2++;
    console.log(`Se modifico el Numero de Telefono ${cont2} veces`)
});

//contador de veces que se entro al recuadro para realizar modificiaciones direcion de correo elelctronico: 
let cont3=0;
const Entrada3 = document.querySelector('.Email');
Entrada3.addEventListener('focus',()=>{
    cont3++;
    console.log(`Se modifico la Direccion de Correo ${cont3} veces`)
});

// validacion de botones de radio para evitar multiple selecion
//se crea una funcion para evitar la multiple selecion de los botones de radios 
function unselect(){
    document.querySelectorAll('[name="genero"]').forEach((x) => x.checked = false);
}



