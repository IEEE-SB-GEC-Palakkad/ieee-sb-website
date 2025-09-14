/* ========= Shared Elements ========= */

// Splash screen (auto-hide after load)
(function splash() {
  const splash = document.getElementById('splash');
  if (!splash) return;
  // small staged animation for niceness
  setTimeout(() => splash.classList.add('fade'), 1400);
  setTimeout(() => splash.style.display = 'none', 2100);
})();

// Sparkle canvas on landing (index only)
(function sparkles() {
  const canvas = document.getElementById('sparkleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let sparkles = [];
  const COUNT = 120;

  function size() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.9;
  }
  window.addEventListener('resize', size); size();

  function mk() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.6 + 0.6,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      a: Math.random() * 0.6 + 0.3,
    };
  }
  for (let i=0;i<COUNT;i++) sparkles.push(mk());

  function tick() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    sparkles.forEach((s, i) => {
      s.x += s.vx; s.y += s.vy; s.a -= 0.002;
      if (s.a <= 0) sparkles[i] = mk();
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(255,255,255,${s.a})`;
      ctx.fill();
    });
    requestAnimationFrame(tick);
  }
  tick();
})();

// Count-up numbers (index only)
(function counters(){
  const nums = document.querySelectorAll('.stat-num');
  if (!nums.length) return;

  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting) return;
      const el = entry.target;
      const end = parseInt(el.dataset.count,10) || 0;
      let cur = 0;
      const step = Math.max(1, Math.round(end/60));
      const iv = setInterval(()=>{
        cur += step;
        if (cur >= end){ cur = end; clearInterval(iv); }
        el.textContent = cur.toString();
      }, 20);
      observer.unobserve(el);
    });
  }, {threshold: 0.4});

  nums.forEach(n=>observer.observe(n));
})();

// Dialog helpers (shared)
function openDialog(id){
  const el = document.getElementById(id);
  if (el) {
    el.classList.add('show');
    el.classList.remove('hidden');
  }
}

function closeDialog(id){
  const el = document.getElementById(id);
  if (el) {
    el.classList.remove('show');
    el.classList.add('hidden');
  }
}

/* ========= Registration Page Logic - FIXED ========= */
(function registration(){
  const step1 = document.getElementById('step-1');
  const step2 = document.getElementById('step-2');
  const countInput = document.getElementById('participant-count');
  const nextStepBtn = document.getElementById('next-step-btn');
  const nextParticipantBtn = document.getElementById('next-participant-btn');
  const submitFormBtn = document.getElementById('submit-form-btn');
  const currentFormContainer = document.getElementById('current-participant-form');
  const completedContainer = document.getElementById('completed-participants');

  if(!step1 || !countInput) return; // not on register page

  let data = [];
  let currentIndex = 0;
  let totalParticipants = 0;

  // Enable/disable proceed button based on input
  countInput.addEventListener('input', ()=>{
    const val = parseInt(countInput.value, 10);
    nextStepBtn.disabled = !(val && val > 0 && val <= 10); // reasonable limit
  });

  // Handle enter key on count input
  countInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !nextStepBtn.disabled) {
      nextStepBtn.click();
    }
  });

  // Move to step 2
  nextStepBtn.addEventListener('click', ()=>{
    totalParticipants = parseInt(countInput.value,10);
    if(!totalParticipants || totalParticipants < 1 || totalParticipants > 10) return;
    
    step1.classList.add('hidden');
    step2.classList.remove('hidden');
    data = [];
    currentIndex = 0;
    completedContainer.innerHTML = '';
    renderCurrentForm();
    updateButtons();
    
    // Focus first input
    setTimeout(() => {
      const firstInput = document.querySelector('#current-participant-form input');
      if (firstInput) firstInput.focus();
    }, 100);
  });

  function renderCurrentForm(){
    currentFormContainer.innerHTML = `
      <div class="glass current-form">
        <h3>Participant ${currentIndex + 1} of ${totalParticipants}</h3>

        <label class="field">
          <span>Full Name *</span>
          <input type="text" id="name-${currentIndex}" placeholder="Jane Doe" autocomplete="name" required>
        </label>

        <label class="field">
          <span>Email Address *</span>
          <input type="email" id="email-${currentIndex}" placeholder="jane@example.com" autocomplete="email" required>
        </label>

        <label class="field">
          <span>College / Institution *</span>
          <input type="text" id="college-${currentIndex}" placeholder="Your College" required>
        </label>

        <label class="field">
          <span>Contact Number *</span>
          <input type="tel" id="contact-${currentIndex}" placeholder="+91 9XXXXXXXXX" required>
        </label>
      </div>
    `;

    // Add enter key handling to all inputs
    const inputs = currentFormContainer.querySelectorAll('input');
    inputs.forEach((input, index) => {
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          if (index < inputs.length - 1) {
            inputs[index + 1].focus();
          } else {
            // On last input, trigger appropriate button
            if (currentIndex < totalParticipants - 1) {
              nextParticipantBtn.click();
            } else {
              submitFormBtn.click();
            }
          }
        }
      });
    });
  }

  function validateEmail(e){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim());
  }
  
  function validatePhone(p){
    const cleaned = p.replace(/[\s\-\(\)]/g, '');
    return /^[\+]?[\d]{7,15}$/.test(cleaned);
  }

  function saveCurrentParticipant(){
    const name = document.getElementById(`name-${currentIndex}`).value.trim();
    const email = document.getElementById(`email-${currentIndex}`).value.trim();
    const college = document.getElementById(`college-${currentIndex}`).value.trim();
    const contact = document.getElementById(`contact-${currentIndex}`).value.trim();

    if(!name || !email || !college || !contact){
      showMsg("Please fill out all fields before continuing.");
      return false;
    }
    
    if(name.length < 2){
      showMsg("Please enter a valid full name.");
      return false;
    }
    
    if(!validateEmail(email)){
      showMsg("Please enter a valid email address.");
      return false;
    }
    
    if(college.length < 2){
      showMsg("Please enter a valid college/institution name.");
      return false;
    }
    
    if(!validatePhone(contact)){
      showMsg("Please enter a valid contact number (7-15 digits).");
      return false;
    }

    // Check for duplicate email
    const existingEmails = data.map(p => p && p.email).filter(Boolean);
    if(existingEmails.includes(email.toLowerCase())){
      showMsg("This email address is already registered for another participant.");
      return false;
    }

    // Save the current participant data
    data[currentIndex] = { name, email: email.toLowerCase(), college, contact };
    
    // Add to completed participants display
    addCompletedParticipant(currentIndex, { name, email, college, contact });
    
    return true;
  }

  function addCompletedParticipant(index, participantData) {
    const summaryHTML = `
      <div class="participant-summary">
        <h4>✓ Participant ${index + 1} - ${participantData.name}</h4>
        <div class="participant-details">
          <span><strong>Email</strong>${participantData.email}</span>
          <span><strong>College</strong>${participantData.college}</span>
          <span><strong>Contact</strong>${participantData.contact}</span>
        </div>
      </div>
    `;
    completedContainer.insertAdjacentHTML('beforeend', summaryHTML);
  }

  function updateButtons(){
    nextParticipantBtn.classList.add('hidden');
    submitFormBtn.classList.add('hidden');
    
    if(currentIndex < totalParticipants - 1){
      nextParticipantBtn.classList.remove('hidden');
    } else {
      submitFormBtn.classList.remove('hidden');
    }
  }

  // Next participant
  nextParticipantBtn?.addEventListener('click', ()=>{
    if(!saveCurrentParticipant()) return;
    
    currentIndex++;
    renderCurrentForm();
    updateButtons();
    
    // Scroll to show the new form and focus first input
    setTimeout(() => {
      currentFormContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const firstInput = document.querySelector('#current-participant-form input');
      if (firstInput) firstInput.focus();
    }, 100);
  });

  // Submit registration
  submitFormBtn?.addEventListener('click', ()=>{
    if(!saveCurrentParticipant()) return;
    
    // Final data validation
    const finalData = {
      totalParticipants: totalParticipants,
      participants: data,
      timestamp: new Date().toISOString(),
      registrationId: 'EXC25-' + Date.now().toString(36).toUpperCase()
    };
    
    console.log('Registration Data:', finalData);
    
    // Show loading state
    submitFormBtn.textContent = 'Submitting...';
    submitFormBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
      // For demonstration, you would replace this with actual API call
      try {
        // Mock successful submission
        console.log('Registration submitted successfully:', finalData);
        openDialog('dialog-box');
      } catch (error) {
        console.error('Registration failed:', error);
        showMsg("Registration failed. Please try again.");
        submitFormBtn.textContent = 'Submit Registration';
        submitFormBtn.disabled = false;
      }
    }, 1500);
  });

  function showMsg(msg){
    const titleEl = document.getElementById('message-title');
    const textEl = document.getElementById('message-text');
    if (titleEl) titleEl.textContent = 'Information Required';
    if (textEl) textEl.textContent = msg;
    openDialog('message-box');
  }
})();

document.addEventListener('DOMContentLoaded', function() {
            const day2Content = document.querySelector('.day-2 .schedule-content');
            
            function checkScroll() {
                if (day2Content.scrollHeight > day2Content.clientHeight) {
                    day2Content.classList.add('has-scroll');
                } else {
                    day2Content.classList.remove('has-scroll');
                }
            }
            
            checkScroll();
            window.addEventListener('resize', checkScroll);
        });