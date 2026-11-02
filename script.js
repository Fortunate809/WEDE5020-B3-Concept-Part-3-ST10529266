/* B3 Concept - Part 3 JavaScript functionality */
document.addEventListener('DOMContentLoaded', function () {
    // Service search and sorting on services.html.
    const searchInput = document.getElementById('service-search');
    const sortSelect = document.getElementById('service-sort');
    const resultCount = document.getElementById('service-result-count');
    if (searchInput && sortSelect) {
        const serviceSections = Array.from(document.querySelectorAll('main > section'));
        const serviceCards = serviceSections.flatMap(section => Array.from(section.querySelectorAll(':scope > article')));
        const originalOrder = new Map(serviceCards.map((card, index) => [card, index]));
        function updateServices() {
            const term = searchInput.value.trim().toLowerCase();
            const sort = sortSelect.value;
            const visible = serviceCards.filter(card => card.textContent.toLowerCase().includes(term));
            serviceCards.forEach(card => { card.hidden = !visible.includes(card); });
            if (sort !== 'default') {
                const sorted = [...serviceCards].sort((a, b) => {
                    const comparison = a.querySelector('h3').textContent.localeCompare(b.querySelector('h3').textContent);
                    return sort === 'az' ? comparison : -comparison;
                });
                sorted.forEach(card => card.parentElement.appendChild(card));
            } else {
                serviceCards.sort((a, b) => originalOrder.get(a) - originalOrder.get(b)).forEach(card => card.parentElement.appendChild(card));
            }
            if (resultCount) resultCount.textContent = `Showing ${visible.length} of ${serviceCards.length} services.`;
        }
        searchInput.addEventListener('input', updateServices);
        sortSelect.addEventListener('change', updateServices);
    }

    // Accessible FAQ accordion: one answer opens at a time.
    document.querySelectorAll('.accordion-trigger').forEach(button => {
        button.addEventListener('click', function () {
            const panel = document.getElementById(button.getAttribute('aria-controls'));
            const willOpen = button.getAttribute('aria-expanded') !== 'true';
            document.querySelectorAll('.accordion-trigger').forEach(other => {
                other.setAttribute('aria-expanded', 'false');
                const otherPanel = document.getElementById(other.getAttribute('aria-controls'));
                if (otherPanel) otherPanel.hidden = true;
            });
            button.setAttribute('aria-expanded', String(willOpen));
            if (panel) panel.hidden = !willOpen;
        });
    });

    // Gallery lightbox using the native HTML dialog element.
    const lightbox = document.getElementById('image-lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    if (lightbox && lightboxImage) {
        document.querySelectorAll('.gallery-image').forEach(button => {
            button.addEventListener('click', () => {
                lightboxImage.src = button.dataset.fullImage;
                lightboxImage.alt = button.dataset.imageAlt || '';
                lightboxCaption.textContent = button.dataset.imageAlt || '';
                lightbox.showModal();
            });
        });
        const closeButton = lightbox.querySelector('.lightbox-close');
        if (closeButton) closeButton.addEventListener('click', () => lightbox.close());
        lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
    }

    // Leaflet map: approximate city-centre markers for the listed service areas.
    const mapElement = document.getElementById('service-area-map');
    if (mapElement && window.L) {
        const map = L.map(mapElement).setView([-29.0, 25.5], 4.7);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        [
            { name: 'Cape Town', coords: [-33.9249, 18.4241] },
            { name: 'Johannesburg', coords: [-26.2041, 28.0473] },
            { name: 'Durban', coords: [-29.8587, 31.0218] }
        ].forEach(place => L.marker(place.coords).addTo(map).bindPopup(`<strong>${place.name}</strong><br>Listed B3 Concept service area`));
    } else if (mapElement) {
        mapElement.textContent = 'The interactive map could not load. Use the Google Maps links below to view the service areas.';
    }

    // Subtle scroll-reveal animation with a reduced-motion fallback.
    const sections = document.querySelectorAll('main > section');
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        sections.forEach(section => section.classList.add('reveal-ready'));
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        sections.forEach(section => observer.observe(section));
    }
    // Accessible asynchronous form submission through FormSubmit.
    // The recipient must verify the first submission before messages are delivered.
    document.querySelectorAll('form[data-ajax-form]').forEach(form => {
        const status = form.querySelector('.form-status');
        const submitButton = form.querySelector('button[type="submit"]');
        form.addEventListener('submit', async event => {
            event.preventDefault();
            if (!form.reportValidity()) return;
            if (status) status.textContent = 'Sending your message…';
            if (submitButton) submitButton.disabled = true;
            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                    headers: { 'Accept': 'application/json' }
                });
                const result = await response.json();
                if (!response.ok || result.success === 'false' || result.success === false) {
                    throw new Error(result.message || 'The message could not be submitted.');
                }
                if (status) status.textContent = 'Thank you. Your message has been submitted successfully.';
                form.reset();
            } catch (error) {
                if (status) status.textContent = 'We could not submit your message. Please check your internet connection or email info@b3concept.co.za directly.';
            } finally {
                if (submitButton) submitButton.disabled = false;
            }
        });
    });

});
