// script.js

// Progress Bar Animation
document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.width = percentage + '%';
    });

    // Load dark mode preference
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    if (darkModeEnabled) {
        document.body.classList.add('dark-mode');
    }
});

// Form Submission with Fetch API
const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        feedback.textContent = 'All fields are required!';
        feedback.style.color = 'red';
        return;
    }

    // Simulate form submission using Fetch API (you can replace this URL with your form handler)
    fetch('https://example.com/submit', {
        method: 'POST',
        body: JSON.stringify({ name, email, message }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        feedback.textContent = 'Message sent successfully!';
        feedback.style.color = 'green';
        form.reset();
    })
    .catch(error => {
        feedback.textContent = 'There was an error sending your message.';
        feedback.style.color = 'red';
    });
});

// Modal Functionality
const modal = document.getElementById('contact-modal');
const modalClose = document.querySelector('.close-modal');

document.querySelector('.contact h2').addEventListener('click', function() {
    modal.style.display = 'block';
});

modalClose.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    // Save user preference in localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
});
