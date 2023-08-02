function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    
    return rect.top <= windowHeight * 0.6;
  }
  
  function onScroll() {
    const sections = document.querySelectorAll('.fade-in-left, .fade-in-right, .fade-in-topo, .fade-in-botton');
    sections.forEach(section => {
      if (isElementInViewport(section)) {
        section.classList.add('fade-in');
      }
    });
  }
  
  
  document.addEventListener('DOMContentLoaded', onScroll);
  
  document.addEventListener('scroll', onScroll);