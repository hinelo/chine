var numer = 0
var pontos= 0
var questions = {
"Você lava o pé?": {"sim":0, "não":10},
"Você mora em um pantano?": {"sim":15, "não":0},
"As pessoas gostam de te lamber com frequencia?": {"sim":10, "não":0},
"Costuma andar sem pular?": {"sim":0, "não":30},
"Eu acredito que todos os sapos são seres superiores e que merecem ser tratado como divindades": {"sim":40, "não":0},
"Consegue esticar sua lingua?": {"sim":30, "não":0},
"Consegue respirar pela pele?": {"sim":30, "não":0},
"Você se indentifica com a Tsuyu Asui do boku no hero?": {"sim":10, "não":0},
"Consegue andar em duas pernas?": {"sim":0, "não":10},
"Comeria uma mosca?": {"sim":20, "não":0}
}
var quant = Object.keys(questions).length

 
function questionar(){
    document.getElementById('question').innerHTML = Object.keys(questions)[numer]
    document.getElementById('numero').innerHTML = `questão ${numer+1}/${quant}` 
}

function Value(esc) {
    switch (esc) {
        case 1:
            pontos += questions[Object.keys(questions)[numer]].não
            break
        default:
            pontos += questions[Object.keys(questions)[numer]].sim
            break
    }

    if(numer+1== quant){
        return end_game()
    }

    numer +=1
    questionar()
}

function end_game() {
    let resultado = "não é um sapo";
    if (pontos >= 55){
        resultado = "sapo"
    }
    document.getElementById('question').innerHTML ="Você tirou "+ pontos+ "<br> Diagnostico: " + resultado
    document.getElementById('numero').innerHTML = '<a href="index.html" ><button>Voltar</button></a>'
    document.getElementById('bt').style.display = 'none'
}
