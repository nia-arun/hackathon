// 1. Precise Data Store: 36 Curated entries mapping perfectly to all 18 variations
const crops = [
  // ==================== BEGINNER BRACKET ====================
  // Windowsill + Low + Beginner
  { name: "Peppermint", img: "assets/peppermint.png", reason: "Easy to grow and has an amazing scent.", space: "windowsill", light: "low", level: "beginner" },
  { name: "Spearmint", img: "assets/spearmint.png", reason: "Thrives in small window boxes with minimal light requirements.", space: "windowsill", light: "low", level: "beginner" },

  // Windowsill + Medium + Beginner
  { name: "Butterhead Lettuce", img: "assets/lettuce.png", reason: "The beginner favorite. Fast leaf production under average light.", space: "windowsill", light: "medium", level: "beginner" },
  { name: "Romaine Lettuce", img: "assets/romainelettuce.png", reason: "Crisp, reliable, and perfectly suited for a kitchen window ledge.", space: "windowsill", light: "medium", level: "beginner" },

  // Windowsill + Lots + Beginner
  { name: "Genovese Basil", img: "assets/basil.jpg", reason: "Explodes with aromatic essential oils when given direct, harsh window sun.", space: "windowsill", light: "lots", level: "beginner" },
  { name: "Thai Basil", img: "assets/thaibasil.png", reason: "Loves high-heat window spaces and intensive, bright sunlight cycles.", space: "windowsill", light: "lots", level: "beginner" },

  // Room + Low + Beginner
  { name: "Baby Spinach", img: "assets/babyspinach.png", reason: "Prefers stable, cooler indoor microclimates away from intense heat.", space: "room", light: "low", level: "beginner" },
  { name: "Red Russian Kale", img: "assets/redkale.png", reason: "Extremely resilient crop that handles lower ambient light in room setups.", space: "room", light: "low", level: "beginner" },

  // Room + Medium + Beginner
  { name: "Arugula", img: "assets/arugula.png", reason: "Fast-growing peppery green that thrives on standard ambient indoor light.", space: "room", light: "medium", level: "beginner" },
  { name: "Swiss Chard", img: "assets/chard.png", reason: "Colorful, robust, and grows steadily with regular indoor brightness.", space: "room", light: "medium", level: "beginner" },

  // Room + Lots + Beginner
  { name: "Cherry Tomatoes", img: "assets/tomatoes.png", reason: "A compact variety that performs wonderfully under intense indoor grow configurations.", space: "room", light: "lots", level: "beginner" },
  { name: "Bush Beans", img: "assets/beans.png", reason: "Requires direct tracking and maximum indoor light energy to set pods successfully.", space: "room", light: "lots", level: "beginner" },

  // Balcony + Low + Beginner
  { name: "Chives", img: "assets/chives.png", reason: "Resilient outdoor option that handles lower balcony exposure and steady breezes.", space: "balcony", light: "low", level: "beginner" },
  { name: "Garlic Chives", img: "assets/garlicchives.png", reason: "Sturdy, grass-like green requiring minimal maintenance and low outdoor light.", space: "balcony", light: "low", level: "beginner" },

  // Balcony + Medium + Beginner
  { name: "Lemon Mint", img: "assets/lemonmint.png", reason: "Loves open-air ventilation and intermediate, regular daytime solar exposure.", space: "balcony", light: "medium", level: "beginner" },
  { name: "Parsley", img: "assets/parsley.png", reason: "Thrives with natural outdoor air movement and standard partial sunshine.", space: "balcony", light: "medium", level: "beginner" },

  // Balcony + Lots + Beginner
  { name: "Oregano", img: "assets/oregano.png", reason: "Thrives in hot, exposed positions with maximum open outdoor sunshine.", space: "balcony", light: "lots", level: "beginner" },
  { name: "Thyme", img: "assets/thyme.png", reason: "Loves baking in intensive balcony sun arrays; highly drought and heat tolerant.", space: "balcony", light: "lots", level: "beginner" },


  // ==================== PRO BRACKET ====================
  // Windowsill + Low + Pro
  { name: "Lemon Balm", img: "assets/lemonbalm.png", reason: "Demands expert pH control to avoid rapid root rot in shaded sill areas.", space: "windowsill", light: "low", level: "pro" },
  { name: "Catnip", img: "assets/catnip.png", reason: "Requires highly structured, specific manual feeding intervals under lower light.", space: "windowsill", light: "low", level: "pro" },

  // Windowsill + Medium + Pro
  { name: "Watercress", img: "assets/watercress.png", reason: "Requires highly oxygenated, dynamic water circulation systems right by the glass.", space: "windowsill", light: "medium", level: "pro" },
  { name: "Celery", img: "assets/celery.png", reason: "Demands constant monitoring of EC levels to prevent bitter, stringy stalks.", space: "windowsill", light: "medium", level: "pro" },

  // Windowsill + Lots + Pro
  { name: "Dwarf Lavender", img: "assets/lavender.png", reason: "Requires strict root zone dryness parameters alongside maximum solar energy.", space: "windowsill", light: "lots", level: "pro" },
  { name: "Marjoram", img: "assets/marjoram.png", reason: "Demands strict nutrient limitations and powerful light for leaf concentration.", space: "windowsill", light: "lots", level: "pro" },

  // Room + Low + Pro
  { name: "Bok Choy", img: "assets/bokchoy.png", reason: "Extremely temperature-sensitive; bolts instantly if indoor air shifts out of zone.", space: "room", light: "low", level: "pro" },
  { name: "Tatsoi", img: "assets/tatsoi.png", reason: "Demands meticulous temperature and climate balancing within dark rooms.", space: "room", light: "low", level: "pro" },

  // Room + Medium + Pro
  { name: "Tuscan Kale", img: "assets/kale.png", reason: "A large architectural plant needing specialized vertical scaling and pH balancing.", space: "room", light: "medium", level: "pro" },
  { name: "Mustard Greens", img: "assets/mustard.png", reason: "Demands tight EC monitoring to manage sharp flavor notes under room environments.", space: "room", light: "medium", level: "pro" },

  // Room + Lots + Pro
  { name: "Kaffir Lime", img: "assets/lime.jpg", reason: "Premium woody citrus selection. Demands aggressive indoor climate monitoring.", space: "room", light: "lots", level: "pro" },
  { name: "Meyer Lemon", img: "assets/lemon.png", reason: "Requires deep master-level nutrient adjustments to set fruit in indoor basins.", space: "room", light: "lots", level: "pro" },

  // Balcony + Low + Pro
  { name: "Cilantro", img: "assets/cilantro.png", reason: "Infamously difficult; bolts into seed if balcony nutrient loops heat up even slightly.", space: "balcony", light: "low", level: "pro" },
  { name: "Dill", img: "assets/dill.png", reason: "Deep taproots require delicate, advanced structural oxygenation out on balconies.", space: "balcony", light: "low", level: "pro" },

  // Balcony + Medium + Pro
  { name: "Echinacea", img: "assets/echinacea.jpg", reason: "Sophisticated medicinal plant requiring rigid root maintenance and feeding intervals.", space: "balcony", light: "medium", level: "pro" },
  { name: "Chamomile", img: "assets/chamomile.png", reason: "Delicate flowering requirements mean meticulous nutrient balances are required.", space: "balcony", light: "medium", level: "pro" },

  // Balcony + Lots + Pro
  { name: "Alpine Strawberries", img: "assets/strawberry.png", reason: "Requires strict, regular EC/pH calibration on open sun-drenched balconies.", space: "balcony", light: "lots", level: "pro" },
  { name: "Bell Peppers", img: "assets/peppers.png", reason: "Demands complex calcium balancing to prevent end-rot under raw balcony exposure.", space: "balcony", light: "lots", level: "pro" }
];

