$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
      navigation: false,
      pagination: false,
      reponsive: true,
      autoPlay: true,
      slideSpeed: 250
    });

    // Scroll Animation for Programming Title
    function checkScroll() {
        const programmingTitle = document.querySelector('.programming-title');
        if (!programmingTitle) return;
        
        const titlePosition = programmingTitle.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (titlePosition < screenPosition) {
            programmingTitle.classList.add('animate');
        }
    }
    
    // Check on scroll
    $(window).on('scroll', checkScroll);
    
    // Check on page load
    checkScroll();
   
  });