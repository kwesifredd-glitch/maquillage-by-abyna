/**
 * Maquillage by Abyna — Interactive Features & Application Scripts
 */

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initMobileDrawer();
  initGalleryAndLightbox();
  initFaqAccordion();
  initContactForms();
  initQuestionnaire();
  initFloatingWhatsApp();
});

/* --------------------------------------------------------------------------
   1. Header Scroll Effect
   -------------------------------------------------------------------------- */
function initHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

/* --------------------------------------------------------------------------
   2. Mobile Drawer Navigation
   -------------------------------------------------------------------------- */
function initMobileDrawer() {
  const toggleBtn = document.querySelector(".nav-toggle");
  const drawer = document.querySelector(".mobile-drawer");
  if (!toggleBtn || !drawer) return;

  const toggleMenu = () => {
    const isOpen = drawer.classList.toggle("open");
    toggleBtn.classList.toggle("open", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  };

  toggleBtn.addEventListener("click", toggleMenu);

  // Close when clicking a nav link
  drawer.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", () => {
      drawer.classList.remove("open");
      toggleBtn.classList.remove("open");
      document.body.style.overflow = "";
    });
  });
}

/* --------------------------------------------------------------------------
   3. Gallery Rendering & Lightbox System
   -------------------------------------------------------------------------- */
let activeItems = [];
let currentLightboxIndex = 0;

function initGalleryAndLightbox() {
  const galleryContainer = document.querySelector(".dynamic-gallery-grid");
  const filterPills = document.querySelectorAll(".filter-pill");

  if (!galleryContainer || typeof SITE_CONFIG === "undefined") {
    // If static gallery present on page, still initialize lightbox
    initStaticLightbox();
    return;
  }

  // Determine initial filter from URL hash
  const hash = window.location.hash.replace("#", "");
  let initialCategory = "all";
  if (["traditional", "white-wedding", "editorial"].includes(hash)) {
    initialCategory = hash;
  }

  // Render gallery
  renderGallery(initialCategory);

  // Set active filter pill
  filterPills.forEach(pill => {
    const cat = pill.getAttribute("data-filter");
    pill.classList.toggle("active", cat === initialCategory);

    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const category = pill.getAttribute("data-filter");
      renderGallery(category);
      if (category !== "all") {
        window.history.replaceState(null, "", `#${category}`);
      } else {
        window.history.replaceState(null, "", window.location.pathname);
      }
    });
  });

  // Setup lightbox markup & listeners
  setupLightbox();
}

function renderGallery(category) {
  const galleryContainer = document.querySelector(".dynamic-gallery-grid");
  if (!galleryContainer) return;

  const isHomePreview = galleryContainer.dataset.preview === "true";
  let items = SITE_CONFIG.portfolio || [];

  if (category && category !== "all") {
    items = items.filter(item => item.category === category);
  }

  if (isHomePreview) {
    items = items.slice(0, 6); // Top 6 for homepage preview
  }

  activeItems = items;

  galleryContainer.innerHTML = items.map((item, index) => `
    <article class="gallery-card" data-index="${index}" tabindex="0" role="button" aria-label="View ${item.title}">
      <img src="${item.thumbnail}" alt="${item.title} — Maquillage by Abyna" loading="lazy" width="600" height="750">
      <div class="gallery-card-overlay">
        <span class="gallery-card-tag">${item.tag || item.categoryLabel}</span>
        <h3 class="gallery-card-title">${item.title}</h3>
        <span class="gallery-card-cta">
          <span>View Fullscreen</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
        </span>
      </div>
    </article>
  `).join("");

  // Attach click listener to newly rendered cards
  galleryContainer.querySelectorAll(".gallery-card").forEach(card => {
    card.addEventListener("click", () => {
      const idx = parseInt(card.getAttribute("data-index"), 10);
      openLightbox(idx);
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const idx = parseInt(card.getAttribute("data-index"), 10);
        openLightbox(idx);
      }
    });
  });
}

