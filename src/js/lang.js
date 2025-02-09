$(document).ready(function () {
    let langOrigin = $('html').attr('lang'); // Idioma original
    let langTarget; // Idioma destino

    // Obtener los textos originales en un array
    let textToTranslate = $(".translate").map(function() {
        return $(this).text().trim();
    }).get();
    
    $('.wrapper-lang .lang-text').text(langOrigin.toUpperCase());
    let langOriginToSend = $('.wrapper-lang .lang-text').text().toLowerCase();

    let firstSection = $('section[data-first="first-section"]');
    $('.wrapper-lang .lang-text').click(function() {
        firstSection.toggleClass("lang-open");
        $('.wrapper-lang .wrapper-lang-btns').fadeToggle();
    });

    $('.wrapper-lang .wrapper-lang-btns .lang-btn').click(function() {
        if($(this).text() === 'EN') {
            location.reload();
            firstSection.toggleClass("lang-open");
        } else {
            firstSection.toggleClass("lang-open");
            langTarget = $(this).text().toLowerCase();
            translateApertium(textToTranslate);
            $('.wrapper-lang .lang-text').text(langTarget.toUpperCase());
            $('.wrapper-lang .wrapper-lang-btns').fadeToggle();
        }
    })
    // Función para traducir con Apertium
    async function translateApertium(texts) {
        for (let i = 0; i < texts.length; i++) {
            const url = `https://beta.apertium.org/apy/translate?langpair=${langOriginToSend}|${langTarget}&q=${encodeURIComponent(texts[i])}`;
        
            try {
                const response = await fetch(url);
                const data = await response.json();
        
                if (data.responseData) {
                    $(".translate").eq(i).text(data.responseData.translatedText);
                } else {
                    console.error("Error en la traducción:", data);
                }
            } catch (error) {
                console.error("Error en la petición:", error);
            }
        }
        console.log('langTarget: ' + langTarget);
        console.log('langOrigin: ' + langOrigin);
        console.log('langOriginToSend: ' + langOriginToSend);
        langOriginToSend = langTarget;
    }
});
