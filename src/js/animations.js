$(document).ready(function () {
    gsap.from(".section-about-me .col-left", {
        opacity: 0,
        x: -100,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.3 
    });
    gsap.from(".section-about-me .col-right .box-image .picture", {
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.3, 
        delay: 0.2
    });
    gsap.from(".section-about-me .col-right a", {
        opacity: 0,
        x: 100,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.3,
        delay: 0.4
    });
});

function initAnimationExperience() {
    gsap.registerPlugin(ScrollTrigger);

    if (window.innerWidth >= 769) {

        let tlDesktop = gsap.timeline({
            scrollTrigger: {
                trigger: ".section-experience",
                start: "top 100%",
                end: "bottom 100%",
                scrub: 1,
                toggleActions: "play none none none",
                markers: false
            }
        });
        // Animación de elementos
        tlDesktop.from(".section-experience .from-bottom", { 
            opacity: 0, 
            y: 100, 
            duration: 0.5, 
            ease: "power3.out" 
        })
        .from(".section-experience .from-left", { 
            opacity: 0, 
            x: -100, 
            duration: 1, 
            ease: "power3.out" 
        })
        .from(".section-experience .from-right", { 
            opacity: 0, 
            x: 100, 
            duration: 1, 
            ease: "power3.out" 
        }, "-=0.6")
        .from(".section-experience .from-left-second", { 
            opacity: 0, 
            x: -100, 
            duration: 1, 
            ease: "power3.out" 
        })
        .from(".section-experience .from-right-second", { 
            opacity: 0, 
            x: 100, 
            duration: 1, 
            ease: "power3.out" 
        }, "-=0.6");
    } else {
        let tlMobile = gsap.timeline({
            scrollTrigger: {
                trigger: ".section-experience",
                start: "top 80%",
                end: "bottom 80%",
                scrub: 2,
                toggleActions: "play none none none",
                markers: false
            }
        });
        // Animación de elemento
        tlMobile.from(".section-experience .from-bottom", { 
            opacity: 0, 
            y: 100, 
            duration: 1, 
            ease: "power3.out" 
        })
        .from(".section-experience .gallery-container", { 
            opacity: 0, 
            y: 100, 
            duration: 1, 
            ease: "power3.out" 
        })
    }
}

function initAnimationSkills() {
    gsap.registerPlugin(ScrollTrigger);

    if (window.innerWidth >= 769) {

        let tlDesktop = gsap.timeline({
            scrollTrigger: {
                trigger: ".section-skills",
                start: "top 100%",
                end: "bottom 100%",
                scrub: 1,
                toggleActions: "play none none none",
                markers: false
            }
        });
        // Animación de elementos
        tlDesktop.from(".section-skills .from-bottom", { 
            opacity: 0, 
            y: 100, 
            duration: 0.5, 
            ease: "power3.out" 
        })
        .from(".section-skills .from-left", { 
            opacity: 0, 
            x: -100, 
            duration: 0.5, 
            ease: "power3.out" 
        })
        .from(".section-skills .from-right", { 
            opacity: 0, 
            x: 100, 
            duration: 1, 
            ease: "power3.out" 
        }, "-=0.6")
    } else {
        let tlMobile = gsap.timeline({
            scrollTrigger: {
                trigger: ".section-skills",
                start: "top 80%",
                end: "bottom 100%",
                scrub: 2,
                toggleActions: "play none none none",
                markers: false
            }
        });
        // Animación de elemento
        tlMobile.from(".section-skills .from-bottom", { 
            opacity: 0, 
            y: 100, 
            duration: 1, 
            ease: "power3.out",
            stagger: 0.3 
        })
        .from(".section-skills .content-list", { 
            opacity: 0, 
            y: 100, 
            duration: 1, 
            ease: "power3.out" 
        })
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth <= 768) {
        return;
    }
    initAnimationExperience();
    initAnimationSkills();
    window.addEventListener("resize", function() {
        initAnimationExperience();
        initAnimationSkills();
    });
});
