/* ============================================================
   SCRIPT.JS — Web Seleksi + Auto-Polling Status
   ============================================================ */

document.getElementById('bgImage').style.setProperty('--bg-image', `url('${CONFIG.branding.backgroundURL}')`);

/* ============================================================
   SET BRANDING
   ============================================================ */
(function applyBranding() {
  const brandName = document.querySelector('.brand-name');
  if (brandName) brandName.textContent = CONFIG.branding.name;

  const titleEl = document.getElementById('titleText');
  if (titleEl) titleEl.textContent = CONFIG.branding.title;

  const subtitleEl = document.getElementById('subtitleText');
  if (subtitleEl) subtitleEl.textContent = CONFIG.branding.subtitle;

  const footerName = document.querySelector('.footer-name');
  if (footerName) footerName.textContent = CONFIG.branding.footer;

  const steps = document.querySelectorAll('.step-label');
  if (steps[0]) steps[0].textContent = CONFIG.texts.step1;
  if (steps[1]) steps[1].textContent = CONFIG.texts.step2;
  if (steps[2]) steps[2].textContent = CONFIG.texts.step3;

  const inputUser = document.getElementById('usernameInput');
  if (inputUser) inputUser.placeholder = CONFIG.texts.placeholderUsername;

  const inputVideo = document.getElementById('videoInput');
  if (inputVideo) inputVideo.placeholder = CONFIG.texts.placeholderVideo;

  const cdLabel = document.getElementById('countdownLabel');
  if (cdLabel) cdLabel.textContent = CONFIG.texts.countdownLabel;

  const cdDaysLabel = document.getElementById('cdDaysLabel');
  if (cdDaysLabel) cdDaysLabel.textContent = CONFIG.texts.countdownDays;
  const cdHoursLabel = document.getElementById('cdHoursLabel');
  if (cdHoursLabel) cdHoursLabel.textContent = CONFIG.texts.countdownHours;
  const cdMinutesLabel = document.getElementById('cdMinutesLabel');
  if (cdMinutesLabel) cdMinutesLabel.textContent = CONFIG.texts.countdownMinutes;
  const cdSecondsLabel = document.getElementById('cdSecondsLabel');
  if (cdSecondsLabel) cdSecondsLabel.textContent = CONFIG.texts.countdownSeconds;
})();

/* ============================================================
   SET LINK AKUN
   ============================================================ */
document.getElementById('ownerBtn').href = CONFIG.official.owner;
document.getElementById('ofcBtn').href = CONFIG.official.ofc;
document.getElementById('anomaliBtn').href = CONFIG.official.anomali;

/* ============================================================
   RENDER LINKS LIST
   ============================================================ */
