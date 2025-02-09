//VALIDACION DEL LOGIN
const inpName = document.querySelector(".inp-name");
const btnIngresar = document.querySelector(".btn-l");
const interfaceA = document.querySelector(".container-1");
const interfaceB = document.querySelector(".container-2");

btnIngresar.addEventListener('click', function(){

    event.preventDefault();

    let userName = inpName.value.trim().toLowerCase();

    if(userName === 'margarita'){
        interfaceB.style.display = 'flex';
        interfaceA.style.display = 'none';
    }else{
        alert("No eres la Persona indicada para leer este mensaje.");
    }
});

//BOTON MOSTRAR MENSAJE

const showMsm = document.querySelector(".btn-c");

showMsm.addEventListener('click', function(){
    sms.style.width = '250px'
    sms.style.padding = '20px'
    let btnShow = showMsm;

    btnShow.style.display = 'none';
    typeEffect();
    
})