# OTM Missionaries App

## 1. ¿Qué es esto?

Esta es una aplicación web moderna construida con React. Piensa en React como el "frontend" o la "interfaz de usuario" de una aplicación web completa. Mientras que en Python usarías frameworks como Flask o Django para manejar tanto la lógica del servidor como para renderizar plantillas HTML, este proyecto se enfoca exclusivamente en lo que el usuario ve y con lo que interactúa en su navegador.

Está configurado para desplegarse automáticamente en Azure Static Web Apps, una plataforma para alojar sitios web estáticos.

## 2. Guía para un Desarrollador de Python

Si vienes del mundo de Python, aquí tienes algunas analogías para entender la estructura del proyecto:

| Archivo/Directorio         | Equivalente en Python                                                                                             | Propósito en este Proyecto                                                                                             |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `package.json`             | `requirements.txt` + `Makefile`                                                                                   | Define las dependencias del proyecto (librerías de JavaScript) y los scripts para ejecutar tareas (`dev`, `build`).     |
| `pnpm-lock.yaml`           | `pip freeze > requirements.txt`                                                                                   | Fija las versiones exactas de las dependencias para asegurar que la instalación sea consistente en todas las máquinas. |
| `vite.config.js`           | `setup.py` o un script de build                                                                                   | Archivo de configuración para Vite, la herramienta que compila y sirve la aplicación.                                  |
| `src/`                     | El directorio de tu paquete de Python                                                                             | Contiene todo el código fuente de la aplicación.                                                                       |
| `src/components/`          | Un módulo de Python con funciones reutilizables                                                                   | Contiene "Componentes de React", que son piezas de UI reutilizables (botones, tarjetas, layouts).                      |
| `public/`                  | El directorio `static/` en Django/Flask                                                                           | Archivos que no se procesan por el build, como el `index.html` principal o imágenes.                                   |
| `node_modules/`            | `venv/` (el entorno virtual)                                                                                      | Directorio donde se descargan e instalan todas las dependencias listadas en `package.json`.                            |

---

## 3. ¿Qué son los "Componentes de React"?

En React, todo son componentes. Un componente es una pieza de código independiente y reutilizable que renderiza una parte de la interfaz de usuario. Puedes pensar en ellos como **funciones de Python que en lugar de devolver datos, devuelven HTML**.

Estos componentes se escriben usando JSX, que es una sintaxis que te permite escribir "HTML" directamente en tu código JavaScript.

### Diagrama de Componentes

Una aplicación de React es un árbol de componentes. Los componentes más grandes (como una página) están compuestos por componentes más pequeños.

Aquí tienes un diagrama de texto que ilustra cómo se podría estructurar una página en esta aplicación:

```
[ App.jsx ] - El componente raíz de toda la aplicación
     |
     +--- [ Layout.jsx ] - Define la estructura general (ej. con barra de navegación y pie de página)
          |
          +--- [ Navbar.jsx ] - La barra de navegación superior
          |
          +--- [ Sidebar.jsx ] - La barra lateral
          |
          +--- [ ContentPage.jsx ] - El contenedor del contenido principal
               |
               +--- [ Card.jsx ] - Un componente para mostrar información
               |    |
               |    +--- [ Button.jsx ] - Un botón dentro de la tarjeta
               |
               +--- [ Card.jsx ] - Otro componente de tarjeta
               |    |
               |    +--- [ Button.jsx ]
               |
               +--- [ Table.jsx ] - Un componente para mostrar datos tabulados
```

En este proyecto, encontrarás muchos componentes pre-construidos en `src/components/ui/`, como `Button.jsx`, `Card.jsx`, `Table.jsx`, etc.

---

## 4. Cómo Poner en Marcha el Proyecto

Para ejecutar la aplicación en tu máquina local, sigue estos pasos.

### Prerrequisitos

1.  **Instalar Node.js**: Si no lo tienes, descárgalo desde [nodejs.org](https://nodejs.org/). Esto es como tener Python instalado.
2.  **Instalar pnpm**: `pnpm` es un gestor de paquetes, una alternativa a `npm`. Es más rápido y eficiente. Lo instalas ejecutando este comando en tu terminal:
    ```bash
    npm install -g pnpm
    ```

### Pasos

1.  **Clona el repositorio** (si aún no lo has hecho):
    ```bash
    git clone <url-del-repositorio>
    cd otm-azureswa
    ```

2.  **Instala las dependencias**:
    Este comando lee el archivo `package.json` y descarga todas las librerías necesarias en la carpeta `node_modules/`. Es el equivalente a `pip install -r requirements.txt`.
    ```bash
    pnpm install
    ```

3.  **Ejecuta el servidor de desarrollo**:
    Este comando inicia un servidor local (normalmente en `http://localhost:5173`) con "hot-reload", lo que significa que cualquier cambio que hagas en el código se reflejará instantáneamente en el navegador.
    ```bash
    pnpm run dev
    ```

4.  **Para la aplicación**:
    Presiona `Ctrl + C` en la terminal.

### Otros Comandos Útiles

-   **`pnpm run build`**: Compila y empaqueta la aplicación para producción. Crea una carpeta `dist/` con los archivos estáticos optimizados que se subirán al servidor.
-   **`pnpm run lint`**: Analiza el código en busca de errores y problemas de estilo, similar a `flake8` o `black`.

