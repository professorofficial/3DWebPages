document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.section');
    
    window.addEventListener('scroll', () => {
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                section.querySelector('video').play();
            } else {
                section.querySelector('video').pause();
            }
        });
    });
});