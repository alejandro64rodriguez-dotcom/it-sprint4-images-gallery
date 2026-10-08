# React Images Gallery

Galería de imágenes responsive desarrollada con **React y TypeScript** como parte del Sprint 4 de IT Academy.

## Objetivo

Crear una galería de imágenes trabajando:

* Composición de componentes.
* Props y tipado con TypeScript.
* Renderizado de listas.
* Renderizado condicional.
* Diseño responsive.

## Funcionalidades

En el desarrollo completo del proyecto se implementarán:

* Visualización de imágenes.
* Imagen destacada.
* Reordenamiento mediante drag-and-drop.
* Eliminación múltiple de imágenes.
* Diseño responsive.

En esta primera actividad se implementa la estructura básica utilizando datos estáticos.

## Tecnologías

* React
* TypeScript
* Vite
* CSS
* Git / GitHub
* Picsum Photos

## Componentes

```text
src/
├── Gallery.tsx
├── ImageItem.tsx
├── App.tsx
└── main.tsx
```

### Gallery

Componente padre que contiene el array de imágenes y las muestra mediante `ImageItem`.

### ImageItem

Componente hijo que recibe los datos de cada imagen mediante props.

La primera imagen recibe `isFeatured={true}` y se muestra con un tamaño superior al resto.

## Instalación

```bash
git clone https://github.com/IT-Academy-BCN/it-sprint4-images-gallery.git
cd it-sprint4-images-gallery
npm install
```

Después, conectar el proyecto con el repositorio personal:

```bash
git remote rm origin
git remote add origin <URL-del-teu-repositori>
```

## Desarrollo

Crear la rama de trabajo:

```bash
git checkout -b feature/basic-gallery
```

Iniciar el proyecto:

```bash
npm run dev
```

## Git

Guardar los cambios:

```bash
git add .
git commit -m "feat: create basic image gallery"
```

Subir la rama:

```bash
git push -u origin feature/basic-gallery
```

Una vez finalizado el trabajo, realizar el merge de `feature/basic-gallery` con `main`.

## Autor

Matias

Proyecto educativo realizado como parte de **IT Academy — Sprint 4**.
