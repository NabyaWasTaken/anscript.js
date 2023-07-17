<script>
  // JavaScript code for sliding the images
  const sliderContainer = document.querySelector('.slider-container');
  const sliderImages = document.querySelector('.slider-images');
  const prevArrow = document.querySelector('.prev-arrow');
  const nextArrow = document.querySelector('.next-arrow');

  let imageIndex = 0;
  let imageWidth = 0;
  let tallestImageHeight = 0;

  function slideImages() {
    sliderImages.style.transform = `translateX(-${imageIndex * imageWidth}px)`;
  }

  function adjustSliderSize() {
    const images = Array.from(sliderImages.children);
    imageWidth = sliderContainer.offsetWidth;
    tallestImageHeight = Math.max(...images.map(image => image.offsetHeight));

    sliderImages.style.width = `${imageWidth * images.length}px`;
    sliderContainer.style.height = `${tallestImageHeight}px`;

    slideImages();
  }

  function nextImage() {
    if (imageIndex < sliderImages.children.length - 1) {
      imageIndex++;
      slideImages();
    }
  }

  function previousImage() {
    if (imageIndex > 0) {
      imageIndex--;
      slideImages();
    }
  }

  // Event listeners for next and previous arrows
  nextArrow.addEventListener('click', nextImage);
  prevArrow.addEventListener('click', previousImage);

  // Adjust slider size on window resize
  window.addEventListener('resize', adjustSliderSize);

  // Initial setup
  adjustSliderSize();
</script>
