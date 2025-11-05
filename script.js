document.addEventListener('DOMContentLoaded', () => {
    // --- Current Year in Footer ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Simple Client-Side Contact Form Submission ---
    // IMPORTANT: This only shows a success message client-side.
    // For actual email sending, you need a backend service (e.g., Formspree, Netlify Forms, or your own Laravel API).
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual form submission

            // In a real application, you would send this data to a server
            // using fetch() or XMLHttpRequest. Example (if you had a backend endpoint):
            /*
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    message: document.getElementById('message').value
                }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    formMessage.classList.remove('hidden', 'error');
                    formMessage.classList.add('success');
                    formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
                    contactForm.reset();
                } else {
                    formMessage.classList.remove('hidden', 'success');
                    formMessage.classList.add('error');
                    formMessage.textContent = 'Oops! Something went wrong. Please try again later.';
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                formMessage.classList.remove('hidden', 'success');
                formMessage.classList.add('error');
                formMessage.textContent = 'Oops! Network error. Please try again.';
            });
            */

            // For now, client-side only success message:
            console.log('Form submitted (client-side simulation)!');
            console.log('Name:', document.getElementById('name').value);
            console.log('Email:', document.getElementById('email').value);
            console.log('Message:', document.getElementById('message').value);

            formMessage.classList.remove('hidden', 'error', 'success');
            formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
            formMessage.classList.add('success');
            
            contactForm.reset(); // Clear the form

            setTimeout(() => {
                formMessage.classList.add('hidden');
            }, 5000); // Hide message after 5 seconds
        });
    }

    // --- Intersection Observer for "On-Scroll" Animations ---
    const animatedElements = document.querySelectorAll('.animated');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // When 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'visible' class to trigger CSS animation
                entry.target.classList.add('visible');
                // Stop observing once animated (optional, depends if you want animation to repeat)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach((element, index) => {
        // Apply staggered animation delay to skill items
        if (element.classList.contains('skill-item')) {
            // Apply delay directly as a CSS custom property
            element.style.setProperty('--delay-idx', `${index * 0.1}s`);
        }
        observer.observe(element);

    });

    // The Bootstrap ScrollSpy (data-bs-spy="scroll" on body) handles active nav links.
    // If you remove it, you'd need custom JS for active links on scroll.
});




