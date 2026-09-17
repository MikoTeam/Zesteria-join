/* ============================================================
   ADMIN.JS — Logic Panel Admin
   ============================================================ */

/* ============================================================
   ⚙️ CONFIG
   ============================================================ */
const CONFIG = {
  API_URL: 'https://aside-efforts-ethernet-determine.trycloudflare.com',
};

/* ============================================================
   STATE
   ============================================================ */
let adminToken = sessionStorage.getItem('admin_token') || null;
let adminName = sessionStorage.getItem('admin_name') || '';
let allSubmissions = [];
let currentFilter = 'all';
let currentSubmissionId = null;
let currentPage = 'branda';

/* ============================================================
   HELPER
   ============================================================ */
function showLoading() {
  document.getElementById('loading').classList.add('active');
}

function hideLoading() {
  document.getElementById('loading').classList.remove('active');
}

function showToast(msg, type = 'info') {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = 'toast ' + type;
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => toast.classList.remove('show'), 2500);
}

function formatDate(iso) {
  const d = new Date(iso);
  const pad = n => String(n).padStart(2, '0');
  return `${pad(d.getDate())}/${pad(d.getMonth()+1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

/* ============================================================
   LOGIN
   ============================================================ */
async function doLogin() {
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value.trim();
  const errorEl = document.getElementById('loginError');

  errorEl.textContent = '';

  if (!username || !password) {
    errorEl.textContent = '❌ Username & password wajib diisi';
    return;
  }

  showLoading();

  try {
    const res = await fetch(`${CONFIG.API_URL}/api/admin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    hideLoading();

    if (data.success) {
      adminToken = data.token;
      adminName = data.username || username;
      sessionStorage.setItem('admin_token', adminToken);
      sessionStorage.setItem('admin_name', adminName);
      showDashboard();
      loadBranda();
      loadSubmissions();
      showToast('✅ Login berhasil — ' + adminName, 'success');
    } else {
      errorEl.textContent = '❌ ' + (data.message || 'Login gagal');
    }
  } catch (err) {
    hideLoading();
    errorEl.textContent = '❌ Gagal konek ke server';
    console.error(err);
  }
}

function doLogout() {
  if (!confirm('Yakin mau logout?')) return;
  adminToken = null;
  adminName = '';
  sessionStorage.removeItem('admin_token');
  sessionStorage.removeItem('admin_name');
  document.getElementById('dashboard').style.display = 'none';
  document.getElementById('loginScreen').style.display = 'flex';
  document.getElementById('loginUsername').value = '';
  document.getElementById('loginPassword').value = '';
  showToast('🚪 Logout berhasil');
}

function showDashboard() {
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('dashboard').style.display = 'block';
}

/* ============================================================
   SWITCH PAGE
   ============================================================ */
function switchPage(page) {
  currentPage = page;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  document.getElementById('page' + page.charAt(0).toUpperCase() + page.slice(1)).classList.add('active');
  document.querySelector(`.nav-item[data-page="${page}"]`).classList.add('active');

  if (page === 'branda') loadBranda();
  if (page === 'verify') loadSubmissions();
}

/* ============================================================
   LOAD BRANDA (statistik)
   ============================================================ */
async function loadBranda() {
  if (!adminToken) return;

  try {
    // Ambil counter
    const counterRes = await fetch(`${CONFIG.API_URL}/api/get-counter`);
    const counterData = await counterRes.json();
    if (counterData.success) {
      document.getElementById('counterValue').textContent = counterData.count;
    }

    // Ambil submissions
    const res = await fetch(`${CONFIG.API_URL}/api/admin/submissions`, {
      headers: { 'x-admin-token': adminToken },
    });
    const data = await res.json();
    if (data.success) {
      allSubmissions = data.data || [];
      renderStats();
    }
  } catch (err) {
    console.error('[BRANDA] Error:', err);
  }
}

/* ============================================================
   RENDER STATS
   ============================================================ */
function renderStats() {
  const total = allSubmissions.length;
  const pending = allSubmissions.filter(s => s.status === 'pending').length;
  const acc = allSubmissions.filter(s => s.status === 'acc').length;
  const tolak = allSubmissions.filter(s => s.status === 'tolak').length;

  document.getElementById('statTotal').textContent = total;
  document.getElementById('statPending').textContent = pending;
  document.getElementById('statAcc').textContent = acc;
  document.getElementById('statTolak').textContent = tolak;
}

/* ============================================================
   LOAD SUBMISSIONS
   ============================================================ */
async function loadSubmissions() {
  if (!adminToken) return;
  showLoading();

  try {
    const res = await fetch(`${CONFIG.API_URL}/api/admin/submissions`, {
      headers: { 'x-admin-token': adminToken },
    });

    const data = await res.json();
    hideLoading();

    if (data.success) {
      allSubmissions = data.data || [];
      renderStats();
      renderList();
    } else {
      showToast('❌ ' + (data.message || 'Gagal load data'), 'error');
    }
  } catch (err) {
    hideLoading();
    showToast('❌ Gagal konek ke server', 'error');
    console.error(err);
  }
}

/* ============================================================
   RENDER LIST
   ============================================================ */
