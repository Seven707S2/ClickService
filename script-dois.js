document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links-list');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('is-active');
        });

        // Opcional: Fechar o menu ao clicar em um link (para single-page applications)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenu.classList.remove('is-active');
                }
            });
        });
    }

    // Efeito de rolagem suave (Smooth Scroll)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links-list');

    // Código do Menu Hamburguer
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('is-active');
        });

        // Opcional: Fechar o menu ao clicar em um link (para single-page applications)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenu.classList.remove('is-active');
                }
            });
        });
    }

    // --- Início do código que você vai adicionar/substituir ---

    // Efeito de rolagem suave (Smooth Scroll) - CÓDIGO ATUALIZADO
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll para o elemento, considerando a altura da navbar fixa se houver uma
                // Isso ajuda a garantir que a seção não fique "escondida" atrás do menu fixo
                const navbarHeight = document.querySelector('.navbar') ? document.querySelector('.navbar').offsetHeight : 0;
                const offsetTop = targetElement.offsetTop - navbarHeight;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll Reveal - CÓDIGO ATUALIZADO (com novas configurações)
    if (typeof ScrollReveal !== 'undefined') { // Garante que a biblioteca foi carregada
        // Configuração padrão para todos os elementos com data-scroll-reveal
        ScrollReveal().reveal('[data-scroll-reveal]', {
            delay: 200,
            distance: '50px',
            origin: 'bottom', // De onde a animação vem
            easing: 'ease-in-out',
            duration: 1000,
            interval: 50, // Pequeno delay entre elementos sequenciais com a mesma classe
            reset: true // Anima novamente ao rolar para cima e para baixo
        });

        // Animações específicas para o cabeçalho (já tínhamos)
        ScrollReveal().reveal('.title', {
            delay: 400,
            distance: '80px',
            origin: 'left',
            duration: 1200
        });
        ScrollReveal().reveal('.subtitle', {
            delay: 600,
            distance: '80px',
            origin: 'right',
            duration: 1200
        });
        ScrollReveal().reveal('.phone-button', {
            delay: 800,
            distance: '50px',
            origin: 'bottom',
            duration: 1000
        });

        // Animações específicas para as caixas de serviço (NOVO!)
        ScrollReveal().reveal('.servico-box', {
            delay: 300, // Ajusta o delay para as caixas aparecerem
            distance: '80px',
            origin: 'bottom',
            interval: 150, // Um intervalo maior entre cada caixa para um efeito cascata
            duration: 800
        });

        // Animação para a frase de destaque (NOVO!)
        ScrollReveal().reveal('.frase-destaque', {
            delay: 400,
            distance: '60px',
            origin: 'top', // Pode vir de cima para um efeito diferente
            duration: 1000
        });
    }
    // --- Fim do código que você vai adicionar/substituir ---

});

