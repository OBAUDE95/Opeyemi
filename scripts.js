<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

<script>
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animation
    gsap.from('.text-content h1, .text-content h2, .text-content p', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.25,
        ease: 'power3.out'
    });

    // About Section
    gsap.from('#about .about-text', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // Experience Timeline
    gsap.utils.toArray('.timeline-item').forEach((item) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            y: 60,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Education Cards
    gsap.utils.toArray('.education-card').forEach((card) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            y: 60,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Skills
    gsap.from('.skill', {
        scrollTrigger: {
            trigger: '#skills',
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out'
    });

    // Projects
    gsap.utils.toArray('.project-card').forEach((card) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Contact Info
    gsap.from('.contact-info', {
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
});
</script>
