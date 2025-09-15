// 🌟 Modern Animations inspired by Aceternity UI
// Advanced animations and interactions for Homelinks

class ModernAnimations {
    constructor() {
        this.init();
        this.setupParticleSystem();
        this.setupMorphingBackground();
        this.setupHoverEffects();
        this.setupGlowEffects();
    }

    init() {
        console.log('🚀 Initializing Modern Animations System...');
        this.addCustomStyles();
        this.setupIntersectionObserver();
    }

    addCustomStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* Advanced Glassmorphism */
            .glass-morphism-advanced {
                background: rgba(255, 255, 255, 0.05);
                backdrop-filter: blur(20px) saturate(180%);
                border: 1px solid rgba(255, 255, 255, 0.1);
                box-shadow: 
                    0 8px 32px rgba(0, 0, 0, 0.3),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1);
            }

            /* Animated gradient backgrounds */
            .gradient-animation {
                background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
                background-size: 400% 400%;
                animation: gradientShift 15s ease infinite;
            }

            @keyframes gradientShift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }

            /* Floating elements */
            .float-animation-advanced {
                animation: floatAdvanced 6s ease-in-out infinite;
            }

            @keyframes floatAdvanced {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                33% { transform: translateY(-15px) rotate(1deg); }
                66% { transform: translateY(-5px) rotate(-1deg); }
            }

            /* Neon glow text */
            .neon-text {
                text-shadow: 
                    0 0 5px currentColor,
                    0 0 10px currentColor,
                    0 0 15px currentColor,
                    0 0 20px currentColor;
                animation: neonFlicker 2s infinite alternate;
            }

            @keyframes neonFlicker {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.8; }
            }

            /* Morphing shapes */
            .morphing-blob {
                background: linear-gradient(45deg, #ff006e, #8338ec, #3a86ff);
                filter: blur(40px);
                animation: morphBlob 20s ease-in-out infinite;
                opacity: 0.3;
            }

            @keyframes morphBlob {
                0%, 100% { border-radius: 60% 40% 30% 70%; }
                25% { border-radius: 30% 60% 70% 40%; }
                50% { border-radius: 50% 60% 30% 60%; }
                75% { border-radius: 60% 30% 60% 40%; }
            }

            /* Ripple effect */
            .ripple-effect {
                position: relative;
                overflow: hidden;
            }

            .ripple-effect::after {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 0;
                height: 0;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: translate(-50%, -50%);
                transition: width 0.6s, height 0.6s;
            }

            .ripple-effect:hover::after {
                width: 300px;
                height: 300px;
            }

            /* Glitch effect */
            .glitch-effect {
                position: relative;
            }

            .glitch-effect::before,
            .glitch-effect::after {
                content: attr(data-text);
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0;
            }

            .glitch-effect::before {
                animation: glitch1 0.3s infinite;
                color: #ff0000;
                z-index: -1;
            }

            .glitch-effect::after {
                animation: glitch2 0.3s infinite;
                color: #00ffff;
                z-index: -2;
            }

            @keyframes glitch1 {
                0%, 100% { transform: translate(0); opacity: 0; }
                20% { transform: translate(-2px, 2px); opacity: 1; }
                40% { transform: translate(-2px, -2px); opacity: 1; }
                60% { transform: translate(2px, 2px); opacity: 1; }
                80% { transform: translate(2px, -2px); opacity: 1; }
            }

            @keyframes glitch2 {
                0%, 100% { transform: translate(0); opacity: 0; }
                20% { transform: translate(2px, -2px); opacity: 1; }
                40% { transform: translate(2px, 2px); opacity: 1; }
                60% { transform: translate(-2px, -2px); opacity: 1; }
                80% { transform: translate(-2px, 2px); opacity: 1; }
            }

            /* Tilt effect */
            .tilt-effect {
                transform-style: preserve-3d;
                transition: transform 0.3s ease;
            }

            .tilt-effect:hover {
                transform: perspective(1000px) rotateX(5deg) rotateY(5deg);
            }
        `;
        document.head.appendChild(style);
    }

    setupParticleSystem() {
        const particleContainer = document.querySelector('.floating-particles');
        if (!particleContainer) return;

        // Create additional animated particles
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle absolute rounded-full opacity-60';
            particle.style.width = Math.random() * 4 + 'px';
            particle.style.height = particle.style.width;
            particle.style.top = Math.random() * 100 + '%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.background = this.getRandomColor();
            particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
            particle.style.animationDelay = Math.random() * 2 + 's';
            particle.classList.add('float-animation-advanced');
            
            particleContainer.appendChild(particle);
        }
    }

    setupMorphingBackground() {
        // Add morphing blob backgrounds
        const container = document.querySelector('.relative.z-10');
        if (!container) return;

        for (let i = 0; i < 3; i++) {
            const blob = document.createElement('div');
            blob.className = 'morphing-blob fixed w-96 h-96 pointer-events-none';
            blob.style.top = Math.random() * 100 + '%';
            blob.style.left = Math.random() * 100 + '%';
            blob.style.animationDelay = i * 7 + 's';
            blob.style.zIndex = '-10';
            
            document.body.appendChild(blob);
        }
    }

    setupHoverEffects() {
        // Add ripple effect to cards
        const cards = document.querySelectorAll('.glass-morphism');
        cards.forEach(card => {
            card.classList.add('ripple-effect');
            
            // Add tilt effect on mouse move
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
            });
        });
    }

    setupGlowEffects() {
        // Add neon glow to titles
        const titles = document.querySelectorAll('h1, h2');
        titles.forEach(title => {
            title.classList.add('neon-text');
        });

        // Add glitch effect to status indicators
        const statusElements = document.querySelectorAll('.status-text, .api-status-text');
        statusElements.forEach(element => {
            element.classList.add('glitch-effect');
            element.setAttribute('data-text', element.textContent);
        });
    }

    setupIntersectionObserver() {
        // Animate elements when they come into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fadeInUp');
                }
            });
        }, {
            threshold: 0.1
        });

        // Observe all sections
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            observer.observe(section);
        });
    }

    getRandomColor() {
        const colors = [
            '#ff006e', '#8338ec', '#3a86ff', '#06ffa5', 
            '#ffbe0b', '#fb5607', '#ff006e', '#8338ec'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Particle burst effect for interactions
    createParticleBurst(x, y) {
        for (let i = 0; i < 10; i++) {
            const particle = document.createElement('div');
            particle.className = 'absolute w-2 h-2 rounded-full pointer-events-none';
            particle.style.background = this.getRandomColor();
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.zIndex = '1000';
            
            const angle = (Math.PI * 2 * i) / 10;
            const velocity = Math.random() * 100 + 50;
            
            document.body.appendChild(particle);
            
            // Animate particle
            particle.animate([
                { 
                    transform: 'translate(0, 0) scale(1)', 
                    opacity: 1 
                },
                { 
                    transform: `translate(${Math.cos(angle) * velocity}px, ${Math.sin(angle) * velocity}px) scale(0)`, 
                    opacity: 0 
                }
            ], {
                duration: 1000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }).onfinish = () => particle.remove();
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ModernAnimations();
    
    // Add particle burst on click
    document.addEventListener('click', (e) => {
        if (e.target.closest('.light-card, .sensor-card, .voice-btn')) {
            new ModernAnimations().createParticleBurst(e.clientX, e.clientY);
        }
    });
});