function setupLightbox() {
  let modal = document.querySelector(".lightbox-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.className = "lightbox-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", "Portfolio image preview");
    modal.innerHTML = `
      <div class="lightbox-counter">1 of 1</div>
      <button class="lightbox-btn lightbox-close" aria-label="Close modal">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
      <button class="lightbox-btn lightbox-prev" aria-label="Previous image">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button class="lightbox-btn lightbox-next" aria-label="Next image">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
      </button>
      <div class="lightbox-content-wrap">
        <div class="lightbox-image-container">
          <img class="lightbox-img" src="" alt="Bridal makeup work">
        </div>
        <div class="lightbox-caption-bar">
          <h3 class="lightbox-title"></h3>
          <p class="lightbox-meta"></p>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const closeBtn = modal.querySelector(".lightbox-close");
  const prevBtn = modal.querySelector(".lightbox-prev");
  const nextBtn = modal.querySelector(".lightbox-next");

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", () => navigateLightbox(-1));
  nextBtn.addEventListener("click", () => navigateLightbox(1));

  // Click outside to close
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.classList.contains("lightbox-content-wrap") || e.target.classList.contains("lightbox-image-container")) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  window.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateLightbox(-1);
    if (e.key === "ArrowRight") navigateLightbox(1);
  });

  // Touch swipe support
  let touchStartX = 0;
  modal.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  modal.addEventListener("touchend", (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) navigateLightbox(-1);
      else navigateLightbox(1);
    }
  }, { passive: true });
}

function openLightbox(index) {
  const modal = document.querySelector(".lightbox-modal");
  if (!modal || activeItems.length === 0) return;

  currentLightboxIndex = index;
  updateLightboxContent();
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const modal = document.querySelector(".lightbox-modal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

function navigateLightbox(direction) {
  if (activeItems.length <= 1) return;
  currentLightboxIndex = (currentLightboxIndex + direction + activeItems.length) % activeItems.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const modal = document.querySelector(".lightbox-modal");
  if (!modal) return;

  const item = activeItems[currentLightboxIndex];
  if (!item) return;

  const img = modal.querySelector(".lightbox-img");
  const title = modal.querySelector(".lightbox-title");
  const meta = modal.querySelector(".lightbox-meta");
  const counter = modal.querySelector(".lightbox-counter");

  img.classList.remove("loaded");
  img.src = item.image;
  img.alt = `${item.title} — Maquillage by Abyna`;
  img.onload = () => img.classList.add("loaded");

  title.textContent = item.title;
  meta.textContent = `${item.categoryLabel} · ${item.description || ""}`;
  counter.textContent = `${currentLightboxIndex + 1} of ${activeItems.length}`;
}

function initStaticLightbox() {
  setupLightbox();
  const staticCards = document.querySelectorAll(".static-gallery-card");
  if (!staticCards.length) return;

  activeItems = Array.from(staticCards).map(card => ({
    title: card.dataset.title || "Bridal Glamour",
    categoryLabel: card.dataset.category || "Maquillage by Abyna",
    image: card.dataset.image || card.querySelector("img")?.src,
    description: card.dataset.description || ""
  }));

  staticCards.forEach((card, idx) => {
    card.addEventListener("click", () => openLightbox(idx));
  });
}

/* --------------------------------------------------------------------------
   4. FAQ Accordion
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const button = item.querySelector(".faq-button");
    if (!button) return;

    button.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      // Close others in same accordion
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove("open");
      });
      item.classList.toggle("open", !isOpen);
    });
  });
}

/* --------------------------------------------------------------------------
   5. Contact Form Validation & WhatsApp Handshake
   -------------------------------------------------------------------------- */
function initContactForms() {
  const contactForm = document.getElementById("bridalContactForm");
  const directWhatsappBtn = document.getElementById("btnDirectWhatsApp");

  if (contactForm) {
    contactForm.addEventListener("submit", handleContactSubmit);
  }

  if (directWhatsappBtn) {
    directWhatsappBtn.addEventListener("click", (e) => {
      e.preventDefault();
      generateAndOpenWhatsApp();
    });
  }

  // Pre-fill package if query param exists
  const params = new URLSearchParams(window.location.search);
  const pkgParam = params.get("package");
  const packageSelect = document.getElementById("eventPackage");
  if (pkgParam && packageSelect) {
    packageSelect.value = pkgParam;
  }
}

function handleContactSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const statusAlert = document.getElementById("formStatusAlert");

  // Validate form
  const name = form.elements["fullName"]?.value.trim();
  const email = form.elements["email"]?.value.trim();
  const phone = form.elements["phone"]?.value.trim();
  const date = form.elements["eventDate"]?.value;
  const service = form.elements["eventPackage"]?.value;
  const message = form.elements["message"]?.value.trim();

  if (!name || !email || !phone || !date) {
    showFormAlert(statusAlert, "error", "Please fill in all required fields (Name, Email, Phone/WhatsApp, and Event Date).");
    return;
  }

  const submitBtn = form.querySelector("button[type='submit']");
  const originalBtnText = submitBtn ? submitBtn.innerHTML : "Submit";
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `Sending...`;
  }

  const formData = new FormData(form);

  // Send to Formspree endpoint (or fallback gracefully)
  const endpoint = SITE_CONFIG?.brand?.formspreeEndpoint || form.action;

  fetch(endpoint, {
    method: "POST",
    body: formData,
    headers: { "Accept": "application/json" }
  })
  .then(res => {
    if (res.ok) {
      showFormAlert(statusAlert, "success", `Thank you, ${name}! Your bridal inquiry has been received. Abyna's team will contact you within 24 hours. You can also chat directly on WhatsApp for immediate date checks.`);
      form.reset();
    } else {
      throw new Error("Submission response not ok");
    }
  })
  .catch(() => {
    // Graceful fallback: Offer one-click WhatsApp dispatch with the entered data
    showFormAlert(statusAlert, "success", `Thank you, ${name}! We've saved your inquiry. For immediate confirmation, click below to message Abyna directly on WhatsApp.`);
    setTimeout(() => {
      generateAndOpenWhatsApp({ name, email, phone, date, service, message });
    }, 1200);
  })
  .finally(() => {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });
}

