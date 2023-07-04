
 function validarFormulario(event) {
    event.preventDefault(); 
    
    
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRegex = /^\d{10}$/;
    
    if (nombre === "") {
        mostrarError("nombre", "Por favor, ingresa tu nombre");
        return;
    }
    
    if (correo === "") {
      mostrarError("correo", "Por favor, ingresa tu correo electrónico");
      return;
    } else if (!emailRegex.test(correo)) {
      mostrarError("correo", "Por favor, ingresa un correo electrónico válido");
      return;
    }
    
    if (telefono === "") {
      mostrarError("telefono", "Por favor, ingresa tu número de teléfono");
      return;
    } else if (!phoneRegex.test(telefono)) {
      mostrarError("telefono", "Por favor, ingresa un número de teléfono válido de 10 dígitos");
      return;
    }
    
    alert("Formulario enviado correctamente");
    document.getElementById("myForm").reset(); 
  }
  
  function mostrarError(campo, mensaje) {
    var errorSpan = document.createElement("span");
    errorSpan.className = "error";
    errorSpan.innerText = mensaje;
    
    var campoInput = document.getElementById(campo);
    campoInput.parentNode.insertBefore(errorSpan, campoInput.nextSibling);
  }
  
  document.getElementById("myForm").addEventListener("submit", validarFormulario);
