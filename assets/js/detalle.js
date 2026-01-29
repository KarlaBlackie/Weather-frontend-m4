const ciudades= [
    {
        id:1,
        nombre: "Nueva York",
        img: "assets/img/central_park.png", 
        icono: '<i class="bi bi-snow3"></i>',
        temperatura: "3°C",
        estado: "nevado",
        mensaje: "En la nieve, practica gratitud por el calor de tu hogar y corazón.",
        humedad: "20%",
        viento: "25 km/h",

        pronosticoSemanal: [

            { dia: "Lunes", min: -4, max:6, estado: "nevado"},
            { dia: "Martes", min: 1, max:8, estado: "nublado"},
            { dia: "Miércoles", min: 5, max:9, estado: "soleado"},
            { dia: "Jueves", min: 3, max:9, estado: "despejado"},
            { dia: "Viernes", min: 0, max:3, estado: "soleado"},
            { dia: "Sábado", min: 4, max:13, estado: "nublado"},
            { dia: "Domingo", min: 2, max:10, estado: "lluvioso"},
        ] 

     },



    {
        id:2,
        nombre: "Tokio",
        img: "assets/img/tokio.jpeg", 
        icono: '<i class="bi bi-cloud-drizzle"></i>',
        temperatura: "9°C",
        estado: "lluvia suave",
        mensaje: "Momento perfecto para respiración consciente y dejar que tus preocupaciones se disuelvan con cada gota.",
        humedad: "18%",
        viento: "15 km/h",

        
        pronosticoSemanal: [

            { dia: "Lunes", min: 5, max:10, estado: "nublado"},
            { dia: "Martes", min: 6, max:9, estado: "lluvia fuerte"},
            { dia: "Miércoles", min: 1, max:10, estado: "lluvioso"},
            { dia: "Jueves", min: 6, max:15, estado: "soleado"},
            { dia: "Viernes", min: -2, max:8, estado: "nevado"},
            { dia: "Sábado", min: 9, max:16, estado: "despejado"},
            { dia: "Domingo", min: 10, max:18, estado: "soleado"},
        ] 

     },
     

    {
        id:3,
        nombre: "Buenos Aires",
        img: "assets/img/buenos_aires.jpeg", 
        icono: '<i class="bi bi-brightness-high"></i>',
        temperatura: "28°C",
        estado: "soleado",
        mensaje: "Energía vibrante para conectar con tu confianza interior y brillar como el sol.",
        humedad: "40%",
        viento: "10 km/h",

            pronosticoSemanal: [

            { dia: "Lunes", min: 10, max:30, estado: "soleado"},
            { dia: "Martes", min: 5, max:18, estado: "nublado"},
            { dia: "Miércoles", min:9 , max:33, estado: "soleado"},
            { dia: "Jueves", min: 7, max:12, estado: "ventoso"},
            { dia: "Viernes", min: 8, max:19, estado: "nublado"},
            { dia: "Sábado", min: 12, max:16, estado: "lluvia suave"},
            { dia: "Domingo", min: 9, max:31, estado: "soleado"},
        ] 
     },



    {
        id:4,
        nombre: "Madrid",
        img: "assets/img/madrid.png", 
        icono: '<i class="bi bi-brightness-high"></i>',
        temperatura: "32°C",
        estado: "soleado intenso",
        mensaje: "El sol recarga energía. Camina 25 minutos al aire libre sin auriculares para conectar.",
        humedad: "15%",
        viento: "10 km/h",

            pronosticoSemanal: [

            { dia: "Lunes", min: 12, max:34, estado: "soleado intenso"},
            { dia: "Martes", min: 10, max:30, estado: "despejado"},
            { dia: "Miércoles", min: 9, max:22, estado: "nublado"},
            { dia: "Jueves", min: 8, max:31, estado: "soleado"},
            { dia: "Viernes", min: 7, max:13, estado: "frío"},
            { dia: "Sábado", min: 14, max:33, estado: "soleado intenso"},
            { dia: "Domingo", min: 10, max:18, estado: "nublado"},
        ] 
     },

    {
        id:5,
        nombre: "Londres",
        img: "assets/img/londres.png", 
        icono: '<i class="bi bi-cloud-fill"></i>',
        temperatura: "12°C",
        estado: "nublado",
        mensaje: "Días grises piden calor interno.Chocolate caliente más diario de gratitud.",
        humedad: "30%",
        viento: "22 km/h",

            pronosticoSemanal: [

            { dia: "Lunes", min: 4, max:8, estado: "frío"},
            { dia: "Martes", min: 7, max:14, estado: "lluvioso"},
            { dia: "Miércoles", min: 10, max:17, estado: "nublado"},
            { dia: "Jueves", min: 11, max:19, estado: "despejado"},
            { dia: "Viernes", min: 8, max:21, estado: "soleado"},
            { dia: "Sábado", min: 9, max:15, estado: "nublado"},
            { dia: "Domingo", min: 11, max:16, estado: "ventoso"},
        ] 
     },

      {
        id:6,
        nombre: "Río de Janeiro",
        img: "assets/img/rio_de_janeiro.png", 
        icono: '<i class="bi bi-brightness-high"></i>',
        temperatura: "34°C",
        estado: "soleado",
        mensaje: "Luz, mar y energía.Permite que el sol de Río te recuerde que mereces disfrutar, jugar y cuidar tu bienestar interior.",
        humedad: "40%",
        viento: "10 km/h",

            pronosticoSemanal: [

            { dia: "Lunes", min: 12, max:35, estado: "soleado intenso"},
            { dia: "Martes", min: 9, max:32, estado: "soleado"},
            { dia: "Miércoles", min: 10, max:15, estado: "lluvioso"},
            { dia: "Jueves", min: 11, max:30, estado: "despejado"},
            { dia: "Viernes", min: 13, max:31, estado: "soleado"},
            { dia: "Sábado", min: 9, max:16, estado: "nublado"},
            { dia: "Domingo", min: 10, max:29, estado: "soleado"},
        ] 
     },

       {
        id:7,
        nombre: "Ciudad de México",
        img: "assets/img/ciudad_de_mexico.png", 
        icono: '<i class="bi bi-cloud-fog-fill"></i>',
        temperatura: "16°C",
        estado: "neblina",
        mensaje: "La neblina te invita a ir más despacio.Aún si afuera todo se ve borroso, puedes respirar profundo y hacer claridad dentro de ti, paso a paso.",
        humedad: "15%",
        viento: "12 km/h",

            pronosticoSemanal: [

            { dia: "Lunes", min: 6, max:14, estado: "nublado"},
            { dia: "Martes", min: 9, max:20, estado: "despejado"},
            { dia: "Miércoles", min: 10, max:17, estado: "nublado"},
            { dia: "Jueves", min: 12, max:23, estado: "soleado"},
            { dia: "Viernes", min: 8, max:24, estado: "despejado"},
            { dia: "Sábado", min: 9, max:24, estado: "mayormente despejado"},
            { dia: "Domingo", min: 10, max:21, estado: "nublado"},
        ] 
     },

       {
        id:8,
        nombre: "Sídney",
        img: "assets/img/sidney.png", 
        icono: '<i class="bi bi-sunrise"></i>',
        temperatura: "26°C",
        estado: "soleado",
        mensaje: "El sol de Sidney sale sobre el puerto, recordándote; cada día cura tu corazón.",
        humedad: "30%",
        viento: "18 km/h",

            pronosticoSemanal: [

            { dia: "Lunes", min: 10, max:28, estado: "soleado"},
            { dia: "Martes", min: 11, max:24, estado: "despejado"},
            { dia: "Miércoles", min: 9, max:18, estado: "parcialmente nublado"},
            { dia: "Jueves", min: 12, max:31, estado: "soleado"},
            { dia: "Viernes", min: 8, max:27, estado: "soleado"},
            { dia: "Sábado", min: 13, max:16, estado: "nublado"},
            { dia: "Domingo", min: 10, max:32, estado: "soleado"},
        ] 
     },

     {
        id:9,
        nombre: "Santiago",
        img: "assets/img/santiago.png", 
        icono: '<i class="bi bi-cloud-sun"></i>',
        temperatura: "27°C",
        estado: "mayormente despejado",
        mensaje: "Este día es una invitación a la calma interior, así como el cielo se libera de nubes, puedes aprovechar esta luz para aclarar tus pensamientos, soltar preocupaciones y enfocarte en lo que hoy sí depende de ti.",
        humedad: "28%",
        viento: "18 km/h",

            pronosticoSemanal: [

            { dia: "Lunes", min: 5, max:20, estado: "soleado"},
            { dia: "Martes", min: 10, max:29, estado: "soleado"},
            { dia: "Miércoles", min: 8, max:18, estado: "lluvioso"},
            { dia: "Jueves", min: 11, max:19, estado: "nublado"},
            { dia: "Viernes", min: 13, max:34, estado: "soleado"},
            { dia: "Sábado", min: 9, max:25, estado: "despejado"},
            { dia: "Domingo", min: 7, max:14, estado: "nublado"},
        ] 
     },

       {
        id:10,
        nombre: "Paris",
        img: "assets/img/paris.jpeg", 
        icono: '<i class="bi bi-cloud-sun"></i>',
        temperatura: "18°C",
        estado: "mayormente despejado",
        mensaje: "Acepta tus propios cambios. Hay belleza y fortaleza en la calma.Mantente firme, como esta icónica torre, mientras abrazas el ciclo de renovación en tu vida emocional.",
        humedad: "15%",
        viento: "17 km/h",

            pronosticoSemanal: [

            { dia: "Lunes", min: 5, max:12, estado: "nublado"},
            { dia: "Martes", min: 6, max:16, estado: "lluvioso"},
            { dia: "Miércoles", min: 12, max:20, estado: "despejado"},
            { dia: "Jueves", min: 10, max:21, estado: "soleado"},
            { dia: "Viernes", min: 9, max:18, estado: "nublado"},
            { dia: "Sábado", min: 11, max:19, estado: "parcialmente nublado"},
            { dia: "Domingo", min: 10, max:21, estado: "soleado"},
        ] 
     },

      {
        id:11,
        nombre: "Bogotá",
        img: "assets/img/bogota.jpeg", 
        icono: '<i class="bi bi-cloud-hail-fill"></i>',
        temperatura: "10°C",
        estado: "granizo acompañado de lluvia",
        mensaje: "Al igual que una tormenta, el granizo es temporal.La clave no es evitar que caiga, sino tener la certeza de que pasará.Abrígate, busca refugio y mantente firme.Después de la granizada siempre regresa la calma.",
        humedad: "10%",
        viento: "25 km/h",

            pronosticoSemanal: [

            { dia: "Lunes", min: 4, max:10, estado: "granizo"},
            { dia: "Martes", min: 7, max:18, estado: "lluvia fuerte"},
            { dia: "Miércoles", min: 10, max:18, estado: "nublado"},
            { dia: "Jueves", min: 11, max:24, estado: "soleado"},
            { dia: "Viernes", min: 9, max:25, estado: "soleado"},
            { dia: "Sábado", min: 11, max:21, estado: "despejado"},
            { dia: "Domingo", min: 10, max:29, estado: "soleado"},
        ] 
     },
     
      {
        id:12,
        nombre: "Lima",
        img: "assets/img/lima.jpeg", 
        icono: '<i class="bi bi-brightness-high"></i>',
        temperatura: "28°C",
        estado: "soleado",
        mensaje: "Permítete fluir, no luches contra la ola de la tristeza o el estrés, obsérvala, respira y confía en que, inevitablemente, la calma regresará.",
        humedad: "25%",
        viento: "18 km/h",

            pronosticoSemanal: [

            { dia: "Lunes", min: 10, max:19, estado: "parcialmente nublado"},
            { dia: "Martes", min: 11, max:20, estado: "despejado"},
            { dia: "Miércoles", min: 9, max:17, estado: "nublado"},
            { dia: "Jueves", min: 12, max:30, estado: "soleado"},
            { dia: "Viernes", min: 8, max:21, estado: "despejado"},
            { dia: "Sábado", min: 9, max:15, estado: "lluvioso"},
            { dia: "Domingo", min: 10, max:30, estado: "soleado"},
        ] 
     },

    ];

 

    function calcularEstadisticas(pronostico) {
        let minSemanal = pronostico[0].min;
        let maxSemanal = pronostico[0].max;
        let sumaTotal = 0;
        let diasSoleados = 0;
        let diasLluviosos = 0;
        let diasNublados = 0;

        for (const dia of pronostico) {
            if (dia.min < minSemanal) minSemanal = dia.min;
            if (dia.max > maxSemanal) maxSemanal = dia.max;

            sumaTotal +=(dia.min + dia.max) / 2;

            const estadoLCase = dia.estado.toLowerCase();


            if (estadoLCase.includes("soleado") || estadoLCase.includes("despejado")) {
                diasSoleados++;
            
            } else if (estadoLCase.includes("lluvia") || estadoLCase.includes("lluvioso") || estadoLCase.includes("granizo")) {
                diasLluviosos++;

            } else if (estadoLCase.includes("nublado") || estadoLCase.includes("neblina")) {
                diasNublados++;
            }
        }

        

        const promedio = (sumaTotal / pronostico.length).toFixed(1);

        let resumen ="";
        if (diasSoleados >= 3) {
            resumen = "Semana radiante:  La abundancia del sol favorece la producción de serotonina y energía vital .";

        } else if (diasLluviosos >= 3) {
            resumen = "Semana de limpieza: la lluvia invita al descanso y a conectar con tus emociones más profundas";
        
        } else if (diasNublados >= 3) {
            resumen = "Semana equilibrada: Los cielos cubiertos son ideales para tareas de concentración y calma mental";

        } else {
            resumen= "Semana de clima variado: Un recordatorio de que nuestras emociones también son cambiantes y está bien.";
        }

        return { 
        minSemanal, maxSemanal, promedio, resumen, diasSoleados, diasLluviosos, diasNublados 
        };
    }
    


    function crearTarjetas() {

        const grilla = document.getElementById('fila-tarjetas');
        if (!grilla) return;
       

        grilla.innerHTML = ciudades.map(ciudad => `
          
            <article class="col">
                <div class="weather-card" onclick="girarTarjeta(this)">
                    <div class="weather-card__container">

                        <div class="weather-card__front">
                            <img src="${ciudad.img}" class="weather-card__img" alt="${ciudad.nombre}">

                            <div class="weather-card__overlay">
                               <h2 class="weather-card__title">${ciudad.nombre}</h2>

                                <div class="weather-card__info">
                                    ${ciudad.icono}
                                    <span class="weather-card__temp">${ciudad.temperatura}</span>
                                    <span class="weather-card__status">${ciudad.estado}</span>
                                </div>

                                <button class="weather-card__button mt-2"
                                    onclick="event.stopPropagation(); seleccionarYMostrar(${ciudad.id})">
                                    Ver más
                                </button>
                            </div>
                        </div>

                        
                        <div class="weather-card__back d-flex flex-column justify-content-center p-3 text-center">
                            <p class="weather-card__label fw-bold">Consejo emocional:</p> 
                            <p class="weather-card__message fst-italic">${ciudad.mensaje}</p>
                        </div>
                    </div>
                </div>
            </article>
        `).join('');
     

        }

    function seleccionarYMostrar(id) {
        const ciudad =ciudades.find(c => c.id === Number(id));
        if (!ciudad) return;

        const stats = calcularEstadisticas(ciudad.pronosticoSemanal);

        document.getElementById('vista-home').classList.add('d-none');
        document.getElementById('seccion-detalle').classList.remove('d-none');


        const contenedor= document.getElementById('contenido-detalle-dinamico');

        let pronosticoHtml = '';

        ciudad.pronosticoSemanal.forEach(dia => {
            
            pronosticoHtml += `
                <div class="col">
                    <div class="forecast-item h-100 border-0 shadow-sm bg-light text-center p-2">
                        <p class="forecast-item__day fw-bold mb-1 text-primary text-capitalize">${dia.dia}</p>
                        <p class="forecast-item__temp small mb-1">${dia.min}° / ${dia.max}°</p>
                        <p class="forecast-item__status text-muted" style="font-size: 0.7rem;">${dia.estado}</p>
                    </div>
                </div>`; 
    });


   
    contenedor.innerHTML = `
        <div class="detail-content bg-white p-4 shadow rounded">
            <div class="row g-4">
                <div class="col-md-5 text-center border-end detail-content__main">

                    <img src="${ciudad.img}" class="detail-content__img img-fluid rounded shadow mb-3" alt="${ciudad.nombre}">
                    <h2 class="detail-content__city h2 fw-bold">${ciudad.nombre}</h2>
                    <div class="detail-content__display display-4">${ciudad.icono} ${ciudad.temperatura}</div>
                    <p class="detail-content__badge badge bg-info text-dark">${ciudad.estado}</p>
                    <p class="detail-content__message fst-italic mt-3">${ciudad.mensaje}</p>
                </div>

                <div class="col-md-7 detail-content__secondary">
                    <h4 class="detail-content__subtitle fw-bold mb-3"><i class="bi bi-calendar3 me-2"></i>Pronóstico semana completa</h4>
                        <div class="row row-cols-2 row-cols-sm-4 row-cols-lg-7 g-2">     
                            ${pronosticoHtml}
                        </div>

                        <div class="stats-section bg-light p-3 rounded border">
                            <h5 class="fw-bold text-primary">Estadísticas de la semana</h5>
                            <div class="d-flex justify-content-between mb-2">
                                <span><strong>Mín:</strong> ${stats.minSemanal}°C</span>
                                <span><strong>Máx:</strong> ${stats.maxSemanal}°C</span>
                                <span><strong>Promedio:</strong> ${stats.promedio}°C</span>
                            </div>

                            <div class="mb-2 small">
                                <strong>Días de sol:</strong> ${stats.diasSoleados} |
                                <strong>Días de lluvia:</strong> ${stats.diasLluviosos} |
                                <strong>Días nublados:</strong> ${stats.diasNublados}
                            </div>

                            <p class="mb-0"><strong>Análisis:</strong> ${stats.resumen}</p>
                        </div>


                        <div class="detail-content__extra mt-4">
                        <h5 class="detail-content__extra-title">Datos adicionales</h5>
                        <p class="detail-content__extra-info"><strong>Humedad:</strong> ${ciudad.humedad} | <strong>Viento: </strong> ${ciudad.viento}</p>
                        </div>
                </div>
            </div>
        </div>
    `; 

    window.scrollTo(0,0);
    }

     function volverInicio() {
        document.getElementById('vista-home').classList.remove('d-none');
        document.getElementById('seccion-detalle').classList.add('d-none');
    }




         
    document.addEventListener('DOMContentLoaded', () => {
    crearTarjetas();
    
});


    function girarTarjeta(tarjeta) {

        const claseGirada = 'weather-card--flipped';

        const todasLasTarjetas = document.querySelectorAll('.' + claseGirada);
        todasLasTarjetas.forEach(t => {
                if (t !== tarjeta) {
                     t.classList.remove(claseGirada)
                }
            });

        tarjeta.classList.toggle(claseGirada)
    }



   


    
        
   

    