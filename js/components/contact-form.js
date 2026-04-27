document.addEventListener("DOMContentLoaded", function(){

    const form = document.querySelector (".services__form-container")

    if (!form) return;
        fetch("/views/components/contact-form.html")
        // la respuesta la convierte en texto plano
        .then(response => response.text())

        // Inserta el contenido html del hero en el contenedor correspondiente
        .then (data => {
            form.innerHTML = data;
        })  
        .catch(error => console.error("error cargando el formulario", error));
     
})