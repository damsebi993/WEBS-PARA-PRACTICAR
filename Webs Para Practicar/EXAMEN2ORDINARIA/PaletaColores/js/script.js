document.addEventListener('DOMContentLoaded', (event) => {
    const colors = document.querySelectorAll(".color");
    // Colores aleatorios
    colors.forEach(x => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        //Poner el # a mayusculas
        const colorCode = "#" + randomColor.toUpperCase();
        x.style.backgroundColor = colorCode;
        x.nextElementSibling.textContent = colorCode;
    });
    // // Agregar el evento "mouseleave" a cada color
    // colors.forEach(x => x.addEventListener("mouseleave", function () {
    //     // Restaurar el texto original
    //     this.nextElementSibling.textContent = this.style.backgroundColor;
    // }));

    colors.forEach(x => x.addEventListener("click", function () {
        // Guardar el código de color en una variable
        const colorCode = this.nextElementSibling.textContent;

        // Copiar el código de color al portapapeles
        navigator.clipboard.writeText(colorCode)
            .then(() => {
                // Si se copió correctamente, cambiar el texto a "Copied"
                this.nextElementSibling.textContent = "Copied";

                // Volver al texto original después de 2 seg
            setTimeout(() => {
                this.nextElementSibling.textContent = colorCode;
            }, 2000); // milisegundos 

            })
            .catch(err => {
                // Si algo salió mal, mostrar el error en la consola
                console.error('Error al copiar al portapapeles: ', err);
            });
    }));

    document.querySelector(".refrescar").addEventListener("click", function () {
        location.reload(); // Refresca la página
    });

});
