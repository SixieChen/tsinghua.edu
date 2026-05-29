<!-- 文件保存为 _includes/photo-gallery.md -->
## Photo Gallery

<div class="gallery-container">
  <div class="gallery-grid">
    {% for i in (1..26) %}
      {% assign image_path = '/assets/images/' | append: i | append: '.jpg' %}
      <div class="gallery-item">
        <img src="{{ image_path | relative_url }}" 
             loading="lazy" 
             onclick="openGalleryModal(this)"
             alt="Gallery image {{ i }}"
             class="gallery-image">
      </div>
    {% endfor %}
  </div>

  <div id="galleryModal" class="gallery-modal">
    <span class="gallery-close" onclick="closeGalleryModal()">&times;</span>
    <div class="modal-inner">
      <img class="gallery-modal-content" id="galleryModalImg">
    </div>
  </div>
</div>

<style>
/* 基础样式 */
.gallery-container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.2rem;
  padding: 1rem 0;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
  background: #fff;
}

.gallery-item:hover {
  transform: translateY(-3px);
}

.gallery-image {
  width: 100%;
  height: auto;
  aspect-ratio: 4/3;
  object-fit: contain;
  cursor: zoom-in;
  padding: 8px;
}

/* 模态框样式 */
.gallery-modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.95);
  z-index: 1000;
  overflow-y: auto;
}

.modal-inner {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
}

.gallery-modal-content {
  max-width: 90%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.3);
  animation: modalZoom 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.gallery-close {
  position: fixed;
  top: 1.5rem;
  right: 2rem;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  transition: opacity 0.2s;
  z-index: 1001;
}

.gallery-close:hover {
  opacity: 0.8;
}

/* 动画 */
@keyframes modalZoom {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 0.8rem;
  }

  .gallery-image {
    aspect-ratio: 1;
  }

  .gallery-modal-content {
    max-width: 100%;
    max-height: 80vh;
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

<script>
// 图片预加载增强
function preloadImages() {
  const images = document.querySelectorAll('.gallery-image');
  images.forEach(img => {
    const loader = new Image();
    loader.src = img.src;
  });
}

// 模态框操作
let currentModalImage = null;

function openGalleryModal(element) {
  currentModalImage = element;
  const modal = document.getElementById('galleryModal');
  const modalImg = document.getElementById('galleryModalImg');
  
  modal.style.display = 'block';
  modalImg.src = element.src;
  modalImg.alt = element.alt;
  document.body.style.overflow = 'hidden';
  
  // 添加触摸滑动支持
  modalImg.addEventListener('touchstart', handleTouchStart, false);        
  modalImg.addEventListener('touchmove', handleTouchMove, false);
}

function closeGalleryModal() {
  const modal = document.getElementById('galleryModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
  currentModalImage = null;
}

// 触摸滑动处理
let xDown = null;

function handleTouchStart(evt) {
  xDown = evt.touches[0].clientX;
}

function handleTouchMove(evt) {
  if (!xDown) return;
  
  const xUp = evt.touches[0].clientX;
  const xDiff = xDown - xUp;
  
  if (Math.abs(xDiff) > 50) {
    const images = Array.from(document.querySelectorAll('.gallery-image'));
    const currentIndex = images.indexOf(currentModalImage);
    
    if (xDiff > 0 && currentIndex < images.length - 1) {
      images[currentIndex + 1].click();
    } else if (xDiff < 0 && currentIndex > 0) {
      images[currentIndex - 1].click();
    }
  }
  xDown = null;
}

// 事件监听
document.addEventListener('DOMContentLoaded', () => {
  preloadImages();
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeGalleryModal();
    if (e.key === 'ArrowLeft') navigateImages(-1);
    if (e.key === 'ArrowRight') navigateImages(1);
  });
});

function navigateImages(direction) {
  if (!currentModalImage) return;
  
  const images = Array.from(document.querySelectorAll('.gallery-image'));
  const currentIndex = images.indexOf(currentModalImage);
  const newIndex = (currentIndex + direction + images.length) % images.length;
  
  images[newIndex].click();
}
</script>
