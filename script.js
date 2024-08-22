document.querySelectorAll('.nav__link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 50;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 800;
        let start = null;
        function smoothScroll(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const ease = Math.min(progress / duration, 1);

            window.scrollTo(0, startPosition + distance * ease);

            if (progress < duration) {
                window.requestAnimationFrame(smoothScroll);
            }
        }

        window.requestAnimationFrame(smoothScroll);
    });
});

window.addEventListener('scroll', function() {
    const aboutSection = document.querySelector('#about');
    const position = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.4;

    if (position < screenPosition) {
        aboutSection.classList.add('fade-in');
    }
});

document.querySelector('.nav__menu-toggle').addEventListener('click', function() {
    const navUl = document.querySelector('.nav__list');
    const toggleIcon = document.querySelector('.nav__menu-toggle');

    navUl.classList.toggle('active');
    toggleIcon.classList.toggle('active');

    if (navUl.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

window.addEventListener('scroll', function() {
    const navUl = document.querySelector('.nav__list');
    const toggleIcon = document.querySelector('.nav__menu-toggle');

    if (navUl.classList.contains('active')) {
        navUl.classList.remove('active');
        toggleIcon.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});
