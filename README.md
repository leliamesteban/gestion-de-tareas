# Dashboard de Gestión de Tareas

Implementación de un Dashboard de Gestión de Tareas

# Vista general

## API

En [http://localhost:3001](http://localhost:3001) hay un servidor API donde en cada endpoint se devuelve un objeto JSON con la tarea.

## HTML

En [http://localhost:3000](http://localhost:3000) hay un servidor HTML que llama al API para que le devuelva objetos JSON y convertirlos en HTML.

## Tecnologías

El servidor API utiliza json-server para devolver los objetos JSON y Next.JS para convertir requests HTML en llamadas a funciones JavaScript que devuelven JSON.

El servidor HTML utiliza componentes React.JS que son funciones JavaScript que devuelven HTML.

El proyecto se configura y corre dentro de Docker.

# Cómo ejecutar

`npm run server` para correr el API en [http://localhost:3001](http://localhost:3001)
`npm run dev` para convertir el JSON en HTML en [http://localhost:3000](http://localhost:3000)
`npm run test` para correr los tests (hay que asegurar que el servidor ya está corriendo)

# Ejecutar con Docker

```bash
docker compose build
docker compose up
```

# Especificaciones 

- NEXT.JS
- Tailwind.css
- json-server REST API
- Docker
- Traduccions en español e inglés

# Vistas

- Listado de tareas (referencia, título, fecha)
- Tarea individual (referencia, título, descripción, fecha a realizarse, cuántos días faltan o han pasado desde la fecha, completar la tarea)
- Botón para crear nueva tarea
- Formulario de creación de tarea

# Proceso

1. Instalar dependencias e instanciar proyecto (npm, docker, next.js, tailwind.css, json-server, docker, next-translate)
2. Crear UI con componentes React.js
3. Configurar routing con Next.js
4. Configurar traducciones
5. Configurar estilos CSS con Tailwind
6. Configurar Docker
7. Escribir tests

# Cosas a mejorar

- Las palabras de las traducciones están siempre en plural, aunque el número sea 1
- Cuando la tarea se marca como completada, el boton de completar tarea sigue ahí
- Optimización del código
- Es importante mirar las dependencias y considerar si hay demasiadas o si se podrían reducir
- Los tests podrían ser automatizados para que corran el servidor automáticamente
- Menu de navegación
- Cambiar portada por defecto en index.html
- Seguridad (por ejemplo inyección de código mediante el formulario)
- Buscar y eliminar componentes, dependencias, estilos CSS etc sin usar
- Entorno producción (ahora el proyecto lo uso en entorno desarrollo)
- Code review y pair programming con un programador senior para identificar errores o falta de best practices
- Integración contínua
- Botón completar en listado de tareas además de en detalle de tarea individual