document.addEventListener('DOMContentLoaded', () => {
    // Header animation on scroll
    const header = document.querySelector('.header');

    if (window.scrollY > 0) {
        header.classList.add('header__active');
    }
    
    window.addEventListener('scroll', () => {
      header.classList.toggle('header__active', window.scrollY > 0);
    });
  
    // Smooth scroll
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
    
        if (targetSection) {
          const topOffset = 100;
          const elementPosition = targetSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - topOffset;
    
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Toggle active class for the checkbox and enable/disable the submit button
    const checkbox = document.querySelector('.contacts__checkbox');
    const square = checkbox?.querySelector('.contacts__square');
    const submitBtn = document.querySelector('.contacts__btn');
    
    if (checkbox && square && submitBtn) {
      checkbox.addEventListener('click', () => {
        square.classList.toggle('contacts__square_active'); 
  
        submitBtn.disabled = !square.classList.contains('contacts__square_active');
      });
    }
  
    // Form submit logic
    const form = document.getElementById('contacts-form');
    
    form.addEventListener('submit', (e) => {
      e.preventDefault(); 
  
      const name = form.querySelector('input[name="name"]').value;
      const email = form.querySelector('input[name="email"]').value;
  
      alert(`Name: ${name}\nE-mail: ${email}`);
    });
  });
