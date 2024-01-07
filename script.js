document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    const prevButton = document.querySelector('.arrow.prev');
    const nextButton = document.querySelector('.arrow.next');
  
    prevButton.addEventListener('click', function() {
      gallery.scrollBy({
        left: -200, // Adjust scroll amount as needed
        behavior: 'smooth'
      });
    });
  
    nextButton.addEventListener('click', function() {
      gallery.scrollBy({
        left: 200, // Adjust scroll amount as needed
        behavior: 'smooth'
      });
    });
  });
  