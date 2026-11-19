/* ========== 1. DATA PORTOFOLIO (isi datamu) ========== */
const profil = {
  nama: "Hamster Larp",
  peran: "Mahasiswa",                  //provesi saat ini
  lokasi: "Lampung ",                 // ganti aja asal kota kalian
  kicker: "PORTOFOLIO // Hamster Larp",
  foto: "foto.jpg",           // nama file foto di folder yang sama (kosong = siluet bawaan)
  quote: "",                  // dikosongkan, isi jika ingin menampilkan kutipan
  bio: "Saya Hamster, saya seorang desainer dan programer yang masih pemula serta saya seorang konten kreator.",
  minat: ["Desain", "Programming", "Konten Kreator", "Belajar hal baru"],
  statistik: [
    { label: "Skill", val: 45 },
    { label: "Kreatifitas", val: 76 },
    { label: "Ambisi", val: 62 },
    { label: "Kepintaran", val: 62 }
  ],
  proyek: [
    { label: "COMING SOON", judul: "Coming Soon", desc: "Proyek saya masih dalam pengerjaan. Nantikan segera!", tombol: "", url: "" }
  ],
  sosial: [
    { nama: "Instagram", ikon: "instagram", handle: "@xpose28z", url: "https://www.instagram.com/xpose28z?cnvx=MWsxdHQ0b2dlenZjZw==" },
    { nama: "TikTok",    ikon: "tiktok",    handle: "@hamster_c1huy", url: "https://www.tiktok.com/@hamster_c1huy?_r=1&_t=ZS-9BVLjWBXFgu" },
    { nama: "GitHub",    ikon: "github",    handle: "AldiFiransah", url: "https://github.com/AldiFiransah" },
    { nama: "YouTube",   ikon: "youtube",   handle: "@orang_hitam1", url: "https://youtube.com/@orang_hitam1?si=KESnxshy0cGC7kmE" },
    { nama: "Discord",   ikon: "discord",   handle: "Gabung server", url: "https://discord.gg/pV8GebcCQ2" },
    { nama: "Gmail",     ikon: "gmail",     handle: "aldifiransahsaputra04@gmail.com", url: "mailto:aldifiransahsaputra04@gmail.com" }
  ]
};

/* Logo (SVG) tiap platform */
const SIL = '<svg viewBox="0 0 100 100" fill="currentColor"><circle cx="50" cy="36" r="20"/><path d="M10 100c0-26 18-40 40-40s40 14 40 40z"/></svg>';
const ICON = {
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
  discord: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/></svg>',
  gmail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"><rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="M3 7.5l9 6.5 9-6.5"/></svg>'
};

/* ========== 2. ISI HALAMAN DARI DATA ========== */
const $ = s => document.querySelector(s);
const media = () => profil.foto ? `<img src="${profil.foto}" alt="${profil.nama}">` : SIL;

$("#kicker").textContent = profil.kicker;
$("#heroName").textContent = profil.nama;
$("#heroRole").textContent = profil.peran;
$("#heroRole").hidden = !profil.peran;
$("#heroBio").textContent = profil.bio;
$("#badgeAvatar").innerHTML = media();
$("#badgeAvatar").classList.toggle("photo", !!profil.foto);
$("#badgeName").textContent = profil.nama.toUpperCase();
$("#badgeRole").textContent = profil.peran;
$("#badgeRole").hidden = !profil.peran;
$("#year").textContent = new Date().getFullYear();
$("#footName").textContent = profil.nama;

const tags = (list) => list.map((t, i) => `<span class="tag" style="animation-delay:${i * 0.12 + 0.3}s">${t}</span>`).join("");

$("#card").innerHTML = `
  <div class="who">
    <div class="avatar ${profil.foto ? "photo" : ""}">${media()}</div>
    <h3>${profil.nama}</h3>
    ${profil.peran ? `<p>${profil.peran}</p>` : ""}
    ${profil.lokasi ? `<p>${profil.lokasi}</p>` : ""}
  </div>
  <div>
    ${profil.quote ? '<div class="quote" id="quote"></div>' : ""}
    <p class="bio">${profil.bio}</p>
    <h4>Minat</h4><div class="tags">${tags(profil.minat)}</div>
    <h4>Statistik</h4>
    ${profil.statistik.map(s => `
      <div class="bar">
        <div class="bar-top"><span>${s.label}</span><span class="num" data-to="${s.val}">0%</span></div>
        <div class="bar-bg"><div class="bar-fill" data-w="${s.val}"></div></div>
      </div>`).join("")}
  </div>`;

$("#proyekGrid").innerHTML = profil.proyek.map(p => `
  <article class="proj reveal">
    <span class="lbl">${p.label}</span>
    <h3>${p.judul}</h3>
    <p>${p.desc}</p>
    ${p.tombol ? `<a href="${p.url}" target="_blank" rel="noopener">${p.tombol}</a>` : ""}
  </article>`).join("");

