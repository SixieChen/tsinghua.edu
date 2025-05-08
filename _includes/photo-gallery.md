## Photo Gallery

<div class="gallery-container">
  <div class="gallery-grid">
    <img src="/assets/images/photo1.jpg" loading="lazy" onclick="openGalleryModal(this)">
    <img src="/assets/images/photo2.jpg" loading="lazy" onclick="openGalleryModal(this)">
    <img src="/assets/images/photo3.jpg" loading="lazy" onclick="openGalleryModal(this)">
  </div>

  <div id="galleryModal" class="gallery-modal">
    <span class="gallery-close" onclick="closeGalleryModal()">&times;</span>
    <img class="gallery-modal-content" id="galleryModalImg">
  </div>
</div>

<style>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}

.gallery-grid img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 8px;
  cursor: zoom-in;
  transition: transform 0.2s ease;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16);
}

.gallery-grid img:hover {
  transform: translateY(-3px);
}

.gallery-modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.9);
  padding-top: 2%;
}

.gallery-modal-content {
  margin: auto;
  display: block;
  max-width: 90%;
  max-height: 90vh;
  object-fit: contain;
  animation: zoom 0.3s;
}

@keyframes zoom {
  from {transform: scale(0.9)}
  to {transform: scale(1)}
}

.gallery-close {
  position: absolute;
  top: 20px;
  right: 35px;
  color: #fff;
  font-size: 40px;
  font-weight: 300;
  transition: 0.3s;
  cursor: pointer;
}

.gallery-close:hover {
  color: #ccc;
}

@media screen and (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  
  .gallery-grid img {
    height: 150px;
  }
}
</style>

<script>
// 画廊操作函数
function openGalleryModal(element) {
  document.getElementById('galleryModal').style.display = 'block';
  document.getElementById('galleryModalImg').src = element.src;
  document.body.style.overflow = 'hidden'; // 禁止背景滚动
}

function closeGalleryModal() {
  document.getElementById('galleryModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

// ESC键关闭
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeGalleryModal()
});

// 点击背景关闭
document.getElementById('galleryModal').addEventListener('click', function(e) {
  if (e.target === this) closeGalleryModal()
});
</script>
