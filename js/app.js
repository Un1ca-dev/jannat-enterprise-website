/**
 * JANNAT ENTERPRISE - Main Application Logic (V2 Midnight Edition)
 * Comprehensive Service Directory, High-Tech Illustrations, Interactive Search,
 * Category Filtering, Live Status, Document Checklist & Modal System
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
  const popularServicesGrid = document.getElementById('popularServicesGrid');
  const serviceCategoryTabs = document.getElementById('serviceCategoryTabs');
  const servicesGrid = document.getElementById('servicesGrid');
  const serviceSearchInput = document.getElementById('serviceSearchInput');
  const serviceSearchClear = document.getElementById('serviceSearchClear');
  const searchResultsCount = document.getElementById('searchResultsCount');
  
  // Mobile Repair & Expandable Section
  const mobileRepairCardsGrid = document.getElementById('mobileRepairCardsGrid');
  const moreServicesToggleBtn = document.getElementById('moreServicesToggleBtn');
  const moreServicesContent = document.getElementById('moreServicesContent');

  // Documents Section Elements
  const documentsGrid = document.getElementById('documentsGrid');
  const docSearchInput = document.getElementById('docSearchInput');
  const documentCategoryTabs = document.getElementById('documentCategoryTabs');

  // Operator & Hours
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
  let activeSearchQuery = '';

  // -------------------------------------------------------------------------
  // 2. High-Tech SVG Icons
  // -------------------------------------------------------------------------
  const icons = {
    'shield-check': `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
    'cpu-chip': `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M9 2v2"/><path d="M15 2v2"/><path d="M9 20v2"/><path d="M15 20v2"/><path d="M20 9h2"/><path d="M20 14h2"/><path d="M2 9h2"/><path d="M2 14h2"/></svg>`,
    'id-card': `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/><circle cx="7" cy="15" r="2"/><line x1="12" x2="18" y1="15" y2="15"/></svg>`,
    'banknotes': `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>`,
    'receipt-percent': `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"/><path d="M15 9.5 9 15.5"/><circle cx="9.5" cy="9.5" r=".5" fill="currentColor"/><circle cx="14.5" cy="15.5" r=".5" fill="currentColor"/></svg>`,
    'device-phone-mobile': `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><line x1="12" x2="12.01" y1="18" y2="18"/></svg>`,
    'fire': `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
    'document-text': `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>`,
    'printer': `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>`,
    'computer-desktop': `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>`,
    'globe-alt': `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    'truck': `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="13" x="1" y="3" rx="2"/><polygon points="17 8 20 8 23 11 23 16 17 16 17 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
    'credit-card': `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`,
    'building-library': `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="2" y2="2"/><line x1="4" x2="20" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="18"/><line x1="10" x2="10" y1="18" y2="18"/><line x1="14" x2="14" y1="18" y2="18"/><line x1="18" x2="18" y1="18" y2="18"/><polygon points="12 2 2 7 22 7"/></svg>`,
    'currency-rupee': `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12"/><path d="M6 8h12"/><path d="m6 13 8.5 8"/><path d="M6 13h3a4 4 0 0 0 0-8"/></svg>`,
    'wrench-screwdriver': `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    'wifi': `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" x2="12.01" y1="20" y2="20"/></svg>`,
    'tv': `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="15" x="2" y="7" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>`,
    'check': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    'call': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    'whatsapp': `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>`,
    'arrow-right': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    'search': `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" x2="16.65"/></svg>`
  };

  // -------------------------------------------------------------------------
  // 3. Helper: Generate Verified WhatsApp & Call Links
  // -------------------------------------------------------------------------
  function getWhatsAppUrl(customMessage) {
    const defaultMsg = "Hello JANNAT ENTERPRISE, I want to know about your available services.";
    const text = encodeURIComponent(customMessage || defaultMsg);
    return `https://wa.me/${config.whatsappIntl || '918918273721'}?text=${text}`;
  }

  function getServiceWhatsAppUrl(serviceTitle) {
    const message = `Hello JANNAT ENTERPRISE, I want to know about ${serviceTitle} service and required documents.`;
    return getWhatsAppUrl(message);
  }

  function getCallUrl() {
    return `tel:${config.phone || '8918273721'}`;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // -------------------------------------------------------------------------
  // 4. Header & Mobile Menu Handling
  // -------------------------------------------------------------------------
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  function toggleMobileMenu(open) {
    const isOpen = open !== undefined ? open : !mobileDrawer?.classList.contains('open');
    hamburgerBtn?.classList.toggle('active', isOpen);
    mobileDrawer?.classList.toggle('open', isOpen);
    mobileBackdrop?.classList.toggle('open', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
    hamburgerBtn?.setAttribute('aria-expanded', isOpen);
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', () => toggleMobileMenu());
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', () => toggleMobileMenu(false));
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => toggleMobileMenu(false));
  });

  // -------------------------------------------------------------------------
  // 5. Dynamic Business Hours & Live Open/Closed Status (Asia/Kolkata)
  // -------------------------------------------------------------------------
  function updateLiveBusinessStatus() {
    if (!businessHoursStatus) return;
    const now = new Date();
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    const istTime = new Date(utcTime + (3600000 * 5.5));
    
    const currentTotalMinutes = istTime.getHours() * 60 + istTime.getMinutes();
    const openMinutes = (config.businessHours?.openHour ?? 9) * 60;
    const closeMinutes = (config.businessHours?.closeHour ?? 20) * 60;

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
  // 6. Render Most Requested Services Spotlight (11 items)
  // -------------------------------------------------------------------------
  function renderPopularServices() {
    if (!popularServicesGrid || !config.services) return;

    const popular = config.services.filter(s => s.isPopular);

    popularServicesGrid.innerHTML = popular.map(svc => {
      const iconSvg = icons[svc.icon] || icons['shield-check'];
      return `
        <div class="popular-pill-card" data-service-id="${svc.id}">
          <div class="popular-pill-icon">${iconSvg}</div>
          <div class="popular-pill-text">
            <span class="title">${svc.title}</span>
            <span class="sub">${svc.subtitle}</span>
          </div>
          <button type="button" class="popular-pill-btn open-modal-btn" data-id="${svc.id}" aria-label="View documents for ${svc.title}">
            <span>📋 Documents</span>
          </button>
        </div>
      `;
    }).join('');

    popularServicesGrid.querySelectorAll('.open-modal-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openServiceModal(btn.getAttribute('data-id'));
      });
    });

    popularServicesGrid.querySelectorAll('.popular-pill-card').forEach(card => {
      card.addEventListener('click', () => {
        openServiceModal(card.getAttribute('data-service-id'));
      });
    });
  }

  // -------------------------------------------------------------------------
  // 7. Render Category Filter Tabs
  // -------------------------------------------------------------------------
  function renderCategoryTabs() {
    if (!serviceCategoryTabs || !config.categories) return;

    serviceCategoryTabs.innerHTML = config.categories.map(cat => `
      <button type="button" class="category-tab-btn ${cat.id === activeCategory ? 'active' : ''}" data-category="${cat.id}">
        <span>${cat.label}</span>
      </button>
    `).join('');

    serviceCategoryTabs.querySelectorAll('.category-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        serviceCategoryTabs.querySelectorAll('.category-tab-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        activeCategory = e.currentTarget.getAttribute('data-category');
        filterAndRenderServices();
      });
    });
  }

  // -------------------------------------------------------------------------
  // 8. Render Main Filtered Services Grid with SVG Illustrations
  // -------------------------------------------------------------------------
  function filterAndRenderServices() {
    if (!servicesGrid || !config.services) return;

    const query = activeSearchQuery.toLowerCase().trim();

    const filtered = config.services.filter(svc => {
      const categoryMatch = (activeCategory === 'all') || (svc.category === activeCategory);
      const titleMatch = svc.title.toLowerCase().includes(query);
      const subMatch = svc.subtitle.toLowerCase().includes(query);
      const descMatch = svc.shortDescription.toLowerCase().includes(query);
      const catMatch = svc.categoryName.toLowerCase().includes(query);
      const docsMatch = svc.documents.some(d => d.toLowerCase().includes(query));

      const searchMatch = query === '' || titleMatch || subMatch || descMatch || catMatch || docsMatch;
      return categoryMatch && searchMatch;
    });

    // Update result count banner
    if (searchResultsCount) {
      if (activeSearchQuery !== '') {
        searchResultsCount.style.display = 'block';
        searchResultsCount.innerHTML = `Found <strong>${filtered.length}</strong> service${filtered.length === 1 ? '' : 's'} matching "<em>${escapeHtml(activeSearchQuery)}</em>"`;
      } else if (activeCategory !== 'all') {
        const catObj = config.categories.find(c => c.id === activeCategory);
        searchResultsCount.style.display = 'block';
        searchResultsCount.innerHTML = `Showing <strong>${filtered.length}</strong> services in <strong>${catObj ? catObj.label : activeCategory}</strong>`;
      } else {
        searchResultsCount.style.display = 'none';
      }
    }

    if (filtered.length === 0) {
      servicesGrid.innerHTML = `
        <div class="no-services-found">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</div>
          <h3>কোনো পরিষেবা খুঁজে পাওয়া যায়নি ("${escapeHtml(activeSearchQuery)}")</h3>
          <p>আপনার প্রয়োজনীয় পরিষেবার জন্য সরাসরি আমাদের কল করুন বা WhatsApp-এ মেসেজ পাঠান।</p>
          <div style="display: flex; gap: 0.75rem; justify-content: center; margin-top: 1.25rem; flex-wrap: wrap;">
            <a href="${getCallUrl()}" class="btn btn-call">
              ${icons['call']}
              <span>Call 8918273721</span>
            </a>
            <a href="${getWhatsAppUrl('Hello JANNAT ENTERPRISE, I want to inquire about: ' + activeSearchQuery)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
              ${icons['whatsapp']}
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>
      `;
      return;
    }

    servicesGrid.innerHTML = filtered.map(svc => {
      const iconSvg = icons[svc.icon] || icons['shield-check'];
      const popularBadge = svc.isPopular ? `<span class="service-badge popular">⭐ Popular</span>` : '';
      const imageMarkup = svc.image ? `
        <div class="service-card-media">
          <img src="${svc.image}" alt="${escapeHtml(svc.title)}" width="320" height="160" loading="lazy">
        </div>
      ` : '';

      return `
        <article class="service-card ${svc.isPopular ? 'highlighted' : ''}" id="service-${svc.id}">
          ${imageMarkup}

          <div class="service-top-meta">
            <div class="service-icon-wrap" aria-hidden="true">
              ${iconSvg}
            </div>
            <div style="display: flex; gap: 6px; align-items: center; flex-wrap: wrap;">
              ${popularBadge}
              <span class="service-badge primary">${svc.badge}</span>
            </div>
          </div>

          <h3 class="service-title">${svc.title}</h3>
          <div class="service-subtitle">${svc.subtitle}</div>
          <p class="service-desc">${svc.shortDescription}</p>

          <div class="service-features-list">
            ${svc.features.slice(0, 3).map(f => `
              <div class="service-feature-item">
                ${icons['check']}
                <span>${f}</span>
              </div>
            `).join('')}
          </div>

          <div class="service-card-actions">
            <button type="button" class="btn btn-primary btn-sm open-doc-modal-btn" data-id="${svc.id}">
              <span>📋 Required Documents</span>
            </button>
            <div class="service-action-quick-row">
              <a href="${getCallUrl()}" class="btn btn-call btn-sm" aria-label="Call for ${svc.title}">
                ${icons['call']}
                <span>Call</span>
              </a>
              <a href="${getServiceWhatsAppUrl(svc.title)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm" aria-label="WhatsApp for ${svc.title}">
                ${icons['whatsapp']}
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');

    servicesGrid.querySelectorAll('.open-doc-modal-btn').forEach(btn => {
      btn.addEventListener('click', () => openServiceModal(btn.getAttribute('data-id')));
    });
  }

  // -------------------------------------------------------------------------
  // 9. Render Dedicated Mobile Repair & Software Section
  // -------------------------------------------------------------------------
  function renderMobileRepairSection() {
    if (!mobileRepairCardsGrid || !config.services) return;

    const repairServices = config.services.filter(s => s.category === 'mobile-repair');

    mobileRepairCardsGrid.innerHTML = repairServices.map(svc => `
      <div class="mobile-repair-feature-card">
        ${svc.image ? `
          <div class="service-card-media" style="height: 140px; margin-bottom: 16px;">
            <img src="${svc.image}" alt="${escapeHtml(svc.title)}" width="320" height="140" loading="lazy">
          </div>
        ` : ''}
        <div class="repair-icon-box">
          ${icons[svc.icon] || icons['wrench-screwdriver']}
        </div>
        <h4>${svc.title}</h4>
        <div class="repair-subtitle">${svc.subtitle}</div>
        <p>${svc.shortDescription}</p>
        <div class="repair-checklist">
          ${svc.features.map(f => `
            <div class="repair-check-item">
              ${icons['check']}
              <span>${f}</span>
            </div>
          `).join('')}
        </div>
        <div style="display: flex; gap: 8px; margin-top: auto;">
          <button type="button" class="btn btn-call btn-sm open-repair-doc-btn" data-id="${svc.id}" style="flex: 1;">
            <span>📋 Documents</span>
          </button>
          <a href="${getServiceWhatsAppUrl(svc.title)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm" style="flex: 1;">
            ${icons['whatsapp']}
            <span>Inquire</span>
          </a>
        </div>
      </div>
    `).join('');

    mobileRepairCardsGrid.querySelectorAll('.open-repair-doc-btn').forEach(btn => {
      btn.addEventListener('click', () => openServiceModal(btn.getAttribute('data-id')));
    });
  }

  // -------------------------------------------------------------------------
  // 10. Live Search Input Handlers
  // -------------------------------------------------------------------------
  if (serviceSearchInput) {
    serviceSearchInput.addEventListener('input', (e) => {
      activeSearchQuery = e.target.value;
      if (serviceSearchClear) {
        serviceSearchClear.style.display = activeSearchQuery.length > 0 ? 'flex' : 'none';
      }
      filterAndRenderServices();
    });
  }

  if (serviceSearchClear) {
    serviceSearchClear.addEventListener('click', () => {
      if (serviceSearchInput) serviceSearchInput.value = '';
      activeSearchQuery = '';
      serviceSearchClear.style.display = 'none';
      filterAndRenderServices();
    });
  }

  // -------------------------------------------------------------------------
  // 11. Expandable "আরও Online Services" Section Toggle
  // -------------------------------------------------------------------------
  if (moreServicesToggleBtn && moreServicesContent) {
    moreServicesToggleBtn.addEventListener('click', () => {
      const isExpanded = moreServicesContent.classList.contains('open') || moreServicesContent.classList.contains('expanded');
      moreServicesContent.classList.toggle('open', !isExpanded);
      moreServicesContent.classList.toggle('expanded', !isExpanded);
      moreServicesToggleBtn.setAttribute('aria-expanded', !isExpanded);
      
      const label = moreServicesToggleBtn.querySelector('.toggle-label');
      if (label) {
        label.textContent = isExpanded ? 'আরও Online Services দেখুন (View More Online Services)' : 'সংক্ষিপ্ত করুন (Show Less)';
      }
    });
  }

  // -------------------------------------------------------------------------
  // 12. Render Documents Centre & Checklists Section
  // -------------------------------------------------------------------------
  let activeDocCategory = 'all';
  let activeDocQuery = '';

  function renderDocumentCategoryTabs() {
    if (!documentCategoryTabs || !config.categories) return;
    documentCategoryTabs.innerHTML = config.categories.map(cat => `
      <button type="button" class="category-tab-btn ${cat.id === activeDocCategory ? 'active' : ''}" data-category="${cat.id}">
        <span>${cat.label}</span>
      </button>
    `).join('');

    documentCategoryTabs.querySelectorAll('.category-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        documentCategoryTabs.querySelectorAll('.category-tab-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        activeDocCategory = e.currentTarget.getAttribute('data-category');
        filterAndRenderDocuments();
      });
    });
  }

  function filterAndRenderDocuments() {
    if (!documentsGrid || !config.services) return;
    const query = activeDocQuery.toLowerCase().trim();

    const filtered = config.services.filter(svc => {
      const catMatch = (activeDocCategory === 'all') || (svc.category === activeDocCategory);
      const titleMatch = svc.title.toLowerCase().includes(query);
      const subMatch = svc.subtitle.toLowerCase().includes(query);
      const docsMatch = svc.documents.some(d => d.toLowerCase().includes(query));
      return catMatch && (query === '' || titleMatch || subMatch || docsMatch);
    });

    if (filtered.length === 0) {
      documentsGrid.innerHTML = `
        <div class="no-services-found" style="grid-column: 1 / -1;">
          <p>কোনো ডকুমেন্টস তালিকা পাওয়া যায়নি। বিস্তারিত জানতে আমাদের সাথে সরাসরি যোগাযোগ করুন।</p>
          <a href="${getWhatsAppUrl('Hello JANNAT ENTERPRISE, I want to confirm documents for: ' + activeDocQuery)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="margin-top: 1rem; display: inline-flex;">
            ${icons['whatsapp']}
            <span>Inquire on WhatsApp</span>
          </a>
        </div>
      `;
      return;
    }

    documentsGrid.innerHTML = filtered.map(svc => `
      <div class="doc-checklist-card">
        <div class="doc-checklist-header">
          <div class="doc-checklist-icon">${icons[svc.icon] || icons['shield-check']}</div>
          <div class="doc-checklist-title">
            <h4>${svc.title}</h4>
            <span>${svc.subtitle}</span>
          </div>
        </div>

        <ul class="doc-items-ul">
          ${svc.documents.map(d => `
            <li class="doc-item-li">
              ${icons['check']}
              <span>${d}</span>
            </li>
          `).join('')}
        </ul>

        <div class="doc-note-box">
          <strong>Note:</strong> ${svc.importantNote}
        </div>

        <div style="display: flex; gap: 8px; margin-top: auto;">
          <button type="button" class="btn btn-primary btn-sm open-doc-modal-btn" data-id="${svc.id}" style="flex: 1;">
            <span>View Details</span>
          </button>
          <a href="${getServiceWhatsAppUrl(svc.title)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm" style="flex: 1;">
            ${icons['whatsapp']}
            <span>Inquire</span>
          </a>
        </div>
      </div>
    `).join('');

    documentsGrid.querySelectorAll('.open-doc-modal-btn').forEach(btn => {
      btn.addEventListener('click', () => openServiceModal(btn.getAttribute('data-id')));
    });
  }

  if (docSearchInput) {
    docSearchInput.addEventListener('input', (e) => {
      activeDocQuery = e.target.value;
      filterAndRenderDocuments();
    });
  }

  // -------------------------------------------------------------------------
  // 13. Render Training Credentials
  // -------------------------------------------------------------------------
  function renderTrainings() {
    if (!trainingGrid || !config.trainings) return;

    trainingGrid.innerHTML = config.trainings.map(item => `
      <div class="training-card">
        <div class="training-card-header">
          <h4>${item.title}</h4>
          <span class="training-verified-pill">✓ Verified</span>
        </div>
        <p>${item.description}</p>
      </div>
    `).join('');
  }

  // -------------------------------------------------------------------------
  // 14. Service Detail & Documents Modal Logic
  // -------------------------------------------------------------------------
  function openServiceModal(serviceId) {
    const service = config.services.find(s => s.id === serviceId);
    if (!service || !serviceModal) return;

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
    if (modalCallBtn) modalCallBtn.href = getCallUrl();
    if (modalWhatsAppBtn) modalWhatsAppBtn.href = getServiceWhatsAppUrl(service.title);

    serviceModal.classList.add('open');
    serviceModal.classList.add('active');
    document.body.classList.add('modal-open');
    serviceModal.setAttribute('aria-hidden', 'false');

    setTimeout(() => modalCloseBtn?.focus(), 50);
  }

  function closeServiceModal() {
    if (!serviceModal) return;
    serviceModal.classList.remove('open');
    serviceModal.classList.remove('active');
    document.body.classList.remove('modal-open');
    serviceModal.setAttribute('aria-hidden', 'true');
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeServiceModal);
  if (serviceModal) {
    serviceModal.addEventListener('click', (e) => {
      if (e.target === serviceModal) closeServiceModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && serviceModal && (serviceModal.classList.contains('open') || serviceModal.classList.contains('active'))) {
      closeServiceModal();
    }
  });

  // -------------------------------------------------------------------------
  // 15. Quick WhatsApp Inquiry Form Handler
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
  // 16. Initialize Everything
  // -------------------------------------------------------------------------
  renderPopularServices();
  renderCategoryTabs();
  filterAndRenderServices();
  renderMobileRepairSection();
  renderDocumentCategoryTabs();
  filterAndRenderDocuments();
  renderTrainings();
});
