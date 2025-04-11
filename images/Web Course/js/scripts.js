document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling (for website.html)
    if (document.querySelector('.nav-link')) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                if (!this.classList.contains('login-btn')) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    // Notification Popup
    function showNotification(message) {
        const notification = document.getElementById('notification');
        if (notification) {
            notification.textContent = message;
            notification.style.display = 'block';
            setTimeout(() => notification.style.display = 'none', 5000);
        }
    }

    // Login Form Validation and Redirection
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            // Simulate valid credentials (replace with actual backend logic)
            const validEmail = 'user@.com';
            const validPassword = 'pass123';

            if (email === validEmail && password === validPassword) {
                alert('Login successful!');
                showNotification('Logged in successfully!');
                window.location.href = 'website.html';
            } else {
                alert('Please enter a valid email and password (min 6 chars)');
                if (!email || !password) {
                    alert('Account not found. Redirecting to Sign Up...');
                    window.location.href = 'signup.html';
                }
            }
        });
    }

    // Signup Form Validation and Redirection
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;

            if (name && /^\S+@\S+\.\S+$/.test(email) && password.length >= 6) {
                alert('Sign up successful!');
                showNotification('Account created successfully!');
                window.location.href = 'website.html';
            } else {
                alert('Please fill all fields correctly');
            }
        });
    }

    // Feedback Form Validation (for website.html)
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && /^\S+@\S+\.\S+$/.test(email) && message) {
                alert('Thank you for your feedback!');
                this.reset();
                showNotification('Feedback submitted successfully!');
            } else {
                alert('Please fill all fields correctly');
            }
        });
    }

    // Chat Box Functionality (for website.html)
    const chatToggle = document.getElementById('chatToggle');
    const chatBox = document.getElementById('chatBox');
    const chatCloseBtn = document.querySelector('.chat-close-btn');
    const chatSendBtn = document.querySelector('.chat-send-btn');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chat-messages');

    if (chatToggle) {
        chatToggle.addEventListener('click', () => {
            chatBox.style.display = chatBox.style.display === 'block' ? 'none' : 'block';
        });

        if (chatCloseBtn) {
            chatCloseBtn.addEventListener('click', () => {
                chatBox.style.display = 'none';
            });
        }

        if (chatSendBtn) {
            chatSendBtn.addEventListener('click', () => {
                const message = chatInput.value.trim();
                if (message) {
                    const messageElement = document.createElement('div');
                    messageElement.classList.add('chat-message', 'user');
                    messageElement.textContent = message;
                    chatMessages.appendChild(messageElement);
                    chatInput.value = '';
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                    showNotification('Message sent to support!');
                }
            });
        }
    }

    // Password Toggle Visibility
    document.querySelectorAll('.toggle-password').forEach(button => {
        button.addEventListener('click', function() {
            const input = this.closest('.input-group').querySelector('input');
            input.type = input.type === 'password' ? 'text' : 'password';
            this.querySelector('i').classList.toggle('fa-eye');
            this.querySelector('i').classList.toggle('fa-eye-slash');
        });
    });

    // Form Validation for Bootstrap
    (function() {
        'use strict';
        const forms = document.querySelectorAll('.needs-validation');
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', e => {
                if (!form.checkValidity()) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    })();
});

function showNotification(message) {
    const notification = document.getElementById('notification');
    if (notification) {
        notification.textContent = message || 'Welcome to TechManagement! Enjoy our features.';
        notification.style.display = 'block';
        setTimeout(() => notification.style.display = 'none', 5000);
    }
}