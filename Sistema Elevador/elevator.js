let canvas = document.getElementById("canvas");
let contex = canvas.getContext("2d")

let currentFloor = document.getElementById("currentFloor");
let listOfSelectedFloors = document.getElementById("listOfSelectedFloors");

// let positionY = document.getElementById("positionY");
// let teste = document.getElementById("teste");

let floors = [[-1, 450], [0, 420], [1, 360], [2, 260], [3, 150]];

let toMoveListFloor = [];

let standardFloor = 420;

const elevatorSound = new Audio("./sounds/pickupCoin.wav");
const elevatorSound2 = new Audio("./sounds/pickupCoin2.wav");

draw();

currentFloor.textContent = floors[1][0];

// positionY.addEventListener('input', function() {
//     teste.textContent = this.value;
//     update(this.value);
// });

// Desenha e apaga o canvas
function draw(params) {
    contex.clearRect(0, 0, canvas.width, canvas.height);
    contex.moveTo(0, 450);
    contex.lineTo(500, 450);
    contex.stroke();

    contex.moveTo(300, 480);
    contex.lineTo(300, 80);
    contex.lineTo(450, 80);
    contex.lineTo(450, 480);
    contex.lineTo(300, 480);
    contex.stroke();

    contex.moveTo(300, 180)
    contex.lineTo(450, 180);
    contex.stroke();

    contex.moveTo(300, 290)
    contex.lineTo(450, 290);
    contex.stroke();

    contex.moveTo(300, 390)
    contex.lineTo(450, 390);
    contex.stroke();

    contex.fillRect(285, params, 15, 30);
}

contex.fillRect(285, standardFloor, 15, 30);

// Função que desenha o retangulo. Uitlizado para testes
// function update(params) {
//     draw();
//     contex.fillRect(285, standardFloor, 15, 30);
// }

function btn(params) {
    toMoveListFloor.push(params);
    console.log(toMoveListFloor);
    
    listOfSelectedFloors.textContent = toMoveListFloor;

    // Adiciona um certo delay para o código
    setTimeout(function() {
        draw();

        // Verifica o valor do último item do array
        switch (toMoveListFloor.shift()) { // shift() remove e retorna o ultimo item do array
            case -1:
                contex.fillRect(285, floors[0][1], 15, 30);
                currentFloor.textContent = floors[0][0];
                break;
    
            case 0:
                contex.fillRect(285, floors[1][1], 15, 30);
                currentFloor.textContent = floors[1][0];
                break;
    
            case 1:
                contex.fillRect(285, floors[2][1], 15, 30);
                currentFloor.textContent = floors[2][0];
                break;
    
            case 2:
                contex.fillRect(285, floors[3][1], 15, 30);
                currentFloor.textContent = floors[3][0];
                break;
    
            case 3:
                contex.fillRect(285, floors[4][1], 15, 30);
                currentFloor.textContent = floors[4][0];
                break;
        }

        // Verifica se não há mais andares para ir
        if(toMoveListFloor.length === 0){

            // Após 5 segundos o elevador retorna para o terreo
            setTimeout(function() {
                draw();
                
                contex.fillRect(285, floors[1][1], 15, 30);
                currentFloor.textContent = floors[1][0];
                
                elevatorSound.play();
                elevatorSound2.play();

            }, 5000);
        }

        elevatorSound.play();
        elevatorSound2.play();

        listOfSelectedFloors.textContent = toMoveListFloor;
        
        console.log(toMoveListFloor);

    }, 5000);
}

// Pesquisei e assisti videos sobre a função canvas do HTML. Antes deste projeto,
// não sabia que essa função existia nem como funcionava.

// =========== A FAZER ===========
// Fazer a função de chamar o elevador para cada andar. FEITO
// Fazer a animação do elevador. +-

// Bonus:
//  Fazer o tempo de espera nos momentos necessarios. +-