// Show form modal
function showForm() {
    const modal = document.getElementById('formModal');
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.querySelector('.bg-white').classList.remove('scale-95');
        modal.querySelector('.bg-white').classList.add('scale-100');
    }, 10);
}

// Hide form modal
function hideForm() {
    const modal = document.getElementById('formModal');
    modal.querySelector('.bg-white').classList.remove('scale-100');
    modal.querySelector('.bg-white').classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

// Handle form submission
document.getElementById('joinForm').addEventListener('submit', function(e) {
    const username = document.getElementById('username').value;
    
    // Show success message immediately
    setTimeout(() => {
        const form = this;
        form.innerHTML = `
            <div class="text-center py-8">
                <div class="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">Welcome to the family, ${username}! 🎉</h3>
                <p class="text-gray-600 mb-4">Your invitation will be sent when we launch. We can't wait to grow together!</p>
                <button onclick="hideForm()" class="bg-gradient-to-r from-warm-purple to-soft-pink text-white px-6 py-2 rounded-lg font-semibold">
                    Close
                </button>
            </div>
        `;
    }, 1000);
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    // Animate feature cards
    const cards = document.querySelectorAll('.bg-white\\/70');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        observer.observe(card);
    });
    
    // Add floating animation to hearts
    const hearts = document.querySelectorAll('path[fill="#F472B6"], path[fill="#8B5CF6"]');
    hearts.forEach(heart => {
        heart.style.animation = 'float 3s ease-in-out infinite';
    });
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
    
    .animate-pulse {
        animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.8; }
    }
`;
document.head.appendChild(style);

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
}

// Close modal when clicking outside
document.getElementById('formModal').addEventListener('click', function(e) {
    if (e.target === this) {
        hideForm();
    }
});