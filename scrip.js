// Inicialización de partículas
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { random: true },
        size: { random: true },
        line_linked: { enable: true, distance: 150, opacity: 0.4 },
        move: { enable: true, speed: 2 }
    }
});

// Animación GSAP para elementos
gsap.from(".avatar", { 
    duration: 1.5, 
    y: 50, 
    opacity: 0, 
    ease: "back.out(1.7)" 
});

gsap.to(".skill-progress", {
    width: "100%",
    duration: 2,
    ease: "power4.out",
    stagger: 0.2
});

// Efecto tilt en tarjetas
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2
});