// 2. Questions Configuration
const questions = [
  { id: "space", text: "Where will your garden live?", options: ["Windowsill", "Balcony", "Room"] },
  { id: "light", text: "How much natural light enters this space?", options: ["Low", "Medium", "Lots"] },
  { id: "level", text: "How experienced are you?", options: ["Beginner", "Pro"] }
];

let currentStep = 0;
let userAnswers = {};
let isTyping = false;

// 3. Execution Logic
function startQuiz() {
  document.getElementById('landing-section').classList.add('hidden');
  
  const quizSec = document.getElementById('quiz-section');
  quizSec.classList.remove('hidden');
  
  // Minimal 10ms timeout forces the browser to register the smooth transition entry
  setTimeout(() => {
    quizSec.classList.add('section-visible');
  }, 10);
  renderQuestion(); 
}

// ---- localStorage helpers ----
function saveProgress() {
  localStorage.setItem('cf_step', currentStep);
  localStorage.setItem('cf_answers', JSON.stringify(userAnswers));
}
function clearProgress() {
  localStorage.removeItem('cf_step');
  localStorage.removeItem('cf_answers');
}

function renderQuestion() {
  isTyping = true;
  const q = questions[currentStep];
  const qContainer = document.getElementById('quiz-section');
  const sunOverlay = document.getElementById('sunlight-overlay');
  
  // Clean layout animation reset
  qContainer.classList.remove('fade-in');
  void qContainer.offsetWidth; 
  qContainer.classList.add('fade-in');

  document.getElementById('step-indicator').innerText = `Step 0${currentStep + 1} // 0${questions.length}`;
  // Dynamic page title update
  document.title = `Step ${currentStep + 1} of ${questions.length} | Farmspherica`;

  // Update back button visibility
  const backBtn = document.getElementById('btn-back');
  if (backBtn) {
    if (currentStep > 0) {
      backBtn.classList.remove('hidden');
    } else {
      backBtn.classList.add('hidden');
    }
  }
  
  // --- HIGH-TECH JS TYPING ENGINE ---
  const qTextElement = document.getElementById('question-text');
  qTextElement.innerHTML = `<span class="luxury-type"></span>`;
  const span = qTextElement.querySelector('.luxury-type');
  
  let currentTxt = q.text;
  let charIndex = 0;
  
  // Clear any existing options during typing to prevent premature clicks
  const optionsBox = document.getElementById('options-container');
  optionsBox.innerHTML = ''; 

  function typeChar() {
    if (charIndex < currentTxt.length) {
      span.textContent += currentTxt.charAt(charIndex);
      charIndex++;
      setTimeout(typeChar, 37); // Blazing fast 37ms typing interval
    } else {
      // Typing finished! Remove the cursor line and drop the buttons down cleanly
      span.style.borderRight = "none";
      renderOptions(q, optionsBox, sunOverlay);
      isTyping = false;
    }
  }
  
  if (sunOverlay) sunOverlay.style.opacity = '0';
  typeChar();
}

