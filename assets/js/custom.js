(function($) {
  var toggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("menu");
  var close = document.getElementById("menu-close");

  toggle.addEventListener("click", function(e) {
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
    } else {
      menu.classList.add("open");
    }
  });

  close.addEventListener("click", function(e) {
    menu.classList.remove("open");
  });

  // Close menu after click on smaller screens
  $(window).on("resize", function() {
    if ($(window).width() < 846) {
      $(".main-menu a").on("click", function() {
        menu.classList.remove("open");
      });
    }
  });

  $(".owl-carousel").owlCarousel({
    items: 4,
    lazyLoad: true,
    loop: true,
    dots: true,
    margin: 30,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  $(".hover").mouseleave(function() {
    $(this).removeClass("hover");
  });

  $(".isotope-wrapper").each(function() {
    var $isotope = $(".isotope-box", this);
    var $filterCheckboxes = $('input[type="radio"]', this);

    var filter = function() {
      var type = $filterCheckboxes.filter(":checked").data("type") || "*";
      if (type !== "*") {
        type = '[data-type="' + type + '"]';
      }
      $isotope.isotope({ filter: type });
    };

    $isotope.isotope({
      itemSelector: ".isotope-item",
      layoutMode: "masonry"
    });

    $(this).on("change", filter);
    filter();
  });

  lightbox.option({
    resizeDuration: 200,
    wrapAround: true
  });
})(jQuery);

  // Email JS

  const btn = document.getElementById('form-submit-button');

  document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_eyqvvj9';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
      document.getElementById('form').reset();
      window.location.href = "thanks.html"; 
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
});

  const translations = {
    en: {
      aboutMeTitle: "About Me",
      profession: "Front End Programmer",
      cvButtonTitle: "My CV",
      technologyStackTitle: "Technology Stack",
      myWorkTitle: "My Work",
      contactMeTitle: "Contact Me",
      paragraphMboutMe: "Hi! I'm Camilo, a Colombian front-end developer based in Buenos Aires. I enjoy creating clear, functional interfaces with attention to detail and purpose. Programming allows me to solve problems with elegance and deliver real value.",
      myCodingJourneyTitle: "My Coding Journey",
      myCodingJourneyParagraph: `I started programming in 2022 through courses at Alura, Argentina Programa, and Platzi. My first major project was the e-commerce Amandiva, followed by other practice projects. Later, I developed Best Buy Market and a responsive landing page for a professional photographer.
                                 <br> I’m still learning and looking for new job opportunities to apply my knowledge.`,
      currentProjectsTitle: "Current Projects",
      currentProjectsSubtitle: "FollowUp: Your Personal Organization Assistant",
      CurrentProjectsText: `A work-in-progress project that combines a GitHub-style commit tracker for habits and an expense organizer into a single platform. It will also include a to-do list, which is another project showcased in this portfolio. Designed to simplify time management and enhance productivity. 
                            <br> I'm also learning <span class="highlight">TypeScript</span> to achieve better and more efficient code across all my projects.`,
      projectDescriptionOne: `A robust and scalable e-commerce features sign-up, log-in, shopping cart, order checkout, and a search bar, providing a seamless user experience.`,
      projectDescriptionTwo: `Lets users browse the catalog, view detailed product information, add products to the cart, and more features for a delightful experience.`,
      projectDescriptionThree: `Elegant portfolio landing designed to reflect the photographer’s unique style and earn client trust—crafted with attention to every detail.`,
      projectDescriptionFour: `Habit tracking app with authentication, calendar-based visualization, and real-time sync to encourage daily consistency.`,
      ViewProjectButton: `See project <i class="fa fa-eye"></i>`,
      contactMeDescription: "Contact Me If you have a project in mind or want to collaborate, i am always open to new ideas and would love to hear from you. I will respond promptly your message.",
      sendMessageButton: "Send Message"

    },
    es: {
      aboutMeTitle: "Sobre Mí",
      profession: "Programador Front End",
      cvButtonTitle: "Mi CV",
      technologyStackTitle: "Stack Tecnológico",
      myWorkTitle: "Mi Trabajo",
      contactMeTitle: "Contacto",
      paragraphMboutMe: "¡Hola! Soy Camilo, desarrollador front-end colombiano radicado en Buenos Aires. Me gusta crear interfaces claras y funcionales, con atención al detalle y propósito. Programar me permite resolver con elegancia y aportar valor real.",
      myCodingJourneyTitle: "Mi Camino Como Dev",
      myCodingJourneyParagraph: `Empecé a programar en 2022 con cursos en Alura, Argentina Programa y Platzi. Mi primer gran proyecto fue el e-commerce Amandiva, seguido de otros trabajos de práctica. Después desarrollé Best Buy Market y una landing page responsiva para un fotógrafo profesional.
                                <br> Hoy sigo aprendiendo y busco nuevas oportunidades laborales para aplicar mis conocimientos.`,
      currentProjectsTitle: "Proyectos En Curso",
      currentProjectsSubtitle: "FollowUp: tu asistente personal de organización",
      CurrentProjectsText: `Proyecto en desarrollo que integra un sistema de seguimiento de hábitos inspirado en los commits de GitHub con un organizador de gastos, todo en una misma plataforma. También incluirá una lista de tareas, basada en otro proyecto que forma parte de este portfolio. Está diseñado para simplificar la gestión del tiempo y potenciar la productividad. 
                            <br>Actualmente estoy aprendiendo <span class="highlight">TypeScript</span> para lograr un código más eficiente y escalable en todos mis proyectos.`,
      projectDescriptionOne: `E-commerce escalable con login, registro, barra de búsqueda, carrito de compras y resumen de orden, enfocado en fluidez y eficiencia.`,
      projectDescriptionTwo: `Cuenta con un catálogo, vista detallada de cada producto, carrito de compras y mas funciones para una experiencia intuitiva y agradable.`,
      projectDescriptionThree: `portfolio elegante, diseñado para reflejar el estilo único del fotógrafo y generar confianza en sus clientes, fué creado con atención minuciosa a cada detalle.`,
      projectDescriptionFour: `App de seguimiento de hábitos con autenticación de usuarios, calendario y sincronización en tiempo real para fomentar la constancia diaria.`,
      ViewProjectButton: `Ver proyecto <i class="fa fa-eye"></i>`,
      contactMeDescription: "Contáctame Si tienes un proyecto en mente o quieres colaborar, estoy abierto a nuevas ideas y me encantaria escucharte. Responderé tu mensaje con la mayor prontitud posible.",
      sendMessageButton: "Enviar Mensaje"

    }
  };

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach(el => {
    const key = el.getAttribute("data-key");
    el.innerHTML = translations[lang] [key];
  });
}

window.onload = () => {
  setLanguage("en");
};