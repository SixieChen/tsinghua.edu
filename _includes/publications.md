<h2 id="selected-publications">Selected Publications</h2>

<div class="publications">
<ol class="bibliography">

{% for link in site.data.publications.main %}

<li>
<div class="pub-row">
  <div class="col-sm-3 abbr">
    {% if link.image %} 
    <button class="publication-image" type="button" data-image-viewer="publications" aria-label="Enlarge figure: {{ link.title | escape }}">
      {% assign image_size = site.data.image_sizes[link.image] %}
      <img src="{{ image_size.preview | default: link.image | relative_url }}" data-large="{{ image_size.large | default: link.image | relative_url }}" data-original="{{ link.image | relative_url }}" class="teaser img-fluid z-depth-1" alt="{{ link.title | escape }}" loading="lazy" {% if image_size %}width="{{ image_size.width }}" height="{{ image_size.height }}" style="aspect-ratio: {{ image_size.width }} / {{ image_size.height }};"{% endif %}>
      <span class="image-expand" aria-hidden="true"><i class="fas fa-expand"></i></span>
    </button>
    {% endif %}
    {% if link.conference_short %} 
    <abbr class="badge">{{ link.conference_short }}</abbr>
    {% endif %}
  </div>
  <div class="col-sm-9">
      {% assign primary_link = link.page | default: link.pdf %}
      <div class="title">
        {% if primary_link %}
        <a href="{{ primary_link }}" target="_blank" rel="noopener">{{ link.title }}</a>
        {% else %}
        {{ link.title }}
        {% endif %}
      </div>
      <div class="author">{{ link.authors }}</div>
      <div class="periodical"><em>{{ link.conference }}</em>
      </div>
    <div class="links">
      {% if link.pdf %} 
      <a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">PDF</a>
      {% endif %}
      {% if link.page %} 
      <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener" style="font-size:12px;">Details</a>
      {% endif %}
      {% if link.notes %} 
      <strong> <i style="color:#e74d3c">{{ link.notes }}</i></strong>
      {% endif %}
      {% if link.others %} 
      {{ link.others }}
      {% endif %}
    </div>
  </div>
</div>
</li>

<br>

{% endfor %}

</ol>
</div>
