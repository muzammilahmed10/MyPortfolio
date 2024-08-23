// JavaScript code for smooth scrolling and form validation
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = document.querySelector(link.getAttribute('href'));
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      });
    });
  
    // Form validation for the contact section
    const contactForm = document.querySelector('#contact-form');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');
    const successMessage = document.querySelector('#success-message');
  
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
  
      if (validateForm()) {
        // Simulate form submission and show success message
        setTimeout(function() {
          contactForm.reset();
          successMessage.style.display = 'block';
        }, 1000);
      }
    });
  
    function validateForm() {
      let isValid = true;
  
      // Validate name input
      if (nameInput.value === '') {
        isValid = false;
        nameInput.classList.add('error');
      } else {
        nameInput.classList.remove('error');
      }
  
      // Validate email input
      if (emailInput.value === '') {
        isValid = false;
        emailInput.classList.add('error');
      } else {
        emailInput.classList.remove('error');
      }
  
      // Validate message input
      if (messageInput.value === '') {
        isValid = false;
        messageInput.classList.add('error');
      } else {
        messageInput.classList.remove('error');
      }
  
      return isValid;
    }
  });