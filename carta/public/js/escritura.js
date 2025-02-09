const sms = document.querySelector(".sms");
const text = "lorem laksj dalsdj alkjdiojwdqw i ijc e criqcp ipocq wu qiwuqpcqi xoiqw ucoqi c ocixroqiroi cxroiqx qoiuqw uq iwu qw pqow p zq askdajks aksjdoqwd pdoefi wefi weif w9e quw8qu w0 uq08w9uq0wu 09qw9euq0 8wueq90w 9d0uq0d9 qw0dq uw 8du qw8duq8w dqwe8rue fweu f98e f9f eq8f 9q8fq90 8fq9";

const speed = 100; // Velocidad de escritura en milisegundos
let index = 0;

function changeBackgroundColor() {
    // Calcular el porcentaje de progreso
    const progress = index / text.length;
    // Color inicial: #f5ede3 (245, 237, 227)
    // Color final: rojo (255, 0, 0)
    const startColor = [245, 237, 227];
    const endColor = [255, 0, 0];
    const red = Math.round(startColor[0] + (endColor[0] - startColor[0]) * progress);
    const green = Math.round(startColor[1] + (endColor[1] - startColor[1]) * progress);
    const blue = Math.round(startColor[2] + (endColor[2] - startColor[2]) * progress);

    interfaceB.style.background = `linear-gradient(
                                    rgb(${red}, ${green}, ${blue}), #f5ede3)`;
}

function typeEffect() {
    if (index < text.length) {
        sms.textContent += text.charAt(index);
        index++;
        changeBackgroundColor();
        setTimeout(typeEffect, speed);
    }else{
        console.log("Error de Efecto Tipográfico");
    }
};