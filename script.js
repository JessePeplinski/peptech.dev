document.addEventListener('DOMContentLoaded', function () {
  // Elements
  const filterButtons = document.querySelectorAll('.filter-tag');
  const projectCards = document.querySelectorAll('.project-card');
  const techBadges = document.querySelectorAll('.tech-badge');
  const activeSubFiltersContainer = document.getElementById('active-sub-filters');
  const activeFilterTags = document.getElementById('active-filter-tags');
  const clearSubFiltersButton = document.getElementById('clear-sub-filters');

  // Track active filters
  let activeMainFilter = 'all';
  let activeSubFilters = [];

  // Main filter functionality (enhanced)
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all main filter buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');

      // Update active main filter
      activeMainFilter = button.getAttribute('data-filter');

      // Apply all filters
      applyFilters();
    });
  });

  // Sub-filter functionality (new)
  techBadges.forEach(badge => {
    badge.addEventListener('click', () => {
      const filterType = badge.getAttribute('data-filter-type');
      const filterValue = badge.getAttribute('data-filter-value');
      const filterKey = `${filterType}:${filterValue}`;

      // Find all matching badges with the same filter type and value
      const matchingBadges = document.querySelectorAll(`.tech-badge[data-filter-type="${filterType}"][data-filter-value="${filterValue}"]`);

      // Toggle sub-filter
      const filterIndex = activeSubFilters.findIndex(f => f.key === filterKey);
      if (filterIndex === -1) {
        // Add filter - store only one reference element for the filter
        activeSubFilters.push({
          key: filterKey,
          type: filterType,
          value: filterValue,
          element: badge  // Keep one reference element for removing the filter later
        });

        // Add active class to ALL matching badges
        matchingBadges.forEach(matchingBadge => {
          matchingBadge.classList.add('active-sub-filter');
        });
      } else {
        // Remove filter
        activeSubFilters.splice(filterIndex, 1);

        // Remove active class from ALL matching badges
        matchingBadges.forEach(matchingBadge => {
          matchingBadge.classList.remove('active-sub-filter');
        });
      }

      // Update UI and apply filters
      updateActiveFiltersUI();
      applyFilters();
    });
  });

  // Clear sub-filters
  clearSubFiltersButton.addEventListener('click', () => {
    // Remove active class from all sub-filters by selecting all elements with the class
    document.querySelectorAll('.tech-badge.active-sub-filter').forEach(badge => {
      badge.classList.remove('active-sub-filter');
    });

    // Clear active sub-filters array
    activeSubFilters = [];

    // Update UI and apply filters
    updateActiveFiltersUI();
    applyFilters();
  });

  // Update active filters UI
  function updateActiveFiltersUI() {
    // Clear current pills
    activeFilterTags.innerHTML = '';

    // Show/hide container based on if there are active sub-filters
    if (activeSubFilters.length > 0) {
      activeSubFiltersContainer.classList.remove('hidden');

      // Create pills for each active sub-filter
      activeSubFilters.forEach(filter => {
        const pill = document.createElement('span');
        pill.className = 'filter-pill';
        pill.innerHTML = `
            ${filter.type === 'status' ? '' : filter.type + ': '}${filter.value}
            <span class="filter-pill-remove" data-filter-key="${filter.key}">&times;</span>
          `;
        activeFilterTags.appendChild(pill);

        // Add click event to remove button
        pill.querySelector('.filter-pill-remove').addEventListener('click', function () {
          const filterKey = this.getAttribute('data-filter-key');
          const filterIndex = activeSubFilters.findIndex(f => f.key === filterKey);

          if (filterIndex !== -1) {
            const filter = activeSubFilters[filterIndex];

            // Find and remove active class from ALL matching badges
            const matchingBadges = document.querySelectorAll(`.tech-badge[data-filter-type="${filter.type}"][data-filter-value="${filter.value}"]`);
            matchingBadges.forEach(badge => {
              badge.classList.remove('active-sub-filter');
            });

            // Remove from active filters
            activeSubFilters.splice(filterIndex, 1);

            // Update UI and apply filters
            updateActiveFiltersUI();
            applyFilters();
          }
        });
      });
    } else {
      activeSubFiltersContainer.classList.add('hidden');
    }
  }

  // Apply all filters (main and sub)
  function applyFilters() {
    projectCards.forEach(card => {
      let visible = true;

      // Check main filter
      if (activeMainFilter !== 'all') {
        const cardTags = card.getAttribute('data-tags').split(' ');
        visible = cardTags.includes(activeMainFilter);
      }

      // Check sub-filters if card passes main filter
      if (visible && activeSubFilters.length > 0) {
        activeSubFilters.forEach(filter => {
          // Find all tech badges in this card
          const cardBadges = card.querySelectorAll('.tech-badge');
          let matchesSubFilter = false;

          cardBadges.forEach(badge => {
            const badgeType = badge.getAttribute('data-filter-type');
            const badgeValue = badge.getAttribute('data-filter-value');

            if (badgeType === filter.type && badgeValue === filter.value) {
              matchesSubFilter = true;
            }
          });

          // If this card doesn't match any sub-filter, hide it
          if (!matchesSubFilter) {
            visible = false;
          }
        });
      }

      // Show/hide card
      card.style.display = visible ? 'block' : 'none';
    });
  }

  // Initialize typed.js and smooth scrolling (existing code)
  const typedElement = document.getElementById('typed-text');
  if (typedElement) {
    new Typed('#typed-text', {
      strings: [
        'ideas into apps.',
        'concepts into code.',
        'designs into reality.',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true
    });
  }

  // Apply social icon hover classes
  document.querySelectorAll('.social-links a').forEach(icon => {
    icon.classList.add('social-icon');
  });
});

// QR Code toggle functionality
const qrCodeToggle = document.getElementById('qrcode-toggle');
const qrCodeContainer = document.getElementById('qrcode-container');
const qrCodeClose = document.getElementById('qrcode-close');

// Add pulse animation to attract attention to the QR code icon
setTimeout(() => {
  qrCodeToggle.classList.add('pulse-animation');
  setTimeout(() => {
    qrCodeToggle.classList.remove('pulse-animation');
  }, 6000); // Remove after 6 seconds
}, 3000); // Start after 3 seconds

// Show QR code when clicking the icon
qrCodeToggle.addEventListener('click', function (e) {
  e.preventDefault();
  qrCodeContainer.classList.add('qrcode-visible');
});

// Hide QR code when clicking the close button
qrCodeClose.addEventListener('click', function () {
  qrCodeContainer.classList.remove('qrcode-visible');
});

// Hide QR code when clicking outside the modal
qrCodeContainer.addEventListener('click', function (e) {
  if (e.target === qrCodeContainer) {
    qrCodeContainer.classList.remove('qrcode-visible');
  }
});

// Hide QR code when pressing escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && qrCodeContainer.classList.contains('qrcode-visible')) {
    qrCodeContainer.classList.remove('qrcode-visible');
  }
});