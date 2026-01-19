// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
      const navToggle = document.querySelector('.nav-toggle');
      const navMenu = document.querySelector('.nav-menu');

                              if (navToggle && navMenu) {
                                        navToggle.addEventListener('click', function() {
                                                      navMenu.classList.toggle('active');

                                                                               // Animate hamburger to X
                                                                               const spans = navToggle.querySelectorAll('span');
                                                      if (navMenu.classList.contains('active')) {
                                                                        spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                                                                        spans[1].style.opacity = '0';
                                                                        spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
                                                      } else {
                                                                        spans[0].style.transform = 'none';
                                                                        spans[1].style.opacity = '1';
                                                                        spans[2].style.transform = 'none';
                                                      }
                                        });

          // Close menu when clicking on a link
          navMenu.querySelectorAll('a').forEach(link => {
                        link.addEventListener('click', () => {
                                          navMenu.classList.remove('active');
                                          const spans = navToggle.querySelectorAll('span');
                                          spans[0].style.transform = 'none';
                                          spans[1].style.opacity = '1';
                                          spans[2].style.transform = 'none';
                        });
          });
                              }
});

// Form submission handling (for Formspree or similar)
document.addEventListener('DOMContentLoaded', function() {
      const form = document.querySelector('.signup-form');

                              if (form) {
                                        form.addEventListener('submit', function(e) {
                                                      // If using Formspree, the form will submit normally
                                                                          // This is just for adding any custom behavior

                                                                          // Show a simple confirmation (optional enhancement)
                                                                          const button = form.querySelector('button[type="submit"]');
                                                      const originalText = button.textContent;
                                                      button.textContent = 'Signing up...';
                                                      button.disabled = true;

                                                                          // Re-enable after a delay if form doesn't redirect
                                                                          setTimeout(() => {
                                                                                            button.textContent = originalText;
                                                                                            button.disabled = false;
                                                                          }, 3000);
                                        });
                              }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                              target.scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'start'
                              });
                }
      });
});