(function renderLinks() {
  const icons = {
    wa: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
    tiktok: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>`,
    discord: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.369a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
    youtube: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
    default: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  };

  function renderList(list, container) {
    if (!container) return;
    const frag = document.createDocumentFragment();
    list.forEach(link => {
      const type = link.type || 'default';
      const icon = icons[type] || icons.default;
      const a = document.createElement('a');
      a.className = 'link-item ' + type;
      a.href = link.url;
      a.target = '_blank';
      a.rel = 'noopener';
      a.innerHTML = `
        <div class="link-icon">${icon}</div>
        <div class="link-info">
          <div class="link-title">${link.title}</div>
          <div class="link-desc">${link.desc || ''}</div>
        </div>
        <div class="link-arrow">↗</div>
      `;
      frag.appendChild(a);
    });
    container.appendChild(frag);
  }

  const container = document.getElementById('linksList');
  const linksSection = document.getElementById('linksSection');
  const ordersList = document.getElementById('ordersList');
  const ordersSection = document.getElementById('ordersSection');

  if (!CONFIG.links || CONFIG.links.length === 0) {
    if (linksSection) linksSection.style.display = 'none';
  } else if (container) {
    renderList(CONFIG.links, container);
  }

  if (!CONFIG.orders || CONFIG.orders.length === 0) {
    if (ordersSection) ordersSection.style.display = 'none';
  } else if (ordersList) {
    renderList(CONFIG.orders, ordersList);
  }
})();

/* ============================================================
   PARTIKEL
   ============================================================ */
(function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  const count = 14;
  const colors = ['#38bdf8', '#7dd3fc', '#60a5fa', '#a5b4fc'];
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = 2 + Math.random() * 3;
    p.style.left = Math.random() * 100 + '%';
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.animationDuration = (8 + Math.random() * 6) + 's';
    p.style.animationDelay = (-Math.random() * 10) + 's';
    p.style.color = colors[Math.floor(Math.random() * colors.length)];
    p.style.background = p.style.color;
    frag.appendChild(p);
  }
  container.appendChild(frag);
})();

/* ============================================================
   SOUND EFFECT
   ============================================================ */
let audioCtx = null;

function playSound(type) {
  if (!CONFIG.effects || !CONFIG.effects.sound) return;
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === 'success') {
      osc.frequency.setValueAtTime(523.25, audioCtx.currentTime);
      osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1);
      osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
      osc.start(); osc.stop(audioCtx.currentTime + 0.5);
    } else if (type === 'fail') {
      osc.frequency.setValueAtTime(300, audioCtx.currentTime);
      osc.frequency.setValueAtTime(200, audioCtx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
      osc.start(); osc.stop(audioCtx.currentTime + 0.4);
    } else {
      osc.frequency.setValueAtTime(600, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
      osc.start(); osc.stop(audioCtx.currentTime + 0.15);
    }
  } catch (err) { console.error(err); }
}

/* ============================================================
   CONFETTI
   ============================================================ */
function launchConfetti() {
  if (!CONFIG.effects || !CONFIG.effects.confetti) return;
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  canvas.classList.add('active');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');
  const particles = [];
  const colors = ['#38bdf8', '#7dd3fc', '#60a5fa', '#a5b4fc', '#4ade80', '#fbbf24', '#f87171'];
  for (let i = 0; i < 150; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: -10 - Math.random() * canvas.height * 0.3,
      vx: (Math.random() - 0.5) * 6,
      vy: 2 + Math.random() * 4,
      size: 4 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      rot: Math.random() * Math.PI * 2,
      vrot: (Math.random() - 0.5) * 0.2,
      shape: Math.random() > 0.5 ? 'rect' : 'circle',
    });
  }
  let frame = 0;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.vy += 0.08; p.rot += p.vrot;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      if (p.shape === 'rect') ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      else { ctx.beginPath(); ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2); ctx.fill(); }
      ctx.restore();
    });
    frame++;
    if (frame < 250) requestAnimationFrame(animate);
    else { canvas.classList.remove('active'); ctx.clearRect(0, 0, canvas.width, canvas.height); }
  }
  animate();
}

/* ============================================================
   HELPER
   ============================================================ */
function showLoading(text) {
  document.getElementById('loadingText').textContent = text || 'MEMPROSES...';
  document.getElementById('loading').classList.add('active');
}
function hideLoading() {
  document.getElementById('loading').classList.remove('active');
}
function goToStage(stageId) {
  document.querySelectorAll('.stage').forEach(s => s.classList.remove('active'));
  document.getElementById(stageId).classList.add('active');
}
function setStepActive(step) {
  for (let i = 1; i <= 3; i++) {
    const el = document.getElementById('stepIndicator' + i);
    if (!el) continue;
    el.classList.remove('active', 'done');
    if (i < step) el.classList.add('done');
    if (i === step) el.classList.add('active');
  }
}

/* ============================================================
   COUNTER
   ============================================================ */
let counterInitialized = false;
async function fetchCounter() {
  try {
    const res = await fetch(`${CONFIG.API_URL}/api/get-counter`);
    const data = await res.json();
    if (data.success) updateCounterDisplay(data.count, false);
  } catch (err) { console.error('[COUNTER]', err); }
}
async function incrementCounter() {
  try {
    const res = await fetch(`${CONFIG.API_URL}/api/increment-counter`, { method: 'POST' });
    const data = await res.json();
    if (data.success) updateCounterDisplay(data.count, true);
  } catch (err) { console.error('[COUNTER]', err); }
}
function updateCounterDisplay(count, animate) {
  const el = document.getElementById('counterValue');
  if (!el) return;
  el.textContent = count;
  if (animate) {
    el.classList.add('bump');
    setTimeout(() => el.classList.remove('bump'), 1200);
  }
}
function initCounter() {
  if (!CONFIG.counter || !CONFIG.counter.enabled) return;
  if (counterInitialized) return;
  counterInitialized = true;
  fetchCounter();
  setInterval(fetchCounter, CONFIG.counter.pollingInterval || 3000);
}

/* ============================================================
   COUNTDOWN
   ============================================================ */
function initCountdown() {
  if (!CONFIG.countdown || !CONFIG.countdown.enabled) return;
  const endTime = new Date(CONFIG.countdown.endTime).getTime();
  function update() {
    const diff = endTime - Date.now();
    if (diff <= 0) {
      document.getElementById('countdownWidget').classList.add('ended');
      document.getElementById('countdownLabel').textContent = CONFIG.texts.countdownEnded;
      return;
    }
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    document.getElementById('cdDays').textContent = String(d).padStart(2, '0');
    document.getElementById('cdHours').textContent = String(h).padStart(2, '0');
    document.getElementById('cdMinutes').textContent = String(m).padStart(2, '0');
    document.getElementById('cdSeconds').textContent = String(s).padStart(2, '0');
    const urgent = diff < 1000 * 60 * 60 * 24;
    ['cdDays', 'cdHours', 'cdMinutes', 'cdSeconds'].forEach(id => {
      document.getElementById(id).classList.toggle('urgent', urgent);
    });
  }
  update();
  setInterval(update, 1000);
}

/* ============================================================
   TAHAP 1: CEK USERNAME
   ============================================================ */
async function checkUsername() {
  const input = document.getElementById('usernameInput');
  const status = document.getElementById('status1');
  const username = input.value.trim().replace('@', '').toLowerCase();

  status.className = 'status-box';
  status.textContent = '';

  if (!username) {
    status.classList.add('error');
    status.textContent = '❌ Username tidak boleh kosong!';
    return;
  }

  incrementCounter();
  showLoading(CONFIG.texts.loadingUsername);

  try {
    const response = await fetch(`${CONFIG.API_URL}/api/check-username`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username }),
    });
    const result = await response.json();
    hideLoading();

    if (!response.ok) {
      status.classList.add('error');
      status.textContent = '❌ ' + (result.message || 'Terjadi kesalahan');
      return;
    }

    if (result.reason === 'blacklist') {
      status.classList.add('error');
      status.innerHTML = '🚫 <strong>Akun kamu di-blacklist!</strong>';
      return;
    }

    if (result.passed) {
      status.classList.add('success');
      status.innerHTML = `✅ <strong>Akun valid!</strong><br>Nickname: <strong>${result.data.nickname}</strong><br>Follower: <strong>${result.data.followers}</strong><br>Melanjutkan...`;
      playSound('success');

      setTimeout(() => {
        showResult(`@${username}`, result.data.followers, `CN OK (${result.data.nickname})`);
        launchConfetti();
      }, 1200);
    } else {
      const alasanList = (result.alasan || []).map(a => `• ${a}`).join('<br>');
      status.classList.add('error');
      status.innerHTML = `❌ <strong>Belum memenuhi syarat</strong><br><br>${alasanList}<br><br>Silakan coba <strong>Tahap 2</strong>: post video dengan hashtag.`;
      playSound('fail');

      setTimeout(() => {
        goToStage('stage2');
        setStepActive(2);
      }, 3000);
    }
  } catch (err) {
    hideLoading();
    status.classList.add('error');
    status.innerHTML = `❌ <strong>Gagal konek ke server</strong><br><br>Coba lagi...`;
  }
}

/* ============================================================
   TAHAP 2: CEK VIDEO
   ============================================================ */
async function checkVideo() {
  const input = document.getElementById('videoInput');
  const status = document.getElementById('status2');
  const url = input.value.trim();

  status.className = 'status-box';
  status.textContent = '';

  if (!url) {
    status.classList.add('error');
    status.textContent = '❌ Link video tidak boleh kosong!';
    return;
  }
  if (!url.toLowerCase().includes('tiktok.com')) {
    status.classList.add('error');
    status.textContent = '❌ Link harus dari TikTok!';
    return;
  }

  showLoading(CONFIG.texts.loadingVideo);

  try {
    const response = await fetch(`${CONFIG.API_URL}/api/check-video`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    });
    const result = await response.json();
    hideLoading();

    if (!response.ok) {
      status.classList.add('error');
      status.textContent = '❌ ' + (result.message || 'Terjadi kesalahan');
      return;
    }

    if (result.passed) {
      status.classList.add('success');
      status.innerHTML = `✅ <strong>Video valid!</strong><br>Hashtag terdeteksi<br>Melanjutkan...`;
      playSound('success');

      setTimeout(() => {
        showResult('Via Video', '-', 'Video + Hashtag OK');
        launchConfetti();
      }, 1200);
    } else {
      const alasanList = (result.alasan || []).map(a => `• ${a}`).join('<br>');
      status.classList.add('error');
      status.innerHTML = `❌ <strong>Video tidak memenuhi syarat</strong><br><br>${alasanList}`;
      playSound('fail');

      setTimeout(() => {
        const failMsg = document.getElementById('failMessage');
        failMsg.innerHTML = `Video kamu belum memenuhi syarat.<br>Pastikan ada hashtag <strong>#${CONFIG.tahap2.wajibHashtag.join('</strong> atau <strong>#')}</strong>`;
        goToStage('stageFail');
        setStepActive(0);
      }, 3000);
    }
  } catch (err) {
    hideLoading();
    status.classList.add('error');
    status.innerHTML = `❌ <strong>Gagal konek ke server</strong><br><br>Coba lagi...`;
  }
}

