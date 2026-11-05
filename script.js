/**
 * ============================================================================
 * SAKURA BHAI — CLIENT REVIEWS & WEBSITE CONTROLLER (MOBILE + FILTER ENHANCED)
 * ============================================================================
 *
 * HOW TO ADD REAL CLIENT REVIEWS PERMANENTLY:
 * 1. Edit `SAKURA_REVIEWS_CONFIG` below (or click "Add Real Review" on the site
 *    and use "Copy JSON Config").
 * 2. Set `isSample: false` when adding a genuine, verified client review.
 * 3. `avatar`: Pass any image path/URL (e.g. "./assets/client1.jpg"), or leave
 *    it empty `""` to automatically generate a sleek purple SVG avatar.
 * ============================================================================
 */

const SAKURA_REVIEWS_CONFIG = {
  // Row 1 scrolls automatically from Right to Left
  row1: [
    {
      id: "rev-101",
      name: "Aarav Singhania",
      role: "Sample Profile • E-Commerce Apparel Brand",
      service: "Meta Ads",
      categoryGroup: "Meta Ads",
      metric: "7.2x Blended ROAS",
      rating: 5,
      avatar: "",
      isSample: true,
      feedback:
        "[Sample Review Placeholder] Restructuring our Meta Advantage+ campaigns and Server-Side CAPI with SAKURA BHAI scaled our ROAS while keeping acquisition costs predictable week over week."
    },
    {
      id: "rev-102",
      name: "Meera Nair",
      role: "Sample Profile • SaaS & B2B Platform",
      service: "Google Ads",
      categoryGroup: "Google Ads",
      metric: "2.4x Qualified Demos",
      rating: 5,
      avatar: "",
      isSample: true,
      feedback:
        "[Sample Review Placeholder] Their high-intent Google Search and Performance Max architecture eliminated wasted ad spend and doubled our qualified demo bookings within the first 45 days."
    },
    {
      id: "rev-103",
      name: "Kabir Malhotra",
      role: "Sample Profile • D2C Skincare Label",
      service: "Instagram Ads",
      categoryGroup: "Meta Ads",
      metric: "3.8% Reels CTR",
      rating: 5,
      avatar: "",
      isSample: true,
      feedback:
        "[Sample Review Placeholder] The native Reels ad hooks and Story funnels engineered by SAKURA BHAI turned cold Instagram scrollers into repeat customers with our highest CTR to date."
    },
    {
      id: "rev-104",
      name: "Zoya Merchant",
      role: "Sample Profile • Luxury Real Estate Group",
      service: "WhatsApp Ads",
      categoryGroup: "WhatsApp",
      metric: "-52% Cost Per Lead",
      rating: 5,
      avatar: "",
      isSample: true,
      feedback:
        "[Sample Review Placeholder] Switching from static lead forms to Click-to-WhatsApp Ads cut our cost-per-qualified-conversation in half and connected buyers directly with our sales desk."
    },
    {
      id: "rev-105",
      name: "Devansh Verma",
      role: "Sample Profile • FinTech & Trading Academy",
      service: "Telegram Ads",
      categoryGroup: "Telegram Ads",
      metric: "+18,500 Active Joins",
      rating: 5,
      avatar: "",
      isSample: true,
      feedback:
        "[Sample Review Placeholder] SAKURA BHAI's Telegram Sponsored Ad targeting and automated onboarding bot grew our active community with high-retention members at an unbeatable CPL."
    }
  ],

  // Row 2 scrolls in the opposite direction (Left to Right) for visual depth
  row2: [
    {
      id: "rev-201",
      name: "Riya Deshmukh",
      role: "Sample Profile • Omnichannel Retail Chain",
      service: "WhatsApp API",
      categoryGroup: "WhatsApp",
      metric: "28% Cart Recovery",
      rating: 5,
      avatar: "",
      isSample: true,
      feedback:
        "[Sample Review Placeholder] Integrating the official WhatsApp Business Cloud API with automated abandoned-cart broadcasts and chatbot flows recovered 28% of drop-offs on autopilot."
    },
    {
      id: "rev-202",
      name: "Vikramaditya Rao",
      role: "Sample Profile • Healthcare & Clinic Network",
      service: "SEO",
      categoryGroup: "SEO & Web",
      metric: "+310% Organic Traffic",
      rating: 5,
      avatar: "",
      isSample: true,
      feedback:
        "[Sample Review Placeholder] From Core Web Vitals optimization to high-authority content clusters, SAKURA BHAI pushed our commercial keywords into the Top 3 organic positions."
    },
    {
      id: "rev-203",
      name: "Ananya Chatterjee",
      role: "Sample Profile • High-Ticket Coaching Brand",
      service: "Website Design",
      categoryGroup: "SEO & Web",
      metric: "0.8s Load • 4.6% CVR",
      rating: 5,
      avatar: "",
      isSample: true,
      feedback:
        "[Sample Review Placeholder] Our custom dark-mode landing page loads in under a second and immediately elevated our brand authority—conversion rates jumped the week we launched."
    },
    {
      id: "rev-204",
      name: "Siddharth Joshi",
      role: "Sample Profile • Consumer Electronics Brand",
      service: "Google & Meta Ads",
      categoryGroup: "Google Ads",
      metric: "6.1x Omnichannel ROAS",
      rating: 5,
      avatar: "",
      isSample: true,
      feedback:
        "[Sample Review Placeholder] Combining Google Search capture with Meta retargeting and WhatsApp API follow-ups gave us a unified full-funnel machine managed by one sharp team."
    },
    {
      id: "rev-205",
      name: "Neha Kulkarni",
      role: "Sample Profile • EdTech Cohort Platform",
      service: "WhatsApp API & Web",
      categoryGroup: "WhatsApp",
      metric: "94% Broadcast Open Rate",
      rating: 5,
      avatar: "",
      isSample: true,
      feedback:
        "[Sample Review Placeholder] Seamless webhook sync between our new custom website and WhatsApp Cloud API automated our entire webinar reminder sequence with 90%+ open rates."
    }
  ]
};