// Separate helper function to draw the buttons right when typing finishes
function renderOptions(q, optionsBox, sunOverlay) {
    document.getElementById('quiz-section').classList.add('expanded');
  q.options.forEach((opt, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.dataset.index = index; // Used by keyboard navigation
    btn.innerHTML = `<span class="btn-label">${opt}</span><span class="kbd-hint">${index + 1}</span>`;
    
    if (q.id === "light" && sunOverlay) {
      let intensity = '0';
      if (opt === "Low") intensity = '0.15';    
      if (opt === "Medium") intensity = '0.4';  
      if (opt === "Lots") intensity = '0.85';   
      
      btn.addEventListener('mouseenter', () => sunOverlay.style.opacity = intensity);
      btn.addEventListener('mouseleave', () => sunOverlay.style.opacity = '0');
    }

    btn.onclick = () => triggerSelection(btn, q.id, opt.toLowerCase());
    optionsBox.appendChild(btn);
  });
}

// Micro-animation: lock buttons briefly then advance
function triggerSelection(btn, questionId, answer) {
  if (isTyping) return;

  // Lock all buttons during transition
  const allBtns = document.querySelectorAll('.option-btn');
  allBtns.forEach(b => b.style.pointerEvents = 'none');

  // Brief pause so kbd-active highlight is visible, then advance
  setTimeout(() => {
    handleAnswer(questionId, answer);
  }, 120);
}
function handleAnswer(questionId, answer) {
  if (isTyping) return;
  userAnswers[questionId] = answer;
  currentStep++;
  saveProgress(); // persist after each answer
  
  if (currentStep < questions.length) {
    renderQuestion();
  } else {
    showResults();
  }
}

function goBack() {
  if (isTyping) return;
  if (currentStep > 0) {
    currentStep--;
    const prevQuestionId = questions[currentStep].id;
    delete userAnswers[prevQuestionId];
    renderQuestion();
  }
}

