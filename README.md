# Weather Frontend M4 - Clima, estadísticas y bienestar.
## ** Descripción**
Esta aplicación conecta el estado meteorológico de 12 ciudades internacionales con el bienestar emocional. En esta versión(módulo 4), se ha integrado un motor de análisis de datos que procesa el pronóstico semanal para ofrecer estadísticas técnicas y un resumen analítico basado en el clima predominante.

## ** Novedades del módulo 4: Análisis de datos**
La aplicación ahora incluye una función de procesamiento dinámico que calcula:
Temperaturas extremas: identificación de la temperatura máxima y mínima de toda la semana.
Promedio térmico: cálculo de la media aritmética de la semana mediante acumuladores.
Contador de climas: clasificación automática de días(soleados, lluviosos, nublados).
Análisis predictivo: generación de un resumen basado en condicionales lógicos.


## ** Funcionalidades**

- **12 ciudades** con renderizado dinámico mediante Javascript.

- **Lógica de estadísticas** procesamiento en tiempo real de arreglos de objetos anidados.

- **Navegación SPA** transición fluída entre la grilla principal y la vista de detalle con estadísticas.

- **Flip cards interactivas** con consejos de mindfulness en el reverso.


- **Detalle completo**: incluye ahora una sección de estadísticas de la semana y datos adicionales.




## **Tecnologías utilizadas**
- **Javascript**: uso avanzado de arreglos, objetos, métodos(map, find, forEach), condicionales y ciclos para el procesamiento de datos.

- **HTML5**: estructura semántica avanzada.

- **Sass(Scss)**: arquitectura 7-1(variables, mixins, parciales).

- **Bootstrap 5**: sistemas de grillas, componentes y utilidades.

- **Git/Github**: control de versiones con historial de desarrollo incremental.



## **Estructura SASS**
Se mantiene la separación de responsabilidades para asegurar la escabilidad:

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
    _grid.scss        //Configuración general del layout/grilla

    /components
    _button.scss      //Botones reutilizables
    _weather-card.scss //Tarjetas de clima y efecto flip 3D 

    /pages
    _details          //Estilos específicos de la vista de detalle

    /themes
    _weather-themes.scss //Variaciones de tema/Colores clima

    main.scss         //Importa todos los parciales csss

  ## **Modelado de datos**  
  La información se gestiona de forma centralizada para facilitar su escalabilidad:
## **Estructura principal**
    Un arreglo global de objetos(`ciudades`), donde cada ciudad posee atributos de identificación, estado actual y mensajes de bienestar.

## **Pronóstico anidado**
    Cada ciudad contiene una propiedad(`pronosticoSemanal`), que es a su vez un arreglo de objetos. Esto permite iterar sobre los días para realizar los cálculos estadísticos dinámicos.



## **Commits**
Commits descriptivos incluídos.

- **Metodología**
- **BEM(block, element, modifier)**: para nombrar clases
- **Clean code**: funciones de Javascript modularizadas, ej: calcularEstadisticas.





## ++Enlace al repositorio público**
[Ver respositorio completo] https://github.com/KarlaBlackie/Weather-frontend-m4

**Desarrollado por Karla Jara Mena**
*Bootcamp frontend Trainee - 2026*

KarlaBlackie
Karla Irene Jara Mena
