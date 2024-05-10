function mostrarMenu() {
    let menu= document.getElementById("menu");
    let paginaCompleta= document.getElementById("paginaCompleta");
    let pauseButton= document.getElementById("pause");
    let porscheNavbar= document.getElementById("porsche-nav");
    let svgUser = document.getElementById("svgUsuario");
    let modelosListado = document.getElementById("modelosListado");
    mostrarElementos("modelos", modelosListado);
    if (menu.style.display === "none") {
        menu.style.display = "flex";
        paginaCompleta.style.display = "none";
        pause.style.display = "none";
        porscheNavbar.style.display = "none";
        svgUser.style.display = "none";
    }else {
        menu.style.display = "none";
        paginaCompleta.style.display = "block";
        pause.style.display = "block";
        porscheNavbar.style.display = "block";
        svgUser.style.display = "block";
    }
}
function mostrarElementos(idElement, menuListado) {
    let element = document.getElementById(idElement);
    let elementos = document.getElementsByClassName("mitad2");
    let menuElements = document.getElementsByClassName("menuListado");
    for (let index = 0; index < elementos.length; index++) {
    elementos[index].style.display = "none";
    }
    for (let index = 0; index < elementos.length; index++) {
        if (menuElements[index].classList.contains("selected")) {
            menuElements[index].classList.remove("selected");
            menuElements[index].classList.add("unselected");
        }
        }
    element.style.display = "block";
    menuListado.classList.remove("unselected");
    menuListado.classList.add("selected");
} 
function botonPausa() {
    let pause = document.getElementById('pausa1');
    let play = document.getElementById('pausa2');
    let video = document.getElementById('video-background');
    if(video.paused){
        video.play();
        pause.style.display ='none';
        play.style.display ='flex'
    } 
    else{
        video.pause();
        play.style.display ='none'
        pause.style.display ='flex'
    }
}
function enlaceVideo() {
    window.location.href= 'https://www.porsche.com/spain/models/macan/macan-electric-models/macan-4-electric/'
} 