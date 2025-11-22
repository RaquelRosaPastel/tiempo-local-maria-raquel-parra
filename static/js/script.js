document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. LÓGICA DE COOKIES ---
    const banner = document.getElementById('cookie-banner');
    const botonAceptar = document.getElementById('aceptar-btn');
    const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');

    function aceptarCookies() {
        
        // 1. Ocultar el banner de cookies
        if (banner) {
            banner.style.display = 'none';
        }

        // 2. Mostrar el mensaje de confirmación
        if (mensajeConfirmacion) {
            mensajeConfirmacion.textContent = '✅ Cookies aceptadas.';
            mensajeConfirmacion.style.display = 'block'; 
            mensajeConfirmacion.style.backgroundColor = '#d4edda';
            mensajeConfirmacion.style.color = '#155724';
            mensajeConfirmacion.style.padding = '10px';
            mensajeConfirmacion.style.borderRadius = '5px';
            mensajeConfirmacion.style.textAlign = 'center';
            
            // Opcional: Desaparecer el mensaje de confirmación después de 3 segundos
            setTimeout(() => {
                mensajeConfirmacion.style.display = 'none';
            }, 3000); 
        }
    }

    // Agregar el escuchador de eventos al botón Aceptar
    if (botonAceptar) {
        botonAceptar.addEventListener('click', aceptarCookies);
    }

    // --- 2. LÓGICA DE CONVERSIÓN DE TEMPERATURAS ---
    
    // Función de conversión: Celsius a Fahrenheit: F = (C * 9/5) + 32
    function convertirTemperatura(celsius) {
        // Redondeamos para valores más limpios
        return Math.round((celsius * 9 / 5) + 32); 
    }

    // Función que actualiza el texto y la unidad
    function actualizarTemperaturas(unit) {
        const temperaturas = document.querySelectorAll('.card .temp-min, .card .temp-max');

        temperaturas.forEach(tempElement => {
            // Obtenemos el valor original en Celsius del atributo data
            const cValue = parseInt(tempElement.dataset.cValue); 
            let displayValue;
            let displayUnit;

            if (unit === 'F') {
                displayValue = convertirTemperatura(cValue);
                displayUnit = '°F';
            } else { // 'C'
                displayValue = cValue;
                displayUnit = '°C';
            }
            
            // Actualizamos el texto mostrado
            tempElement.textContent = `${displayValue}${displayUnit}`;
        });
        
        // Volvemos a aplicar los colores (que se basan en el valor C)
        colorearTemperaturas();
    }
    
    // Escuchador de eventos para el selector de unidad
    const selector = document.getElementById('temp-unit-selector');

    if (selector) {
        selector.addEventListener('change', function() {
            const selectedUnit = this.value;
            actualizarTemperaturas(selectedUnit);
        });
    }


    // --- 3. LÓGICA DE COLOREADO DE TEMPERATURAS (Modificada para usar data-c-value) ---
    function colorearTemperaturas() {
        // Selecciona TODOS los elementos de temperatura 
        const temperaturas = document.querySelectorAll('.card .temp-min, .card .temp-max');

        temperaturas.forEach(tempElement => {
            
            // 1. Obtener el valor Celsius original desde el atributo data-c-value
            // ¡Usamos el valor C para aplicar la regla de color (26/12) y mantener la coherencia!
            const temperaturaC = parseInt(tempElement.dataset.cValue); 
            
            // Limpiamos las clases antes de volver a aplicar para evitar conflictos
            tempElement.classList.remove('temp-calida', 'temp-fria');
            
            // 2. Aplicar estilos condicionales basados en el valor C:
            
            // Si la temperatura es MAYOR que 26°C (Calor)
            if (temperaturaC > 26) {
                tempElement.classList.add('temp-calida');
            } 
            // Si la temperatura es MENOR que 12°C (Frío)
            else if (temperaturaC < 12) {
                tempElement.classList.add('temp-fria');
            } 
        });
    }

    // Ejecuta la función al cargar la página para inicializar los colores y las unidades
    colorearTemperaturas();
    // Inicializar unidades a Celsius (aunque ya lo están en HTML, es buena práctica)
    actualizarTemperaturas('C'); 
});