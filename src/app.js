// walterbeinsteinproperty - Quiet Luxury Client Engine

// --- Properties & Catalog Schema ---
const PROPERTIES_DATA = [
  {
    id: "casa-di-pietra",
    title: "Case di Pietra",
    tagline: "An ancestral stone barn re-imagined as a raw sanctuary.",
    description: "Nestled among ancient cork oaks, this Portuguese retreat marries rough lime plaster walls with hand-hewn oak rafters. A dialogue between historic weight and minimalist weightlessness.",
    location: "Alentejo, Portugal",
    country: "Portugal",
    pricePerNight: 650,
    currency: "€",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=85",
    vibe: "Rustic Minimalist",
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    features: ["Local limestone baths", "Sartorial linen sheets", "Saltwater infinity pool", "Olive grove path"]
  },
  {
    id: "villa-dei-cipressi",
    title: "Villa dei Cipressi",
    tagline: "Light, stone, and the gentle sigh of old olive orchards.",
    description: "A monolithic lime-washed villa in Puglia. Designed around an internal courtyard, featuring antique flagstones underfoot and bespoke brass fixtures that oxidize beautifully over time.",
    location: "Puglia, Italy",
    country: "Italy",
    pricePerNight: 950,
    currency: "€",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    vibe: "Sanctuary",
    bedrooms: 4,
    bathrooms: 4,
    maxGuests: 8,
    features: ["Private walled gardens", "Restored open hearth", "Oxidized brass accents", "Outdoor chef kitchen"]
  },
  {
    id: "komorebi-house",
    title: "Komorebi House",
    tagline: "Bespoke cedarwood framing the quiet dance of forest light.",
    description: "A contemplative retreat overlooking the bamboo hills of Arashiyama. Features modular washi screens, heated cedar plank floors, and an onsen-inspired hinoki wood bath.",
    location: "Kyoto, Japan",
    country: "Japan",
    pricePerNight: 820,
    currency: "€",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    vibe: "Zen Retreat",
    bedrooms: 1,
    bathrooms: 1.5,
    maxGuests: 2,
    features: ["Hinoki wood soak tub", "Woven tatami room", "Moss garden overlook", "Handmade ceramic service"]
  },
  {
    id: "cove-house",
    title: "Cove House",
    tagline: "Tactile board-marked concrete mirroring wild slate cliffs.",
    description: "Perched above a private cove, this house is a shelter of raw concrete, structural steel, and deep-toned oak. Large openings draw the shifting Atlantic light directly onto the textured linen drapes.",
    location: "Cornwall, UK",
    country: "UK",
    pricePerNight: 580,
    currency: "€",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
    vibe: "Coastal Monolith",
    bedrooms: 3,
    bathrooms: 2.5,
    maxGuests: 6,
    features: ["Board-marked concrete walls", "Wood burning stove", "Panoramic sea views", "Bespoke wool blankets"]
  },
  {
    id: "mira-limon",
    title: "Villa Limón",
    tagline: "Sun-dappled clay terraces perfumed with citrus and sea breeze.",
    description: "A cliffside haven in Peloponnese constructed entirely from local sand-toned clay. Soft, curved corridors lead to quiet rooms overlooking the Aegean, styled with raw linen and hand-woven rush chairs.",
    location: "Peloponnese, Greece",
    country: "Greece",
    pricePerNight: 740,
    currency: "€",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    vibe: "Earth & Sea",
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    features: ["Terracotta tiled terraces", "Outdoor shower in stone", "Curated antique urns", "Private cove access"]
  }
];

