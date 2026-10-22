## Gallery

<div class="gallery-container">
  <div class="gallery-grid">
    {% for i in (1..30) %}
      {% assign image_path = '/assets/images/' | append: i | append: '.jpg' %}
      {% assign image_size = site.data.image_sizes[image_path] %}
      {% assign preview_path = '/assets/images/previews/' | append: i %}
      <button class="gallery-item" type="button" data-image-viewer="gallery" aria-label="Open gallery image {{ i }}">
        <img src="{{ preview_path | append: '-640.webp' | relative_url }}"
             srcset="{{ preview_path | append: '-640.webp' | relative_url }} 640w, {{ preview_path | append: '-1280.webp' | relative_url }} 1280w"
             sizes="(max-width: 540px) calc((100vw - 52px) / 2), (max-width: 800px) calc((100vw - 80px) / 3), 245px"
             data-large="{{ preview_path | append: '-1280.webp' | relative_url }}"
             data-original="{{ image_path | relative_url }}"
             width="{{ image_size.width }}" height="{{ image_size.height }}"
             style="aspect-ratio: {{ image_size.width }} / {{ image_size.height }};"
             loading="lazy"
             alt="Gallery image {{ i }}"
             class="gallery-image">
        <span class="image-expand" aria-hidden="true"><i class="fas fa-expand"></i></span>
      </button>
    {% endfor %}
  </div>

</div>