function showResults() {
  document.getElementById('quiz-section').classList.remove('section-visible');
  document.getElementById('quiz-section').classList.add('hidden');
  
  const resultsSec = document.getElementById('results-section');
  resultsSec.classList.remove('hidden');
  
  setTimeout(() => {
    resultsSec.classList.add('section-visible');
  }, 10);

  // Write shareable URL with query params
  const params = new URLSearchParams(userAnswers);
  history.pushState({}, '', '?' + params.toString());

  // Dynamic page title
  document.title = `Your Matches | Farmspherica`;

  // --- UPGRADE: UNLOCK MOVING GRADIENT FOR ENTIRE PAGE BACKGROUND ---
  document.body.classList.add('results-active');

  // Clear saved progress now that we reached the results
  clearProgress();

  // SUPER STRICT FILTER
  let matches = crops.filter(crop => {
    return crop.space === userAnswers.space && 
           crop.light === userAnswers.light && 
           crop.level === userAnswers.level;
  });

  const resultsBox = document.getElementById('results-container');
  resultsBox.innerHTML = '';

  matches.forEach((crop, i) => {
    const guide = getGrowGuide(crop.name);
    const card = document.createElement('div');
    card.className = 'card card-stagger';
    card.style.animationDelay = `${i * 120}ms`;
    card.innerHTML = `
        <img src="${crop.img}" alt="${crop.name}" class="card-img">
        <div class="card-content">
          <h3>${crop.name}</h3>
          <p>${crop.reason}</p>
          
          <div class="card-pills">
            <span class="mini-tag">${userAnswers.space}</span>
            <span class="mini-tag">${userAnswers.light} light</span>
            <span class="mini-tag">${userAnswers.level}</span>
          </div>

          <!-- Grow Guide details drawer -->
          <div class="grow-guide-drawer">
            <div class="grow-guide-title">Grow Guide Specs</div>
            <div class="grow-guide-grid">
              <div class="guide-stat">
                <span class="stat-label">pH</span>
                <span class="stat-val">${guide.ph}</span>
              </div>
              <div class="guide-stat">
                <span class="stat-label">EC</span>
                <span class="stat-val">${guide.ec}</span>
              </div>
              <div class="guide-stat">
                <span class="stat-label">Temp</span>
                <span class="stat-val">${guide.temp}</span>
              </div>
              <div class="guide-stat">
                <span class="stat-label">Harvest</span>
                <span class="stat-val">${guide.harvest}</span>
              </div>
            </div>
          </div>

        </div>
      `;
    resultsBox.appendChild(card);
  });



  // Fire Canvas Confetti to celebrate matches
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#2f7d32', '#8bcb7b', '#aed581', '#f0f4c3']
    });
  }

  // Clear out any old action buttons / resource link to avoid duplication
  const existingDlBtn = document.getElementById('download-card-btn');
  if (existingDlBtn) existingDlBtn.remove();
  const existingLink = document.getElementById('global-resource-link');
  if (existingLink) existingLink.remove();

  // Inject Download Card button above the Farmspherica link
  resultsSec.insertAdjacentHTML('beforeend', `
    <button id="download-card-btn" class="download-card-btn" onclick="downloadResultCard(this)">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      Download results card
    </button>
    <a href="https://farmspherica.com" target="_blank" id="global-resource-link" class="resource-link">
      [ Learn more about Hydroponics at Farmspherica ↗ ]
    </a>
  `);
}

