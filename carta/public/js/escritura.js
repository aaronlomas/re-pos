const sms = document.querySelector(".sms");
const text = "Amor mío, comienzo a escribir esto pensando en tí, por todas las cosas nuevas que estamos pasando juntos; como la primera vez que nos conocimos..., estabas tan hermosa, algo temerosos pero con ganas de saber más del otro. Sé que nunca olvidaremos este Día tan especial que nos une cada vez más, ahora amo cada pedazo de tí, TE AMO, FELIZ ANIVERSARIO MI VIDA!";

const speed = 200; // Velocidad de escritura en milisegundos
let index = 0;
const alphaColor = 0.47;

function typeEffect() {
    if (index < text.length) {
        sms.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    }else{
        console.log("Error de Efecto Tipográfico");
    }
};

