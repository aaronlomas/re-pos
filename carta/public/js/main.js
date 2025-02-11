//VALIDACION DEL LOGIN
const inpName = document.querySelector(".inp-name");
const btnIngresar = document.querySelector(".btn-l");
const interfaceA = document.querySelector(".container-1");
const interfaceB = document.querySelector(".container-2");
const music = document.getElementById('bg-music');
const efectSound = document.getElementById('ingreso-music');
const showMsm = document.querySelector(".btn-c");
const x = document.querySelector(".item-2");
const y = document.querySelector(".item-1");
const chicken = document.querySelector(".chicken");
const tituloA = document.querySelector(".tl-2");
const chickenB = document.createElement("img");

//CAMBIAR A LA PANTALLA DE VER MENSAJE

function playSound() {
    efectSound.play();
};

btnIngresar.addEventListener('click', function(){

    event.preventDefault();

    let userName = inpName.value.trim().toLowerCase();

    if(userName === 'corazon' || userName === 'corazón'){
        confetti.start();
        interfaceB.style.display = 'flex';
        interfaceA.style.display = 'none';
        playSound();
    }else{
        alert("Ingrese la clave correcta, debe haber una pista oculta!");
    }
});

//ACTUALIZAR PANTALLA

function updateViewportSize() {

    var viewportWidth = window.innerWidth;

    if(viewportWidth < '700'){

        sms.style.width = '256px'
    }else{
        sms.style.width = '450px'
    }

};

window.addEventListener('resize', updateViewportSize);

// ABRIR EL MENSAJE CON EL BOTÓN VER MENSAJE

showMsm.addEventListener('click', function(){
    updateViewportSize();
    let btnShow = showMsm;
    

    sms.style.padding = '15px'

    btnShow.style.display = 'none';
    //chkOthers();
    setTimeout(() => {
        playMusic();
    }, 3000);

    setTimeout(() => {
        typeEffect();
        chkWritting();
    }, 1000);

    y.removeChild(chicken);
    y.removeChild(tituloA);
});

//INSTANCIAS DE MUSICA

function playMusic() {
    music.play();
};


// function pauseMusic() {
//     music.pause();
// }
function chkWritting(){
    chickenB.src = 'https://media.tenor.com/aykg8r1O0CkAAAAj/mofupiyo-mofu-piyo.gif'
    chickenB.style.width = "100px";
    chickenB.classList = 'chk-b';
    x.appendChild(chickenB);
};

chickenB.addEventListener('click', function(){
    mostrarFotos();
});
// function chkOthers(){
//     const chkB = document.createElement("img");
//     chkB.src = 'https://i.pinimg.com/originals/ed/8e/0c/ed8e0cfc55c794497c429561c18c1216.gif'
//     chkB.style.width = "100px";
//     y.appendChild(chkB);
// }