async function downloadResultCard(btn) {
  const originalHTML = btn.innerHTML;
  btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> Generating...`;
  btn.disabled = true;

  const W = 820, H = 960, DPR = 2;
  const canvas = document.createElement('canvas');
  canvas.width  = W * DPR;
  canvas.height = H * DPR;
  const ctx = canvas.getContext('2d');
  ctx.scale(DPR, DPR);

  // ---- helpers ----
  function rr(x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }
  const loadImg = src => new Promise(res => {
    const img = new Image();
    img.onload = () => res(img);
    img.onerror = () => res(null);
    img.src = src;
  });

  // ---- load template background ----
  const templateBg = await loadImg('assets/card-bg.png');

  // We filter the crops to matches first to know how many to draw
  const matches = crops.filter(c =>
    c.space === userAnswers.space &&
    c.light === userAnswers.light &&
    c.level === userAnswers.level
  );
  const images = await Promise.all(matches.map(m => loadImg(m.img)));

  let slots = [];
  let useFallbackBg = false;

  if (templateBg) {
    ctx.drawImage(templateBg, 0, 0, W, H);
    // (Pill removed from template backdrop per user request)

    // Map exactly to your Canva template's slot bounding boxes
    slots = [
      { top: 242, left: 80, width: 660, height: 290 },
      { top: 572, left: 80, width: 660, height: 290 }
    ];
  } else {
    useFallbackBg = true;
    // Fallback: A beautiful light gradient background matching the website's breathing vibe
    const bg = ctx.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0,   '#f4fbf4');
    bg.addColorStop(0.5, '#ffffff');
    bg.addColorStop(1,   '#eaf3ea');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    // Subtle light dot grid
    ctx.fillStyle = 'rgba(47, 125, 50, 0.04)';
    for (let x = 30; x < W; x += 50)
      for (let y = 30; y < H; y += 50) {
        ctx.beginPath(); ctx.arc(x, y, 1.5, 0, Math.PI*2); ctx.fill();
      }

    // Top accent bar
    const accent = ctx.createLinearGradient(0, 0, W, 0);
    accent.addColorStop(0,   'rgba(47, 125, 50, 0)');
    accent.addColorStop(0.5, 'rgba(47, 125, 50, 0.6)');
    accent.addColorStop(1,   'rgba(47, 125, 50, 0)');
    ctx.fillStyle = accent;
    ctx.fillRect(0, 0, W, 3);

    // Header area highlight
    ctx.fillStyle = 'rgba(47, 125, 50, 0.03)';
    ctx.fillRect(0, 0, W, 120);

    // Header Branding text
    ctx.fillStyle = '#2f7d32';
    ctx.font = '600 11px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('FARMSPHERICA INNOVATIONS', W / 2, 40);

    // Header Title
    ctx.fillStyle = '#14110F';
    ctx.font = 'bold 34px system-ui, sans-serif';
    ctx.fillText('Your Crop Matches', W / 2, 86);

    // Answers pill
    const pillTxt = `${userAnswers.space}  ·  ${userAnswers.light} light  ·  ${userAnswers.level}`;
    ctx.fillStyle = 'rgba(47, 125, 50, 0.06)';
    rr(W/2 - 165, 100, 330, 36, 18); ctx.fill();
    ctx.strokeStyle = 'rgba(47, 125, 50, 0.15)'; ctx.lineWidth = 1;
    rr(W/2 - 165, 100, 330, 36, 18); ctx.stroke();
    ctx.fillStyle = '#2f7d32';
    ctx.font = '600 13px system-ui, sans-serif';
    ctx.fillText(pillTxt, W / 2, 122);

    // Dynamic slot height layout for fallback
    const PAD = 40;
    const cardStartY = 154;
    const cardGap = 16;
    const availH = H - cardStartY - 60;
    const cardH  = (availH - (matches.length - 1) * cardGap) / Math.max(matches.length, 1);
    const cardW  = W - PAD * 2;
    slots = matches.map((_, i) => ({
      top: cardStartY + i * (cardH + cardGap),
      left: PAD,
      width: cardW,
      height: cardH
    }));
  }

  // Helper to resolve categories, setups, and difficulties dynamically to make the cards feel filled
  function getCropMetadata(cropName, level) {
    const nameLower = cropName.toLowerCase();
    let category = "SPECIALTY CROP";
    let system = "DWC System Setup";

    if (nameLower.includes("lettuce") || nameLower.includes("spinach") || nameLower.includes("kale") || nameLower.includes("bok choy") || nameLower.includes("tatsoi") || nameLower.includes("chard") || nameLower.includes("arugula")) {
      category = "LEAFY GREEN COLLECTION";
      system = "NFT Channels / Deep Water Culture (DWC)";
    } else if (nameLower.includes("basil") || nameLower.includes("mint") || nameLower.includes("chives") || nameLower.includes("parsley") || nameLower.includes("cilantro") || nameLower.includes("dill") || nameLower.includes("thyme") || nameLower.includes("oregano") || nameLower.includes("lavender") || nameLower.includes("marjoram") || nameLower.includes("balm") || nameLower.includes("catnip")) {
      category = "HERB & BOTANICAL COLLECTION";
      system = "Passive Kratky / Micro-DWC Arrays";
    } else if (nameLower.includes("tomato") || nameLower.includes("peppers") || nameLower.includes("beans") || nameLower.includes("strawberry") || nameLower.includes("lime") || nameLower.includes("lemon")) {
      category = "FRUITING & VEGETABLE SERIES";
      system = "Active Drip Irrigation / Dutch Buckets";
    } else if (nameLower.includes("echinacea") || nameLower.includes("chamomile") || nameLower.includes("watercress") || nameLower.includes("celery")) {
      category = "SPECIALTY BOTANICAL SERIES";
      system = "Dynamic Stream NFT / Recirculating Loops";
    }

    const diffText = level.toUpperCase() === "BEGINNER" ? "EASY SETUP" : "EXPERT LEVEL";
    return { category, system, difficulty: diffText };
  }

  matches.forEach((crop, i) => {
    const guide = getGrowGuide(crop.name);
    const slot = slots[i];
    if (!slot) return;

    const cx = slot.left;
    const cy = slot.top;
    const cardW = slot.width;
    const cardH = slot.height;

    const IMG_SIZE = Math.min(cardH - 48, 190);

    // Card background - Crisp white container with elegant borders (only for fallback layout)
    if (useFallbackBg) {
      ctx.fillStyle = '#ffffff';
      rr(cx, cy, cardW, cardH, 18); ctx.fill();
      ctx.strokeStyle = 'rgba(47, 125, 50, 0.12)'; ctx.lineWidth = 1.5;
      rr(cx, cy, cardW, cardH, 18); ctx.stroke();
    }

    // Crop image
    const imgX = cx + 24, imgY = cy + (cardH - IMG_SIZE) / 2;
    if (images[i]) {
      ctx.save();
      rr(imgX, imgY, IMG_SIZE, IMG_SIZE, 12); ctx.clip();
      const img = images[i];
      const sc = Math.max(IMG_SIZE / img.width, IMG_SIZE / img.height);
      const dw = img.width * sc, dh = img.height * sc;
      ctx.drawImage(img, imgX + (IMG_SIZE - dw)/2, imgY + (IMG_SIZE - dh)/2, dw, dh);
      ctx.restore();
    } else {
      ctx.fillStyle = 'rgba(47, 125, 50, 0.05)';
      rr(imgX, imgY, IMG_SIZE, IMG_SIZE, 12); ctx.fill();
    }

    // Thin elegant vertical divider separating image and text column
    ctx.beginPath();
    ctx.moveTo(imgX + IMG_SIZE + 14, cy + 24);
    ctx.lineTo(imgX + IMG_SIZE + 14, cy + cardH - 24);
    ctx.strokeStyle = 'rgba(47, 125, 50, 0.08)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Text column details
    const textX = imgX + IMG_SIZE + 32;
    const textW = cardW - IMG_SIZE - 72;
    const meta = getCropMetadata(crop.name, userAnswers.level);
    ctx.textAlign = 'left';

    // 1. Plant Name
    ctx.fillStyle = '#14110F';
    ctx.font = 'bold 26px system-ui, sans-serif';
    ctx.fillText(crop.name, textX, cy + 44);

    // 2. Collection Category and Difficulty Level Subheading
    ctx.fillStyle = '#2f7d32';
    ctx.font = '700 9px monospace, sans-serif';
    ctx.fillText(`${meta.category} // ${meta.difficulty}`, textX, cy + 62);

    // 3. Reason description (wrapped and spaced nicely)
    ctx.fillStyle = '#5b6b5c';
    ctx.font = '400 13px system-ui, sans-serif';
    const words = crop.reason.split(' ');
    let line = '', lines = [];
    for (const w of words) {
      const test = line + w + ' ';
      if (ctx.measureText(test).width > textW && line) { lines.push(line.trim()); line = w + ' '; }
      else line = test;
    }
    lines.push(line.trim());
    lines.slice(0, 3).forEach((l, li) => ctx.fillText(l, textX, cy + 92 + li * 20));

    // 4. System recommendation tag & Dynamic Dosage Recipe
    ctx.fillStyle = 'rgba(47, 125, 50, 0.7)';
    ctx.font = '600 9px system-ui, sans-serif';
    ctx.fillText(`SYSTEM: ${meta.system.toUpperCase()}`, textX, cy + 150);

    // Calculate dynamic dosage based on EC values (ml of nutrients per 10L water)
    const ecParts = guide.ec.split('-');
    const avgEc = ecParts.length > 1 ? (parseFloat(ecParts[0]) + parseFloat(ecParts[1])) / 2 : (parseFloat(guide.ec) || 1.5);
    const dosageMl = Math.round(avgEc * 10);

    ctx.fillStyle = '#2f7d32';
    ctx.font = '700 9px system-ui, sans-serif';
    ctx.fillText(`10L MIX RECIPE: Part A (${dosageMl}mL) + Part B (${dosageMl}mL) + Water (10L)`, textX, cy + 164);

    // 5. Stat chips at the bottom
    const stats = [
      { label: 'pH', val: guide.ph },
      { label: 'EC', val: guide.ec },
      { label: 'Temp', val: guide.temp },
      { label: 'Harvest', val: guide.harvest },
    ];
    const chipW = (textW - 12) / 4;
    const statRowY = cy + cardH - 64;
    stats.forEach((s, si) => {
      const sx = textX + si * (chipW + 4);
      ctx.fillStyle = 'rgba(47, 125, 50, 0.05)';
      rr(sx, statRowY, chipW, 42, 8); ctx.fill();
      ctx.strokeStyle = 'rgba(47, 125, 50, 0.12)'; ctx.lineWidth = 1;
      rr(sx, statRowY, chipW, 42, 8); ctx.stroke();
      ctx.textAlign = 'center';
      ctx.fillStyle = '#2f7d32';
      ctx.font = '600 10px system-ui, sans-serif';
      ctx.fillText(s.label.toUpperCase(), sx + chipW/2, statRowY + 15);
      ctx.fillStyle = '#14110F';
      ctx.font = '600 12px system-ui, sans-serif';
      ctx.fillText(s.val, sx + chipW/2, statRowY + 31);
    });
    ctx.textAlign = 'left';
  });

  // Footer (only for fallback layout, as the user's template has its own footer)
  if (useFallbackBg) {
    ctx.textAlign = 'center';
    ctx.fillStyle = 'rgba(47, 125, 50, 0.5)';
    ctx.font = '600 12px system-ui, sans-serif';
    ctx.fillText('farmspherica.com', W/2, H - 18);
  }

  // Trigger download
  try {
    const a = document.createElement('a');
    a.download = `farmspherica-grow-card-${userAnswers.space}-${userAnswers.level}.png`;
    a.href = canvas.toDataURL('image/png');
    a.click();
  } catch(e) {
    alert('Image download blocked. Try opening the app via a local server (e.g. Live Server).');
  }

  btn.disabled = false;
  btn.innerHTML = originalHTML;
}

