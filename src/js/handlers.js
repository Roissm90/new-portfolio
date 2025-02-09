$(document).ready(function () {
    //cambiar elemento activo del nav
    function updateActiveSection() {
        let scrollPosition = $(window).scrollTop();
        let windowHeight = $(window).height();
        let activeSection = null;

        $("section").each(function () {
            let sectionTop = $(this).offset().top;
            let sectionHeight = $(this).outerHeight();
            let sectionId = $(this).attr("class").split(" ").find(cls => cls.startsWith("section-"));

            if (scrollPosition + (windowHeight * 0.5) >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                activeSection = sectionId.replace("section-", "");
            }
        });

        if (activeSection) {
            $(".list-item").removeClass("active");
            $('.list-item[data-section="' + activeSection + '"]').addClass("active");
        }
    }
    updateActiveSection();

    $(window).on("scroll", function () {
        updateActiveSection();
    });

    $('.list-item').click(function () {
        let sectionTarget = $(this).attr('data-section');
        let section = $('.section-' + sectionTarget);

        if (section.length) {
            $('html, body').animate({ scrollTop: section.offset().top - 60 }, 600);
        }
    });

    //cambiar bg del nav y del footer
    function verificarScrollNav() {
        let $nav = $('nav.nav');
        let $secciones = $('section');
        let scrollPos = $(window).scrollTop() + 36;

        $secciones.each(function() {
            let $seccion = $(this);
            let seccionTop = $seccion.offset().top;

            if (scrollPos >= seccionTop && scrollPos < seccionTop + $seccion.outerHeight()) {
                if ($seccion.hasClass('bg-white')) {
                    $nav.addClass('bg-bluedark');
                } else {
                    $nav.removeClass('bg-bluedark');
                }
            }
        });
    }
    function verificarScrollFooter() {
        let footer = $('footer.footer');
        let secciones = $('section');
        let scrollPos = $(window).scrollTop() + $(window).height();
    
        secciones.each(function() {
            let seccion = $(this);
            let seccionBottom = seccion.offset().top + seccion.outerHeight();
    
            if (scrollPos >= seccion.offset().top && scrollPos < seccionBottom) {
                if (seccion.hasClass('bg-white')) {
                    footer.addClass('bg-bluedark');
                } else {
                    footer.removeClass('bg-bluedark');
                }
            }
        });
    }
    
    $(window).scroll(function() {
        verificarScrollNav();
        verificarScrollFooter();
    });

    $(window).resize(function() {
        verificarScrollNav();
        verificarScrollFooter();
    });

    verificarScrollNav();
    verificarScrollFooter();

    //seleccionar tabla de skills
    let skillToShow = 'soft';
    let skillsElements = $('.section-skills .content-title .section-subtitle');
    let skillsList = $('.section-skills .content-list .wrapper-list');
    function toggleSkillsOnResize() {
        if ($(window).width() <= 768) {
            skillsElements.each(function() {
                let skill = $(this).attr('data-skills');
                if (skill !== skillToShow) {
                    return
                } else {
                    $(this).addClass('active');
                }
            });
    
            skillsList.each(function() {
                let skill = $(this).attr('data-skills');
                if (skill !== skillToShow) {
                    $(this).hide();
                } else {
                    $(this).show();
                }
            });
        } else {
            skillsList.show();
        }
    }
    $(window).on('resize', toggleSkillsOnResize);
    $(document).ready(toggleSkillsOnResize);
    

    skillsElements.click(function() {
        let skills = $(this).attr('data-skills');
        console.log(skills)
        let skillsTarget = $('.section-skills .content-list .wrapper-list').filter(`[data-skills="${skills}"]`);
        console.log(skillsTarget)
        if ($(this).hasClass('active')) {
            return;
        } else {
            $('.section-skills .content-title .section-subtitle').removeClass('active');
            $(this).addClass('active');
            $('.section-skills .content-list .wrapper-list').hide();
            skillsTarget.fadeIn();
        }
    });
});