// --- Journal/Editorial Content ---
const JOURNAL_DATA = {
  "post-1": {
    title: "The Architecture of Silence",
    category: "Philosophy",
    date: "June 12, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=85",
    intro: "In a culture defined by constant ping alerts and sensory overload, the greatest luxury is not gold or marble, but absolute quiet.",
    body: [
      "We approach structural architecture not as the building of objects, but as the framing of silence. A window is not merely an aperture for light; it is a lens that tracks the slow, silent rotation of shadow across a plaster wall. By utilizing high ceilings and bare walls, we give the eye a place to rest.",
      "Our properties omit the clutter of modern hospitality. There are no flashing device panels, no intrusive brand materials, and no noisy machinery. Instead, we allow the slow creak of oak flooring and the rustle of olive leaves in the courtyard to form the acoustic backdrop of your stay.",
      "To inhabit one of our spaces is to participate in a ritual of decompression. We invite you to sit, watch the light shift, and realize that void is not empty—it is full of potential."
    ]
  },
  "post-2": {
    title: "Honest Detailing: Living Finishes",
    category: "Curation",
    date: "May 28, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=85",
    intro: "Most modern design attempts to freeze time, using plastic-coated paints and lacquered sealants. We believe in the poetry of decay.",
    body: [
      "A living finish is a material that has been left raw, open to the chemical kisses of oxygen, water, and human oil. Unlacquered brass fittings start as bright gold but rapidly deepen into complex, dark bronze tones. Local stone thresholds wear down under the path of bare feet, shaping a micro-topography unique to that home.",
      "When we construct our properties, we work exclusively with craftsmen who understand this material honesty. Our plaster is mixed with marble sand and limestone slaked for years, ensuring that its color is deep within the mineral itself, rather than a surface coat.",
      "Over time, your temporary home gathers the memory of your stay, register by register. It is an honest architecture that accepts and celebrates its own impermanence."
    ]
  },
  "post-3": {
    title: "Refining the Morning Ritual",
    category: "The Collection",
    date: "April 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=85",
    intro: "How we begin the day governs how we think. The bath and washing areas are treated as secular shrines to the transition into consciousness.",
    body: [
      "We design bathing spaces around the exact angle of the rising sun. A morning bath should not be a rushed hygienic task, but a slow immersion. We utilize custom-cast deep soaking tubs carved from single blocks of dark basalt or assembled from aromatic hinoki cedarwood.",
      "To step onto cool stone, turn a heavy brass handle, and watch steam rise against textured lime-plaster is a choreographic sequence designed to instill mindfulness.",
      "We select wild organic linen sheets and hand-woven textured Turkish cotton towels to complete this tactile dialogue, ensuring that every touch is comforting and true."
    ]
  }
};

// --- State Variables ---
let currentFilterLocation = "All";
let currentMaxPrice = 1000;

// --- Initialize Event Handlers & Layouts on DOM Load ---
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  renderPropertyGrid();
  initFilters();
  initMaterialSlider();
  initJournalModals();
  initInquiryForm();
  initRevealOnScroll();
});

// 1. Navigation & Scroll Coordinates
function initNavbar() {
  const header = document.querySelector("header");
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenuClose = document.getElementById("mobile-menu-close");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  // Sticky border & transparency shifts on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("bg-cream/90", "backdrop-blur-md", "py-4", "border-b", "border-sand/40", "shadow-sm");
      header.classList.remove("bg-transparent", "py-6");
    } else {
      header.classList.remove("bg-cream/90", "backdrop-blur-md", "py-4", "border-b", "border-sand/40", "shadow-sm");
      header.classList.add("bg-transparent", "py-6");
    }
  });

  // Smooth scroll delegation for sitemap
  document.querySelectorAll("[data-scroll-to]").forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = button.getAttribute("data-scroll-to");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        // Close mobile drawer if open
        if (mobileDrawer) {
          mobileDrawer.classList.add("hidden");
        }
      }
    });
  });

  // Mobile drawer controls
  if (mobileMenuToggle && mobileDrawer) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileDrawer.classList.toggle("hidden");
    });
  }
  if (mobileMenuClose && mobileDrawer) {
    mobileMenuClose.addEventListener("click", () => {
      mobileDrawer.classList.add("hidden");
    });
  }
  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (mobileDrawer) mobileDrawer.classList.add("hidden");
    });
  });
}

