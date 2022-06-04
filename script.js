const codigo = [];
const maxIntento = 5;
let secretRow = document.getElementById("codigo").getElementsByClassName("w100")[0].getElementsByClassName("w20");
intento = 0;

/*1. Genera una constante CODIGO_SECRETO de tipo array de 5 número aleatorios entre 0 y 9 usando la libreria Math.random();*/
function generateSecretCode() {
    for (let i = 0; i < 5; i++) {
        codigo[i] = Math.floor((Math.random() * 10));
    }
    console.log(codigo);
}


function extractCodeUser(){
    let codigo = document.getElementById("numero").value;
    return codigo.split("");
}


function Comprobar(){
    userCode = extractCodeUser();
    let row = document.getElementById("Result").getElementsByClassName("rowResult")[intento].getElementsByClassName("w20");
    let correct = 0
    for (let j = 0; j < codigo.length; j++) {
        if (codigo[j] == userCode[j]) {
            row[j].firstElementChild.style.backgroundColor = "green";
            correct++
        } else {
            let result = countNumInArray(userCode[j]);
            if (result != 0){
                row[j].firstElementChild.style.backgroundColor = "yellow";
            }
        }
        row[j].firstElementChild.innerHTML = userCode[j]
    }
    intento++
    analizeResult(correct);
}


function countNumInArray (userNumber){
    var counter = 0
    for (number of codigo){
        if (number == userNumber){
            counter++
        }    
    }
    return counter;
}


function analizeResult(correct){
    if (correct == codigo.length) {
        document.getElementById("info").innerHTML = "¡Felicidades! Adivinaste el código.";
        showSecretCode();
    } else if (intento == maxIntento){
        document.getElementById("info").innerHTML = "GAME OVER. Intento: " + intento + "/" + maxIntento;
        showSecretCode();
    } else {
        document.getElementById("info").innerHTML = "Intento: " + intento + "/" + maxIntento + ". Te quedan " + (maxIntento - intento) + " intentos";
    }
}

function showSecretCode(){
    for (let k = 0; k < codigo.length; k++) {
        secretRow[k].firstElementChild.innerHTML = codigo[k];
    }
}

function newGame(){
    location.reload();
}

function generateRows(){
    for (let i = 0; i < maxIntento; i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("rowResult","w100","flex","wrap");
        document.getElementById("Result").appendChild(newDiv);
    }

    for (let j = 0; j <= codigo.length; j++){
        for (let k = 0; k <= codigo.length; k++){
            const rowDiv = document.createElement("div");
            rowDiv.classList.add("w20");
            document.getElementsByClassName("rowResult")[j].appendChild(rowDiv);
        }
        for (let m = 0; m < codigo.length; m++) {
                const cell = document.createElement("div");
                cell.classList.add("celResult","flex");
                document.getElementsByClassName("rowResult")[j].getElementsByClassName("w20")[m].appendChild(cell);
        }
    }
}


generateSecretCode();

generateRows();