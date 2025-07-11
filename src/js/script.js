const header = document.getElementById("main-header");

const toggleButton = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-links a');

toggleButton.addEventListener('click', () => {
  nav.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});




if (window.innerWidth > 768) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 2) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    document.getElementById('nuvem').style.transform = `translateY(${scrollY * -0.2}px)`;
    document.getElementById('cidade').style.transform = `translateY(${scrollY * -0.1}px)`;


    document.getElementById('title-parallax').style.transform = `translateY(${scrollY * 0.5}px)`;


    document.getElementById('arvore1').style.transform = `translateY(${scrollY * 0.2}px)`;
    document.getElementById('arvore3').style.transform = `translateY(${scrollY * 0.25}px)`;


    document.getElementById('casa-carro').style.transform = `translateY(${scrollY * -0.15}px)`;


    document.getElementById('arvore2').style.transform = `translateX(${scrollY * -0.2}px)`;
    document.getElementById('arvore4').style.transform = `translateX(${scrollY * 0.01}px)`;


    document.getElementById('arvore5').style.transform = `translate(${scrollY * 0.2}px, ${scrollY * 0.05}px)`;


    document.getElementById('lama1').style.transform = `translateY(${scrollY * -0.2}px)`;
    document.getElementById('lama2').style.transform = `translateY(${scrollY * -0.3}px)`;

    document.getElementById('section-one').style.transform = `translateY(${scrollY * -0.3}px)`;


  });
}

let currentSlide = 0;

function showSlide(index) {
  const track = document.getElementById("sliderTrack");
  const dots = document.querySelectorAll(".dot");
  const totalSlides = track.children.length;

  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;

  currentSlide = index;
  track.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function setSlide(index) {
  showSlide(index);
}

// Inicia no primeiro slide
showSlide(0);

// Autoplay (opcional)
setInterval(() => {
  showSlide(currentSlide + 1);
}, 10000);