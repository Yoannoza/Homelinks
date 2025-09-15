// 🍎 Apple-inspired Dashboard Interactions
// Elegant and minimalist animations for Homelinks

class AppleDashboard {
    constructor() {
        this.init();
        this.setupAppleAnimations();
        this.setupAppleSwitches();
        this.initPhosphorIcons();
    }

    init() {
        console.log('🍎 Initializing Apple-style Dashboard...');
        this.setupFadeInAnimations();
        this.setupGSAPAnimations();
    }

    initPhosphorIcons() {
        // Initialize Phosphor Icons
        if (typeof window.phosphor !== 'undefined') {
            console.log('✨ Phosphor Icons loaded');
        }
    }

    setupFadeInAnimations() {
        // Apple-style staggered fade-in animations
        const elements = document.querySelectorAll('.fade-in-up');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        }, {
            threshold: 0.1
        });

        elements.forEach(element => {
            observer.observe(element);
        });
    }

    setupGSAPAnimations() {
        // Apple-style hover animations with GSAP
        if (typeof gsap !== 'undefined') {
            // Hover animations for cards
            document.querySelectorAll('.apple-hover').forEach(card => {
                card.addEventListener('mouseenter', () => {
                    gsap.to(card, {
                        duration: 0.3,
                        y: -4,
                        scale: 1.02,
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                        ease: 'power2.out'
                    });
                });

                card.addEventListener('mouseleave', () => {
                    gsap.to(card, {
                        duration: 0.3,
                        y: 0,
                        scale: 1,
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                        ease: 'power2.out'
                    });
                });
            });

            // Smooth scrolling like iOS
            gsap.registerPlugin(ScrollTrigger);
            
            gsap.utils.toArray('.apple-glass').forEach((panel, i) => {
                gsap.fromTo(panel, 
                    { 
                        opacity: 0, 
                        y: 50 
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: i * 0.1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: panel,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            });
        }
    }

    setupAppleSwitches() {
        // Apple-style switch behavior
        window.toggleLight = (deviceId) => {
            const switchEl = document.getElementById(`${deviceId}-switch`);
            const checkbox = document.getElementById(deviceId);
            
            if (switchEl && checkbox) {
                // Toggle the checkbox
                checkbox.checked = !checkbox.checked;
                
                // Update switch appearance
                if (checkbox.checked) {
                    switchEl.classList.add('active');
                    // Apple-style haptic feedback simulation
                    this.playHapticFeedback();
                } else {
                    switchEl.classList.remove('active');
                }
                
                // Trigger the original LED switching function
                if (typeof switchLED === 'function') {
                    switchLED(checkbox);
                }
                
                // Add Apple-style ripple effect
                this.createRippleEffect(switchEl);
            }
        };

        window.toggleSensor = (sensorId) => {
            const switchEl = document.getElementById(`${sensorId}-switch`);
            const checkbox = document.getElementById(sensorId);
            
            if (switchEl && checkbox) {
                checkbox.checked = !checkbox.checked;
                
                if (checkbox.checked) {
                    switchEl.classList.add('active');
                    this.playHapticFeedback();
                } else {
                    switchEl.classList.remove('active');
                }
                
                this.createRippleEffect(switchEl);
            }
        };
    }

    setupAppleAnimations() {
        // Clock update with smooth transitions
        this.updateClock();
        setInterval(() => this.updateClock(), 1000);

        // Smooth door animations
        this.setupDoorAnimations();
        
        // Apple-style loading states
        this.setupLoadingStates();
    }

    updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('fr-FR', { 
            hour12: false,
            hour: '2-digit',
            minute: '2-digit'
        });
        
        const dateElements = {
            time: document.getElementById('digital-time'),
            day: document.getElementById('day'),
            daynum: document.getElementById('daynum'),
            month: document.getElementById('month'),
            year: document.getElementById('year')
        };

        if (dateElements.time) {
            // Apple-style time transition
            if (dateElements.time.textContent !== timeString) {
                if (typeof gsap !== 'undefined') {
                    gsap.to(dateElements.time, {
                        duration: 0.3,
                        scale: 1.05,
                        ease: 'power2.out',
                        onComplete: () => {
                            dateElements.time.textContent = timeString;
                            gsap.to(dateElements.time, {
                                duration: 0.3,
                                scale: 1,
                                ease: 'power2.out'
                            });
                        }
                    });
                } else {
                    dateElements.time.textContent = timeString;
                }
            }
        }

        // Update date elements
        const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
        const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
                       'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

        if (dateElements.day) dateElements.day.textContent = days[now.getDay()];
        if (dateElements.daynum) dateElements.daynum.textContent = now.getDate();
        if (dateElements.month) dateElements.month.textContent = months[now.getMonth()];
        if (dateElements.year) dateElements.year.textContent = now.getFullYear();
    }

    setupDoorAnimations() {
        // Enhanced door animations with Apple-style easing
        window.toggleDoors1 = () => {
            const wrapper = document.getElementById('d1');
            const leftDoor = document.getElementById('left-door1');
            const rightDoor = document.getElementById('right-door1');
            const status = document.getElementById('door1-status');
            
            if (wrapper && leftDoor && rightDoor) {
                const isOpen = wrapper.classList.contains('open');
                
                if (typeof gsap !== 'undefined') {
                    if (!isOpen) {
                        // Open doors with Apple-style animation
                        gsap.to(leftDoor, {
                            duration: 0.8,
                            x: '-100%',
                            ease: 'power3.inOut'
                        });
                        gsap.to(rightDoor, {
                            duration: 0.8,
                            x: '100%',
                            ease: 'power3.inOut'
                        });
                        wrapper.classList.add('open');
                        if (status) status.textContent = 'Ouverte';
                    } else {
                        // Close doors
                        gsap.to(leftDoor, {
                            duration: 0.8,
                            x: '0%',
                            ease: 'power3.inOut'
                        });
                        gsap.to(rightDoor, {
                            duration: 0.8,
                            x: '0%',
                            ease: 'power3.inOut'
                        });
                        wrapper.classList.remove('open');
                        if (status) status.textContent = 'Fermée';
                    }
                }
                
                this.playHapticFeedback();
            }
        };

        window.toggleDoors2 = () => {
            const wrapper = document.getElementById('d2');
            const leftDoor = document.getElementById('left-door2');
            const rightDoor = document.getElementById('right-door2');
            const status = document.getElementById('door2-status');
            
            if (wrapper && leftDoor && rightDoor) {
                const isOpen = wrapper.classList.contains('open');
                
                if (typeof gsap !== 'undefined') {
                    if (!isOpen) {
                        gsap.to(leftDoor, {
                            duration: 0.8,
                            x: '-100%',
                            ease: 'power3.inOut'
                        });
                        gsap.to(rightDoor, {
                            duration: 0.8,
                            x: '100%',
                            ease: 'power3.inOut'
                        });
                        wrapper.classList.add('open');
                        if (status) status.textContent = 'Ouverte';
                    } else {
                        gsap.to(leftDoor, {
                            duration: 0.8,
                            x: '0%',
                            ease: 'power3.inOut'
                        });
                        gsap.to(rightDoor, {
                            duration: 0.8,
                            x: '0%',
                            ease: 'power3.inOut'
                        });
                        wrapper.classList.remove('open');
                        if (status) status.textContent = 'Fermée';
                    }
                }
                
                this.playHapticFeedback();
            }
        };
    }

    setupLoadingStates() {
        // Apple-style loading overlay
        const overlay = document.getElementById('overlay');
        if (overlay) {
            window.showLoading = () => {
                overlay.classList.remove('opacity-0', 'pointer-events-none');
                overlay.classList.add('opacity-100');
            };

            window.hideLoading = () => {
                overlay.classList.add('opacity-0', 'pointer-events-none');
                overlay.classList.remove('opacity-100');
            };
        }
    }

    createRippleEffect(element) {
        // Apple-style ripple effect
        const ripple = document.createElement('div');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple 0.6s linear;
            left: 50%;
            top: 50%;
            width: ${size}px;
            height: ${size}px;
            margin-left: -${size/2}px;
            margin-top: -${size/2}px;
            pointer-events: none;
        `;
        
        // Add ripple animation keyframes if not exists
        if (!document.querySelector('#ripple-style')) {
            const style = document.createElement('style');
            style.id = 'ripple-style';
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        element.style.position = 'relative';
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    playHapticFeedback() {
        // Simulate Apple haptic feedback
        if (navigator.vibrate) {
            navigator.vibrate(10);
        }
        
        // Visual feedback with GSAP
        if (typeof gsap !== 'undefined') {
            gsap.to('body', {
                duration: 0.1,
                scale: 0.999,
                ease: 'power2.out',
                yoyo: true,
                repeat: 1
            });
        }
    }

    // API Status updates with Apple-style animations
    updateAPIStatus(connected) {
        const statusEl = document.getElementById('api-status');
        const statusText = document.querySelector('.api-status-text');
        
        if (statusEl && statusText) {
            if (connected) {
                statusText.textContent = 'IA Connectée';
                statusEl.classList.add('text-green-600');
                statusEl.classList.remove('text-gray-600');
            } else {
                statusText.textContent = 'Connexion IA...';
                statusEl.classList.add('text-gray-600');
                statusEl.classList.remove('text-green-600');
            }
            
            // Apple-style bounce animation
            if (typeof gsap !== 'undefined') {
                gsap.fromTo(statusEl, 
                    { scale: 1 },
                    { 
                        scale: 1.1, 
                        duration: 0.2, 
                        ease: 'power2.out',
                        yoyo: true,
                        repeat: 1
                    }
                );
            }
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const appleDashboard = new AppleDashboard();
    
    // Make it globally available for WebSocket updates
    window.appleDashboard = appleDashboard;
    
    console.log('🍎 Apple Dashboard loaded successfully');
});
