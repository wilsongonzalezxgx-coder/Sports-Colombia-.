document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // MENÚ DESPLEGABLE DEPORTES
  // =========================
  const deportesMenu = document.getElementById("deportesMenu");
  const submenu = document.getElementById("submenuDeportes");
  const boton = document.getElementById("menuDeportes");

  let abierto = false;

  boton.addEventListener("click", function (e) {
    e.preventDefault();
    abierto = !abierto;
    submenu.style.display = abierto ? "block" : "none";
  });

  document.addEventListener("click", function (e) {
    if (!deportesMenu.contains(e.target)) {
      submenu.style.display = "none";
      abierto = false;
    }
  });

  // =========================
  // SLIDER
  // =========================
  const imagenSlider = document.getElementById("imagenSlider");

  const imagenes = [
    "images/bandera.jpg",
    "images/mundial.jpg",
    "images/ciclismo.jpg",
    "images/seleccion.jpg"
  ];

  let indice = 0;

  function mostrar() {
    imagenSlider.src = imagenes[indice];
  }

  document.getElementById("siguiente").onclick = function () {
    indice = (indice + 1) % imagenes.length;
    mostrar();
  };

  document.getElementById("anterior").onclick = function () {
    indice = (indice - 1 + imagenes.length) % imagenes.length;
    mostrar();
  };

  setInterval(() => {
    indice = (indice + 1) % imagenes.length;
    mostrar();
  }, 4000);

  // =========================
  // MENSAJE POR HORA + IDIOMA
  // =========================
  function actualizarMensajeIdioma(lang) {

    const mensaje = document.getElementById("mensajeBienvenida");

    const hora = new Date().getHours();

    let saludo = "";

    if (hora >= 5 && hora < 12) {
      saludo = "Buenos días";
    } else if (hora >= 12 && hora < 18) {
      saludo = "Buenas tardes";
    } else {
      saludo = "Buenas noches";
    }

    if (lang === "es") {
      mensaje.textContent = `${saludo}, bienvenido a Sports Colombia 🇨🇴`;
    }

    if (lang === "en") {
      mensaje.textContent = `Good ${saludo.toLowerCase()}, welcome to Sports Colombia 🇺🇸`;
    }

    if (lang === "pt") {
      mensaje.textContent = `${saludo}, bem-vindo ao Sports Colombia 🇧🇷`;
    }
  }

  // =========================
  // IDIOMAS
  // =========================
  const idiomas = document.getElementById("idiomas");

  idiomas.addEventListener("change", function () {

    const lang = this.value;

    const t = {
      es: {
        menuInicio: "Inicio",
        menuEstadios: "Estadios",
        menuSeleccion: "Selección",
        menuEventos: "Eventos",
        menuDeportes: "Deportes ▼",
        menuMapa: "Mapa",
        titulo: "Bienvenidos a Sports Colombia",
        descripcion: "Vive la emoción del deporte colombiano...",
        mapaTitulo: "Mapa Deportivo de Colombia",
        mapaTexto: "Haz clic en el mapa...",
        seleccionTitulo: "Selección Colombia",
        seleccionTexto: "La Selección Colombia representa la pasión...",
        seleccion1: "⚽ Participaciones mundialistas",
        seleccion2: "⭐ Grandes jugadores",
        seleccion3: "🏆 Reconocimiento internacional",
        eventosTitulo: "Próximos Eventos Deportivos",
        evento1Titulo: "Mundial FIFA 2026",
        evento1Texto: "Primer partido de Colombia...",
        evento2Titulo: "Tour Colombia",
        evento2Texto: "Competencia internacional...",
        evento3Titulo: "Campeonato Nacional",
        evento3Texto: "Evento nacional...",
        noticiasTitulo: "Noticias Deportivas",
        noticiaTitulo: "Mundial FIFA 2026",
        noticiaTexto: "Colombia continúa preparándose...",
        footer: "© 2026 Sports Colombia - Todos los derechos reservados"
      },

      en: {
        menuInicio: "Home",
        menuEstadios: "Stadiums",
        menuSeleccion: "National Team",
        menuEventos: "Events",
        menuDeportes: "Sports ▼",
        menuMapa: "Map",
        titulo: "Welcome to Sports Colombia",
        descripcion: "Experience Colombian sports passion...",
        mapaTitulo: "Sports Map of Colombia",
        mapaTexto: "Click the map...",
        seleccionTitulo: "Colombia National Team",
        seleccionTexto: "The Colombia national team represents pride...",
        seleccion1: "⚽ World Cup appearances",
        seleccion2: "⭐ Legendary players",
        seleccion3: "🏆 International recognition",
        eventosTitulo: "Upcoming Sports Events",
        evento1Titulo: "FIFA World Cup 2026",
        evento1Texto: "Colombia first match...",
        evento2Titulo: "Tour Colombia",
        evento2Texto: "International cycling...",
        evento3Titulo: "National Championship",
        evento3Texto: "National event...",
        noticiasTitulo: "Sports News",
        noticiaTitulo: "FIFA World Cup 2026",
        noticiaTexto: "Colombia continues preparing...",
        footer: "© 2026 Sports Colombia - All rights reserved"
      },

      pt: {
        menuInicio: "Início",
        menuEstadios: "Estádios",
        menuSeleccion: "Seleção",
        menuEventos: "Eventos",
        menuDeportes: "Esportes ▼",
        menuMapa: "Mapa",
        titulo: "Bem-vindo ao Sports Colombia",
        descripcion: "Conheça o esporte colombiano...",
        mapaTitulo: "Mapa Esportivo da Colômbia",
        mapaTexto: "Clique no mapa...",
        seleccionTitulo: "Seleção da Colômbia",
        seleccionTexto: "A seleção representa orgulho...",
        seleccion1: "⚽ Copas do Mundo",
        seleccion2: "⭐ Jogadores históricos",
        seleccion3: "🏆 Reconhecimento internacional",
        eventosTitulo: "Próximos Eventos",
        evento1Titulo: "Copa do Mundo FIFA 2026",
        evento1Texto: "Primeira partida...",
        evento2Titulo: "Tour Colômbia",
        evento2Texto: "Competição internacional...",
        evento3Titulo: "Campeonato Nacional",
        evento3Texto: "Evento nacional...",
        noticiasTitulo: "Notícias Esportivas",
        noticiaTitulo: "Copa do Mundo FIFA 2026",
        noticiaTexto: "Colômbia se prepara...",
        footer: "© 2026 Sports Colombia - Todos os direitos reservados"
      }
    };

    const tr = t[lang];

    document.getElementById("menuInicio").textContent = tr.menuInicio;
    document.getElementById("menuEstadios").textContent = tr.menuEstadios;
    document.getElementById("menuSeleccion").textContent = tr.menuSeleccion;
    document.getElementById("menuEventos").textContent = tr.menuEventos;
    document.getElementById("menuDeportes").textContent = tr.menuDeportes;
    document.getElementById("menuMapa").textContent = tr.menuMapa;

    document.getElementById("tituloPrincipal").textContent = tr.titulo;
    document.getElementById("descripcionPrincipal").textContent = tr.descripcion;

    document.getElementById("mapaTitulo").textContent = tr.mapaTitulo;
    document.getElementById("mapaTexto").textContent = tr.mapaTexto;

    document.getElementById("seleccionTitulo").textContent = tr.seleccionTitulo;
    document.getElementById("seleccionTexto").textContent = tr.seleccionTexto;

    document.getElementById("seleccion1").textContent = tr.seleccion1;
    document.getElementById("seleccion2").textContent = tr.seleccion2;
    document.getElementById("seleccion3").textContent = tr.seleccion3;

    document.getElementById("eventosTitulo").textContent = tr.eventosTitulo;
    document.getElementById("evento1Titulo").textContent = tr.evento1Titulo;
    document.getElementById("evento1Texto").textContent = tr.evento1Texto;
    document.getElementById("evento2Texto").textContent = tr.evento2Texto;
    document.getElementById("evento3Texto").textContent = tr.evento3Texto;

    document.getElementById("tituloNoticias").textContent = tr.noticiasTitulo;
    document.getElementById("tituloNoticia").textContent = tr.noticiaTitulo;
    document.getElementById("textoNoticia").textContent = tr.noticiaTexto;

    document.getElementById("footerTexto").textContent = tr.footer;

    // 🔥 MENSAJE DINÁMICO
    actualizarMensajeIdioma(lang);

  });

  // mensaje inicial
  actualizarMensajeIdioma("es");

});