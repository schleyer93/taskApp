# TaskApp

Este proyecto fue generado usando [Angular CLI](https://github.com/angular/angular-cli) version 19.1.5.

## Descripción del Proyecto

TaskApp es una aplicación web desarrollada en Angular 19 que permite a los usuarios gestionar tareas. Las principales funcionalidades incluyen:

- Agregar nuevas tareas: A través de un formulario con validaciones.
- Listar tareas: Muestra todas las tareas con su título, descripción y estado.
- Cambiar el estado de las tareas: Las tareas pueden estar en tres estados: Por completar, En proceso o Completada.
- Eliminar tareas: Permite eliminar tareas de la lista.
- Contador de tareas pendientes: Muestra cuántas tareas están en estado "Por completar".
- Mensajes dinámicos: Muestra mensajes cuando no hay tareas o cuando hay tareas pendientes.
- Diseño responsivo: La lista de tareas se adapta al tamaño de la pantalla (1 columna en móviles, 2 en tablets y 3 en pantallas grandes).
- Estilos minimalistas: Utiliza Bootstrap para un diseño limpio y elegante.
- Manejo de plurales con i18nPlural: Se utiliza i18nPlural para manejar los plurales de manera dinámica.

## Instrucciones de Ejecución

# Requisitos Previos

Node.js: Tener Node.js instalado.

Angular CLI: Instala Angular CLI globalmente usando npm:

```
npm install -g @angular/cli
```

# Pasos para Ejecutar el Proyecto

- Clonar el repositorio :

```
git clone https://github.com/schleyer93/taskApp.git
cd taskApp
```

- Instalar dependencias:

```
npm install
```

- Ejecutar la aplicación:

```
ng serve --open
```

- Esto abrirá la aplicación en el navegador en http://localhost:4200.

## Decisiones Tomadas

1. Uso de Angular 19
Razón: Angular 19 ofrece características mejoradas y un mejor rendimiento. Además, se eligió esta versión para evitar un error al tratar de ejecutar el proyecto en Angular 14, relacionado con los tipos de TypeScript en el paquete @types/node.

2. Formularios Reactivos
Razón: Los formularios reactivos proporcionan un mayor control sobre las validaciones y el manejo de datos, lo que los hace ideales para formularios complejos.

3. Bootstrap para Estilos
Razón: Bootstrap facilita la creación de interfaces responsivas y modernas con poco esfuerzo. Además, es ampliamente utilizado y tiene una gran comunidad de soporte.

4. Manejo de Plurales con i18nPlural
Razón: i18nPlural es una característica integrada de Angular que permite manejar plurales de manera dinámica y limpia, evitando la necesidad de crear pipes personalizados.

5. Diseño Responsivo
Razón: El diseño responsivo garantiza que la aplicación sea usable en cualquier dispositivo, desde móviles hasta pantallas grandes.

6. Mensajes Dinámicos
Razón: Los mensajes dinámicos mejoran la experiencia del usuario al proporcionar retroalimentación inmediata sobre el estado de la lista de tareas.

7. Cambio de Color Según el Estado
Razón: El cambio de color según el estado de la tarea permite una identificación visual rápida, mejorando la usabilidad.


## Funcionalidades Detalladas

1. Agregar Tareas
Descripción: Los usuarios pueden agregar nuevas tareas mediante un formulario.

- Validaciones:

    El título de cada tarea es obligatorio.

    La descripción de las tareas es obligatoria.

- Tecnología: Formularios reactivos.

2. Listar Tareas
- Descripción: Muestra todas las tareas en una lista.

- Diseño: Tarjetas responsivas (1 columna en móviles, 2 en tablets, 3 en pantallas grandes).

- Tecnología: Bootstrap grid system.

3. Cambiar Estado de las Tareas
- Descripción: Los usuarios pueden cambiar el estado de una tarea entre Por completar, En proceso y Completada.

- Visualización: El color de la tarjeta cambia según el estado.

- Tecnología: Clases dinámicas con [ngClass].

4. Eliminar Tareas
- Descripción: Los usuarios pueden eliminar tareas de la lista.

- Tecnología: Método en el servicio TaskService.

5. Contador de Tareas Pendientes
- Descripción: Muestra cuántas tareas están en estado "Por completar", "Completado" o "En proceso".

- Tecnología: i18nPlural para manejar plurales.

6. Mensajes Dinámicos
- Descripción: Muestra mensajes cuando no hay tareas o cuando hay tareas pendientes.

- Diseño: Tarjetas con estilos consistentes.

- Tecnología: Directiva *ngIf.

- Uso de i18nPlural para Plurales
    En el componente task-list.component.ts, se define un mapa de plurales (tasksMap) para manejar dinámicamente los mensajes de tareas pendientes:


Conclusión
TaskApp es una aplicación sencilla pero poderosa para gestionar tareas. Combina las mejores prácticas de Angular 19 con un diseño moderno y responsivo. Las decisiones tomadas durante el desarrollo garantizan que la aplicación sea escalable, mantenible y fácil de usar.
