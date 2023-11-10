function tocasom(idElementoAudio){
    document.querySelector(idElementAudio).play();
}
const listaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;
while(contador < listaDeTeclas.lenght){
    const efeito = listaDeTeclas[contador].classList[1];
    const idAudio = "#som_"+efeito;
    listaDeTeclas[conatdor].onclick = function(){
        tocasom (idAudio)
    }
    contador = contador +1;
    console.log(contador);
}