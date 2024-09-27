
var pop =1;


function ani(){
    if(pop % 2==1){
        const telalaetraldoclcsss = document.getElementById("telalaetraldoclcsss");
        telalaetraldoclcsss.classList.remove("telalaetraldocll");
        telalaetraldoclcsss.classList.remove("telalaetraldoclloff");
        telalaetraldoclcsss.classList.add("telalaetraldocllon");
    }

    else{
        telalaetraldoclcsss.classList.remove("telalaetraldocllon");
        telalaetraldoclcsss.classList.add("telalaetraldoclloff");
    }
    pop++;
}

function motivacao(){
    window.location = "motivacao.html";
}
function vip(){
    window.location = "vip.html";
}

function pilula(){
    window.location="pilula.html";
}

var pip =1;


function sombra(){
    if(pip % 2 == 1){
        const shadow = document.getElementById("shadow");
        shadow.classList.remove("excuresestela");
        shadow.classList.remove("excuresestelaoff");
        shadow.classList.add("excuresestelaon");
    }

    else{
        shadow.classList.remove("excuresestelaon");
        shadow.classList.add("excuresestelaoff");
    }
    pip++;
}



function linksupotr() {
    
    window.location = "https://wa.me/5511942442175";
}


document.addEventListener('DOMContentLoaded', function () {
    const campo = document.getElementById("campo");
    const btabrirto = document.getElementById("btabrirto");
    const remover = document.getElementById("remover");

    btabrirto.addEventListener('click', function(){
        remover.classList.remove("icone");
        campo.classList.toggle("novocampo");
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const campo2 = document.getElementById("campo2");
    const btabrirto2 = document.getElementById("btabrirto2");
    const remover2 = document.getElementById("remover2");

    btabrirto2.addEventListener('click', function(){
        remover2.classList.remove("icone2");
        campo2.classList.toggle("novocampo2");
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const campo3= document.getElementById("campo3");
    const btabrirto3 = document.getElementById("btabrirto3");
    const remover3 = document.getElementById("remover3");

    btabrirto3.addEventListener('click', function(){
        remover3.classList.remove("icone3");
        campo3.classList.toggle("novocampo3");
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const campo4= document.getElementById("campo4");
    const btabrirto4 = document.getElementById("btabrirto4");
    const remover4 = document.getElementById("remover4");

    btabrirto4.addEventListener('click', function(){
        remover4.classList.remove("icone4");
        campo4.classList.toggle("novocampo4");
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const campo5= document.getElementById("campo5");
    const btabrirto5 = document.getElementById("btabrirto5");
    const remover5 = document.getElementById("remover5");

    btabrirto5.addEventListener('click', function(){
        remover5.classList.remove("icone5");
        campo5.classList.toggle("novocampo5");
        
    });



});



var valorcta = 1;


function msdalert(){
    if(valorcta % 2 == 1){
        const aletdemansagemchamada = document.getElementById("aletdemansagemchamada");
        aletdemansagemchamada.classList.remove("alertademsg");
        aletdemansagemchamada.classList.remove("alertademsgoff");
        aletdemansagemchamada.classList.add("alertademsgon");
}
else{
    aletdemansagemchamada.classList.remove("alertademsgon");
    aletdemansagemchamada.classList.add("alertademsgoff");
}

valorcta++;
}

msdalert();


function bonus(){
    window.location = "bonusexclusivos.html";
}