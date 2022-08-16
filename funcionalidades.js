
var input= document.querySelector("#text");
var textarea=document.querySelector("#caja_2");
var botonTres=document.querySelector("#botonTres");

input.focus();


function boton(){
    botonTres = document.createElement("button");
    botonTres.setAttribute("id","botonTres");
    botonTres.innerText="Copiar";
    return(contenedorTexto.appendChild(botonTres))
}


function  encriptar (){
      if(input.value == ''){
        alert("caja de texto vacia");
      }else{
        if(document.querySelector("#caja_2")){
            textarea.remove();
            textarea = document.createElement("textarea");
            textarea.setAttribute("id","caja_2");
            textarea.innerHTML = btoa(input.value);
            return(contenedorTexto.appendChild(textarea));
        }
        document.querySelector("#parrafo").style.display='none';
        document.querySelector("#parrafo_2").style.display='none';
        document.querySelector("#img").style.display='none';
        textarea = document.createElement("textarea");
        textarea.setAttribute("id","caja_2");
        textarea.innerHTML = btoa(input.value);
        boton();
        return(contenedorTexto.appendChild(textarea));
      }
}

function  desencriptar (){
      if(input.value == ''){
        alert("caja de texto vacia");
      }else{
        if(document.querySelector("#caja_2")){
            textarea.remove();
            textarea = document.createElement("textarea");
            textarea.setAttribute("id","caja_2");
            textarea.innerHTML = atob(input.value);
            return(contenedorTexto.appendChild(textarea));
        }
        else{
        document.querySelector("#parrafo").style.display='none';
        document.querySelector("#parrafo_2").style.display='none';
        document.querySelector("#img").style.display='none';
        textarea = document.createElement("textarea");
        textarea.setAttribute("id","caja_2");
        textarea.innerHTML = atob(input.value);
        boton();
        return(contenedorTexto.appendChild(textarea));
        }
      }
}


const botonUno = document.querySelector("#boton_1");
const botonDos = document.querySelector("#boton_2");

botonUno.onclick=encriptar;
botonDos.onclick=desencriptar;



