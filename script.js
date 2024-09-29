function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
    document.querySelector('.tab-container .tab').classList.add('active-tab');
    document.querySelectorAll('.tab')[1].classList.remove('active-tab');
  }
  
  // Function to display the Register Form
  function showRegister() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
    document.querySelectorAll('.tab')[1].classList.add('active-tab');
    document.querySelector('.tab-container .tab').classList.remove('active-tab');
  }
  
  // Initially show the login form
  window.onload = function () {
    showLogin();
  };


 
       
 // Function to animate the counters
const counters = document.querySelectorAll('.counter-number');

counters.forEach(counter => {
    counter.innerText = '0';
    
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = target / 100;
        
        if (current < target) {
            counter.innerText = `${Math.ceil(current + increment)}`;
            setTimeout(updateCounter, 30);
        } else {
            counter.innerText = target;
        }
    };
    
    updateCounter();
});




let currentIndex = 0;

function showNextSlide() {
    const container = document.querySelector('.testimonials-container');
    const totalSlides = document.querySelectorAll('.testimonial-card').length;
    const maxIndex = totalSlides - 3; // 3 testimonials are visible at a time
    
    currentIndex = (currentIndex + 1) > maxIndex ? 0 : currentIndex + 1;
    
    container.style.transform = `translateX(-${currentIndex * (100 / 3)}%)`;
}

setInterval(showNextSlide, 3000); // Change slide every 3 seconds



function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('show');
}

const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let currentSlide = 0;

// Move to next slide
nextBtn.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    updateSlider();
});

// Move to previous slide
prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = slides.length - 1;
    }
    updateSlider();
});

// Function to update the slider position
function updateSlider() {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto Slide (optional)
setInterval(() => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    updateSlider();
}, 5000); 


// Function to add/remove class based on scroll position
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header_wrapper_outer');
    
    if (window.scrollY > 150) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});