function getGrowGuide(cropName) {
  const lower = cropName.toLowerCase();
  
  // 1. Leafy greens
  if (lower.includes("lettuce")) {
    return { ph: "5.5 - 6.5", ec: "0.8 - 1.4", temp: "15-20°C", harvest: "30-40 Days" };
  }
  if (lower.includes("spinach")) {
    return { ph: "5.5 - 6.5", ec: "1.8 - 2.3", temp: "15-18°C", harvest: "35-45 Days" };
  }
  if (lower.includes("kale")) {
    return { ph: "5.5 - 6.5", ec: "1.2 - 2.0", temp: "16-21°C", harvest: "40-50 Days" };
  }
  if (lower.includes("bok choy") || lower.includes("tatsoi")) {
    return { ph: "5.5 - 6.5", ec: "1.5 - 2.0", temp: "15-20°C", harvest: "30-40 Days" };
  }

  // 2. Herbs
  if (lower.includes("basil")) {
    return { ph: "5.5 - 6.5", ec: "1.0 - 1.6", temp: "18-24°C", harvest: "40-50 Days" };
  }
  if (lower.includes("mint")) {
    return { ph: "5.5 - 6.5", ec: "1.0 - 1.6", temp: "18-22°C", harvest: "40-50 Days" };
  }
  if (lower.includes("chives")) {
    return { ph: "5.5 - 6.5", ec: "1.2 - 1.8", temp: "16-22°C", harvest: "40-50 Days" };
  }
  if (lower.includes("parsley") || lower.includes("cilantro") || lower.includes("dill")) {
    return { ph: "5.5 - 6.5", ec: "1.2 - 1.8", temp: "16-20°C", harvest: "40-50 Days" };
  }
  if (lower.includes("oregano") || lower.includes("thyme") || lower.includes("lavender") || lower.includes("marjoram")) {
    return { ph: "6.0 - 6.8", ec: "1.0 - 1.6", temp: "18-24°C", harvest: "50-65 Days" };
  }
  if (lower.includes("balm") || lower.includes("catnip")) {
    return { ph: "5.5 - 6.5", ec: "1.0 - 1.6", temp: "18-22°C", harvest: "45-55 Days" };
  }

  // 3. Fruiting & Roots & Flowers & Specialties
  if (lower.includes("tomato")) {
    return { ph: "5.5 - 6.5", ec: "2.0 - 3.5", temp: "20-25°C", harvest: "60-80 Days" };
  }
  if (lower.includes("beans")) {
    return { ph: "5.8 - 6.5", ec: "1.8 - 2.4", temp: "20-25°C", harvest: "50-65 Days" };
  }
  if (lower.includes("pepper")) {
    return { ph: "5.8 - 6.5", ec: "1.8 - 2.4", temp: "20-26°C", harvest: "70-90 Days" };
  }
  if (lower.includes("strawberry")) {
    return { ph: "5.5 - 6.2", ec: "1.2 - 1.8", temp: "18-24°C", harvest: "60-80 Days" };
  }
  if (lower.includes("watercress")) {
    return { ph: "6.5 - 7.0", ec: "1.0 - 1.6", temp: "15-20°C", harvest: "30-40 Days" };
  }
  if (lower.includes("celery")) {
    return { ph: "6.5 - 7.0", ec: "1.8 - 2.4", temp: "15-21°C", harvest: "80-100 Days" };
  }
  if (lower.includes("lime") || lower.includes("lemon")) {
    return { ph: "5.5 - 6.5", ec: "1.6 - 2.4", temp: "21-27°C", harvest: "Continuous" };
  }
  if (lower.includes("echinacea") || lower.includes("chamomile")) {
    return { ph: "6.0 - 6.8", ec: "1.0 - 1.6", temp: "18-24°C", harvest: "60-80 Days" };
  }

  // Fallback defaults
  return { ph: "5.5 - 6.5", ec: "1.0 - 1.8", temp: "18-24°C", harvest: "45-60 Days" };
}



