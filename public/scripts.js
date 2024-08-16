document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded!');
    
    // Example: Form submission handling
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted!');
      });
    }
  });
  