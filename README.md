# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# App_React_1
Aplicacion de Practica con React

## Creacion del proyecto
Para poder crear nuestro proyecto de REACT vamos ubicarnos en la carpeta donde queramos que se va a instalar el proyecto, **para notener problemas, esta carpeta deberá estar limpia, es decir sin archivos preferentemente** y vamos a ejecutar el siguiente comando en la terminal:
```bash
npm create vite@latest
```
Despues de aqui seleccionaremos:
- El nombre del proyecto (el nombre que le desees colocar).
- El nombre del paquete (el nombre que le desees colocar).

Ahora vamos a seleccionar nuestras tecnológias que vamos a usar:
- React (Framework)
- Javascript (Variante)

Al finalizar esta seleccion nos creara nuestros directorios y archivos necesarios, tambien mandara dos comnados que debemos ejecutar:
```bash
# Instalar lo necesario para que funcione nuestro proyecto
npm install
# Ejecutar el proyecto
npm run dev
```

De igual manera vamos a instalar **Tailwind**, para esto vamos a ingresar a la página oficial: [https://tailwindcss.com/docs/installation/using-vite](https://tailwindcss.com/docs/installation/using-vite) y vamos a buscar el apartado de **Installation**, buscamos el sigiuente comando y lo ingresamos en la terminal:
```bash
npm install tailwindcss @tailwindcss/vite
```