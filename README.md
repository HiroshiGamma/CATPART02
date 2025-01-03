
## Funcionamiento

Este proyecto es una aplicación web desarrollada con Angular. Permite a los usuarios interactuar con una interfaz dinámica y receptiva. La aplicación se compone de varios componentes que se comunican entre sí para proporcionar una experiencia de usuario fluida.

## Requerimientos

Para ejecutar este proyecto, necesitarás tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (versión 14.x o superior)
- [Angular CLI](https://angular.io/cli) (versión 19.0.4 o superior)
- [Tailwind CSS](https://tailwindcss.com/) (versión 3.x o superior)
- [Flowbite](https://flowbite.com/) (versión 1.x o superior)

Además, asegúrate de tener un navegador web moderno como Google Chrome, Mozilla Firefox, Microsoft Edge, etc.

## Detalles del Programa

El proyecto sigue una estructura modular, donde cada funcionalidad está encapsulada en un componente Angular. A continuación, se describen algunos de los componentes principales:

- **AppComponent**: El componente raíz que contiene la estructura básica de la aplicación.
- **HeaderComponent**: Un componente para la cabecera de la aplicación.
- **FooterComponent**: Un componente para el pie de página.
- **MainComponent**: El componente principal que maneja la lógica central de la aplicación.

La comunicación entre componentes se realiza a través de servicios de Angular, que permiten compartir datos y lógica de negocio de manera eficiente.

### Estilos

Este proyecto utiliza [Tailwind CSS](https://tailwindcss.com/) para la gestión de estilos y [Flowbite](https://flowbite.com/) para componentes UI adicionales. Tailwind CSS es un framework de CSS utilitario que permite un diseño rápido y eficiente. Flowbite proporciona componentes preconstruidos que se integran perfectamente con Tailwind CSS.

### API

Este proyecto se integra con una API externa para obtener y enviar datos. La API utilizada es http://localhost:5091/api, que proporciona endpoints para ver y crear usuarios. 

## Instalación

Para instalar las dependencias del proyecto, sigue estos pasos:

1. Clona el repositorio en tu máquina local:
```bash
git clone https://github.com/HiroshiGamma/prueba02.git 
```

2. Navega al directorio del proyecto:
```bash
cd cat02
```

3. Instala las dependencias del proyecto:
```bash
npm install
```

4. Inicia el servidor de desarrollo:
```bash
ng serve
```

5. Abre tu navegador y navega a `http://localhost:4200/` para ver la aplicación en funcionamiento.

# Cat02

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