function startOver() {
  currentStep = 0;
  userAnswers = {};
  isTyping = false;
  
  // Reset page title
  document.title = 'Crop Finder | Farmspherica';

  // Clear localStorage and shareable URL
  clearProgress();
  history.pushState({}, '', window.location.pathname);

  // Remove injected elements to avoid duplication on re-entry
  const dlBtn = document.getElementById('download-card-btn');
  if (dlBtn) dlBtn.remove();
  const resLink = document.getElementById('global-resource-link');
  if (resLink) resLink.remove();

  // Cleanly clear visibility states
  document.getElementById('results-section').classList.remove('section-visible');
  document.getElementById('results-section').classList.add('hidden');

  // Reset sunlight overlay
  const sunOverlay = document.getElementById('sunlight-overlay');
  if (sunOverlay) {
    sunOverlay.style.opacity = '0';
  }
  
  // --- UPGRADE: REMOVE MOVING GRADIENT AND RETURN TO STATIC BACKGROUND ---
  document.body.classList.remove('results-active');
  
  document.getElementById('landing-section').classList.remove('hidden');
}
document.addEventListener('DOMContentLoaded', () => {
  const sunbeam = document.getElementById('sunbeam-cursor');
  
  if (sunbeam) {
    window.addEventListener('mousemove', (e) => {
      sunbeam.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
    });
  }

  // --- KEYBOARD NAVIGATION: 1/2/3 to select quiz options ---
  window.addEventListener('keydown', (e) => {
    if (isTyping) return;
    const quizVisible = !document.getElementById('quiz-section').classList.contains('hidden');
    if (!quizVisible) return;

    const num = parseInt(e.key);
    if (isNaN(num) || num < 1) return;

    const btns = document.querySelectorAll('.option-btn');
    const target = btns[num - 1];
    if (target) {
      target.classList.add('kbd-active');
      setTimeout(() => target.click(), 120);
    }
  });

  // --- SHAREABLE URL: auto-parse params on page load and skip to results ---
  const params = new URLSearchParams(window.location.search);
  const space = params.get('space');
  const light = params.get('light');
  const level = params.get('level');

  const validSpaces = ['windowsill', 'balcony', 'room'];
  const validLights = ['low', 'medium', 'lots'];
  const validLevels = ['beginner', 'pro'];

  if (validSpaces.includes(space) && validLights.includes(light) && validLevels.includes(level)) {
    userAnswers = { space, light, level };
    currentStep = questions.length;
    document.getElementById('landing-section').classList.add('hidden');
    showResults();
    return; // skip localStorage restore — URL takes priority
  }

  // --- LOCALSTORAGE: restore mid-quiz progress if present ---
  const savedStep = localStorage.getItem('cf_step');
  const savedAnswers = localStorage.getItem('cf_answers');
  if (savedStep !== null && savedAnswers !== null) {
    const parsedStep = parseInt(savedStep);
    const parsedAnswers = JSON.parse(savedAnswers);
    if (parsedStep > 0 && parsedStep < questions.length) {
      currentStep = parsedStep;
      userAnswers = parsedAnswers;
      document.getElementById('landing-section').classList.add('hidden');
      const quizSec = document.getElementById('quiz-section');
      quizSec.classList.remove('hidden');
      setTimeout(() => quizSec.classList.add('section-visible'), 10);
      renderQuestion();
    }
  }
});