// 2. Render Asymmetrical Listing Grid with Dynamic Controls
function renderPropertyGrid() {
  const gridContainer = document.getElementById("property-grid");
  if (!gridContainer) return;

  // Filter properties in real time
  const filtered = PROPERTIES_DATA.filter(p => {
    const matchLocation = currentFilterLocation === "All" || p.country === currentFilterLocation;
    const matchPrice = p.pricePerNight <= currentMaxPrice;
    return matchLocation && matchPrice;
  });

  // Update dynamic count indicator
  const countIndicator = document.getElementById("property-count-indicator");
  if (countIndicator) {
    countIndicator.textContent = `Showing ${filtered.length} of ${PROPERTIES_DATA.length} spaces`;
  }

  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div class="col-span-full text-center py-20 bg-sand/10 border border-dashed border-sand/40 rounded-xl p-8 max-w-lg mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto text-sage/60 mb-4"><path d="M20 7h-9M14 17H5M21 12H3"/></svg>
        <h3 class="font-serif text-2xl text-charcoal mb-2">No Sanctuaries Match Your Criteria</h3>
        <p class="font-sans text-xs text-charcoal/60 leading-relaxed mb-6">
          Consider adjusting your price slider or expanding your location parameters to find a quiet luxury residence.
        </p>
        <button id="reset-filters-btn" class="bg-forest text-cream font-sans text-xs tracking-widest uppercase px-6 py-3 rounded-xl cursor-pointer">
          Reset All Filters
        </button>
      </div>
    `;
    const resetBtn = document.getElementById("reset-filters-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        currentFilterLocation = "All";
        currentMaxPrice = 1000;
        
        // Update input components in view
        const rangeInput = document.getElementById("price-range-slider");
        if (rangeInput) rangeInput.value = 1000;
        const priceLabel = document.getElementById("price-slider-label");
        if (priceLabel) priceLabel.textContent = "€1000 / night";

        document.querySelectorAll(".location-filter-btn").forEach(btn => {
          if (btn.getAttribute("data-country") === "All") {
            btn.classList.add("bg-forest", "text-cream");
            btn.classList.remove("bg-cream/40", "text-charcoal/70");
          } else {
            btn.classList.remove("bg-forest", "text-cream");
            btn.classList.add("bg-cream/40", "text-charcoal/70");
          }
        });

        renderPropertyGrid();
      });
    }
    return;
  }

  // Render cards
  gridContainer.innerHTML = filtered.map((p, idx) => {
    // Asymmetrical structural layout multipliers
    let layoutOffsetClass = "";
    if (idx === 1) {
      layoutOffsetClass = "md:translate-y-12 lg:translate-y-16";
    } else if (idx === 3) {
      layoutOffsetClass = "md:translate-y-6 lg:-translate-y-8";
    } else if (idx === 4) {
      layoutOffsetClass = "lg:translate-y-12";
    }

    return `
      <div class="flex flex-col group ${layoutOffsetClass} fade-in-up" style="animation-delay: ${idx * 150}ms">
        <div class="relative overflow-hidden rounded-xl shadow-sm bg-sand/30 aspect-[3/4] mb-6">
          <img
            src="${p.image}"
            alt="${p.title}"
            class="w-full h-full object-cover rounded-xl transition-transform duration-[3s] ease-out group-hover:scale-105"
            referrerpolicy="no-referrer"
          />
          <div class="absolute top-4 left-4 bg-cream/90 backdrop-blur-sm px-3 py-1.5 rounded-[4px] border border-sand/30 shadow-xs">
            <span class="font-sans text-[10px] tracking-widest text-charcoal uppercase">
              From ${p.currency}${p.pricePerNight} / night
            </span>
          </div>
          <div class="absolute bottom-4 left-4 bg-forest/85 backdrop-blur-sm px-3 py-1.5 rounded-[4px]">
            <span class="font-sans text-[9px] tracking-[0.2em] text-cream uppercase font-medium">
              ${p.vibe}
            </span>
          </div>
        </div>

        <div class="space-y-2">
          <div class="flex items-center space-x-1 text-sage text-[10px] tracking-widest uppercase font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-sage"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>${p.location}</span>
          </div>
          
          <h3 class="font-serif text-2xl md:text-3xl text-charcoal group-hover:text-forest transition-colors duration-300">
            ${p.title}
          </h3>
          
          <p class="font-sans font-light text-xs md:text-sm text-charcoal/70 leading-relaxed line-clamp-2">
            ${p.tagline}
          </p>

          <div class="pt-4 flex items-center justify-between">
            <div class="flex items-center space-x-4 text-charcoal/40 font-mono text-[10px]">
              <span>${p.bedrooms} Bed</span>
              <span>&bull;</span>
              <span>${p.bathrooms} Bath</span>
            </div>
            
            <button
              data-property-id="${p.id}"
              class="view-property-btn flex items-center space-x-1.5 font-sans text-[10px] tracking-[0.18em] uppercase text-forest font-semibold cursor-pointer group/btn"
            >
              <span>View Volume</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="transition-transform duration-300 group-hover/btn:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Bind View Volume detailing modal events
  document.querySelectorAll(".view-property-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const propertyId = btn.getAttribute("data-property-id");
      const match = PROPERTIES_DATA.find(p => p.id === propertyId);
      if (match) {
        showPropertyDetailModal(match);
      }
    });
  });
}