const STORAGE_KEY = "sakura_bhai_reviews_v2";
let activeFilter = "all";

/**
 * Generates a crisp SVG data URI avatar with initials and a Sakura Purple gradient
 * whenever a custom photo URL isn't provided.
 */
function generateAvatarDataUri(name, index = 0) {
  const parts = String(name || "SB").trim().split(/\s+/);
  const initials =
    parts.length > 1
      ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
      : parts[0].slice(0, 2).toUpperCase();

  const palettes = [
    ["#9333ea", "#ec4899"],
    ["#7e22ce", "#6366f1"],
    ["#a855f7", "#f43f5e"],
    ["#6d28d9", "#c084fc"]
  ];
  const [c1, c2] = palettes[index % palettes.length];

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${c1}" />
        <stop offset="100%" stop-color="${c2}" />
      </linearGradient>
    </defs>
    <rect width="80" height="80" rx="40" fill="url(#g)" />
    <circle cx="40" cy="40" r="37" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="2" />
    <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle"
          fill="#ffffff" font-family="Space Grotesk, Inter, sans-serif"
          font-weight="700" font-size="28" letter-spacing="1">${initials}</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

/**
 * Escapes HTML special characters for safe rendering
 */
function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Renders 5-star SVG rating markup
 */
function renderStarsMarkup(rating = 5) {
  const count = Math.max(1, Math.min(5, Number(rating) || 5));
  const starSvg = `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
  return starSvg.repeat(count);
}

/**
 * Builds a single testimonial card element
 */
function createReviewCardHTML(item, index) {
  const avatarSrc =
    item.avatar && item.avatar.trim() !== ""
      ? escapeHtml(item.avatar.trim())
      : generateAvatarDataUri(item.name, index);

  const badgeLabel = item.isSample ? "Sample Preview" : "Verified Client";
  const badgeClass = item.isSample ? "review-type-pill" : "review-type-pill verified";
  const metricHTML = item.metric
    ? `<div class="review-metric-chip">${escapeHtml(item.metric)}</div>`
    : "";

  return `
    <article class="review-card" tabindex="0" aria-label="Review from ${escapeHtml(item.name)}">
      <div class="review-card-top">
        <div class="review-stars" aria-label="5 out of 5 stars">
          ${renderStarsMarkup(item.rating)}
          <span class="review-rating-num">5.0</span>
        </div>
        <div class="review-badges">
          <span class="review-service-pill">${escapeHtml(item.service)}</span>
          <span class="${badgeClass}">${badgeLabel}</span>
        </div>
      </div>

      ${metricHTML}

      <p class="review-feedback">“${escapeHtml(item.feedback)}”</p>

      <div class="review-author">
        <div class="author-left">
          <img
            src="${avatarSrc}"
            alt="${escapeHtml(item.name)} avatar"
            class="author-avatar"
            loading="lazy"
          />
          <div class="author-meta">
            <span class="author-name">${escapeHtml(item.name)}</span>
            <span class="author-role">${escapeHtml(item.role)}</span>
          </div>
        </div>
        <svg class="quote-watermark" width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
      </div>
    </article>
  `;
}

/**
 * Maps service name to filter group
 */
function resolveCategoryGroup(service) {
  const s = String(service || "").toLowerCase();
  if (s.includes("meta") || s.includes("instagram") || s.includes("insta")) return "Meta Ads";
  if (s.includes("google")) return "Google Ads";
  if (s.includes("whatsapp")) return "WhatsApp";
  if (s.includes("telegram") || s.includes("tg")) return "Telegram Ads";
  if (s.includes("seo") || s.includes("web")) return "SEO & Web";
  return service;
}

/**
 * Loads reviews from localStorage if customized, or falls back to SAKURA_REVIEWS_CONFIG
 */
function getActiveReviews() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && Array.isArray(parsed.row1) && Array.isArray(parsed.row2)) {
        return parsed;
      }
    }
  } catch (err) {
    // Fallback to default config
  }
  return JSON.parse(JSON.stringify(SAKURA_REVIEWS_CONFIG));
}

function saveActiveReviews(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    // Ignore storage errors
  }
}

/**
 * Ensures enough cards exist in a row so the infinite marquee fills wide screens
 */
function ensureMinimumTrackItems(items) {
  if (!items || items.length === 0) return [];
  let result = [...items];
  while (result.length < 5) {
    result = result.concat(items);
  }
  return result;
}

/**
 * Renders both marquee rows and duplicates cards seamlessly (`[...cards, ...cards]`)
 * so the -50% CSS keyframe translation loops infinitely without any jump.
 */
function renderMarqueeRows() {
  const data = getActiveReviews();
  const track1 = document.getElementById("marquee-row-1");
  const track2 = document.getElementById("marquee-row-2");

  const matchItem = (item) => {
    if (activeFilter === "all") return true;
    const group = item.categoryGroup || resolveCategoryGroup(item.service);
    return group === activeFilter || item.service === activeFilter;
  };

  let row1Items = (data.row1 || []).filter(matchItem);
  let row2Items = (data.row2 || []).filter(matchItem);

  // If a specific filter matches items only in one row, mirror them so both rows stay vibrant
  if (row1Items.length === 0 && row2Items.length > 0) row1Items = [...row2Items];
  if (row2Items.length === 0 && row1Items.length > 0) row2Items = [...row1Items];

  const paddedRow1 = ensureMinimumTrackItems(row1Items);
  const paddedRow2 = ensureMinimumTrackItems(row2Items);

  if (track1) {
    const cardsHTML1 = paddedRow1.map((item, idx) => createReviewCardHTML(item, idx)).join("");
    track1.innerHTML = cardsHTML1 + cardsHTML1;
  }

  if (track2) {
    const cardsHTML2 = paddedRow2.map((item, idx) => createReviewCardHTML(item, idx + 3)).join("");
    track2.innerHTML = cardsHTML2 + cardsHTML2;
  }

  attachTouchCardInteractions();
}

/**
 * Enables tap-to-pause & highlight on mobile touch screens
 */
function attachTouchCardInteractions() {
  const allCards = document.querySelectorAll(".review-card");
  allCards.forEach((card) => {
    card.addEventListener("click", (e) => {
      e.stopPropagation();
      const parentRow = card.closest(".marquee-row");
      const wasActive = card.classList.contains("is-active-card");

      document.querySelectorAll(".review-card.is-active-card").forEach((c) => {
        c.classList.remove("is-active-card");
      });
      document.querySelectorAll(".marquee-row.is-touch-paused").forEach((r) => {
        r.classList.remove("is-touch-paused");
      });

      if (!wasActive && parentRow) {
        card.classList.add("is-active-card");
        parentRow.classList.add("is-touch-paused");
      }
    });
  });
}

/**
 * Initializes interactive controls, filter tabs, modal manager, and mobile navigation
 */
function initSakuraApp() {
  renderMarqueeRows();

  // Clicking outside cards clears mobile touch-pause state
  document.addEventListener("click", () => {
    document.querySelectorAll(".review-card.is-active-card").forEach((c) => {
      c.classList.remove("is-active-card");
    });
    document.querySelectorAll(".marquee-row.is-touch-paused").forEach((r) => {
      r.classList.remove("is-touch-paused");
    });
  });

  // Category Filter Pills
  const filterContainer = document.getElementById("review-filter-pills");
  if (filterContainer) {
    filterContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-pill");
      if (!btn) return;
      activeFilter = btn.getAttribute("data-filter") || "all";

      filterContainer.querySelectorAll(".filter-pill").forEach((pill) => {
        const isCurrent = pill === btn;
        pill.classList.toggle("active", isCurrent);
        pill.setAttribute("aria-selected", String(isCurrent));
      });

      renderMarqueeRows();
    });
  }

  // Dynamic footer year
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile Menu Toggle
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const navLinks = document.getElementById("nav-links");
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = navLinks.classList.toggle("is-open");
      mobileBtn.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        mobileBtn.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (e) => {
      if (!navLinks.contains(e.target) && !mobileBtn.contains(e.target)) {
        navLinks.classList.remove("is-open");
        mobileBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Global Pause / Resume Marquee Button
  const toggleMotionBtn = document.getElementById("toggle-motion-btn");
  const toggleMotionLabel = document.getElementById("toggle-motion-label");
  const marqueeShowcase = document.getElementById("marquee-showcase");

  if (toggleMotionBtn && marqueeShowcase) {
    toggleMotionBtn.addEventListener("click", () => {
      const paused = marqueeShowcase.classList.toggle("is-paused");
      toggleMotionBtn.setAttribute("aria-pressed", String(paused));
      if (toggleMotionLabel) {
        toggleMotionLabel.textContent = paused ? "Resume Scroll" : "Pause Scroll";
      }
    });
  }

  // Modal: Add / Manage Real Client Reviews
  const modal = document.getElementById("review-modal");
  const openModalBtn = document.getElementById("open-review-modal-btn");
  const footerManageLink = document.getElementById("footer-manage-reviews");
  const closeModalBtn = document.getElementById("close-review-modal-btn");
  const addReviewForm = document.getElementById("add-review-form");
  const copyJsonBtn = document.getElementById("copy-json-btn");
  const resetReviewsBtn = document.getElementById("reset-reviews-btn");
  const modalStatus = document.getElementById("review-modal-status");

  function openModal(e) {
    if (e) e.preventDefault();
    if (!modal) return;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    if (modalStatus) modalStatus.textContent = "";
  }

  if (openModalBtn) openModalBtn.addEventListener("click", openModal);
  if (footerManageLink) footerManageLink.addEventListener("click", openModal);
  if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Handle adding a new review directly to the live marquee
  if (addReviewForm) {
    addReviewForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("rev-name").value.trim();
      const role = document.getElementById("rev-role").value.trim();
      const service = document.getElementById("rev-service").value;
      const metric = document.getElementById("rev-metric").value.trim();
      const rowChoice = document.getElementById("rev-row").value;
      const avatar = document.getElementById("rev-avatar").value.trim();
      const status = document.getElementById("rev-status").value;
      const feedback = document.getElementById("rev-feedback").value.trim();

      if (!name || !role || !feedback) return;

      const currentData = getActiveReviews();
      const newEntry = {
        id: "rev-" + Date.now(),
        name,
        role,
        service,
        categoryGroup: resolveCategoryGroup(service),
        metric: metric || "5.0★ Verified Impact",
        rating: 5,
        avatar,
        isSample: status === "sample",
        feedback
      };

      if (rowChoice === "2") {
        currentData.row2.unshift(newEntry);
      } else {
        currentData.row1.unshift(newEntry);
      }

      activeFilter = "all";
      const allTab = document.querySelector('.filter-pill[data-filter="all"]');
      if (allTab) {
        document.querySelectorAll(".filter-pill").forEach((p) => p.classList.remove("active"));
        allTab.classList.add("active");
      }

      saveActiveReviews(currentData);
      renderMarqueeRows();
      addReviewForm.reset();

      if (modalStatus) {
        modalStatus.textContent = `✓ Added "${name}" to Row ${rowChoice} of the live marquee!`;
      }
    });
  }

  // Copy JSON Configuration to Clipboard
  if (copyJsonBtn) {
    copyJsonBtn.addEventListener("click", async () => {
      const currentData = getActiveReviews();
      const snippet = `const SAKURA_REVIEWS_CONFIG = ${JSON.stringify(currentData, null, 2)};`;
      try {
        await navigator.clipboard.writeText(snippet);
        if (modalStatus) {
          modalStatus.textContent = "✓ Copied SAKURA_REVIEWS_CONFIG JSON to clipboard! Paste into script.js.";
        }
      } catch (err) {
        if (modalStatus) {
          modalStatus.textContent = "Could not auto-copy. Check browser console for JSON output.";
          console.log(snippet);
        }
      }
    });
  }

  // Reset Reviews to Default Config
  if (resetReviewsBtn) {
    resetReviewsBtn.addEventListener("click", () => {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (err) {}
      activeFilter = "all";
      renderMarqueeRows();
      if (modalStatus) {
        modalStatus.textContent = "↺ Reset marquee to default sample preview cards.";
      }
    });
  }

  // Contact Form Handler
  const contactForm = document.getElementById("contact-form");
  const contactStatus = document.getElementById("contact-form-status");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const leadName = document.getElementById("lead-name").value.trim();
      const leadService = document.getElementById("lead-service").value;
      if (contactStatus) {
        contactStatus.textContent = `✓ Thanks ${leadName}! Your inquiry for ${leadService} has been queued for our growth team.`;
      }
      contactForm.reset();
    });
  }
}

document.addEventListener("DOMContentLoaded", initSakuraApp);