$("#slots").innerHTML = profil.sosial.map((s, i) => `
  <a class="slot reveal" href="${s.url}" target="_blank" rel="noopener" style="transition-delay:${i * 0.08}s">
    <span class="ic">${ICON[s.ikon]}</span><b>${s.nama}</b><small>${s.handle}</small>
  </a>`).join("");

/* ========== 3. HURUF ALA TEMPELAN KORAN ========== */
document.querySelectorAll(".ransom").forEach(el => {
  el.innerHTML = [...el.textContent].map((c, i) =>
    c === " " ? " " : `<span class="l${i % 4}">${c}</span>`).join("");
});

/* ========== 4. ANIMASI: TYPING, COUNT-UP, BAR ========== */
let typeTimer;
function typeText(el, text) {
  clearInterval(typeTimer);
  let n = 0;
  typeTimer = setInterval(() => {
    el.textContent = text.slice(0, ++n);
    if (n >= text.length) clearInterval(typeTimer);
  }, 35);
}
function playCard() {
  if (profil.quote) typeText($("#quote"), "“" + profil.quote + "”");
  document.querySelectorAll(".tag").forEach(t => t.classList.add("in"));
  document.querySelectorAll(".bar-fill").forEach(f => (f.style.width = f.dataset.w + "%"));
  document.querySelectorAll(".num").forEach(el => {
    const to = +el.dataset.to, start = performance.now();
    (function step(t) {
      const k = Math.min((t - start) / 1400, 1);
      el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))) + "%";
      if (k < 1) requestAnimationFrame(step);
    })(start);
  });
}

/* ========== 5. TILT 3D KARTU ID (MOUSE + SENTUHAN) ========== */
const tilt = $("#tilt"), wrap = tilt.parentElement;
function move(cx, cy) {
  const r = wrap.getBoundingClientRect();
  const x = (cx - r.left) / r.width - 0.5, y = (cy - r.top) / r.height - 0.5;
  tilt.style.transform = `rotateY(${x * 35}deg) rotateX(${-y * 35}deg)`;
}
wrap.addEventListener("mousemove", e => move(e.clientX, e.clientY));
wrap.addEventListener("touchmove", e => move(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
["mouseleave", "touchend"].forEach(ev => wrap.addEventListener(ev, () => (tilt.style.transform = "")));

/* ========== 6. SCROLL REVEAL + NAV AKTIF ========== */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add("show");
  if (e.target.id === "card") playCard();
  io.unobserve(e.target);
}), { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

const links = document.querySelectorAll(".nav a");
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
}), { threshold: 0.5 });
document.querySelectorAll("header[id], section[id]").forEach(s => spy.observe(s));

/* ========== 7. LATAR BINTANG JATUH ========== */
const cv = $("#stars"), ctx = cv.getContext("2d");
let stars = [], meteors = [];
function resize() {
  cv.width = innerWidth; cv.height = innerHeight;
  stars = Array.from({ length: 110 }, () => ({
    x: Math.random() * cv.width, y: Math.random() * cv.height,
    r: Math.random() * 1.3 + 0.3, o: Math.random() * 6
  }));
}
addEventListener("resize", resize); resize();

function spawn() {
  const sp = 9 + Math.random() * 7;
  meteors.push({
    x: Math.random() * cv.width * 1.1 + cv.width * 0.2, y: -30 - Math.random() * 100,
    vx: -sp * 0.75, vy: sp * 0.75, len: 90 + Math.random() * 90, life: 1
  });
}
(function loop() {
  ctx.clearRect(0, 0, cv.width, cv.height);
  ctx.fillStyle = "#fff";
  stars.forEach(s => {
    ctx.globalAlpha = 0.25 + (Math.sin(Date.now() / 700 + s.o) + 1) * 0.3;
    ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 7); ctx.fill();
  });
  if (Math.random() < 0.025) spawn();
  meteors = meteors.filter(m => m.life > 0 && m.y < cv.height + 50 && m.x > -200);
  meteors.forEach(m => {
    m.x += m.vx; m.y += m.vy;
    const k = m.len / Math.hypot(m.vx, m.vy);
    const g = ctx.createLinearGradient(m.x, m.y, m.x - m.vx * k, m.y - m.vy * k);
    g.addColorStop(0, "rgba(255,255,255,1)");
    g.addColorStop(0.4, "rgba(176,108,255,.6)");
    g.addColorStop(1, "rgba(139,44,245,0)");
    ctx.globalAlpha = 1; ctx.strokeStyle = g; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(m.x, m.y); ctx.lineTo(m.x - m.vx * k, m.y - m.vy * k); ctx.stroke();
    ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(m.x, m.y, 2, 0, 7); ctx.fill();
  });
  requestAnimationFrame(loop);
})();
