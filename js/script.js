document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Close mobile menu when a link is clicked
    const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar scroll effect
    const nav = document.querySelector('nav');
    const currentPageForNav = window.location.pathname.split('/').pop() || 'index.html';

    if (currentPageForNav === 'index.html') {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                nav.classList.add('bg-white', 'shadow-md');
                nav.classList.remove('bg-transparent', 'text-white');
            } else {
                nav.classList.remove('bg-white', 'shadow-md');
                nav.classList.add('bg-transparent', 'text-white');
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Run on page load
    } else {
        nav.classList.add('bg-white', 'shadow-md');
        nav.classList.remove('bg-transparent', 'text-white');
    }

    // Scroll to top button logic
    const scrollBtn = document.getElementById('scrollToTop');

    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollBtn.classList.add('show');
            } else {
                scrollBtn.classList.remove('show');
            }
        });

        scrollBtn.addEventListener('click', () => {
            const startPosition = window.scrollY;
            const duration = 800; // ms
            let startTime = null;

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                
                const progress = Math.min(timeElapsed / duration, 1);
                const easeInPower = progress * progress * progress; // Cubic Ease-In
                
                window.scrollTo(0, startPosition * (1 - easeInPower));

                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            }

            requestAnimationFrame(animation);
        });
    }

    // --- Active Nav Link ---
    // Handle cases where the path is empty (e.g. root domain) which should point to index.html
    let currentPagePath = window.location.pathname.split('/').pop();
    if (currentPagePath === '') {
        currentPagePath = 'index.html';
    }


    // Desktop menu
    const desktopLinks = document.querySelectorAll('#desktop-menu a');
    desktopLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();
        if (linkPath === currentPagePath) {
            // For the contact button, we don't add the class, we just want to highlight the others
            if (!link.classList.contains('navy-bg')) {
                 link.classList.add('active-link');
            }
        }
    });

    // Mobile menu
    const mobileLinks = document.querySelectorAll('#mobile-menu a');
    mobileLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();
        if (linkPath === currentPagePath) {
            link.classList.add('mobile-active-link');
        }
    });
});