//JavaScript code for the scroll-to-top button
var scrollToTopButton = document.getElementById("scroll-to-top");

    window.addEventListener("scroll", function() {
      if (window.pageYOffset > 300) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
    });

    scrollToTopButton.addEventListener("click", function() {
      scrollToTop(1000);
    });

    function scrollToTop(scrollDuration) {
      var scrollStep = -window.scrollY / (scrollDuration / 15),
          scrollInterval = setInterval(function(){
            if ( window.scrollY != 0 ) {
              window.scrollBy( 0, scrollStep );
            }
            else clearInterval(scrollInterval); 
          },15);
    }
    //nav
function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}
//JavaScript code for the smoothscroll
	function smoothScroll(target, duration) {
      var targetElement = document.querySelector(target);
      var targetPosition = targetElement.offsetTop;
      var startPosition = window.pageYOffset;
      var distance = targetPosition - startPosition;
      var startTime = null;

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }
	requestAnimationFrame(animation);
    }

    var aboutLink = document.querySelector('a[href="#about"]');
    aboutLink.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScroll('#about', 1000);
    });

    var servicesLink = document.querySelector('a[href="#services"]');
    servicesLink.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScroll('#services', 1000);
    });

    var teamLink = document.querySelector('a[href="#team"]');
    teamLink.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScroll('#team', 1000);
    });

    var contactLink = document.querySelector('a[href="#contact"]');
    contactLink.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScroll('#contact', 1000);
    });

    var Linkmore = document.querySelector('.btn');
    Linkmore.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScroll('#about', 1000);
    });
 // send mail
 
  function sendMail(){
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  }
  const serviceID = "service_c8mld3e";
  const templateID = "template_67v6d9n";

  emailjs
    .send(serviceID,templateID,params)
    .then((res)=>{
      document.getElementById("name").value="";
      document.getElementById("email").value="";
      document.getElementById("message").value="";
      console.log(res);
      alert("your message send successfully");
    })
    .catch((err) => console.log(err));


    let slideIndex = 0;

function moveSlide(n) {
  const slides = document.querySelectorAll('.slider img');
  const totalSlides = slides.length;

  slideIndex += n;
  if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  } else if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }

  const offset = -slideIndex * 100;
  document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}


const radioButtons = document.querySelectorAll('input[type="radio"]');
const slides = document.querySelector('.slides');

radioButtons.forEach((radio, index) => {
  radio.addEventListener('change', () => {
    slides.style.setProperty('--index', index);
  });
});