// 3. Dynamic Filter State Management
function initFilters() {
  const rangeInput = document.getElementById("price-range-slider");
  const priceLabel = document.getElementById("price-slider-label");

  if (rangeInput && priceLabel) {
    rangeInput.addEventListener("input", (e) => {
      currentMaxPrice = Number(e.target.value);
      priceLabel.textContent = `€${currentMaxPrice} / night`;
      renderPropertyGrid();
    });
  }

  // Location filter buttons
  document.querySelectorAll(".location-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      // Toggle styles
      document.querySelectorAll(".location-filter-btn").forEach(b => {
        b.classList.remove("bg-forest", "text-cream");
        b.classList.add("bg-cream/40", "text-charcoal/70");
      });
      btn.classList.add("bg-forest", "text-cream");
      btn.classList.remove("bg-cream/40", "text-charcoal/70");

      currentFilterLocation = btn.getAttribute("data-country");
      renderPropertyGrid();
    });
  });
}

// 4. Modal Details Card Overlay
function showPropertyDetailModal(p) {
  const modal = document.getElementById("property-detail-modal");
  const modalContent = document.getElementById("property-modal-content");
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="space-y-8">
      <!-- Feature Image -->
      <div class="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-sand/30">
        <img
          src="${p.image}"
          alt="${p.title}"
          class="w-full h-full object-cover"
          referrerpolicy="no-referrer"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent pointer-events-none" />
      </div>

      <!-- Info Header -->
      <div class="space-y-3">
        <div class="flex items-center space-x-1.5 text-sage text-xs tracking-widest uppercase font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-sage"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>${p.location}</span>
          <span class="text-sand/60">&bull;</span>
          <span class="text-forest/80 font-medium">${p.vibe}</span>
        </div>
        
        <h3 class="font-serif text-3xl md:text-5xl text-charcoal">
          ${p.title}
        </h3>
        
        <p class="font-serif text-lg text-forest italic font-light">
          &ldquo;${p.tagline}&rdquo;
        </p>
      </div>

      <!-- Specifications Grid -->
      <div class="grid grid-cols-3 gap-4 py-4 border-y border-sand/40">
        <div class="text-center">
          <span class="block font-sans text-[10px] tracking-wider text-charcoal/40 uppercase">Bedrooms</span>
          <span class="font-serif text-xl md:text-2xl text-charcoal font-medium">${p.bedrooms}</span>
        </div>
        <div class="text-center border-x border-sand/30">
          <span class="block font-sans text-[10px] tracking-wider text-charcoal/40 uppercase">Bathrooms</span>
          <span class="font-serif text-xl md:text-2xl text-charcoal font-medium">${p.bathrooms}</span>
        </div>
        <div class="text-center">
          <span class="block font-sans text-[10px] tracking-wider text-charcoal/40 uppercase">Max Occupancy</span>
          <span class="font-serif text-xl md:text-2xl text-charcoal font-medium">${p.maxGuests} Guests</span>
        </div>
      </div>

      <!-- Descriptive Narrative -->
      <div class="space-y-4">
        <span class="font-sans text-[10px] tracking-[0.2em] uppercase text-charcoal/50 font-semibold block">
          The Volume &amp; Narrative
        </span>
        <p class="font-sans font-light text-sm md:text-base text-charcoal/80 leading-relaxed">
          ${p.description}
        </p>
      </div>

      <!-- Bespoke Features Checklist -->
      <div class="space-y-4">
        <span class="font-sans text-[10px] tracking-[0.2em] uppercase text-charcoal/50 font-semibold block">
          Bespoke Details
        </span>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
          ${p.features.map(f => `
            <li class="flex items-center space-x-2 text-xs md:text-sm text-charcoal/80 font-sans font-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-sage"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
              <span>${f}</span>
            </li>
          `).join("")}
        </ul>
      </div>
    </div>

    <!-- Booking CTA Footer -->
    <div class="mt-12 pt-6 border-t border-sand/40 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
      <div>
        <span class="block font-sans text-[10px] tracking-wider text-charcoal/40 uppercase">Nightly Rate</span>
        <span class="font-serif text-2xl md:text-3xl text-charcoal font-semibold">
          ${p.currency}${p.pricePerNight}
          <span class="font-sans text-xs font-normal text-charcoal/60"> / night</span>
        </span>
      </div>

      <button
        id="modal-request-cta-btn"
        class="bg-forest text-cream font-sans text-xs tracking-widest uppercase px-8 py-4 rounded-xl cursor-pointer text-center font-bold shadow-lg hover:scale-[1.02] hover:bg-[#1e2418] transition-all"
      >
        Request Residence
      </button>
    </div>
  `;

  // Display modal
  modal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");

  // Handle Close buttons
  const closeModal = () => {
    modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  };

  const closeBtn = document.getElementById("close-property-modal");
  if (closeBtn) closeBtn.onclick = closeModal;

  // Bind inquiry redirect action
  const requestBtn = document.getElementById("modal-request-cta-btn");
  if (requestBtn) {
    requestBtn.onclick = () => {
      closeModal();
      
      // Auto pre-populate form property select drop down
      const formPropertySelect = document.getElementById("property-select");
      if (formPropertySelect) {
        formPropertySelect.value = p.title;
      }
      
      // Scroll down smoothly to reservation inquiry desk
      const targetElement = document.getElementById("inquiry");
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    };
  }
}

// 5. Material Slider Scroller Track
function initMaterialSlider() {
  const container = document.getElementById("materials-scroller");
  const leftBtn = document.getElementById("slider-left-btn");
  const rightBtn = document.getElementById("slider-right-btn");
  if (!container) return;

  const scroll = (direction) => {
    const { scrollLeft, clientWidth } = container;
    const scrollAmount = clientWidth * 0.75;
    const targetScroll = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
    container.scrollTo({
      left: targetScroll,
      behavior: "smooth"
    });
  };

  if (leftBtn) leftBtn.addEventListener("click", () => scroll("left"));
  if (rightBtn) rightBtn.addEventListener("click", () => scroll("right"));
}

// 6. Journal essay reading modal dialog triggers
function initJournalModals() {
  const modal = document.getElementById("journal-detail-modal");
  const contentContainer = document.getElementById("journal-modal-content");
  if (!modal || !contentContainer) return;

  document.querySelectorAll(".read-essay-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const postId = btn.getAttribute("data-post-id");
      const post = JOURNAL_DATA[postId];
      if (post) {
        contentContainer.innerHTML = `
          <!-- Essay Header Info -->
          <div class="space-y-4 mb-8 pt-4">
            <span class="font-sans text-[10px] tracking-widest uppercase text-sage font-bold">
              ${post.category} &mdash; Essay Volume
            </span>
            
            <h3 class="font-serif text-3xl md:text-5xl text-charcoal leading-tight max-w-2xl">
              ${post.title}
            </h3>

            <div class="flex items-center space-x-4 text-charcoal/40 font-mono text-[10px] uppercase tracking-widest py-2 border-y border-sand/30">
              <span>Published: ${post.date}</span>
              <span>&bull;</span>
              <span>${post.readTime}</span>
              <span>&bull;</span>
              <span>By W. Beinstein</span>
            </div>
          </div>

          <!-- Vertical Hero Feature Image inside essay -->
          <div class="aspect-[16/9] w-full overflow-hidden rounded-[8px] mb-8 bg-sand/30">
            <img
              src="${post.image}"
              alt="${post.title}"
              class="w-full h-full object-cover"
              referrerpolicy="no-referrer"
            />
          </div>

          <!-- Article Content -->
          <div class="space-y-6 text-charcoal/90 font-sans font-light text-sm md:text-base leading-relaxed max-w-2xl">
            <!-- Italic intro highlight -->
            <p class="font-serif text-lg md:text-xl text-forest italic font-light border-l-2 border-sage pl-4 py-1 leading-relaxed">
              ${post.intro}
            </p>
            
            ${post.body.map(para => `<p>${para}</p>`).join("")}
          </div>

          <!-- Footer of modal -->
          <div class="mt-12 pt-6 border-t border-sand/40 flex items-center justify-between text-xs text-charcoal/40">
            <span>walterbeinsteinproperty &copy; 2026</span>
          </div>
        `;

        modal.classList.remove("hidden");
        document.body.classList.add("overflow-hidden");
      }
    });
  });

  const closeBtn = document.getElementById("close-journal-modal");
  if (closeBtn) {
    closeBtn.onclick = () => {
      modal.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    };
  }
}

// 7. Minimalist Reservation Booking Form with History Persistence
function initInquiryForm() {
  const form = document.getElementById("booking-form-element");
  const successContainer = document.getElementById("booking-success-container");
  const historyContainer = document.getElementById("booking-history-cards");
  const clearHistoryBtn = document.getElementById("clear-history-btn");

  const renderHistory = () => {
    if (!historyContainer) return;
    const raw = localStorage.getItem("walterbeinstein_inquiries");
    if (!raw) {
      historyContainer.innerHTML = "";
      const historyHeader = document.getElementById("history-section-header");
      if (historyHeader) historyHeader.classList.add("hidden");
      return;
    }

    try {
      const saved = JSON.parse(raw);
      if (saved.length === 0) {
        historyContainer.innerHTML = "";
        const historyHeader = document.getElementById("history-section-header");
        if (historyHeader) historyHeader.classList.add("hidden");
        return;
      }

      const historyHeader = document.getElementById("history-section-header");
      if (historyHeader) historyHeader.classList.remove("hidden");

      historyContainer.innerHTML = saved.map(inq => `
        <div class="bg-cream/40 rounded-xl p-5 border border-sand/30 shadow-xs space-y-3">
          <div class="flex justify-between items-start">
            <span class="font-serif text-base font-semibold text-forest">${inq.property}</span>
            <span class="font-mono text-[9px] text-charcoal/40">${inq.referenceId}</span>
          </div>
          <div class="text-xs text-charcoal/75 space-y-1 font-sans font-light">
            <p><span class="font-medium">Guest:</span> ${inq.name}</p>
            <p><span class="font-medium">Stay:</span> ${inq.checkIn} to ${inq.checkOut}</p>
          </div>
          <div class="flex justify-between items-center pt-2 border-t border-sand/20 text-[9px] uppercase tracking-wider text-charcoal/40 font-medium">
            <span>Submitted: ${inq.timestamp}</span>
            <span class="text-sage font-semibold font-sans">Under Registry Review</span>
          </div>
        </div>
      `).join("");
    } catch (e) {
      console.error(e);
    }
  };

  // Render initially
  renderHistory();

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("guest-name").value;
      const email = document.getElementById("guest-email").value;
      const property = document.getElementById("property-select").value;
      const checkIn = document.getElementById("check-in-date").value;
      const checkOut = document.getElementById("check-out-date").value;
      const notes = document.getElementById("guest-notes").value;

      const submitBtn = document.getElementById("booking-submit-btn");
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg class="animate-spin text-cream/70 h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
          <span>Verifying...</span>
        `;
      }

      // Simulate register verification period
      setTimeout(() => {
        const referenceId = "WBP-" + Math.floor(100000 + Math.random() * 900000);
        const timestamp = new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        });

        const newInquiry = {
          name,
          email,
          property,
          checkIn,
          checkOut,
          notes,
          timestamp,
          referenceId
        };

        // Save in localStorage
        const raw = localStorage.getItem("walterbeinstein_inquiries");
        let saved = [];
        if (raw) {
          try { saved = JSON.parse(raw); } catch (err) {}
        }
        saved = [newInquiry, ...saved];
        localStorage.setItem("walterbeinstein_inquiries", JSON.stringify(saved));

        // Render success feedback
        if (successContainer) {
          successContainer.innerHTML = `
            <div class="bg-cream rounded-xl p-8 md:p-12 border border-sage/30 shadow-md text-charcoal">
              <div class="flex flex-col items-center justify-center text-center pb-8 border-b border-sand/40">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-sage mb-4"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <h3 class="font-serif text-3xl md:text-4xl text-forest italic">
                  Inquiry Verified
                </h3>
                <p class="font-mono text-[10px] text-charcoal/40 uppercase tracking-widest mt-1">
                  Reference: ${referenceId}
                </p>
              </div>

              <div class="py-8 font-sans font-light text-sm md:text-base leading-relaxed text-charcoal/95 space-y-6 max-w-2xl mx-auto">
                <p>Dear ${name},</p>
                <p>
                  We have received your requested reservation for <span class="font-medium text-forest font-serif italic text-lg">${property}</span>, starting on <span className="font-semibold">${checkIn}</span> through <span class="font-semibold">${checkOut}</span>.
                </p>
                ${notes ? `
                  <p class="bg-sand/20 border border-sand/40 p-4 rounded-lg text-xs md:text-sm text-charcoal/80 italic font-serif">
                    &ldquo;${notes}&rdquo;
                  </p>
                ` : ""}
                <p>
                  Our primary reservation registrar is currently reviewing your dates against the private estate schedule. You will receive a personalized invitation and a dossier of our material specifics via email (${email}) within the next 24 hours.
                </p>
                <p class="pt-4 font-serif text-base italic text-sage">
                  Warmest regards,<br />
                  <span class="font-serif text-charcoal font-medium not-italic text-sm tracking-wider uppercase block mt-1">The Walter Beinstein Registrar</span>
                </p>
              </div>

              <div class="pt-6 border-t border-sand/40 text-center">
                <button
                  id="submit-another-btn"
                  class="font-sans text-[10px] tracking-widest uppercase text-forest font-semibold hover:underline cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          `;
          
          form.classList.add("hidden");
          successContainer.classList.remove("hidden");

          // Re-bind click handlers
          document.getElementById("submit-another-btn").onclick = () => {
            form.reset();
            form.classList.remove("hidden");
            successContainer.classList.add("hidden");
          };
        }

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `<span>Request Invitation</span>`;
        }

        renderHistory();
      }, 1500);
    });
  }

  if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener("click", () => {
      localStorage.removeItem("walterbeinstein_inquiries");
      renderHistory();
    });
  }

  // Handle Ledger footer news subscription
  const newsletterForm = document.getElementById("newsletter-form");
  const newsletterSuccess = document.getElementById("newsletter-success");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector("input");
      if (!input || !input.value) return;

      const submitBtn = newsletterForm.querySelector("button");
      if (submitBtn) submitBtn.disabled = true;

      setTimeout(() => {
        newsletterForm.classList.add("hidden");
        if (newsletterSuccess) {
          newsletterSuccess.classList.remove("hidden");
        }
      }, 1200);
    });
  }
}

// 8. Scroll-Triggered Reveal Animation Engine
function initRevealOnScroll() {
  const elements = document.querySelectorAll(".fade-in-up, .fade-in");
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;
    elements.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        el.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  // Trigger on load for elements already in view
  setTimeout(revealOnScroll, 300);
}
