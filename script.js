function animateOnScroll() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset > sectionTop - window.innerHeight + sectionHeight / 2) {
            section.classList.add('is-visible');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll();
