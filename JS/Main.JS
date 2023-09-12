window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".nav");
    const scrollY = window.scrollY;
  
    if (scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('.menu-link');
    
    function setActiveLink() {
        const scrollPosition = window.scrollY;
        menuLinks.forEach(link => {
            const target = document.querySelector(link.getAttribute('data-target'));
            if (target) {
                const targetTop = target.getBoundingClientRect().top + scrollPosition;
                if (scrollPosition >= targetTop && scrollPosition < targetTop + target.clientHeight) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', setActiveLink);
    
    // Set initial active link when the page loads
    setActiveLink();
});

window.onload = function () {
    document.body.classList.add("loaded")
}

