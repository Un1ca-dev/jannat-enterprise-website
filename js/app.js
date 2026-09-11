/**
 * JANNAT ENTERPRISE - Main Application Logic
 * Premium, Lightweight & High-Performance
 */

document.addEventListener('DOMContentLoaded', () => {
  const config = window.JANNAT_CONFIG || {};

  // -------------------------------------------------------------------------
  // 1. DOM Elements & State
  // -------------------------------------------------------------------------
  const header = document.querySelector('.site-header');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileBackdrop = document.getElementById('mobileBackdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  
  // Containers
  const servicesGrid = document.getElementById('servicesGrid');
  const documentsGrid = document.getElementById('documentsGrid');
  const documentCategoryTabs = document.getElementById('documentCategoryTabs');
  const docSearchInput = document.getElementById('docSearchInput');
  const trainingGrid = document.getElementById('trainingGrid');
  const businessHoursStatus = document.getElementById('businessHoursStatus');
  const quickInquiryForm = document.getElementById('quickInquiryForm');

  // Modal Elements
  const serviceModal = document.getElementById('serviceModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const modalBadge = document.getElementById('modalBadge');
  const modalIcon = document.getElementById('modalIcon');
  const modalDescription = document.getElementById('modalDescription');
  const modalWhoNeeds = document.getElementById('modalWhoNeeds');
  const modalDocList = document.getElementById('modalDocList');
  const modalNote = document.getElementById('modalNote');
  const modalCallBtn = document.getElementById('modalCallBtn');
  const modalWhatsAppBtn = document.getElementById('modalWhatsAppBtn');

  let activeCategory = 'all';
  let searchQuery = '';

  // -------------------------------------------------------------------------
  // 2. SVG Icon Helper Dictionary
  // -------------------------------------------------------------------------
  const icons = {
    'shield-check': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
    'cpu-chip': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M9 2v2"/><path d="M15 2v2"/><path d="M9 20v2"/><path d="M15 20v2"/><path d="M20 9h2"/><path d="M20 14h2"/><path d="M2 9h2"/><path d="M2 14h2"/></svg>`,
    'id-card': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/><circle cx="7" cy="15" r="2"/><line x1="12" x2="18" y1="15" y2="15"/></svg>`,
    'banknotes': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>`,
    'receipt-percent': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"/><path d="M15 9.5 9 15.5"/><circle cx="9.5" cy="9.5" r=".5" fill="currentColor"/><circle cx="14.5" cy="15.5" r=".5" fill="currentColor"/></svg>`,
    'device-phone-mobile': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><line x1="12" x2="12.01" y1="18" y2="18"/></svg>`,
    'fire': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
    'document-text': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>`,
    'printer': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>`,
    'computer-desktop': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>`,
    'check': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    'call': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    'whatsapp': `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>`,
    'arrow-right': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`
  };

  // -------------------------------------------------------------------------
  // 3. Helper: Generate Verified WhatsApp Link
  // -------------------------------------------------------------------------
  function getWhatsAppUrl(customMessage) {
    const defaultMsg = "Hello JANNAT ENTERPRISE, I want to know about your available services.";
    const text = encodeURIComponent(customMessage || defaultMsg);
    return `https://wa.me/${config.whatsappIntl || '918918273721'}?text=${text}`;
  }

  function getCallUrl() {
    return `tel:${config.phone || '8918273721'}`;
  }

  // -------------------------------------------------------------------------
  // 4. Header & Navigation Handling
  // -------------------------------------------------------------------------
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  function toggleMobileMenu(open) {
    const isOpen = open !== undefined ? open : !mobileDrawer.classList.contains('open');
    hamburgerBtn.classList.toggle('active', isOpen);
    mobileDrawer.classList.toggle('open', isOpen);
    mobileBackdrop.classList.toggle('open', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', isOpen);
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => toggleMobileMenu());
  }
  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', () => toggleMobileMenu(false));
  }
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => toggleMobileMenu(false));
  });

  // -------------------------------------------------------------------------
  // 5. Dynamic Business Hours & Live Status (Open Now / Closed)
  // -------------------------------------------------------------------------
  function updateLiveBusinessStatus() {
    if (!businessHoursStatus) return;
    
    // Calculate current Indian Standard Time (UTC+5:30)
    const now = new Date();
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    const istTime = new Date(utcTime + (3600000 * 5.5));
    
    const currentHour = istTime.getHours();
    const currentMinute = istTime.getMinutes();
    const currentTotalMinutes = currentHour * 60 + currentMinute;
    
    const openMinutes = (config.businessHours?.openHour ?? 9) * 60 + (config.businessHours?.openMinute ?? 0);
    const closeMinutes = (config.businessHours?.closeHour ?? 20) * 60 + (config.businessHours?.closeMinute ?? 0);

    const isOpen = currentTotalMinutes >= openMinutes && currentTotalMinutes < closeMinutes;

    if (isOpen) {
      businessHoursStatus.className = 'business-hours-badge open';
      businessHoursStatus.innerHTML = `
        <span class="pulse-dot"></span>
        <span>Open Now • Closes at 8:00 PM</span>
      `;
    } else {
      businessHoursStatus.className = 'business-hours-badge closed';
      businessHoursStatus.innerHTML = `
        <span style="width:8px;height:8px;border-radius:50%;background:#ef4444;display:inline-block;"></span>
        <span>Currently Closed • Opens at 9:00 AM</span>
      `;
    }
  }
  updateLiveBusinessStatus();
  setInterval(updateLiveBusinessStatus, 60000);

  // -------------------------------------------------------------------------
  // 6. Render Popular Services Grid
  // -------------------------------------------------------------------------
  function renderServices() {
    if (!servicesGrid || !config.services) return;

    servicesGrid.innerHTML = config.services.map(svc => {
      const iconSvg = icons[svc.icon] || icons['shield-check'];
      const isHighlighted = svc.isPopular ? 'highlighted' : '';
      const badgeClass = svc.isPopular ? 'primary' : '';

      return `
        <article class="service-card ${isHighlighted}" id="service-${svc.id}">
          <div class="service-top-meta">
            <div class="service-icon-wrap" aria-hidden="true">
              ${iconSvg}
            </div>
            <span class="service-badge ${badgeClass}">${svc.badge}</span>
          </div>

          <h3 class="service-title">${svc.title}</h3>
          <div class="service-subtitle">${svc.subtitle}</div>
          <p class="service-desc">${svc.shortDescription}</p>

          <ul class="service-features-list" aria-label="Key features">
            ${svc.features.map(f => `
              <li class="service-feature-item">
                ${icons['check']}
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>

          <div class="service-card-actions">
            <button class="btn btn-outline view-service-btn" data-id="${svc.id}">
              <span>View Details &amp; Documents</span>
              ${icons['arrow-right']}
            </button>
          </div>
        </article>
      `;
    }).join('');

    // Attach click handlers to open modal
    document.querySelectorAll('.view-service-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const serviceId = e.currentTarget.getAttribute('data-id');
        openServiceModal(serviceId);
      });
    });
  }

  // -------------------------------------------------------------------------
  // 7. Render Interactive Documents Centre & Filter Tabs
  // -------------------------------------------------------------------------
  function renderCategoryTabs() {
    if (!documentCategoryTabs || !config.documentCategories) return;

    documentCategoryTabs.innerHTML = config.documentCategories.map(cat => `
      <button class="filter-tab ${cat.id === activeCategory ? 'active' : ''}" data-cat="${cat.id}">
        ${cat.label}
      </button>
    `).join('');

    documentCategoryTabs.querySelectorAll('.filter-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        documentCategoryTabs.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        e.currentTarget.classList.add('active');
        activeCategory = e.currentTarget.getAttribute('data-cat');
        filterAndRenderDocuments();
      });
    });
  }

  function filterAndRenderDocuments() {
    if (!documentsGrid || !config.services) return;

    const query = searchQuery.toLowerCase().trim();

    const filtered = config.services.filter(svc => {
      // Category match
      const categoryMatch = (activeCategory === 'all') || (svc.category === activeCategory);

      // Search match
      const titleMatch = svc.title.toLowerCase().includes(query);
      const subMatch = svc.subtitle.toLowerCase().includes(query);
      const docsMatch = svc.documents.some(doc => doc.toLowerCase().includes(query));
      const searchMatch = query === '' || titleMatch || subMatch || docsMatch;

      return categoryMatch && searchMatch;
    });

    if (filtered.length === 0) {
      documentsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1.5rem; background: var(--color-slate-50); border-radius: var(--radius-lg); border: 1px dashed var(--color-slate-300);">
          <p style="font-size: 1.1rem; font-weight: 700; color: var(--color-slate-700); margin-bottom: 0.5rem;">
            No specific documents found for "${searchQuery}"
          </p>
          <p style="font-size: 0.875rem; color: var(--color-slate-500); margin-bottom: 1.5rem;">
            Please call or WhatsApp our centre directly to confirm your requirements.
          </p>
          <a href="${getWhatsAppUrl('Hello JANNAT ENTERPRISE, I want to inquire about required documents.')}" target="_blank" class="btn btn-whatsapp">
            ${icons['whatsapp']}
            <span>Inquire on WhatsApp</span>
          </a>
        </div>
      `;
      return;
    }

    documentsGrid.innerHTML = filtered.map(svc => `
      <div class="doc-card" id="doc-${svc.id}">
        <div class="doc-card-header">
          <div>
            <h3>${svc.title}</h3>
            <span style="font-size: 0.8125rem; color: var(--color-blue-primary); font-weight: 600;">${svc.subtitle}</span>
          </div>
          <span class="doc-badge">${svc.categoryName}</span>
        </div>

        <div class="doc-requirements-title">Documents Required:</div>

        <ul class="doc-list">
          ${svc.documents.map(d => `
            <li class="doc-item">
              ${icons['check']}
              <span>${d}</span>
            </li>
          `).join('')}
        </ul>

        <div class="doc-note-box">
          <strong>Important:</strong> ${svc.importantNote}
        </div>

        <div class="doc-card-actions">
          <a href="${getCallUrl()}" class="btn btn-call btn-sm" aria-label="Call for ${svc.title}">
            ${icons['call']}
            <span>Call</span>
          </a>
          <a href="${getWhatsAppUrl(`Hello JANNAT ENTERPRISE, I want to confirm the required documents for ${svc.title}.`)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm" aria-label="WhatsApp for ${svc.title}">
            ${icons['whatsapp']}
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    `).join('');
  }

  if (docSearchInput) {
    docSearchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      filterAndRenderDocuments();
    });
  }

  // -------------------------------------------------------------------------
  // 8. Render Verified Training Credentials
  // -------------------------------------------------------------------------
  function renderTrainings() {
    if (!trainingGrid || !config.trainings) return;

    trainingGrid.innerHTML = config.trainings.map(item => `
      <div class="training-card">
        <div class="training-badge-head">
          ${icons['check']}
          <span>Verified Training Module</span>
        </div>
        <h4>${item.title}</h4>
        <p>${item.description}</p>
      </div>
    `).join('');
  }

  // -------------------------------------------------------------------------
  // 9. Service Detail Modal Logic
  // -------------------------------------------------------------------------
  function openServiceModal(serviceId) {
    const service = config.services.find(s => s.id === serviceId);
    if (!service) return;

    modalTitle.textContent = service.title;
    modalSubtitle.textContent = service.subtitle;
    modalBadge.textContent = service.badge;
    modalIcon.innerHTML = icons[service.icon] || icons['shield-check'];
    modalDescription.textContent = service.fullDescription;
    modalWhoNeeds.textContent = service.whoNeedsIt;

    modalDocList.innerHTML = service.documents.map(doc => `
      <li class="modal-doc-item">
        ${icons['check']}
        <span>${doc}</span>
      </li>
    `).join('');

    modalNote.innerHTML = `<strong>Verification Guidance:</strong> ${service.importantNote}`;

    // Action buttons
    modalCallBtn.href = getCallUrl();
    modalWhatsAppBtn.href = getWhatsAppUrl(`Hello JANNAT ENTERPRISE, I want to confirm details and documents for ${service.title}.`);

    serviceModal.classList.add('active');
    document.body.classList.add('modal-open');
    serviceModal.setAttribute('aria-hidden', 'false');

    // Focus close button for accessibility
    setTimeout(() => modalCloseBtn?.focus(), 50);
  }

  function closeServiceModal() {
    serviceModal.classList.remove('active');
    document.body.classList.remove('modal-open');
    serviceModal.setAttribute('aria-hidden', 'true');
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeServiceModal);
  }

  if (serviceModal) {
    serviceModal.addEventListener('click', (e) => {
      if (e.target === serviceModal) {
        closeServiceModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && serviceModal?.classList.contains('active')) {
      closeServiceModal();
    }
  });

  // -------------------------------------------------------------------------
  // 10. Quick WhatsApp Inquiry Form Handler
  // -------------------------------------------------------------------------
  if (quickInquiryForm) {
    quickInquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('inquiryName')?.value.trim() || 'Customer';
      const service = document.getElementById('inquiryService')?.value || 'Digital Services';
      const notes = document.getElementById('inquiryNotes')?.value.trim() || 'I would like more information.';

      const formattedMessage = `Hello JANNAT ENTERPRISE,\n\nName: ${name}\nService Required: ${service}\nDetails: ${notes}\n\nPlease let me know the procedure and required documents. Thank you!`;

      const targetUrl = getWhatsAppUrl(formattedMessage);
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    });
  }

  // -------------------------------------------------------------------------
  // 11. Populate Global Dynamic CTAs (WhatsApp & Phone)
  // -------------------------------------------------------------------------
  document.querySelectorAll('[data-action="call-main"]').forEach(el => {
    el.setAttribute('href', getCallUrl());
  });

  document.querySelectorAll('[data-action="whatsapp-main"]').forEach(el => {
    el.setAttribute('href', getWhatsAppUrl());
  });

  document.querySelectorAll('[data-action="whatsapp-broadband"]').forEach(el => {
    el.setAttribute('href', getWhatsAppUrl("Hello JANNAT ENTERPRISE, I want to inquire about a new Internet / Broadband / Cable Network connection."));
  });

  // -------------------------------------------------------------------------
  // 12. Initialize Everything
  // -------------------------------------------------------------------------
  renderServices();
  renderCategoryTabs();
  filterAndRenderDocuments();
  renderTrainings();
});
