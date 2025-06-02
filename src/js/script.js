const wrapper = document.querySelector('.swiper-wrapper');
    const slides = document.querySelectorAll('.swiper-slide');
    const dots = document.querySelectorAll('.dot');
    const arrowLeft = document.querySelector('.arrow.left');
    const arrowRight = document.querySelector('.arrow.right');

    let currentIndex = 0;
    let startX = 0;
    let currentTranslate = 0;
    let isDragging = false;

    function updateSlide(index) {
      currentTranslate = -index * window.innerWidth;
      wrapper.style.transform = `translateX(${currentTranslate}px)`;
      dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    }

    function nextSlide() {
      if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSlide(currentIndex);
      }
    }

    function prevSlide() {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlide(currentIndex);
      }
    }

    arrowRight.addEventListener('click', nextSlide);
    arrowLeft.addEventListener('click', prevSlide);

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        currentIndex = i;
        updateSlide(currentIndex);
      });
    });

    // Touch & Mouse Drag
    wrapper.addEventListener('mousedown', startDrag);
    wrapper.addEventListener('touchstart', startDrag, { passive: true });

    wrapper.addEventListener('mousemove', onDrag);
    wrapper.addEventListener('touchmove', onDrag, { passive: true });

    wrapper.addEventListener('mouseup', endDrag);
    wrapper.addEventListener('mouseleave', endDrag);
    wrapper.addEventListener('touchend', endDrag);

    function startDrag(e) {
      isDragging = true;
      startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    }

    function onDrag(e) {
      if (!isDragging) return;
      const x = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
      const dx = x - startX;

      wrapper.style.transition = 'none';
      wrapper.style.transform = `translateX(${currentTranslate + dx}px)`;
    }

    function endDrag(e) {
      if (!isDragging) return;
      isDragging = false;

      const endX = e.type.includes('touch') ? e.changedTouches[0].clientX : e.clientX;
      const deltaX = endX - startX;

      if (deltaX < -50 && currentIndex < slides.length - 1) {
        currentIndex++;
      } else if (deltaX > 50 && currentIndex > 0) {
        currentIndex--;
      }

      wrapper.style.transition = 'transform 0.3s ease';
      updateSlide(currentIndex);
    }

    // Inicializar
    updateSlide(currentIndex);