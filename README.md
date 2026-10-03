# Portfolio de Aitor Velasco

Portfolio personal profesional construido con [Astro](https://astro.build), diseñado para mostrar proyectos web modernos y experiencia como Frontend Developer.

## Características

- **Diseño moderno** con gradientes, animaciones y efectos visuales
- **Totalmente responsive** adaptado a todos los dispositivos
- **Tipado con TypeScript** para mayor robustez
- **Tailwind CSS** para estilos eficientes
- **Imágenes optimizadas** en formato WebP
- **Rutas dinámicas** para páginas de proyectos individuales
- **Animaciones fluidas** y transiciones suaves
- **SEO optimizado** con meta tags apropiados
- **Fuentes locales** cargadas con preload para máximo rendimiento

## Estructura del Proyecto

```
/
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── fonts/
│   │   └── *.woff2
│   ├── images/
│   │   ├── foto.webp
│   │   ├── logo.webp
│   │   └── websites/
│   │       └── *.webp
├── src/
│   ├── data/
│   │   └── websites.ts
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       └── proyecto/
│           └── [id].astro
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Proyectos Incluidos

El portfolio incluye 7 proyectos en diferentes categorías:

- **Portfolio**: Sara Montoya Fotografía (HTML5, CSS3, JS)
- **E-commerce**: Tienda bq (Magento, jQuery)
- **Blog**: DIWO (Wordpress)
- **Website**: bq (Twig, SEO)
- **E-shop**: llamaya eShop (React, NextJS, Material UI)
- **E-shop**: MASMOVIL eShop (React, NextJS, Material UI)
- **E-shop**: Yoigo eShop (React, NextJS, Material UI)

## Experiencia Profesional

- **Senior FrontEnd Developer** @ Orange España (antes Grupo MASMOVIL / MASORANGE) — actualmente
- **FrontEnd Developer** @ BQ

## Tech Stack

- Astro 7.x
- Tailwind CSS 4.x
- TypeScript
- Vite

## Commands

| Command           | Action                                        |
| :---------------- | :-------------------------------------------- |
| `pnpm install`    | Instala dependencias                          |
| `pnpm dev`        | Inicia servidor local en `localhost:4321`     |
| `pnpm build`      | Construye para producción en `./dist/`        |
| `pnpm preview`    | Previsualiza build localmente                 |

## Deploy

```bash
pnpm build
```

El directorio `dist/` está listo para desplegar en cualquier hosting estático (Vercel, Netlify, GitHub Pages, etc.).

## Contacto

- Email: aitorvelascodev@gmail.com
- GitHub: [github.com/aitorvelasco](https://github.com/aitorvelasco)
- LinkedIn: [linkedin.com/in/aitorvelascodev](https://www.linkedin.com/in/aitorvelascodev)
