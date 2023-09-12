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

// Navbar Click = Scroll
document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
  
      // Ambil target elemen yang sesuai dengan ID dari atribut href
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
  
      // Gulir ke elemen target dengan efek smooth
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });