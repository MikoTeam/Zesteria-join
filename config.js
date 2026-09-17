/* ============================================================
   ⚙️ CONFIG TERPUSAT — EDIT DI SINI AJA
   ============================================================ */
const CONFIG = {
  
  /* ==========================================================
     🔗 URL BOT SERVER (Cloudflare Tunnel)
     ⚠️ URL BAKAL BERUBAH KALAU TUNNEL RESTART
     ========================================================== */
  API_URL: 'https://aside-efforts-ethernet-determine.trycloudflare.com',
  
  /* ==========================================================
     🔗 LINK GRUP WA
     ========================================================== */
  joinURL: 'https://chat.whatsapp.com/Dsv0filIr8X3e00VKAiQbN?s=cl&p=a&mlu=4&ilr=4',
  
  /* ==========================================================
     🎨 BRANDING
     ========================================================== */
  branding: {
    name: 'Zestiria Catalyst',
    title: 'CEK AKUN TIKTOK',
    subtitle: 'Masukkan username TikTok kamu',
    backgroundURL: 'https://cdn.phototourl.com/free/2026-09-16-c90714dc-c5e6-4011-afa6-dca780478ba3.jpg',
    footer: '@mikosenpaii_',
  },
  
  /* ==========================================================
     📝 TEXT-TOMBOL & LABEL
     ========================================================== */
  texts: {
    step1: 'Cek Akun',
    step2: 'Cek Video',
    step3: 'Join',
    
    btnCheckUsername: 'CEK AKUN',
    btnCheckVideo: 'CEK VIDEO',
    btnBack: '← Kembali ke Tahap 1',
    btnJoin: 'KIRIM BUKTI',
    btnJoinGroup: 'JOIN GRUP',
    btnUploadBukti: 'KIRIM BUKTI',
    btnRetry: 'COBA LAGI',
    btnClose: 'TUTUP',
    btnCheckStatus: 'CEK STATUS',
    btnBackHome: 'KEMBALI',
    
    placeholderUsername: 'username',
    placeholderVideo: 'https://vt.tiktok.com/...',
    placeholderWa: '628xxxxxxxxxx',
    
    titleSuccess: 'SELAMAT!',
    subtitleSuccess: 'Kamu lolos seleksi 🎉',
    titleFail: 'MAAF',
    failMessageDefault: 'Kamu belum memenuhi syarat.',
    
    loadingUsername: 'MENGECEK AKUN...',
    loadingVideo: 'MENGECEK VIDEO...',
    loadingUpload: 'MENGIRIM BUKTI...',
    loadingStatus: 'MENGECEK STATUS...',
    
    helpTitle: 'INFO CN & HASHTAG',
    helpCNTitle: '📝 Format CN (Nama TikTok)',
    helpCNDesc: 'Pilih salah satu format di bawah, ganti "namamu" dengan nama kamu:',
    helpHashtagTitle: '🏷️ Hashtag Wajib',
    helpHashtagDesc: 'Video kamu harus ada salah satu hashtag ini di caption:',
    helpTips: '💡 <strong>Tips:</strong> Setelah ganti CN di TikTok, tunggu 1-2 menit biar ke-update, baru cek lagi di sini.',
    btnCopy: 'Salin',
    btnCopied: 'Disalin!',
    
    uploadTitle: 'KIRIM BUKTI',
    uploadSubtitle: 'Isi data buat verifikasi admin',
    uploadFileHint: '+ Pilih Gambar (max 5 MB)',
    uploadBtnSend: 'KIRIM BUKTI',
    
    statusTitle: 'STATUS BUKTI',
    statusPending: '⏳ MENUNGGU REVIEW',
    statusPendingDesc: 'Bukti kamu masih diproses admin.',
    statusAcc: '✅ DITERIMA!',
    statusAccDesc: 'Selamat! Kamu akan di-invite ke grup oleh admin.',
    statusTolak: '❌ DITOLAK',
    statusNotFound: 'Belum ada submission',
    
    counterLabel: 'Orang Sedang Seleksi',
    
    countdownLabel: 'Seleksi ditutup dalam',
    countdownEnded: 'Seleksi telah ditutup',
    countdownDays: 'hari',
    countdownHours: 'jam',
    countdownMinutes: 'menit',
    countdownSeconds: 'detik',
  },
  
  /* ==========================================================
     🎯 ATURAN SELEKSI
     ========================================================== */
  tahap1: {
    minFollower: 30,
  },
  
  tahap2: {
    wajibDomain: 'tiktok.com',
    wajibHashtag: ['margazestiria', 'zestiriacreator'],
  },
  
  blacklist: ['6287761249828', '6285809026857'],
  
  /* ==========================================================
     📊 COUNTER
     ========================================================== */
  counter: {
    enabled: true,
    pollingInterval: 3000,
  },
  
  /* ==========================================================
     ⏱️ COUNTDOWN
     ========================================================== */
  countdown: {
    enabled: true,
    endTime: '2026-09-20T23:59:59',
  },
  
  /* ==========================================================
     🎉 EFFECTS
     ========================================================== */
  effects: {
    confetti: true,
    sound: true,
  },
  
  /* ==========================================================
     📝 POPUP HELP — FORMAT CN
     ========================================================== */
  helpCN: [
    { label: "『𝐙𝐂』𝙉𝙖𝙢𝙖𝙡𝙪" },
    { label: "𝙉𝙖𝙢𝙖𝙡𝙪 ft 𝐙𝐂" },
    { label: "𝙉𝙖𝙢𝙖𝙡𝙪 Zet'cee" },
  ],
  
  /* ==========================================================
     🏷️ POPUP HELP — HASHTAG WAJIB
     ========================================================== */
  helpHashtag: [
    { label: "#margazestiria" },
    { label: "#zestiriacreator" },
  ],
  
  /* ==========================================================
     👥 OFFICIAL LINKS
     ========================================================== */
  official: {
    owner: 'https://tiktok.com/@naellprst_',
    ofc: 'https://tiktok.com/@zestiriacatalys',
    anomali: 'https://tiktok.com/@mikosenpaii_',
  },
  
  links: [],
  orders: [],
};
