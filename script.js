// Form submission feedback
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.signup-form');
    if (form) {
        form.addEventListener('submit', function() {
            const btn = form.querySelector('button[type="submit"]');
            btn.textContent = 'Sending...';
            btn.disabled = true;
        });
    }
});