/* ============================================================
   TAHAP 3: HASIL LOLOS
   ============================================================ */
function showResult(username, follower, alasan) {
  const info = document.getElementById('resultInfo');
  info.innerHTML = `
    <strong>Username:</strong> ${username}<br>
    ${follower !== '-' ? `<strong>Follower:</strong> ${follower}<br>` : ''}
    <strong>Status:</strong> ${alasan}<br>
    <strong>Hasil:</strong> ✅ LOLOS SELEKSI
  `;
  goToStage('stage3');
  setStepActive(3);
}

/* ============================================================
   JOIN GRUP WA
   ============================================================ */
function joinGroup() {
  playSound('click');
  if (!CONFIG.joinURL) return;
  window.open(CONFIG.joinURL, '_blank');
}

/* ============================================================
   FORM UPLOAD BUKTI
   ============================================================ */
let selectedFile = null;

function openUploadForm() {
  playSound('click');
  goToStage('stageUpload');

  const userInput = document.getElementById('usernameInput').value.trim().replace('@', '');
  if (userInput) {
    document.getElementById('uploadUsername').value = userInput;
  }
}

function handleFileChange(event) {
  const file = event.target.files[0];
  const preview = document.getElementById('filePreview');
  const labelText = document.getElementById('fileLabelText');

  if (!file) return;

  if (file.size > 5 * 1024 * 1024) {
    const status = document.getElementById('statusUpload');
    status.className = 'status-box error';
    status.textContent = '❌ File terlalu besar (max 5 MB)!';
    event.target.value = '';
    return;
  }

  selectedFile = file;
  labelText.textContent = file.name;

  const reader = new FileReader();
  reader.onload = (e) => {
    preview.innerHTML = `<img src="${e.target.result}" alt="Preview" />`;
    preview.classList.add('active');
  };
  reader.readAsDataURL(file);
}

