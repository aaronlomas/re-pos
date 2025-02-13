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
const z = document.querySelector(".c-imgs");
const chicken = document.querySelector(".chicken");
const tituloA = document.querySelector(".tl-2");
const chickenB = document.createElement("img");
const michi = document.createElement("img");

window.addEventListener('load', function () {
var bgImg = new Image();
var imagenCargada = false;

bgImg.onload = function() {
    console.log('La imagen ha cargado completamente.');
    imagenCargada = true;
    bgImgCargada();
};

bgImg.src = './assets/pictureT.jpg';

function bgImgCargada() {
    if (imagenCargada) {
        ingresar();
    } else {
        console.log('La imagen aún no ha cargado.');
    }
}
});

//CAMBIAR A LA PANTALLA DE VER MENSAJE

function playSound() {
    efectSound.play();
};
function ingresar(){

    btnIngresar.addEventListener('click', function(){
    
        event.preventDefault();
    
        let userName = inpName.value.trim().toLowerCase();
    
        if(userName === 'corazon' || userName === 'corazón'){
            confetti.start();
            interfaceB.style.display = 'flex';
            interfaceA.style.display = 'none';
            sms.style.scale = 0;
            playSound();
        }else{
            alert("Ingrese una clave correcta, debe haber una pista oculta!");
        }
    });
}

//PANTALLA RESPONSIVE

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
    confetti.stop();
    let btnShow = showMsm;
    

    sms.style.padding = '15px'
    sms.style.scale = 1;
    document.querySelector(".sueno").style.scale = 1;
    btnShow.style.display = 'none';
    //chkOthers();
    
    playMusic();
    chkWritting();
    mostrarFotos();

    setTimeout(() => {
        typeEffect();
    }, 1600);

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
    chickenB.src = 'https://media.tenor.com/aykg8r1O0CkAAAAj/mofupiyo-mofu-piyo.gif';
    chickenB.style.width = "100px";
    chickenB.classList = 'chk-b';
    michi.src = 'https://i.pinimg.com/originals/80/5d/92/805d9290bf80860153c6804cc0ed2d3a.gif';
    michi.style.width = "100px";
    michi.classList = 'michi';
    z.appendChild(chickenB);
    z.appendChild(michi);
};

michi.addEventListener('mousedown', function(){
    confetti.start();
})
michi.addEventListener('mouseup', function(){
    confetti.stop();
})