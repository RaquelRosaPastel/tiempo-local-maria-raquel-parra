<img width="1920" height="958" alt="screencapture-127-0-0-1-5500-2025-11-21-22_36_51" src="https://github.com/user-attachments/assets/a9e726ae-6b6b-4961-88b5-67ecc3d5b283" />
El Tiempo - Santiago

Este proyecto es una página web simple y responsive de pronóstico del tiempo, construida con HTML, CSS y JavaScript vainilla. Muestra el clima de Santiago con información clave para los próximos días.

Características Principales
Conversión de Temperatura: Permite al usuario alternar entre ver las temperaturas en grados Celsius (°C) y Fahrenheit (°F) mediante un selector.
Visualización Condicional: Las temperaturas se colorean automáticamente según rangos:
Rojo: Temperaturas máximas superiores a 26°C (cálidas).
Azul: Temperaturas mínimas inferiores a 12°C (frías).
Diseño Responsive: Las tarjetas de pronóstico están forzadas a permanecer en una sola fila. Si la pantalla es demasiado pequeña, se activa un desplazamiento horizontal (overflow-x: auto) para asegurar la visualización en dispositivos móviles sin sacrificar el layout principal.
Manejo de Cookies: Incluye un banner de notificación de cookies en la parte inferior que desaparece al hacer clic en "Aceptar", mostrando un mensaje de confirmación temporal.

Estructura del Proyecto
index.html: La estructura base de la página, incluyendo el encabezado, el selector de temperatura y las tarjetas de pronóstico con los atributos data-c-value (para guardar el valor original en °C).
static/css/style.css: Contiene todos los estilos de la interfaz, el layout Flexbox, el posicionamiento del footer y el banner de cookies, y las clases de color para las temperaturas.
static/js/script.js: La lógica central. Maneja la conversión matemática de °C a °F, la actualización del texto de las tarjetas y la activación/desactivación del banner de cookies.