function renderList() {
  const container = document.getElementById('submissionList');
  const filtered = currentFilter === 'all'
    ? allSubmissions
    : allSubmissions.filter(s => s.status === currentFilter);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
            <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
          </svg>
        </div>
        <div class="empty-text">Belum ada submission</div>
      </div>
    `;
    return;
  }

  const statusLabel = {
    pending: 'Pending',
    acc: 'ACC',
    tolak: 'Tolak',
  };

  container.innerHTML = filtered.map(s => `
    <div class="submission-card status-${s.status}" onclick="openDetail('${s.id}')">
      <div class="sub-avatar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </div>
      <div class="sub-content">
        <div class="sub-username">@${s.username}</div>
        <div class="sub-meta">
          <span>${s.wa}</span>
          <span>${formatDate(s.waktu)}</span>
        </div>
      </div>
      <div class="sub-status ${s.status}">${statusLabel[s.status] || s.status}</div>
    </div>
  `).join('');
}

/* ============================================================
   FILTER
   ============================================================ */
function setFilter(filter) {
  currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === filter);
  });
  renderList();
}

/* ============================================================
   MODAL DETAIL
   ============================================================ */
function openDetail(id) {
  const sub = allSubmissions.find(s => s.id === id);
  if (!sub) return;

  currentSubmissionId = id;

  document.getElementById('modalUsername').textContent = '@' + sub.username;
  document.getElementById('detailWa').textContent = sub.wa;
  document.getElementById('detailWaktu').textContent = formatDate(sub.waktu);

  const statusText = 
    sub.status === 'pending' ? '⏳ Menunggu review' :
    sub.status === 'acc' ? '✅ Diterima' :
    '❌ Ditolak' + (sub.alasan ? ' — ' + sub.alasan : '');
  document.getElementById('detailStatus').textContent = statusText;

  const imgEl = document.getElementById('detailImage');
  imgEl.src = `${CONFIG.API_URL}/uploads/${sub.screenshot}`;

  const footer = document.getElementById('modalFooter');
  footer.style.display = sub.status === 'pending' ? 'flex' : 'none';

  document.getElementById('modalDetail').classList.add('active');
}

function closeModal() {
  document.getElementById('modalDetail').classList.remove('active');
  currentSubmissionId = null;
}

/* ============================================================
   APPROVE
   ============================================================ */
async function approveCurrent() {
  if (!currentSubmissionId) return;
  if (!confirm('Yakin ACC submission ini?')) return;

  showLoading();

  try {
    const res = await fetch(`${CONFIG.API_URL}/api/admin/approve`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-admin-token': adminToken,
      },
      body: JSON.stringify({ id: currentSubmissionId }),
    });

    const data = await res.json();
    hideLoading();

    if (data.success) {
      showToast('✅ User di-ACC', 'success');
      closeModal();
      loadSubmissions();
      loadBranda();
    } else {
      showToast('❌ ' + data.message, 'error');
    }
  } catch (err) {
    hideLoading();
    showToast('❌ Gagal konek', 'error');
  }
}

/* ============================================================
   REJECT
   ============================================================ */
function openRejectModal() {
  document.getElementById('rejectReason').value = '';
  document.getElementById('modalReject').classList.add('active');
}

function closeRejectModal() {
  document.getElementById('modalReject').classList.remove('active');
}

async function confirmReject() {
  if (!currentSubmissionId) return;

  const alasan = document.getElementById('rejectReason').value.trim();
  if (!alasan) {
    showToast('❌ Alasan wajib diisi', 'error');
    return;
  }

  showLoading();

  try {
    const res = await fetch(`${CONFIG.API_URL}/api/admin/reject`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-admin-token': adminToken,
      },
      body: JSON.stringify({ id: currentSubmissionId, alasan }),
    });

    const data = await res.json();
    hideLoading();

    if (data.success) {
      showToast('❌ User ditolak', 'success');
      closeRejectModal();
      closeModal();
      loadSubmissions();
      loadBranda();
    } else {
      showToast('❌ ' + data.message, 'error');
    }
  } catch (err) {
    hideLoading();
    showToast('❌ Gagal konek', 'error');
  }
}

/* ============================================================
   FULLSCREEN
   ============================================================ */
function openFullscreen(src) {
  document.getElementById('fullscreenImg').src = src;
  document.getElementById('fullscreen').classList.add('active');
}

function closeFullscreen() {
  document.getElementById('fullscreen').classList.remove('active');
}

/* ============================================================
   INIT
   ============================================================ */
(function init() {
  if (adminToken) {
    showDashboard();
    loadBranda();
    loadSubmissions();
  }

  document.getElementById('loginUsername').addEventListener('keypress', e => {
    if (e.key === 'Enter') document.getElementById('loginPassword').focus();
  });
  document.getElementById('loginPassword').addEventListener('keypress', e => {
    if (e.key === 'Enter') doLogin();
  });

  document.getElementById('modalDetail').addEventListener('click', e => {
    if (e.target.id === 'modalDetail') closeModal();
  });
  document.getElementById('modalReject').addEventListener('click', e => {
    if (e.target.id === 'modalReject') closeRejectModal();
  });
})();
