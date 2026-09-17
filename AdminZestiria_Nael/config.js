/* ============================================================
   ⚙️ CONFIG TERPUSAT
   ============================================================ */
const CONFIG = {

  /* ==========================================================
     🔗 API URL
     ========================================================== */
  API_URL: 'https://aside-efforts-ethernet-determine.trycloudflare.com',

  /* ==========================================================
     🎨 BRANDING
     ========================================================== */
  branding: {
    name: 'Zestiria Catalyst',
    backgroundURL: 'https://cdn.phototourl.com/free/2026-09-16-c90714dc-c5e6-4011-afa6-dca780478ba3.jpg',
    footer: '@mikosenpaii_',
  },

  /* ==========================================================
     🌐 BAHASA
     ========================================================== */
  defaultLang: 'id',

  i18n: {
    id: {
      step1: 'Cek Akun', step2: 'Cek Video', step3: 'Join',

      titleUsername: 'CEK AKUN TIKTOK',
      subtitleUsername: 'Masukkan username TikTok kamu',
      placeholderUsername: 'username',
      btnCheckUsername: 'CEK AKUN',

      titleVideo: 'CEK VIDEO TIKTOK',
      subtitleVideo: 'Tempel link video TikTok kamu',
      placeholderVideo: 'https://vt.tiktok.com/...',
      btnCheckVideo: 'CEK VIDEO',
      btnBack: '← Kembali ke Tahap 1',

      titleSuccess: 'SELAMAT!',
      subtitleSuccess: 'Kamu lolos seleksi 🎉',
      btnJoin: 'KIRIM BUKTI',

      titleFail: 'MAAF',
      failMessageDefault: 'Kamu belum memenuhi syarat.',
      btnRetry: 'COBA LAGI',

      loadingUsername: 'MENGECEK AKUN...',
      loadingVideo: 'MENGECEK VIDEO...',
      loadingJoin: 'MEMBUKA FORM...',

      helpTitle: 'INFO CN & HASHTAG',
      helpCNTitle: '📝 Format CN (Nama TikTok)',
      helpCNDesc: 'Pilih salah satu format di bawah:',
      helpHashtagTitle: '🏷️ Hashtag Wajib',
      helpHashtagDesc: 'Video harus ada salah satu hashtag ini:',
      helpTips: '💡 <strong>Tips:</strong> Setelah ganti CN, tunggu 1-2 menit biar ke-update.',
      btnCopy: 'Salin',
      btnCopied: 'Disalin!',
      btnClose: 'TUTUP',

      counterLabel: 'Orang Sedang Seleksi',

      countdownLabel: 'Seleksi ditutup dalam',
      countdownEnded: 'Seleksi telah ditutup',
      countdownDays: 'hari', countdownHours: 'jam', countdownMinutes: 'menit', countdownSeconds: 'detik',

      errEmptyUsername: '❌ Username tidak boleh kosong!',
      errEmptyVideo: '❌ Link video tidak boleh kosong!',
      errNotTiktok: '❌ Link harus dari TikTok!',
      errConnect: '❌ <strong>Gagal konek ke server</strong><br><br>Coba lagi...',
      errBlacklist: '🚫 <strong>Akun di-blacklist!</strong>',
      errGeneric: 'Terjadi kesalahan',

      // Upload form
      uploadTitle: 'KIRIM BUKTI',
      uploadSubtitle: 'Isi data di bawah buat verifikasi',
      uploadUsername: 'Username TikTok',
      uploadWa: 'Nomor WhatsApp',
      uploadPlaceholderUsername: 'username',
      uploadPlaceholderWa: '628xxxxxxxxxx',
      uploadScreenshot: 'Screenshot Bukti',
      uploadFileHint: '+ Pilih Gambar (max 5 MB)',
      uploadBtnSend: 'KIRIM BUKTI',
      uploadSuccess: '✅ Bukti terkirim!',
      uploadSuccessDesc: 'Bukti kamu sedang di-review admin. Tunggu max 1x24 jam.',

      // Status
      statusTitle: 'STATUS BUKTI',
      statusPending: '⏳ MENUNGGU REVIEW',
      statusPendingDesc: 'Bukti kamu masih diproses admin.',
      statusAcc: '✅ DITERIMA!',
      statusAccDesc: 'Selamat! Kamu akan segera di-invite ke grup.',
      statusTolak: '❌ DITOLAK',
      statusTolakDesc: 'Maaf, bukti kamu tidak valid.',
      statusNotFound: 'Belum ada submission',
      btnCheckStatus: 'CEK STATUS',
    },
    en: {
      step1: 'Check Account', step2: 'Check Video', step3: 'Join',

      titleUsername: 'CHECK TIKTOK ACCOUNT',
      subtitleUsername: 'Enter your TikTok username',
      placeholderUsername: 'username',
      btnCheckUsername: 'CHECK ACCOUNT',

      titleVideo: 'CHECK TIKTOK VIDEO',
      subtitleVideo: 'Paste your TikTok video link',
      placeholderVideo: 'https://vt.tiktok.com/...',
      btnCheckVideo: 'CHECK VIDEO',
      btnBack: '← Back to Step 1',

      titleSuccess: 'CONGRATULATIONS!',
      subtitleSuccess: 'You passed the selection 🎉',
      btnJoin: 'SEND PROOF',

      titleFail: 'SORRY',
      failMessageDefault: 'You have not met the requirements.',
      btnRetry: 'TRY AGAIN',

      loadingUsername: 'CHECKING ACCOUNT...',
      loadingVideo: 'CHECKING VIDEO...',
      loadingJoin: 'OPENING FORM...',

      helpTitle: 'CN & HASHTAG INFO',
      helpCNTitle: '📝 CN Format',
      helpCNDesc: 'Choose one format below:',
      helpHashtagTitle: '🏷️ Required Hashtag',
      helpHashtagDesc: 'Video must have one of these hashtags:',
      helpTips: '💡 <strong>Tips:</strong> After changing CN, wait 1-2 minutes to update.',
      btnCopy: 'Copy',
      btnCopied: 'Copied!',
      btnClose: 'CLOSE',

      counterLabel: 'People Selecting',

      countdownLabel: 'Selection closes in',
      countdownEnded: 'Selection has ended',
      countdownDays: 'days', countdownHours: 'hours', countdownMinutes: 'minutes', countdownSeconds: 'seconds',

      errEmptyUsername: '❌ Username cannot be empty!',
      errEmptyVideo: '❌ Video link cannot be empty!',
      errNotTiktok: '❌ Link must be from TikTok!',
      errConnect: '❌ <strong>Failed to connect</strong>',
      errBlacklist: '🚫 <strong>Account blacklisted!</strong>',
      errGeneric: 'An error occurred',

      uploadTitle: 'SEND PROOF',
      uploadSubtitle: 'Fill in the data for verification',
      uploadUsername: 'TikTok Username',
      uploadWa: 'WhatsApp Number',
      uploadPlaceholderUsername: 'username',
      uploadPlaceholderWa: '628xxxxxxxxxx',
      uploadScreenshot: 'Screenshot Proof',
      uploadFileHint: '+ Choose Image (max 5 MB)',
      uploadBtnSend: 'SEND PROOF',
      uploadSuccess: '✅ Proof sent!',
      uploadSuccessDesc: 'Your proof is under review. Wait max 1x24 hours.',

      statusTitle: 'PROOF STATUS',
      statusPending: '⏳ WAITING REVIEW',
      statusPendingDesc: 'Your proof is still being processed.',
      statusAcc: '✅ ACCEPTED!',
      statusAccDesc: 'Congratulations! You will be invited to the group.',
      statusTolak: '❌ REJECTED',
      statusTolakDesc: 'Sorry, your proof is not valid.',
      statusNotFound: 'No submission yet',
      btnCheckStatus: 'CHECK STATUS',
    },
  },

  countdown: {
    enabled: true,
    endTime: '2026-09-20T23:59:59',
  },

  effects: {
    confetti: true,
    sound: true,
  },

  tahap1: { minFollower: 30 },
  tahap2: {
    wajibDomain: 'tiktok.com',
    wajibHashtag: ['margazestiria', 'zestiriacreator'],
  },

  blacklist: ['6287761249828', '6285809026857'],

  counter: {
    enabled: true,
    pollingInterval: 3000,
  },

  helpCN: [
    { label: "『𝐙𝐂』𝙉𝙖𝙢𝙖𝙡𝙪" },
    { label: "𝙉𝙖𝙢𝙖𝙡𝙪 ft 𝐙𝐂" },
    { label: "𝙉𝙖𝙢𝙖𝙡𝙪 Zet'cee" },
  ],

  helpHashtag: [
    { label: "#margazestiria" },
    { label: "#zestiriacreator" },
  ],

  joinURL: 'https://chat.whatsapp.com/EK3p4CZw2k8B6LFra4Z5cx?s=cl&p=a&mlu=4&ilr=4',

  official: {
    owner:   'https://tiktok.com/@naellprst_',
    ofc:     'https://tiktok.com/@zestiriacatalys',
    anomali: 'https://tiktok.com/@mikosenpaii_',
  },

  links: [],
  orders: [],
};