async function submitBukti() {
  const status = document.getElementById('statusUpload');
  const username = document.getElementById('uploadUsername').value.trim().replace('@', '');
  const wa = document.getElementById('uploadWa').value.trim();

  status.className = 'status-box';
  status.textContent = '';

  if (!username) {
    status.classList.add('error');
    status.textContent = '❌ Username tidak boleh kosong!';
    return;
  }
  if (!wa) {
    status.classList.add('error');
    status.textContent = '❌ Nomor WA tidak boleh kosong!';
    return;
  }
  if (!selectedFile) {
    status.classList.add('error');
    status.textContent = '❌ Screenshot wajib diupload!';
    return;
  }

  showLoading('MENGIRIM BUKTI...');

  try {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('wa', wa);
    formData.append('screenshot', selectedFile);

    const response = await fetch(`${CONFIG.API_URL}/api/upload-bukti`, {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    hideLoading();

    if (result.success) {
      status.classList.add('success');
      status.innerHTML = `✅ <strong>Bukti terkirim!</strong><br>Sedang di-review admin.`;

      selectedFile = null;
      document.getElementById('uploadFile').value = '';
      document.getElementById('fileLabelText').textContent = '+ Pilih Gambar (max 5 MB)';
      document.getElementById('filePreview').innerHTML = '';
      document.getElementById('filePreview').classList.remove('active');

      setTimeout(() => {
        showStatusResult('pending', '⏳ MENUNGGU REVIEW', 'Bukti kamu masih diproses admin.');
      }, 2000);
    } else {
      status.classList.add('error');
      status.textContent = '❌ ' + (result.message || 'Gagal kirim');
    }
  } catch (err) {
    hideLoading();
    status.classList.add('error');
    status.innerHTML = `❌ <strong>Gagal konek ke server</strong>`;
  }
}

/* ============================================================
   AUTO-POLLING STATUS
   ============================================================ */
let statusPoller = null;

function startStatusPolling(username) {
  stopStatusPolling();
  console.log('[POLLER] Mulai polling untuk:', username);

  statusPoller = setInterval(async () => {
    try {
      const res = await fetch(`${CONFIG.API_URL}/api/status/${username}`);
      const result = await res.json();

      if (result.found) {
        const d = result.data;
        if (d.status === 'acc') {
          showStatusResult('acc', '✅ DITERIMA!', 'Selamat! Kamu akan di-invite ke grup oleh admin.');
          stopStatusPolling();
          playSound('success');
          launchConfetti();
        } else if (d.status === 'tolak') {
          showStatusResult('tolak', '❌ DITOLAK', d.alasan || 'Bukti tidak valid');
          stopStatusPolling();
          playSound('fail');
        }
      }
    } catch (err) {
      console.error('[POLLER]', err);
    }
  }, 5000); // cek tiap 5 detik
}

function stopStatusPolling() {
  if (statusPoller) {
    clearInterval(statusPoller);
    statusPoller = null;
    console.log('[POLLER] Stop polling');
  }
}

/* ============================================================
   CEK STATUS (manual)
   ============================================================ */
async function checkStatus() {
  const username = document.getElementById('uploadUsername').value.trim().replace('@', '');

  if (!username) {
    const status = document.getElementById('statusUpload');
    status.className = 'status-box error';
    status.textContent = '❌ Username tidak boleh kosong!';
    return;
  }

  showLoading('MENGECEK STATUS...');

  try {
    const response = await fetch(`${CONFIG.API_URL}/api/status/${username}`);
    const result = await response.json();
    hideLoading();

    if (!result.found) {
      showStatusResult('pending', 'Belum ada submission', 'Kamu belum kirim bukti');
      return;
    }

    const d = result.data;
    if (d.status === 'pending') {
      showStatusResult('pending', '⏳ MENUNGGU REVIEW', 'Bukti kamu masih diproses admin.');
    } else if (d.status === 'acc') {
      showStatusResult('acc', '✅ DITERIMA!', 'Selamat! Kamu akan di-invite ke grup oleh admin.');
    } else {
      showStatusResult('tolak', '❌ DITOLAK', d.alasan || 'Bukti tidak valid');
    }
  } catch (err) {
    hideLoading();
    const status = document.getElementById('statusUpload');
    status.className = 'status-box error';
    status.textContent = '❌ Gagal konek ke server';
  }
}

/* ============================================================
   SHOW STATUS RESULT
   ============================================================ */
function showStatusResult(type, title, desc) {
  const iconWrap = document.getElementById('statusIconWrap');
  const icon = document.getElementById('statusIcon');
  const titleEl = document.getElementById('statusTitle');
  const descEl = document.getElementById('statusDesc');

  iconWrap.className = 'status-icon-wrap ' + type;

  const icons = {
    pending: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
    acc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    tolak: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
  };

  icon.innerHTML = icons[type] || icons.pending;
  titleEl.textContent = title;
  descEl.textContent = desc;

  // Kalau status pending, mulai auto-polling
  if (type === 'pending') {
    const username = document.getElementById('uploadUsername').value.trim().replace('@', '');
    if (username) {
      startStatusPolling(username);
    }
  } else {
    stopStatusPolling();
  }

  goToStage('stageStatus');
}

/* ============================================================
   NAVIGASI
   ============================================================ */
function backToStage1() {
  playSound('click');
  stopStatusPolling();
  goToStage('stage1');
  setStepActive(1);
  document.getElementById('status1').className = 'status-box';
  document.getElementById('status1').textContent = '';
  document.getElementById('status2').className = 'status-box';
  document.getElementById('status2').textContent = '';
}

function resetAll() {
  playSound('click');
  stopStatusPolling();
  document.getElementById('usernameInput').value = '';
  document.getElementById('videoInput').value = '';
  document.getElementById('status1').className = 'status-box';
  document.getElementById('status1').textContent = '';
  document.getElementById('status2').className = 'status-box';
  document.getElementById('status2').textContent = '';
  goToStage('stage1');
  setStepActive(1);
}

/* ============================================================
   POPUP HELP
   ============================================================ */
(function renderHelpContent() {
  const cnList = document.getElementById('helpCNList');
  const hashtagList = document.getElementById('helpHashtagList');

  const copyIconSVG = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  `;

  function renderItems(list, container) {
    if (!container) return;
    const frag = document.createDocumentFragment();
    list.forEach(item => {
      const div = document.createElement('div');
      div.className = 'copy-item';
      div.innerHTML = `
        <code>${item.label}</code>
        <button class="copy-btn" data-copy="${item.label.replace(/"/g, '&quot;')}">
          ${copyIconSVG}
          <span>${CONFIG.texts.btnCopy}</span>
        </button>
      `;
      frag.appendChild(div);
    });
    container.appendChild(frag);
  }

  renderItems(CONFIG.helpCN || [], cnList);
  renderItems(CONFIG.helpHashtag || [], hashtagList);

  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      copyText(btn.getAttribute('data-copy'), btn);
    });
  });
})();

function openHelp() {
  playSound('click');
  document.getElementById('helpPopup').classList.add('active');
}
function closeHelp() {
  playSound('click');
  document.getElementById('helpPopup').classList.remove('active');
}
function copyText(text, btn) {
  playSound('click');
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => showCopiedFeedback(btn)).catch(() => fallbackCopy(text, btn));
  } else {
    fallbackCopy(text, btn);
  }
}
function fallbackCopy(text, btn) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showCopiedFeedback(btn);
  } catch (err) { console.error(err); }
  document.body.removeChild(textarea);
}
function showCopiedFeedback(btn) {
  if (!btn) return;
  const originalHTML = btn.innerHTML;
  btn.classList.add('copied');
  btn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${CONFIG.texts.btnCopied}</span>
  `;
  setTimeout(() => {
    btn.classList.remove('copied');
    btn.innerHTML = originalHTML;
  }, 1500);
}

document.getElementById('helpPopup').addEventListener('click', (e) => {
  if (e.target.id === 'helpPopup') closeHelp();
});

/* ============================================================
   INIT
   ============================================================ */
initCounter();
initCountdown();
setStepActive(1);

document.getElementById('usernameInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') checkUsername();
});
document.getElementById('videoInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') checkVideo();
});
