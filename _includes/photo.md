## Gallery

<div class="gallery-container">
  <div class="gallery-grid">
    {% for i in (1..30) %}
      {% assign image_path = '/assets/images/' | append: i | append: '.jpg' %}
      <button class="gallery-item" type="button" onclick="openGalleryModal(this)" aria-label="Open gallery image {{ i }}">
        <img src="{{ image_path | relative_url }}"
             loading="lazy"
             alt="Gallery image {{ i }}"
             class="gallery-image">
      </button>
    {% endfor %}
  </div>

  <div id="galleryModal" class="gallery-modal" aria-hidden="true">
    <button class="gallery-close" type="button" onclick="closeGalleryModal()" aria-label="Close gallery">&times;</button>
    <img class="gallery-modal-content" id="galleryModalImg" alt="">
  </div>
</div>

<script>
let currentModalImage = null;

function openGalleryModal(button) {
  const image = button.querySelector('img');
  const modal = document.getElementById('galleryModal');
  const modalImg = document.getElementById('galleryModalImg');

  currentModalImage = image;
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden', 'false');
  modalImg.src = image.src;
  modalImg.alt = image.alt;
  document.body.style.overflow = 'hidden';
}

function closeGalleryModal() {
  const modal = document.getElementById('galleryModal');
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = 'auto';
  currentModalImage = null;
}

function navigateGallery(direction) {
  if (!currentModalImage) return;

  const images = Array.from(document.querySelectorAll('.gallery-image'));
  const currentIndex = images.indexOf(currentModalImage);
  const newIndex = (currentIndex + direction + images.length) % images.length;
  images[newIndex].closest('.gallery-item').click();
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') closeGalleryModal();
  if (event.key === 'ArrowLeft') navigateGallery(-1);
  if (event.key === 'ArrowRight') navigateGallery(1);
});

document.addEventListener('click', function(event) {
  const modal = document.getElementById('galleryModal');
  if (event.target === modal) closeGalleryModal();
});
</script>
