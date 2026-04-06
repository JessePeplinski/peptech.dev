document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Elements
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Mobile Menu Toggle
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        
        // Toggle hamburger icon to X
        const hamburgerIcon = this.querySelector('.hamburger-icon');
        hamburgerIcon.classList.toggle('open');
      });
      
      // Close mobile menu when a link is clicked
      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
          mobileMenu.classList.add('hidden');
          mobileMenuButton.querySelector('.hamburger-icon').classList.remove('open');
        });
      });
      
      // Close mobile menu when clicking outside
      document.addEventListener('click', function(event) {
        const isMenuButtonClick = mobileMenuButton.contains(event.target);
        const isMenuClick = mobileMenu.contains(event.target);
        
        if (!mobileMenu.classList.contains('hidden') && !isMenuButtonClick && !isMenuClick) {
          mobileMenu.classList.add('hidden');
          mobileMenuButton.querySelector('.hamburger-icon').classList.remove('open');
        }
      });
      
      // Close mobile menu when pressing escape key
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          mobileMenuButton.querySelector('.hamburger-icon').classList.remove('open');
        }
      });
    }
  });