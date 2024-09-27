function esquerdo(){
    var conteinerdefotoumdos = document.getElementById("conteinerdefotoumdos");

    conteinerdefotoumdos.scrollBy({
        left:-180,
        behavior:"smooth"
    });
}

function direito(){
    var conteinerdefotoumdos = document.getElementById("conteinerdefotoumdos");

    conteinerdefotoumdos.scrollBy({
        left:180,
        behavior:"smooth"
    });
}



function kiwi(){
    window.location = "https://pay.kiwify.com.br/M0fAKBu";
}