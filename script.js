(() => {
  const header = document.querySelector('[data-header]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');

  const updateHeader = () => {
    if (!header || header.classList.contains('inner-header')) return;
    header.classList.toggle('scrolled', window.scrollY > 24);
  };
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      mobileMenu.hidden = isOpen;
      document.body.classList.toggle('menu-open', !isOpen);
      const label = menuToggle.querySelector('.sr-only');
      if (label) label.textContent = isOpen ? 'Open navigation' : 'Close navigation';
    });
    mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      mobileMenu.hidden = true;
      document.body.classList.remove('menu-open');
    }));
  }

  const galleryDialog = document.querySelector('[data-gallery-dialog]');
  const galleryImage = document.querySelector('[data-gallery-image]');
  const galleryClose = document.querySelector('[data-gallery-close]');
  let galleryTrigger = null;

  if (galleryDialog && galleryImage && typeof galleryDialog.showModal === 'function') {
    document.querySelectorAll('[data-gallery]').forEach((button) => {
      button.addEventListener('click', () => {
        galleryTrigger = button;
        galleryImage.src = button.dataset.full || '';
        galleryImage.alt = button.dataset.alt || '';
        galleryDialog.showModal();
        galleryClose?.focus();
      });
    });
    const closeGallery = () => {
      galleryDialog.close();
      galleryImage.src = '';
      galleryTrigger?.focus();
    };
    galleryClose?.addEventListener('click', closeGallery);
    galleryDialog.addEventListener('click', (event) => { if (event.target === galleryDialog) closeGallery(); });
    galleryDialog.addEventListener('cancel', (event) => { event.preventDefault(); closeGallery(); });
  }

  const tabs = [...document.querySelectorAll('[role="tab"]')];
  const panels = [...document.querySelectorAll('[role="tabpanel"]')];
  if (tabs.length && panels.length) {
    const activateTab = (tab) => {
      tabs.forEach((item) => {
        const selected = item === tab;
        item.setAttribute('aria-selected', String(selected));
        item.tabIndex = selected ? 0 : -1;
      });
      panels.forEach((panel) => { panel.hidden = panel.id !== tab.getAttribute('aria-controls'); });
    };
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => activateTab(tab));
      tab.addEventListener('keydown', (event) => {
        if (!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
        event.preventDefault();
        let next = index;
        if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
        if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = tabs.length - 1;
        tabs[next].focus();
        activateTab(tabs[next]);
      });
    });
    activateTab(tabs.find((tab) => tab.getAttribute('aria-selected') === 'true') || tabs[0]);
  }
})();
