const turnOn = document.getElementById('ligar');
const turnOff= document.getElementById('desligar');

const lamp = document.getElementById('lamp');

function ligar () {
   lamp.src="./img/ligada.jpg"
}

function desligar () {
    lamp.src="./img/desligada.jpg"
 }
 
 
 



turnOn.addEventListener('click', ligar);
turnOff.addEventListener('click', desligar);
