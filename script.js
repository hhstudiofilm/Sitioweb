document.addEventListener("DOMContentLoaded", () => {
    // Animaciones ya existentes
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

    // --- NUEVO: Modal de video ---
    const serviceCards = document.querySelectorAll(".service-card");
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("serviceVideo");
    const closeBtn = document.getElementById("closeModal");

    // Rutas de videos según servicio
    const videos = {
        "📸 Bodas": "videos/bodas.mp4",
        "🎉 XV Años": "videos/xv.mp4",
        "🎥 Grabaciones en Vivo": "videos/vivo.mp4",
        "🎙️ Podcasts": "videos/podcasts.mp4",
        "🎶 Conciertos": "videos/conciertos.mp4"
    };

    serviceCards.forEach(card => {
        card.addEventListener("click", () => {
            const videoSrc = videos[card.textContent.trim()];
            if (videoSrc) {
                video.src = videoSrc;
                video.play();
                modal.style.display = "block";
            }
        });
    });

    closeBtn.addEventListener("click", () => {
        video.pause();
        video.src = "";
        modal.style.display = "none";
    });

    // Cerrar al hacer clic fuera del contenido
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            video.pause();
            video.src = "";
            modal.style.display = "none";
        }
    });
});
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
