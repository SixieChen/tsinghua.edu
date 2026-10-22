(() => {
  'use strict';

  const root = document.documentElement;
  const themeButton = document.getElementById('theme-toggle');
  const motionButton = document.getElementById('motion-toggle');
  const motionEnabled = () => root.dataset.motion === 'on';
  const savePreference = (key, value) => {
    try { localStorage.setItem(key, value); } catch (_) { /* Private storage can be unavailable. */ }
  };
  const setControl = (button, label, icon) => {
    button.setAttribute('aria-label', label);
    button.dataset.tooltip = label;
    button.querySelector('i').className = `fas fa-${icon}`;
  };

  function updateControls() {
    const dark = root.dataset.theme === 'dark';
    setControl(themeButton, dark ? 'Switch to light mode' : 'Switch to dark mode', dark ? 'sun' : 'moon');
    setControl(motionButton, motionEnabled() ? 'Pause animations' : 'Enable animations', motionEnabled() ? 'pause' : 'play');
    motionButton.setAttribute('aria-pressed', String(!motionEnabled()));
  }

  themeButton.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    savePreference('sixie-theme', root.dataset.theme);
    updateControls();
    drawLattice(performance.now());
  });

  motionButton.addEventListener('click', () => {
    root.dataset.motion = motionEnabled() ? 'off' : 'on';
    savePreference('sixie-motion', root.dataset.motion);
    updateControls();
    scheduleLattice();
  });

  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    let saved = null;
    try { saved = localStorage.getItem('sixie-theme'); } catch (_) { /* Use the system theme. */ }
    if (!saved) {
      root.dataset.theme = event.matches ? 'dark' : 'light';
      updateControls();
      drawLattice(performance.now());
    }
  });

  matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', event => {
    if (event.matches) {
      root.dataset.motion = 'off';
      updateControls();
      scheduleLattice();
    }
  });

  updateControls();

  const nav = document.querySelector('.nav-links');
  const activeLink = nav.querySelector('a.active');
  function moveIndicator(link = activeLink) {
    if (!link) return;
    nav.style.setProperty('--nav-x', `${link.offsetLeft}px`);
    nav.style.setProperty('--nav-width', `${link.offsetWidth}px`);
  }
  for (const link of nav.querySelectorAll('a')) {
    link.addEventListener('pointerenter', () => moveIndicator(link));
    link.addEventListener('focus', () => moveIndicator(link));
  }
  nav.addEventListener('pointerleave', () => moveIndicator());
  nav.addEventListener('focusout', () => moveIndicator());
  new ResizeObserver(() => moveIndicator()).observe(nav);
  document.fonts.ready.then(() => {
    moveIndicator();
    if (activeLink && nav.scrollWidth > nav.clientWidth) {
      nav.scrollLeft = activeLink.offsetLeft - (nav.clientWidth - activeLink.offsetWidth) / 2;
    }
  });

  const topButton = document.getElementById('back-to-top');
  let scrollQueued = false;
  const topicLinks = [...document.querySelectorAll('.note-index a[href^="#"]')];
  const topics = topicLinks.map(link => ({link, heading: document.getElementById(link.hash.slice(1))}));
  function updateScroll() {
    const extent = document.documentElement.scrollHeight - innerHeight;
    root.style.setProperty('--reading-progress', extent > 0 ? String(scrollY / extent) : '0');
    topButton.classList.toggle('is-visible', scrollY > 450);
    let current = null;
    for (const topic of topics) {
      if (topic.heading && topic.heading.getBoundingClientRect().top <= 150) current = topic;
    }
    for (const topic of topics) {
      topic.link.classList.toggle('is-current', topic === current);
      if (topic === current) topic.link.setAttribute('aria-current', 'location');
      else topic.link.removeAttribute('aria-current');
    }
    scrollQueued = false;
  }
  addEventListener('scroll', () => {
    if (!scrollQueued) {
      scrollQueued = true;
      requestAnimationFrame(updateScroll);
    }
  }, {passive: true});
  addEventListener('resize', updateScroll, {passive: true});
  new ResizeObserver(updateScroll).observe(document.querySelector('section'));
  topButton.addEventListener('click', () => scrollTo({top: 0,
    behavior: motionEnabled() && scrollY < innerHeight * 3 ? 'smooth' : 'instant'}));
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
    if (!target) return;
    const padding = parseFloat(getComputedStyle(root).scrollPaddingTop) || 0;
    const destination = target.getBoundingClientRect().top + scrollY - padding;
    if (!motionEnabled() || Math.abs(destination - scrollY) > innerHeight * 3) {
      event.preventDefault();
      if (location.hash !== link.hash) history.pushState(null, '', link.hash);
      scrollTo({top: destination, behavior: 'instant'});
      target.setAttribute('tabindex', '-1');
      target.focus({preventScroll: true});
    }
  });
  updateScroll();

  const revealObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        revealObserver.unobserve(entry.target);
      }
    }
  }, {rootMargin: '0px 0px 12px 0px', threshold: 0.03});
  const revealTargets = document.querySelectorAll('section > h2, section > p, section > ul > li, .bibliography > li, .gallery-item');
  revealTargets.forEach((element, index) => {
    element.classList.add('reveal');
    element.style.setProperty('--reveal-delay', `${Math.min(index % 3, 2) * 55}ms`);
    revealObserver.observe(element);
  });

  for (const heading of document.querySelectorAll('section > h2[id]')) {
    const button = document.createElement('button');
    button.className = 'heading-anchor';
    button.type = 'button';
    button.setAttribute('aria-label', `Copy link to ${heading.textContent.trim()}`);
    button.title = 'Copy section link';
    button.innerHTML = '<i class="fas fa-link" aria-hidden="true"></i>';
    button.addEventListener('click', async () => {
      const url = new URL(location.href);
      url.hash = heading.id;
      try {
        await navigator.clipboard.writeText(url.href);
        button.querySelector('i').className = 'fas fa-check';
        button.title = 'Link copied';
        setTimeout(() => {
          button.querySelector('i').className = 'fas fa-link';
          button.title = 'Copy section link';
        }, 1500);
      } catch (_) {
        location.hash = heading.id;
      }
    });
    heading.append(button);
  }

  // A shared, native dialog keeps both image collections keyboard accessible.
  const imageButtons = [...document.querySelectorAll('[data-image-viewer]')];
  if (imageButtons.length) {
    const viewer = document.createElement('dialog');
    viewer.className = 'image-viewer';
    viewer.setAttribute('aria-label', 'Image viewer');
    viewer.innerHTML = `
      <div class="viewer-toolbar">
        <button class="icon-control viewer-zoom" type="button" aria-label="Zoom in" aria-pressed="false" data-tooltip="Zoom in"><i class="fas fa-search-plus" aria-hidden="true"></i></button>
        <a class="icon-control viewer-original" target="_blank" rel="noopener" aria-label="Open original image" data-tooltip="Open original image"><i class="fas fa-external-link-alt" aria-hidden="true"></i></a>
        <button class="icon-control viewer-close" type="button" aria-label="Close image viewer" data-tooltip="Close"><i class="fas fa-times" aria-hidden="true"></i></button>
      </div>
      <div class="viewer-stage"><img class="viewer-image" alt="" draggable="false"></div>
      <output class="viewer-counter" aria-live="polite"></output>
      <button class="icon-control viewer-prev" type="button" aria-label="Previous image" data-tooltip="Previous image"><i class="fas fa-chevron-left" aria-hidden="true"></i></button>
      <button class="icon-control viewer-next" type="button" aria-label="Next image" data-tooltip="Next image"><i class="fas fa-chevron-right" aria-hidden="true"></i></button>`;
    document.body.append(viewer);
    const image = viewer.querySelector('.viewer-image');
    const stage = viewer.querySelector('.viewer-stage');
    const zoomButton = viewer.querySelector('.viewer-zoom');
    const previous = viewer.querySelector('.viewer-prev');
    const next = viewer.querySelector('.viewer-next');
    let collection = [];
    let currentIndex = 0;
    let trigger = null;
    let previousOverflow = '';
    let drag = null;
    let suppressClick = false;
    let touchStart = null;

    function setZoom(zoomed) {
      viewer.classList.toggle('is-zoomed', zoomed);
      viewer.style.setProperty('--zoom-width', `${Math.max(image.naturalWidth, stage.clientWidth * 1.6)}px`);
      setControl(zoomButton, zoomed ? 'Fit image' : 'Zoom in', zoomed ? 'compress' : 'search-plus');
      zoomButton.setAttribute('aria-pressed', String(zoomed));
      stage.scrollTop = 0;
      stage.scrollLeft = 0;
    }

    function showImage(index) {
      currentIndex = (index + collection.length) % collection.length;
      const source = collection[currentIndex].querySelector('img');
      setZoom(false);
      image.src = source.dataset.large || source.currentSrc || source.src;
      image.alt = source.alt;
      viewer.querySelector('.viewer-original').href = source.dataset.original || source.src;
      viewer.querySelector('.viewer-counter').textContent = `${currentIndex + 1} / ${collection.length}`;
      previous.hidden = next.hidden = collection.length < 2;
    }

    function openViewer(button) {
      trigger = button;
      collection = imageButtons.filter(item => item.dataset.imageViewer === button.dataset.imageViewer);
      showImage(collection.indexOf(button));
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      viewer.showModal();
      viewer.querySelector('.viewer-close').focus({preventScroll: true});
    }

    imageButtons.forEach(button => button.addEventListener('click', () => openViewer(button)));
    previous.addEventListener('click', () => showImage(currentIndex - 1));
    next.addEventListener('click', () => showImage(currentIndex + 1));
    viewer.querySelector('.viewer-close').addEventListener('click', () => viewer.close());
    zoomButton.addEventListener('click', () => setZoom(!viewer.classList.contains('is-zoomed')));
    image.addEventListener('click', () => {
      if (!suppressClick) setZoom(!viewer.classList.contains('is-zoomed'));
      suppressClick = false;
    });
    viewer.addEventListener('close', () => {
      document.body.style.overflow = previousOverflow;
      setZoom(false);
      trigger?.focus({preventScroll: true});
    });
    viewer.addEventListener('keydown', event => {
      if (event.key === 'Tab') {
        const controls = [...viewer.querySelectorAll('button:not([hidden]),a[href]')]
          .filter(control => !control.disabled && control.getClientRects().length);
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
      if (event.key === 'ArrowLeft' && !viewer.classList.contains('is-zoomed')) {
        event.preventDefault();
        showImage(currentIndex - 1);
      }
      if (event.key === 'ArrowRight' && !viewer.classList.contains('is-zoomed')) {
        event.preventDefault();
        showImage(currentIndex + 1);
      }
    });
    stage.addEventListener('click', event => {
      if (event.target === stage && !viewer.classList.contains('is-zoomed')) viewer.close();
    });
    stage.addEventListener('pointerdown', event => {
      if (!viewer.classList.contains('is-zoomed') || event.pointerType === 'touch') return;
      drag = {x: event.clientX, y: event.clientY, left: stage.scrollLeft, top: stage.scrollTop};
      stage.setPointerCapture(event.pointerId);
      viewer.classList.add('is-dragging');
    });
    stage.addEventListener('pointermove', event => {
      if (!drag) return;
      const x = event.clientX - drag.x;
      const y = event.clientY - drag.y;
      if (Math.abs(x) + Math.abs(y) > 4) suppressClick = true;
      stage.scrollLeft = drag.left - x;
      stage.scrollTop = drag.top - y;
    });
    const finishDrag = () => {
      drag = null;
      viewer.classList.remove('is-dragging');
      setTimeout(() => { suppressClick = false; }, 0);
    };
    stage.addEventListener('pointerup', finishDrag);
    stage.addEventListener('pointercancel', finishDrag);
    stage.addEventListener('touchstart', event => {
      touchStart = event.touches.length === 1 ? {x: event.touches[0].clientX, y: event.touches[0].clientY} : null;
    }, {passive: true});
    stage.addEventListener('touchend', event => {
      if (!touchStart || viewer.classList.contains('is-zoomed')) return;
      const dx = event.changedTouches[0].clientX - touchStart.x;
      const dy = event.changedTouches[0].clientY - touchStart.y;
      if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.5) {
        suppressClick = true;
        showImage(currentIndex + (dx < 0 ? 1 : -1));
        setTimeout(() => { suppressClick = false; }, 400);
      }
      touchStart = null;
    }, {passive: true});
  }

  // A lightly displaced triangular lattice suggests a material structure.
  const canvas = document.getElementById('lattice-field');
  const context = canvas.getContext('2d');
  let latticeWidth = 0;
  let latticeHeight = 0;
  let frame = 0;
  let lastFrame = 0;
  const pointer = {x: -1000, y: -1000};
  const spacing = 100;
  const rowHeight = spacing * Math.sqrt(3) / 2;

  function resizeLattice() {
    latticeWidth = innerWidth;
    latticeHeight = innerHeight;
    const ratio = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(latticeWidth * ratio);
    canvas.height = Math.round(latticeHeight * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    drawLattice(performance.now());
  }

  function latticePoint(column, row, time) {
    const x = column * spacing + (row % 2) * spacing / 2 - spacing / 2;
    const y = row * rowHeight - rowHeight / 2;
    const phase = column * 0.8 + row * 0.6;
    const activeTime = motionEnabled() ? time * 0.00035 : 0;
    const distance = Math.hypot(pointer.x - x, pointer.y - y);
    const influence = motionEnabled() ? Math.max(0, 1 - distance / 220) : 0;
    return {
      x: x + Math.sin(activeTime + phase) * 3 + (x - pointer.x) * influence * 0.09,
      y: y + Math.cos(activeTime * 0.8 + phase) * 3 + (y - pointer.y) * influence * 0.09,
      influence,
    };
  }

  function drawLattice(time) {
    if (!context || !latticeWidth) return;
    context.clearRect(0, 0, latticeWidth, latticeHeight);
    const dark = root.dataset.theme === 'dark';
    const columns = Math.ceil(latticeWidth / spacing) + 2;
    const rows = Math.ceil(latticeHeight / rowHeight) + 2;
    const grid = Array.from({length: rows}, (_, row) =>
      Array.from({length: columns}, (_, column) => latticePoint(column, row, time)));
    for (let row = 0; row < rows; row++) {
      for (let column = 0; column < columns; column++) {
        const point = grid[row][column];
        const margin = point.x < Math.max(90, (latticeWidth - 1130) / 2) || point.x > latticeWidth - 100;
        const alpha = (margin ? (dark ? 0.13 : 0.12) : (dark ? 0.04 : 0.035)) + point.influence * 0.09;
        context.strokeStyle = dark ? `rgba(114,220,192,${alpha})` : `rgba(8,127,114,${alpha})`;
        context.lineWidth = 0.6;
        const neighbours = [grid[row][column + 1], grid[row + 1]?.[column],
          grid[row + 1]?.[column + (row % 2 ? 1 : -1)]];
        for (const neighbour of neighbours) {
          if (!neighbour) continue;
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(neighbour.x, neighbour.y);
          context.stroke();
        }
        const highlight = Math.sin(time * 0.0006 - column * 0.6 - row * 0.5) > 0.93;
        context.fillStyle = highlight ? (dark ? 'rgba(238,163,138,0.4)' : 'rgba(194,89,67,0.28)') : context.strokeStyle;
        context.fillRect(point.x - 1, point.y - 1, 2, 2);
      }
    }
  }

  function animateLattice(time) {
    if (!motionEnabled() || document.hidden) { frame = 0; return; }
    if (time - lastFrame >= 42) {
      drawLattice(time);
      lastFrame = time;
    }
    frame = requestAnimationFrame(animateLattice);
  }

  function scheduleLattice() {
    cancelAnimationFrame(frame);
    frame = 0;
    drawLattice(performance.now());
    if (motionEnabled() && !document.hidden) frame = requestAnimationFrame(animateLattice);
  }

  addEventListener('pointermove', event => { pointer.x = event.clientX; pointer.y = event.clientY; }, {passive: true});
  document.addEventListener('pointerleave', () => { pointer.x = -1000; pointer.y = -1000; });
  addEventListener('resize', resizeLattice, {passive: true});
  document.addEventListener('visibilitychange', scheduleLattice);
  resizeLattice();
  scheduleLattice();
})();
