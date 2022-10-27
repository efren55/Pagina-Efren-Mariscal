let cambio = true;
let boton = document.querySelector(".hamburger--elastic");
let selec = document.querySelector(".nav_barra");
boton.addEventListener("click",presionar);
function presionar (){
    if(cambio===true){
        cambio=false;
        docHTML=`<nav class="sitios">
                    <a href="index.html" class="titulos" class="titulos_sobre">Sobre mi</a></br>
                    <a href="habilidades.html" class="titulos">Habilidades</a></br>
                    <a href="proyectos.html" class="titulos">Proyectos</a></br>
                    <a href="contacto.html" class="titulos">Contacto</a></br>
                </nav>`
        selec.innerHTML=docHTML;
    }
    else{
        cambio=true;
        docHTML=null;
        selec.innerHTML=docHTML;
    }
    
}

