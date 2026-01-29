# Weather Frontend M3 - Clima y Salud EMocional
## ** Descripción**
Esta aplicación conecta el estado meteorológico de 12 ciudades internacionales con el bienestar emocional, ofreciendo consejos personalizados de mindfulness.El proyecto está construido bajo el concepto de SPA(Single page application), gestionando las vistas de manera dinámica mediante JavaScript.(Home y detalle sin recargar la página)



## ** Funcionalidades**

- **12 ciudades** internacionales con consejos emocionales únicos.
- **Navbar responsive** Bootstrap 5(mobile -> desktop)

- **Flip cards interactivas** con efecto 3d.

- **Navegación fluida** entre vista principal(grilla de ciudades) y vista detalle.

- **Detalle completo**: imagen,estado, temperatura,  humedad, viento, **pronóstico 7 días**.

## **Responsive design**
| **Móvil ≤420px** | **Tablet** | **Desktop ≥1024px** |
| ---------------- | ---------- | ------------------- |
| 1 columna        | 2 columnas | **3-4 columnas**    |

Layout responsivo usando grid de bootstrap(row/col, row-cols-1, row-cols-sm-2, row-cols-md-3, row-cols-lg-4).

## **Tecnologías utilizadas**

HTML5:estructura semántica(header, nav, main, section, footer)
Sass(scss); variables, mixins, parciales, anidamiento y arquitectura tipo 7-1 etc.
CSS3: animaciones y transformaciones 3D para flip cards.
JavaScript(Vanilla): manipulación del DOM, eventos, renderizado dinámico de tarjetas y vistas.
Bootstrap 5 vía CDN: grid system, navbar, utilidades y bootstrap icons,
Git/Github: repositorio público con commits descriptivos.

## **Metodología de estilos**
Se utiliza la metodología BEM, para nombrar las clases CSS facilitando la mantenibilidad y escabilidad del código.

## **Estructura SASS**
La estructura sigue una arquitectura inspirada en 7-1 separando responsabilidades:

/scss
    /abstracts
    _variables.scss   //Colores, tipografías, tamaños, espaciados
    -mixins.scss      // Mixins globales (3D card, breakpoints)

    /base
    -reset.scss       // Reset/normalize
    -typography.scss  //Fuentes, tamaños, base, texto

    /layout
    _header.scss      //Estilos del header, navbar
    _footer.scss      //Estilos del footer
    _grid.csss        //Configuración general del layout/grilla

    /components
    _button.scss      //Botones reutilizables
    _weather-card.scss //Tarjetas de clima y efecto flip 3D 

    /pages
    _details          //Estilos específicos de la vista de detalle

    /themes
    _weather-themes.scss //Variaciones de tema/Colores clima

    main.scss         //Importa todos los parciales csss

## **Commits**
Commits descriptivos incluídos.





## ++Enlace al repositorio público**
[Ver respositorio completo] https://github.com/KarlaBlackie/weather-frontend-m3

**Desarrollado por Karla Jara Mena**
*Bootcamp frontend Trainee - 2026*

KarlaBlackie
Karla Irene Jara Mena
