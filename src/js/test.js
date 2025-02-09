document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".section-about-me",
            start: "top 75%",  // Inicia cuando la parte superior de la sección está en el 80% de la pantalla
            end: "bottom 80%", // Termina cuando la parte inferior llega al 20% de la pantalla
            scrub: 2,  // Hace que la animación siga el scroll de manera fluida
            toggleActions: "play none none none",
            markers: true // Muestra los puntos de activación para depuración
        }
    });

    // Animación de la columna izquierda
    tl.from(".section-about-me .col-left .section-title", { 
        opacity: 0, 
        y: 100, 
        duration: 1, 
        ease: "power3.out" 
    })
    .from(".section-about-me .col-left .title", { 
        opacity: 0, 
        y: 100, 
        duration: 1, 
        ease: "power3.out" 
    }, "-=0.8")
    .from(".section-about-me .col-left .paragraph-small", { 
        opacity: 0, 
        y: 100, 
        duration: 1, 
        ease: "power3.out" 
    }, "-=0.8")
    .from(".section-about-me .col-left .link-cv", { 
        opacity: 0, 
        y: 100, 
        duration: 1, 
        ease: "power3.out" 
    }, "-=0.8");

    // Animación de la columna derecha
    tl.from(".section-about-me .col-right .box-image", { 
        opacity: 0, 
        y: 100, 
        duration: 1, 
        ease: "power3.out" 
    }, "-=0.5")
    .from(".section-about-me .col-right .box-links", { 
        opacity: 0, 
        y: 100, 
        duration: 1, 
        ease: "power3.out" 
    }, "-=0.8");
});
