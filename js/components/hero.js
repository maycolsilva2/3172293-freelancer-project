document.addEventListener("DOMContentLoaded", function(){

    const heroElement = document.querySelector (".hero-container")

    if (!heroElement) return;
        fetch("/views/components/hero.html")
        // la respuesta la convierte en texto plano
        .then(response => response.text())

        // Inserta el contenido html del hero en el contenedor correspondiente
        .then (data => {
            heroElement.innerHTML = data;
        })  
        .catch(error => console.error("error cargando el hero", error));
     
})