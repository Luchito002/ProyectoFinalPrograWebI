
/*CANVAS*/
var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');
        
ctx.lineWidth = 9;
ctx.strokeStyle = 'rgba(18, 57, 163, 0.8)'
ctx.strokeRect(0, 0, 175, 175);
        
ctx.lineWidth = 4;
ctx.strokeStyle = 'rgba(18, 57, 163, 0.5)'
ctx.strokeRect(10, 10, 155, 155);

/* SPEAKER */
addEventListener('mouseup', () =>{
    var speak = new SpeechSynthesisUtterance(window.getSelection().toString());
    speak.lang = 'es-ES';
    speechSynthesis.speak(speak);
})

/* EVENTO: CAMBIO DE COLOR EN EL BOTON */
var buttonInicio = document.getElementById("BTNInicio");

buttonInicio.addEventListener('mouseenter', ()=>{
    buttonInicio.style.background = "rgb(3, 146, 146)";
})

buttonInicio.addEventListener('mouseleave', ()=>{
    buttonInicio.style.background = "rgba(12, 7, 34, 0.466)";
})

