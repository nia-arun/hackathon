// 1. Precise Data Store: 36 Curated entries mapping perfectly to all 18 variations
const crops = [
  // ==================== BEGINNER BRACKET ====================
  // Windowsill + Low + Beginner
  { name: "Peppermint", img: "assets/peppermint.png", reason: "Hardy, shallow-rooting, and handles lower light frames effortlessly.", space: "windowsill", light: "low", level: "beginner" },
  { name: "Spearmint", img: "assets/spearmint.png", reason: "Thrives in constrained window boxes with minimal light requirements.", space: "windowsill", light: "low", level: "beginner" },

  // Windowsill + Medium + Beginner
  { name: "Butterhead Lettuce", img: "assets/lettuce.png", reason: "The beginner favorite. Fast leaf production under average light.", space: "windowsill", light: "medium", level: "beginner" },
  { name: "Romaine Lettuce", img: "assets/romaine.png", reason: "Crisp, reliable, and perfectly suited for a kitchen window ledge.", space: "windowsill", light: "medium", level: "beginner" },

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
  { id: "level", text: "How experienced are your hands?", options: ["Beginner", "Pro"] }
];

let currentStep = 0;
let userAnswers = {};

// 3. Execution Logic
function startQuiz() {
  document.getElementById('landing-section').classList.add('hidden');
  document.getElementById('quiz-section').classList.remove('hidden');
  renderQuestion(); 
}

function renderQuestion() {
  const q = questions[currentStep];
  const qContainer = document.getElementById('quiz-section');
  const sunOverlay = document.getElementById('sunlight-overlay');
  
  // Clean layout animation reset
  qContainer.classList.remove('fade-in');
  void qContainer.offsetWidth; 
  qContainer.classList.add('fade-in');

  document.getElementById('step-indicator').innerText = `Step 0${currentStep + 1} // 0${questions.length}`;
  
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
      setTimeout(typeChar, 15); // Blazing fast 15ms typing interval
    } else {
      // Typing finished! Remove the cursor line and drop the buttons down cleanly
      span.style.borderRight = "none";
      renderOptions(q, optionsBox, sunOverlay);
    }
  }
  
  if (sunOverlay) sunOverlay.style.opacity = '0';
  typeChar();
}

// Separate helper function to draw the buttons right when typing finishes
function renderOptions(q, optionsBox, sunOverlay) {
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerText = opt;
    
    if (q.id === "light" && sunOverlay) {
      let intensity = '0';
      if (opt === "Low") intensity = '0.15';    
      if (opt === "Medium") intensity = '0.4';  
      if (opt === "Lots") intensity = '0.85';   
      
      btn.addEventListener('mouseenter', () => sunOverlay.style.opacity = intensity);
      btn.addEventListener('mouseleave', () => sunOverlay.style.opacity = '0');
    }

    btn.onclick = () => handleAnswer(q.id, opt.toLowerCase());
    optionsBox.appendChild(btn);
  });
}
  const q = questions[currentStep];
  const qContainer = document.getElementById('quiz-section');
  const sunOverlay = document.getElementById('sunlight-overlay');
  
  // Reset CSS animations cleanly
  qContainer.classList.remove('fade-in');
  void qContainer.offsetWidth; 
  qContainer.classList.add('fade-in');

  document.getElementById('step-indicator').innerText = `Step 0${currentStep + 1} // 0${questions.length}`;
  document.getElementById('question-text').innerText = q.text;
  
  const optionsBox = document.getElementById('options-container');
  optionsBox.innerHTML = ''; 

  if (sunOverlay) sunOverlay.style.opacity = '0';

  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerText = opt;
    
    // Smooth opacity glow calculation
    if (q.id === "light" && sunOverlay) {
      let intensity = '0';
      if (opt === "Low") intensity = '0.15';    
      if (opt === "Medium") intensity = '0.4';  
      if (opt === "Lots") intensity = '0.85';   
      
      btn.addEventListener('mouseenter', () => sunOverlay.style.opacity = intensity);
      btn.addEventListener('mouseleave', () => sunOverlay.style.opacity = '0');
    }

    btn.onclick = () => handleAnswer(q.id, opt.toLowerCase());
    optionsBox.appendChild(btn);
  })

function handleAnswer(questionId, answer) {
  userAnswers[questionId] = answer;
  currentStep++;
  
  if (currentStep < questions.length) {
    renderQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  document.getElementById('quiz-section').classList.add('hidden');
  const resultsSection = document.getElementById('results-section');
  resultsSection.classList.remove('hidden');
  resultsSection.classList.add('fade-in');
  // Triggers a green and white confetti explosion
  confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 }, colors: ['#2f7d32', '#a5d6a7', '#ffffff'] });

  // SUPER STRICT MATCH: Triple Equality Validation
  let matches = crops.filter(crop => {
    return crop.space === userAnswers.space && 
           crop.light === userAnswers.light && 
           crop.level === userAnswers.level;
  });

  const resultsBox = document.getElementById('results-container');
  resultsBox.innerHTML = '';

  // Appends exactly the 2 targeted matches mapped out above
  matches.forEach(crop => {
    resultsBox.innerHTML += `
      <div class="card">
        <img src="${crop.img}" alt="${crop.name}" class="card-img">
        <div class="card-content">
          <h3>${crop.name}</h3>
          <p>${crop.reason}</p>
        </div>
      </div>
    `;
  });
}

function startOver() {
  currentStep = 0;
  userAnswers = {};
  document.getElementById('results-section').classList.add('hidden');
  document.getElementById('quiz-section').classList.remove('hidden');
  renderQuestion();
}