var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');
var cronometro = document.getElementById('time');
var continua = true;

start.addEventListener('click', function() {
    continua = true;
    relo();
});
var relogio;
var dia = 0;
var hora = 0;
var minutos = 0;
var segundos = 0;
var millisegundo = 0;

function relo() {
    if (continua != false) {
        setTimeout(function() {
            millisegundo++;
            if (millisegundo == 100) {
                millisegundo = 0;
                segundos++;
            }
            if (segundos == 60) {
                segundos = 0;
                minutos++;
            }
            if (minutos == 60) {
                minutos = 0;
                hora++;
            }
            if (hora == 24) {
                hora = 0;
                dia++;
            }

            relogio = (dia < 10 ? '0' + dia : dia) + ":" + (hora < 10 ? '0' + hora : hora) + ":" + (minutos < 10 ? '0' + minutos : minutos) +
                ":" + (segundos < 10 ? '0' + segundos : segundos) + ":" + (millisegundo < 10 ? '0' + millisegundo : millisegundo);
            cronometro.innerHTML = relogio;
            relo();
        }, 10);
    }
}

function resertar() {
    continua = false;
    dia = 0;
    hora = 0;
    minutos = 0;
    segundos = 0;
    millisegundo = 0;
    setTimeout(() => {
        let relogio = '00:00:00:00:00';
        cronometro.innerText = relogio;
    }, 10);
}

stop.addEventListener('click', function() {
    continua = false;
    segundos = (segundos >= 1) ? segundos-- : segundos;
});

reset.addEventListener('click', function() {
    resertar();
});