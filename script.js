document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll('.service-card, .gallery-grid img, .contact form');
    items.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'all 0.6s ease';
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    items.forEach(el => observer.observe(el));
});