function showFormAlert(container, type, text) {
  if (!container) return;
  container.className = `form-alert ${type}`;
  container.innerHTML = text;
  container.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function generateAndOpenWhatsApp(details = {}) {
  const name = details.name || document.getElementById("fullName")?.value.trim() || "";
  const date = details.date || document.getElementById("eventDate")?.value || "";
  const pkg = details.service || document.getElementById("eventPackage")?.value || "Bridal Inquiry";
  const notes = details.message || document.getElementById("message")?.value.trim() || "";

  let msg = `Hi Abyna! I would like to inquire about bridal makeup availability with Maquillage by Abyna.`;
  if (name) msg += `\n\n• Name: ${name}`;
  if (date) msg += `\n• Wedding Date: ${date}`;
  if (pkg) msg += `\n• Package / Service: ${pkg}`;
  if (notes) msg += `\n• Additional Notes: ${notes}`;
  msg += `\n\nLooking forward to speaking with you!`;

  const phone = SITE_CONFIG?.brand?.whatsappNumber || "233240000000";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

/* --------------------------------------------------------------------------
   6. Client Bridal Questionnaire
   -------------------------------------------------------------------------- */
function initQuestionnaire() {
  const form = document.getElementById("bridalQuestionnaireForm");
  const sendWhatsAppBtn = document.getElementById("btnQuestionnaireWhatsApp");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const alertBox = document.getElementById("questionnaireAlert");
    showFormAlert(alertBox, "success", "Your bridal details have been submitted! You can now send this summary directly to Abyna via WhatsApp below.");
    sendQuestionnaireViaWhatsApp(form);
  });

  if (sendWhatsAppBtn) {
    sendWhatsAppBtn.addEventListener("click", () => {
      sendQuestionnaireViaWhatsApp(form);
    });
  }
}

function sendQuestionnaireViaWhatsApp(form) {
  const data = new FormData(form);
  const bride = data.get("brideName") || "Bride";
  const partner = data.get("partnerName") || "";
  const date = data.get("weddingDate") || "TBD";
  const tradDate = data.get("traditionalDate") || "";
  const location = data.get("prepLocation") || "Accra";
  const look = data.get("preferredLook") || "Soft Glam";
  const skin = data.get("skinType") || "Normal";
  const party = data.get("partyCount") || "0";
  const notes = data.get("notes") || "";

  let msg = `*BRIDAL CONSULTATION QUESTIONNAIRE — MAQUILLAGE BY ABYNA*\n\n`;
  msg += `👰 *Bride:* ${bride}${partner ? ` & ${partner}` : ""}\n`;
  msg += `📅 *White Wedding Date:* ${date}\n`;
  if (tradDate) msg += `💍 *Traditional Date:* ${tradDate}\n`;
  msg += `📍 *Prep Suite / Location:* ${location}\n`;
  msg += `✨ *Preferred Aesthetic:* ${look}\n`;
  msg += `💧 *Skin Type:* ${skin}\n`;
  msg += `👥 *Bridal Party Makeup Count:* ${party}\n`;
  if (notes) msg += `📝 *Notes/Vision:* ${notes}\n`;
  msg += `\nSubmitted from website bridal questionnaire.`;

  const phone = SITE_CONFIG?.brand?.whatsappNumber || "233240000000";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

/* --------------------------------------------------------------------------
   7. Universal Floating WhatsApp Button
   -------------------------------------------------------------------------- */
function initFloatingWhatsApp() {
  if (document.querySelector(".floating-whatsapp")) return;

  const phone = SITE_CONFIG?.brand?.whatsappNumber || "233240000000";
  const defaultMsg = encodeURIComponent("Hi Abyna, I'd like to enquire about bridal makeup for my wedding.");

  const floatBtn = document.createElement("a");
  floatBtn.className = "floating-whatsapp";
  floatBtn.href = `https://wa.me/${phone}?text=${defaultMsg}`;
  floatBtn.target = "_blank";
  floatBtn.rel = "noopener noreferrer";
  floatBtn.setAttribute("aria-label", "Chat directly with Abyna on WhatsApp");

  floatBtn.innerHTML = `
    <span class="floating-whatsapp-tooltip">Inquire on WhatsApp</span>
    <div class="floating-whatsapp-btn">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
    </div>
  `;

  document.body.appendChild(floatBtn);
}
