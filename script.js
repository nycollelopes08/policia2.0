// Função para adicionar animação nas seções conforme o usuário rola a página
document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY + window.innerHeight; // Posição atual da rolagem

    sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition - 150) { // Quando a seção entra na área visível
            section.classList.add('visible');
        }
    });
});

// Função para destacar o item de navegação ativo com base na rolagem da página
document.addEventListener('scroll', function () {
    const links = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    links.forEach((link) => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Função para adicionar animações de hover nas imagens e textos
document.querySelectorAll('.image img').forEach((image) => {
    image.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease-in-out';
    });
    image.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
});

document.querySelectorAll('.text').forEach((text) => {
    text.addEventListener('mouseenter', function () {
        this.style.color = '#1ABC9C';
        this.style.transition = 'color 0.3s ease-in-out';
    });
    text.addEventListener('mouseleave', function () {
        this.style.color = '#333';
    });
});

// Função para aplicar o efeito de animação quando a página carrega
window.addEventListener('load', function () {
    document.querySelectorAll('.section').forEach((section) => {
        section.classList.add('hidden');
    });
});

// Função para aplicar animação de rolagem suave
document.querySelectorAll('nav ul li a').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: targetSection.offsetTop - 50, // Ajusta a posição para o topo
            behavior: 'smooth',
        });
    });
});