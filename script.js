document.addEventListener("DOMContentLoaded", () => {
    const d = document;
    const textArea = d.querySelector(".main_form_input");
    const imagenMuneco = d.querySelector(".muneco-alura");
    const resultadoTitulo = d.querySelector(".aside_titulo");
    const resultadoText = d.querySelector(".aside_texto");
    const botonEncriptar = d.querySelector(".main_form_btn");
    const botonDesencriptar = d.querySelector(".main_form_btn_2");
    const botonCopiar = d.querySelector(".main_form_btn_3");
  
    const llaves = [
      ["e", "enter"],
      ["i", "imes"],
      ["a", "ai"],
      ["o", "ober"],
      ["u", "ufat"],
    ];
  
    //Encriptar
    function encriptarmensaje(mensaje) {
      let mensajeEncriptado = "";
      for (let i = 0; i < mensaje.length; i++) {
        let letra = mensaje[i];
        let encriptada = letra;
        for (let j = 0; j < llaves.length; j++) {
          if (letra === llaves[j][0]) {
            encriptada = llaves[j][1]; 
            break; 
          }
        }
        mensajeEncriptado += encriptada;
      }
  
      return mensajeEncriptado;
    }
  
    //Desencriptar
    function desencriptarMensaje(mensaje) {
      let mensajeDesencriptado = mensaje;
      for (let i = 0; i < llaves.length; i++) {
        let regex = new RegExp(llaves[i][1], "g");
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]); 
      }
      return mensajeDesencriptado;
    }
  
    //Aqui oculto elementos
    textArea.addEventListener("input", (e) => {
      imagenMuneco.style.display = "none";
      resultadoTitulo.textContent = "Capturando Mensaje...";
      resultadoText.textContent = "";
    });
  
    //Funcion del boton encriptar
    botonEncriptar.addEventListener("click", (e) => {
      e.preventDefault();
      let mensaje = textArea.value.toLowerCase();
      let mensajeEncriptado = encriptarmensaje(mensaje);
      resultadoText.textContent = mensajeEncriptado;
      botonCopiar.classList.remove("hidden");
      resultadoTitulo.textContent = "El resultado es:";
    });
  
    //Funcion del boton desencriptar
    botonDesencriptar.addEventListener("click", (e) => {
      e.preventDefault();
      let mensaje = textArea.value.toLowerCase();
      let mensajeDesencriptado = desencriptarMensaje(mensaje);
      resultadoText.textContent = mensajeDesencriptado;
      botonCopiar.classList.remove("hidden");
      resultadoTitulo.textContent = "El resultado es:";
    });
  
    //Funcion del boton copiar
    botonCopiar.addEventListener('click', ()=>{
      let textoCopiado = resultadoText.textContent;
      navigator.clipboard.writeText(textoCopiado).then(()=> {
        imagenMuneco.style.display = "block";
        resultadoTitulo.textContent = "El texto se copio";
        botonCopiar.classList.add("hidden");
        resultadoText.textContent = ""
      });
    });
  });