/* ============================================================
   UPLOAD.JS — Form Upload Bukti
   ============================================================ */

let selectedFile = null;

document.getElementById('bgImage').style.setProperty('--bg-image', `url('${CONFIG.branding.backgroundURL}')`);

(function applyBranding() {
  const brandName = document.querySelector('.brand-name');
  if (brandName) brandName.textContent = CONFIG.branding.name;

  const footerName = document.querySelector('.footer-name');
  if (footerName) footerName.textContent = CONFIG.branding.footer;
})();

(function autoFillUsername() {
  const params = new URLSearchParams(window.location.search);
  const username = params.get('username');
  if (username) {
    document.getElementById('uploadUsername').value = username;
  }
})();

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
      status.innerHTML = `✅ <strong>Bukti terkirim!</strong><br>Sedang di-review admin. Tunggu max 1x24 jam.`;

      selectedFile = null;
      document.getElementById('uploadFile').value = '';
      document.getElementById('fileLabelText').textContent = '+ Pilih Gambar (max 5 MB)';
      document.getElementById('filePreview').innerHTML = '';
      document.getElementById('filePreview').classList.remove('active');
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

  goToStage('stageStatus');
}

function backToHome() {
  window.location.href = 'index.html';
}
