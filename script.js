/* ============================================================
   SCRIPT.JS — Logic + Fetch ke Bot Server (VPS)
   2 API: /api/check-username & /api/check-video
   ============================================================ */

/* ============================================================
   SET BACKGROUND
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
})();

/* ============================================================
   SET LINK AKUN (Owner / OFC / Anomali)
   ============================================================ */
document.getElementById('ownerBtn').href = CONFIG.official.owner;
document.getElementById('ofcBtn').href = CONFIG.official.ofc;
document.getElementById('anomaliBtn').href = CONFIG.official.anomali;

/* ============================================================
   RENDER LINKS LIST (auto-hide kalau kosong)
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

  function renderList(list, container, className = 'link-item') {
    if (!container) return;
    const frag = document.createDocumentFragment();

    list.forEach(link => {
      const type = link.type || 'default';
      const icon = icons[type] || icons.default;

      const a = document.createElement('a');
      a.className = className + ' ' + type;
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
   HELPER
   ============================================================ */
function showLoading(text = 'MEMPROSES...') {
  document.getElementById('loadingText').textContent = text;
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
   TAHAP 1: CEK USERNAME → /api/check-username
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

  showLoading('MENGECEK AKUN...');

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
      status.innerHTML = '🚫 <strong>Akun kamu di-blacklist!</strong><br>Tidak bisa mengikuti seleksi.';
      return;
    }

    if (result.passed) {
      // ✅ LOLOS
      status.classList.add('success');
      status.innerHTML = `✅ <strong>Akun valid!</strong><br>Nickname: <strong>${result.data.nickname}</strong><br>Follower: <strong>${result.data.followers}</strong><br>Melanjutkan...`;

      setTimeout(() => {
        showResult(
          `@${username}`,
          result.data.followers,
          `CN OK (${result.data.nickname})`
        );
      }, 1200);
    } else {
      // ❌ GAGAL → lanjut Tahap 2
      const alasanList = (result.alasan || []).map(a => `• ${a}`).join('<br>');
      status.classList.add('error');
      status.innerHTML = `❌ <strong>Belum memenuhi syarat</strong><br><br>${alasanList}<br><br>Silakan coba <strong>Tahap 2</strong>: post video dengan hashtag.`;

      setTimeout(() => {
        goToStage('stage2');
        setStepActive(2);
      }, 3000);
    }
  } catch (err) {
    hideLoading();
    status.classList.add('error');
    status.innerHTML = `❌ <strong>Gagal konek ke server</strong><br><br>Coba lagi ya...`;
    console.error('[ERROR] checkUsername:', err);
  }
}

/* ============================================================
   TAHAP 2: CEK VIDEO → /api/check-video
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

  showLoading('MENGECEK VIDEO...');

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
      // ✅ LOLOS
      status.classList.add('success');
      status.innerHTML = `✅ <strong>Video valid!</strong><br>Hashtag terdeteksi<br>Melanjutkan...`;

      setTimeout(() => {
        showResult('Via Video', '-', 'Video + Hashtag OK');
      }, 1200);
    } else {
      // ❌ GAGAL TOTAL
      const alasanList = (result.alasan || []).map(a => `• ${a}`).join('<br>');
      status.classList.add('error');
      status.innerHTML = `❌ <strong>Video tidak memenuhi syarat</strong><br><br>${alasanList}`;

      setTimeout(() => {
        const failMsg = document.getElementById('failMessage');
        failMsg.innerHTML = `Video kamu belum memenuhi syarat.<br>Pastikan ada hashtag <strong>#margazestiria</strong> atau <strong>#zestiriacreator</strong>`;
        goToStage('stageFail');
        setStepActive(0);
      }, 3000);
    }
  } catch (err) {
    hideLoading();
    status.classList.add('error');
    status.innerHTML = `❌ <strong>Gagal konek ke server</strong><br><br>Coba lagi ya...`;
    console.error('[ERROR] checkVideo:', err);
  }
}

/* ============================================================
   TAHAP 3: HASIL LOLOS + TOMBOL JOIN
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

function joinNow() {
  showLoading('MEMBUKA JOIN...');
  setTimeout(() => {
    window.location.href = CONFIG.joinURL;
  }, 1500);
}

/* ============================================================
   NAVIGASI
   ============================================================ */
function backToStage1() {
  goToStage('stage1');
  setStepActive(1);
  document.getElementById('status1').className = 'status-box';
  document.getElementById('status1').textContent = '';
  document.getElementById('status2').className = 'status-box';
  document.getElementById('status2').textContent = '';
}

function resetAll() {
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
   INIT
   ============================================================ */
setStepActive(1);

document.getElementById('usernameInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') checkUsername();
});
document.getElementById('videoInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') checkVideo();
});
