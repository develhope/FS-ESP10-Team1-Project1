function mostrarMenu(mostrar) {
    let menu= document.getElementById("menu");
    let paginaCompleta= document.getElementById("paginaCompleta");
    let pauseButton= document.getElementById("pause");
    let porscheNavbar= document.getElementById("porsche-nav");
    let svgUser = document.getElementById("svgUsuario");
    let modelosListado = document.getElementById("modelosListado");
    let mitad1Default = document.getElementById("mitad1PorDefecto");
    let modelosCoche = document.getElementById("mitad1ModelosCoche");
    mitad1Default.style.display = "block";
    modelosCoche.style.display = "none";
    mostrarElementos("modelos", modelosListado);
    if (menu.style.display === "none" || mostrar) {
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
    for (let index = 0; index < menuElements.length; index++) {
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
function mostrarModelos(idCoche, seccionesModelos) {
    let m1PorDefecto = document.getElementById("mitad1PorDefecto");
    let modelosDiv = document.getElementById("modelos");
    let modelosCoche = document.getElementById("mitad1ModelosCoche");
    let coche = document.getElementById(idCoche);
    let modelosListado = document.getElementsByClassName("segundoListado");
    let elementos = document.getElementsByClassName("mitad2");
    m1PorDefecto.style.display = "none";
    modelosDiv.style.display = "none";
    modelosCoche.style.display = "block";
    
    for (let index = 0; index < elementos.length; index++) {
        elementos[index].style.display = "none";
        }
    for (let index = 0; index < modelosListado.length; index++) {
        if (modelosListado[index].classList.contains("selected")) {
            modelosListado[index].classList.remove("selected");
            modelosListado[index].classList.add("unselected");
        }
        }
        coche.style.display = "block";
        seccionesModelos.classList.remove("unselected");
        seccionesModelos.classList.add("selected");

}
