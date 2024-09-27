
var rir = 1;


function funtio(){
    if(rir % 2 == 1){
        const teladea = document.getElementById('teladea');
        teladea.classList.remove("teladeanuncio");
        teladea.classList.remove("teladeanuncioff");
        teladea.classList.add("teladeanuncioon");
    }
    else{
        teladea.classList.remove("teladeanuncioon");
        teladea.classList.add("teladeanuncioff");
    }

    rir++;
}

funtio();


function voltar(){
    window.location="index2.html";
}


