/* ============================================================
   ⚙️ CONFIG TERPUSAT — EDIT DI SINI AJA
   ============================================================ */
const CONFIG = {
  
  /* ==========================================================
     🔗 URL BOT SERVER (Cloudflare Tunnel)
     
     ⚠️ URL INI BAKAL BERUBAH KALAU TUNNEL RESTART
     
     Base URL ini dipakai buat 2 endpoint:
       - POST /api/check-username  → cek CN & follower
       - POST /api/check-video     → cek hashtag di video
     
     Cara cek URL terbaru di VPS:
     pm2 logs zestiria-tunnel --lines 100 --nostream | grep -oP 'https://[a-z-]+\.trycloudflare\.com' | tail -1
     ========================================================== */
  API_URL: 'https://aside-efforts-ethernet-determine.trycloudflare.com',
  
  /* ==========================================================
     🎨 TAMPILAN
     ========================================================== */
  branding: {
    name: 'Zestiria Catalyst',
    title: 'CEK AKUN TIKTOK',
    subtitle: 'Masukkan username TikTok kamu',
    backgroundURL: 'https://cdn.phototourl.com/free/2026-09-16-c90714dc-c5e6-4011-afa6-dca780478ba3.jpg',
    footer: '@mikosenpaii_',
  },
  
  /* ==========================================================
     🎯 ATURAN SELEKSI (referensi frontend)
     Catatan: aturan utama ada di server.js (VPS)
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
     🔗 LINK JOIN (setelah lolos seleksi)
     ========================================================== */
  joinURL: 'https://chat.whatsapp.com/EK3p4CZw2k8B6LFra4Z5cx?s=cl&p=a&mlu=4&ilr=4',
  
  /* ==========================================================
     👥 OFFICIAL LINKS (Owner / OFC / Anomali)
     ========================================================== */
  official: {
    owner: 'https://tiktok.com/@naellprst_',
    ofc: 'https://tiktok.com/@zestiriacatalys',
    anomali: 'https://tiktok.com/@mikosenpaii_',
  },
  
  /* ==========================================================
     🔗 LINK KAMI (kosongin [] biar section-nya auto-hide)
     
     Format:
     {
       type: 'wa' | 'tiktok' | 'discord' | 'instagram' | 'youtube' | 'default',
       title: 'Judul Link',
       desc: 'Deskripsi singkat',
       url: 'https://...',
     }
     ========================================================== */
  links: [],
  
  /* ==========================================================
     🛒 ORDER (kosongin [] biar section-nya auto-hide)
     ========================================================== */
  orders: [],
};
