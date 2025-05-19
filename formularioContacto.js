document.getElementById('form-contacto').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const formulario = document.getElementById("form-contacto");
    const campos = document.querySelectorAll('.input-campo');

    let valido = true;
    let mensajeError = "";

    /* recorre todos los inputs para saber cuales estan bien y cuales no (cambia su color de relleno) y armar el mensaje de error al apretar submit*/   
    campos.forEach(campo => {    
        if (!campo.checkValidity()) {
            campo.classList.add('invalido');
            mensajeError += campo.validationMessage;
            mensajeError += "\n"
            valido = false;
        } else {
            campo.classList.remove('invalido');
        }        
    });

    /* valido que mensaje mostrar al apretar el submit */
    if(!valido)
    {
        alert("Existen los siguientes errores en el formulario\n" + mensajeError + "\n por favor complete correctamente los campos mencionados");
    }
    else
    {
        let nombreInput = document.getElementById("nombre");
        alert("gracias por su contacto " + nombreInput.value + ", en breve le estaré respondiendo");
        formulario.reset(); 
    }
});

/* se valida cada campo input con el foco en el campo */
document.addEventListener("DOMContentLoaded", function () {
    const campos = document.querySelectorAll(".input-campo");

    campos.forEach(campo => {
        campo.addEventListener("blur", function () {
            const errorDiv = document.getElementById("error-" + campo.id);
            if (!campo.checkValidity()) {
                errorDiv.textContent = campo.validationMessage;
            } else {
                errorDiv.textContent = "";
            }
        });

        campo.addEventListener("input", function () {
            const errorDiv = document.getElementById("error-" + campo.id);
            errorDiv.textContent = "";
        });
    });
});