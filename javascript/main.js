    // Use Intersection Observer to apply fade-in and slide-up animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2 // Trigger when 20% of the element is visible
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    // Apply different animation classes based on the element
                    if (target.tagName === 'H2') {
                        target.style.animation = 'fadeIn 0.8s ease-out forwards';
                    } else {
                        target.style.animation = 'slideUp 0.8s ease-out forwards';
                    }
                    observer.unobserve(target); // Stop observing after animation
                }
            });
        }, observerOptions);

        // Select all elements to animate
        document.querySelectorAll('.animate-on-scroll').forEach(element => {
            observer.observe(element);
        });

        // Add logic for mobile menu toggle
        function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu.style.display === 'block') {
                mobileMenu.style.display = 'none';
            } else {
                mobileMenu.style.display = 'block';
            }
        }