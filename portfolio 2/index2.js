// Text animation
const text = "welcome to my portfolio";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typed-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}

// Start typing effect when page loads
window.addEventListener('load', function() {
    setTimeout(typeEffect, 500);
});

// Scroll button
window.onscroll = function() {
    const topBtn = document.getElementById("topbtn");
    if (document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
    
    // Animate skill bars
    animateSkillBars();
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Contact form
document.getElementById('contact-info').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = document.getElementById('send');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Thank you! Your message has been sent.');
        e.target.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
});

// Theme toggle
const toggleBtn = document.getElementById("togglebtn");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    body.classList.add("dark");
    toggleBtn.textContent = "Light mode";
} else {
    toggleBtn.textContent = "Dark mode";
}

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    
    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "Light mode";
    } else {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "Dark mode";
    }
});

// Animate skill bars
function animateSkillBars() {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && !item.classList.contains('animated')) {
            item.classList.add('animated');
            const progressBar = item.querySelector('.skill-progress');
            const targetWidth = progressBar.getAttribute('data-width');
            progressBar.style.width = targetWidth;
        }
    });
}
