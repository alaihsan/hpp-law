document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.querySelector('.preloader');
    const links = document.querySelectorAll('a');

    // Hide preloader when page loads
    preloader.classList.add('hidden');

    // Show preloader when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Check if it's a valid link and not a hash link
            if (href && href !== '#' && !href.startsWith('#') && !this.getAttribute('target')) {
                e.preventDefault();
                preloader.classList.remove('hidden');
                setTimeout(function() {
                    window.location.href = href;
                }, 500); // Wait for the transition
            }
        });
    });

    // Handle back/forward button
    window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
            preloader.classList.add('hidden');
        }
    });
});