document.addEventListener('DOMContentLoaded', () => {
    // ... (código existente do menu hamburguer e smooth scroll)

    // Scroll Reveal
    if (typeof ScrollReveal !== 'undefined') {
        // Configuração padrão para todos os elementos com data-scroll-reveal
        ScrollReveal().reveal('[data-scroll-reveal]', {
            delay: 200,
            distance: '50px',
            origin: 'bottom',
            easing: 'ease-in-out',
            duration: 1000,
            interval: 50,
            reset: true
        });

        // Animações específicas para o cabeçalho
        ScrollReveal().reveal('.title', {
            delay: 400,
            distance: '80px',
            origin: 'left',
            duration: 1200
        });
        ScrollReveal().reveal('.subtitle', {
            delay: 600,
            distance: '80px',
            origin: 'right',
            duration: 1200
        });
        ScrollReveal().reveal('.phone-button', {
            delay: 800,
            distance: '50px',
            origin: 'bottom',
            duration: 1000
        });

        // Animações específicas para as caixas de serviço
        ScrollReveal().reveal('.servico-box', {
            delay: 300,
            distance: '80px',
            origin: 'bottom',
            interval: 150,
            duration: 800
        });

        // Animação para a frase de destaque
        ScrollReveal().reveal('.frase-destaque', {
            delay: 400,
            distance: '60px',
            origin: 'top',
            duration: 1000
        });

        // NOVAS Animações para a seção "Sobre Nós"
        ScrollReveal().reveal('.titulo-sobre', {
            delay: 200,
            distance: '40px',
            origin: 'left',
            duration: 800
        });
        ScrollReveal().reveal('.subtitulo-sobre', {
            delay: 300,
            distance: '40px',
            origin: 'left',
            duration: 900
        });
        ScrollReveal().reveal('.sobre-conteudo-principal', {
            delay: 400,
            distance: '60px',
            origin: 'bottom',
            duration: 1000
        });
        ScrollReveal().reveal('.contato-frase', {
            delay: 500,
            distance: '40px',
            origin: 'top',
            duration: 900
        });
        ScrollReveal().reveal('.botao-whatsapp', {
            delay: 600,
            distance: '50px',
            origin: 'bottom',
            duration: 1000
        });

        // Animações para os 3 blocos da seção inferior
        ScrollReveal().reveal('.secao-inferior .atendimento', {
            delay: 300,
            distance: '50px',
            origin: 'left',
            duration: 800
        });
        ScrollReveal().reveal('.secao-inferior .horarios', {
            delay: 450, // Um pouco mais de delay para o do meio
            distance: '50px',
            origin: 'bottom',
            duration: 800
        });
        ScrollReveal().reveal('.secao-inferior .pecas', {
            delay: 600, // E mais delay para o último
            distance: '50px',
            origin: 'right',
            duration: 800
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // ... (código existente do menu hamburguer e smooth scroll)

    // Scroll Reveal
    if (typeof ScrollReveal !== 'undefined') {
        // Configuração padrão para todos os elementos com data-scroll-reveal
        ScrollReveal().reveal('[data-scroll-reveal]', {
            delay: 200,
            distance: '50px',
            origin: 'bottom',
            easing: 'ease-in-out',
            duration: 1000,
            interval: 50,
            reset: true
        });

        // ... (Animações específicas para o cabeçalho) ...
        // ... (Animações específicas para as caixas de serviço) ...
        // ... (Animação para a frase de destaque) ...
        // ... (Animações para a seção "Sobre Nós") ...
        // ... (Animações para os 3 blocos da seção inferior) ...

        // NOVAS Animações para a seção "Equipamentos"
        ScrollReveal().reveal('.equipamentos .titulo', {
            delay: 200,
            distance: '40px',
            origin: 'top',
            duration: 800
        });
        ScrollReveal().reveal('.equipamentos .subtitulo', {
            delay: 300,
            distance: '40px',
            origin: 'top',
            duration: 900
        });
        ScrollReveal().reveal('.lista-equipamentos .item', {
            delay: 400, // Começa após os títulos
            distance: '50px',
            origin: 'bottom',
            interval: 100, // Pequeno delay entre cada item da lista
            duration: 700
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // ... (Seu código existente do menu hamburguer, smooth scroll e Scroll Reveal) ...

    // === Lógica do Carrossel de Avaliações ===
    const carrossel = document.querySelector('.carrossel');
    const btnAnterior = document.querySelector('.btn-anterior');
    const btnProximo = document.querySelector('.btn-proximo');

    let currentIndex = 0; // Começa no primeiro slide

    // Função para mover o carrossel para um slide específico
    function moveToSlide(index) {
        // Calcula a largura do slide visível (que é 100% da largura do carrossel)
        // Isso é crucial para carrosséis com itens de largura variável ou número de itens por slide variável
        const slideWidth = carrossel.clientWidth;
        carrossel.scrollLeft = slideWidth * index;
        currentIndex = index;
    }

    // Event Listener para o botão 'Próximo'
    btnProximo.addEventListener('click', () => {
        // Encontra todos os slides para saber quantos temos
        const totalSlides = document.querySelectorAll('.slide').length;
        if (currentIndex < totalSlides - 1) { // Verifica se não estamos no último slide
            moveToSlide(currentIndex + 1);
        } else {
            moveToSlide(0); // Volta para o primeiro slide se estiver no final
        }
    });

    // Event Listener para o botão 'Anterior'
    btnAnterior.addEventListener('click', () => {
        const totalSlides = document.querySelectorAll('.slide').length;
        if (currentIndex > 0) { // Verifica se não estamos no primeiro slide
            moveToSlide(currentIndex - 1);
        } else {
            moveToSlide(totalSlides - 1); // Vai para o último slide se estiver no início
        }
    });

    // Animação com Scroll Reveal para a seção de Avaliações
    if (typeof ScrollReveal !== 'undefined') {
        // ... (Suas outras configurações de Scroll Reveal) ...

        ScrollReveal().reveal('#avaliacoes-clientes .titulo', {
            delay: 200,
            distance: '40px',
            origin: 'top',
            duration: 800
        });
        ScrollReveal().reveal('#avaliacoes-clientes .subtitulo', {
            delay: 300,
            distance: '40px',
            origin: 'top',
            duration: 900
        });
        ScrollReveal().reveal('.carrossel-container', { // Anima o container inteiro do carrossel
            delay: 400,
            distance: '60px',
            origin: 'bottom',
            duration: 1000
        });
        // Não é necessário animar cada '.card' individualmente com ScrollReveal se o carrossel já está animado
        // e os cards vão rolar para dentro e fora da vista.
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // ... (código existente do menu hamburguer, smooth scroll e carrossel) ...

    // Scroll Reveal
    if (typeof ScrollReveal !== 'undefined') {
        // ... (Suas configurações padrão e animações para outras seções) ...

        // NOVAS Animações para a seção "Fabricantes"
        ScrollReveal().reveal('#fabricantes .fabricantes__titulo', {
            delay: 200,
            distance: '40px',
            origin: 'top',
            duration: 800
        });
        ScrollReveal().reveal('#fabricantes .fabricantes__subtitulo', {
            delay: 300,
            distance: '40px',
            origin: 'top',
            duration: 900
        });
        ScrollReveal().reveal('.fabricantes__item', {
            delay: 400, // Começa após os títulos
            distance: '50px',
            origin: 'bottom',
            interval: 100, // Pequeno delay entre cada item da grade
            duration: 700
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // ... (código existente do menu hamburguer, smooth scroll, carrossel e fabricantes) ...

    // Scroll Reveal
    if (typeof ScrollReveal !== 'undefined') {
        // ... (Suas configurações padrão e animações para outras seções) ...

        // NOVAS Animações para a seção "Rodapé"
        ScrollReveal().reveal('.footer-section', {
            delay: 200,
            distance: '50px',
            origin: 'bottom',
            interval: 150, // Pequeno delay entre cada seção
            duration: 800
        });

        ScrollReveal().reveal('.footer-bottom p', {
            delay: 400, // Começa após as seções principais do rodapé
            distance: '20px',
            origin: 'bottom',
            duration: 700
        });
    }
});