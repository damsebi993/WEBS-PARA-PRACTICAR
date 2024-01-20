document.addEventListener("DOMContentLoaded", function () {
    //FECHA
    date = new Date();
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    document.getElementById("date").innerHTML = day + "/" + month + "/" + year;


    //PASAR CURSOR SERVICES
    const services = document.querySelectorAll(".container1info");

    services.forEach(x => x.addEventListener("mouseover", function () {
        this.style.backgroundColor = "#334";
        const textBlanco = this.querySelectorAll(".blanco");
        textBlanco.forEach(text => text.style.color = "white");
    }));
    
    services.forEach(x => x.addEventListener("mouseleave", function () {
        this.style.backgroundColor = "";
        const textBlanco = this.querySelectorAll(".blanco");
        textBlanco.forEach(text => text.style.color = "");
    }));

    //PASAR CURSOR CLIENTS
    const clients = document.querySelectorAll(".container2info");

    clients.forEach(x => x.addEventListener("mouseover", function () {
        this.style.backgroundColor = "#334";
        const textBlanco = this.querySelectorAll(".blanco");
        textBlanco.forEach(text => text.style.color = "white");
    }));
    
    clients.forEach(x => x.addEventListener("mouseleave", function () {
        this.style.backgroundColor = "";
        const textBlanco = this.querySelectorAll(".blanco");
        textBlanco.forEach(text => text.style.color = "");
    }));
    


    //ZOOM IMAGENES CLIENTES
    const imgzoom = document.querySelectorAll(".imgzoom");
    imgzoom.forEach(x => x.addEventListener("mouseover", function () {
        this.style.transform = "scale(1.1)";
        this.style.filter = "grayscale(100%)"
    }));
    imgzoom.forEach(x => x.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
        this.style.filter = "grayscale(0%)"
    }));

    //Fondo Inputs
    // Seleccionamos todos los inputs con la clase ".box"
    const box = document.querySelectorAll(".box");

    // Para cada uno de esos inputs, agregamos dos eventos
    box.forEach(input => {

        // Este evento se dispara cuando el input recibe el foco, es decir, cuando el usuario hace clic en él
        input.addEventListener("focus", function () {
            // Cuando se hace clic en el input, independientemente de si tiene texto o no, establecemos el borde en rojo
            this.style.backgroundColor = "#334";
        });


        // Este evento se dispara cuando el input pierde el foco, es decir, cuando el usuario hace clic fuera del input
        input.addEventListener("blur", function () {
            this.style.backgroundColor = "";

        });
    });

    // Seleccionamos el elemento textarea en la página
    const textarea = document.querySelector("textarea");

    // Añadimos un detector de eventos para el evento 'contextmenu'
    textarea.addEventListener('contextmenu', function (e) {
        // Mostramos un mensaje de alerta
        alert('Has hecho clic con el botón derecho dentro del textarea');
    });


});