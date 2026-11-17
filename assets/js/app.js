/* Georges Asis Farm: site behaviour. Content lives in data.js, Kiswahili text in i18n.js */
(() => {
  const F = window.FARM, SW = window.FARM_SW || {};
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const h = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const money = n => "KSh " + n.toLocaleString("en-KE", { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 });
  const priceTxt = n => "KSh " + (n % 1 ? n.toFixed(2) : n);
  const wa = text => `https://wa.me/${F.whatsapp}?text=${encodeURIComponent(text)}`;

  /* ---------- Language ---------- */
  const store = { get(k) { try { return localStorage.getItem(k); } catch { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch {} } };
  let lang = store.get("lang") || ((navigator.language || "").toLowerCase().startsWith("sw") ? "sw" : "en");
  const isSw = () => lang === "sw";
  // English strings are taken from index.html the first time, so they only live in one place
  const EN = {};
  $$("[data-i18n]").forEach(el => { const k = el.dataset.i18n; if (!(k in EN)) EN[k] = el.innerHTML; });
  $$("[data-i18n-ph]").forEach(el => EN[el.dataset.i18nPh] = el.placeholder);
  Object.assign(EN, {
    pillSoon: "Launching soon · Pre-booking open", pillLive: "Seedlings available now", perSeedShort: "/ seedling",
    perSeed: "per seedling", addOrder: "Add to my order", copy: "Copy", copied: "Copied", call: "Call",
    waHello: "Hello Georges Asis Farm, I would like to pre-book seedlings.", waTotalLine: "Total: {n} seedlings, {sum}",
    waName: "Name", waPlace: "Location",
    waConfirm: "Please confirm availability and the collection date. I will pay via M-Pesa Paybill {paybill}, Account {account} after confirmation. Thank you.",
    waPartner: "Hello Georges Asis Farm, we are an organisation interested in a partnership (bulk seedlings for groups / training / product demonstration). Can we discuss?",
    langOther: "Kiswahili", langOtherShort: "SW", langAria: "Badilisha lugha iwe Kiswahili"
  });
  const t = k => (isSw() && SW[k] != null ? SW[k] : EN[k] ?? k);
  const pick = (obj, key) => (isSw() && obj[key + "_sw"] ? obj[key + "_sw"] : obj[key]);

  /* ---------- Crop illustrations ---------- */
  const ART = {
    cabbage: `<svg viewBox="0 0 120 120"><ellipse cx="60" cy="104" rx="38" ry="6" fill="#7a4b2a" opacity=".18"/>
      <path d="M20 78c-6-22 8-44 24-46-10 10-12 28-4 44z" fill="#4f9d3a"/><path d="M100 78c6-22-8-44-24-46 10 10 12 28 4 44z" fill="#4f9d3a"/>
      <path d="M26 86c-4-10 0-20 8-24 8 18 30 26 52 0 8 4 12 14 8 24-10 16-58 16-68 0z" fill="#5fb246"/>
      <circle cx="60" cy="62" r="30" fill="#9ad66f"/><circle cx="60" cy="60" r="22" fill="#bfe891"/>
      <path d="M60 40c-8 6-10 16-6 26M60 40c8 6 10 16 6 26M44 52c6 2 12 8 14 16M76 52c-6 2-12 8-14 16" stroke="#8cc45f" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,
    kale: `<svg viewBox="0 0 120 120"><ellipse cx="60" cy="104" rx="30" ry="5" fill="#7a4b2a" opacity=".18"/>
      <path d="M60 102V58" stroke="#3f7d2c" stroke-width="5" stroke-linecap="round"/>
      <path d="M58 70C38 72 22 58 20 34c8 2 10-2 16 2 4-4 8 0 12-2 2 6 8 4 10 10 4 6 0 12 0 26z" fill="#3e8f3a"/>
      <path d="M62 70c20 2 36-12 38-36-8 2-10-2-16 2-4-4-8 0-12-2-2 6-8 4-10 10-4 6 0 12 0 26z" fill="#4ea544"/>
      <path d="M60 62C52 46 52 26 60 10c4 6 8 4 10 10 4 2 2 8 4 12-2 8 0 14-6 22z" fill="#62bb4f"/>
      <path d="M58 68C46 58 36 46 28 38M62 68c12-10 22-22 30-30M60 60V20" stroke="#a8de86" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,
    capsicum: `<svg viewBox="0 0 120 120"><ellipse cx="60" cy="106" rx="30" ry="5" fill="#7a4b2a" opacity=".18"/>
      <path d="M58 30c0-10 6-16 14-18" stroke="#3f7d2c" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M44 34c8-6 24-6 32 0" stroke="#3f7d2c" stroke-width="7" stroke-linecap="round" fill="none"/>
      <path d="M36 44c4-10 14-12 24-8 10-4 20-2 24 8 6 16 4 40-8 54-6 6-12 2-16-2-4 4-10 8-16 2-12-14-14-38-8-54z" fill="#3fa34d"/>
      <path d="M60 36c-6 18-6 44 0 62" stroke="#2f8a3d" stroke-width="3" fill="none"/>
      <path d="M44 46c-4 12-2 28 4 40" stroke="#8fdc8f" stroke-width="4" fill="none" stroke-linecap="round" opacity=".7"/></svg>`
  };

  /* ---------- Rendering (re-run when the language changes) ---------- */
  const qty = Object.fromEntries(F.seedlings.map(s => [s.id, 0]));

  function renderStatic() {
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach(el => el.innerHTML = t(el.dataset.i18n));
    $$("[data-i18n-ph]").forEach(el => el.placeholder = t(el.dataset.i18nPh));
    const lb = $("#langBtn");
    $(".long", lb).textContent = t("langOther"); $(".short", lb).textContent = t("langOtherShort");
    lb.setAttribute("aria-label", t("langAria"));
  }

  function renderHero() {
    $("#statusPill").innerHTML = "<i></i> " + t(F.launched ? "pillLive" : "pillSoon");
    $("#heroPrices").innerHTML = F.seedlings.map(s => `<div class="hp"><span>${s.name} · ${s.local}</span><b>${priceTxt(s.price)}</b> <small>${t("perSeedShort")}</small></div>`).join("");
    ["#navWa", "#heroWa", "#waFloat", "#contactWa"].forEach(id => $(id).href = wa(t("waHello")));
  }

  function renderCrops() {
    $("#crops").innerHTML = F.seedlings.map(s => `
      <article class="crop reveal in">
        <div class="crop-art">${ART[s.art] || ""}</div>
        <div class="crop-body">
          <h3>${isSw() ? s.local : s.name}</h3><span class="local">${isSw() ? s.name : s.local}</span>
          <p>${pick(s, "note")}</p>
          <div class="price"><b>${priceTxt(s.price)}</b><span>${t("perSeed")}</span></div>
          <a href="#book" class="btn btn-sun" data-add="${s.id}">${t("addOrder")}</a>
        </div>
      </article>`).join("");
    $$("[data-add]").forEach(b => b.addEventListener("click", () => { const id = b.dataset.add; if (!qty[id]) setQty(id, 500); }));
  }

  function renderCalc() {
    $("#calcRows").innerHTML = F.seedlings.map(s => `
      <div class="crow" data-id="${s.id}">
        <div class="crow-name"><b>${isSw() ? s.local : s.name} <span>(${isSw() ? s.name : s.local})</span></b><span>${priceTxt(s.price)} ${t("perSeed")}</span></div>
        <div class="stepper">
          <button type="button" data-d="-100" aria-label="−100">−</button>
          <input type="number" min="0" step="50" value="${qty[s.id]}" inputmode="numeric" aria-label="${s.name}">
          <button type="button" data-d="100" aria-label="+100">+</button>
        </div>
        <div class="presets">${[100, 500, 1000, 2000].map(n => `<button type="button" data-set="${n}">${n.toLocaleString()}</button>`).join("")}</div>
        <div class="sub"></div>
      </div>`).join("");
    $$(".crow").forEach(row => {
      const id = row.dataset.id, input = $("input", row);
      $$("[data-d]", row).forEach(b => b.addEventListener("click", () => setQty(id, qty[id] + +b.dataset.d)));
      $$("[data-set]", row).forEach(b => b.addEventListener("click", () => setQty(id, +b.dataset.set)));
      input.addEventListener("input", () => setQty(id, input.value));
    });
    $("#payNote").textContent = pick(F.payment, "note");
    update();
  }

  function renderGallery() {
    $("#gallery").innerHTML = F.photos.gallery.map(g => `<figure class="g reveal in"><img src="${g.src}" alt="${pick(g, "cap")}" loading="lazy" style="object-position:${g.pos || "center"}" onerror="this.remove()"><span>${pick(g, "cap")}</span></figure>`).join("");
    $$(".g").forEach((g, i) => g.addEventListener("click", () => { $("#lbImg").src = F.photos.gallery[i].src; $("#lbImg").alt = pick(F.photos.gallery[i], "cap"); lbEl.classList.add("open"); }));
  }

  function renderPartner() {
    const P = F.partner;
    $("#pTitle").textContent = pick(P, "title"); $("#pIntro").textContent = pick(P, "intro");
    $("#offers").innerHTML = P.offers.map(o => `<div class="offer reveal in"><span class="oi">${o.icon}</span><span class="otag">${pick(o, "tag")}</span><h3>${pick(o, "t")}</h3><p>${pick(o, "d")}</p></div>`).join("");
    $("#benefits").innerHTML = pick(P, "benefits").map(x => `<span>${x}</span>`).join("");
    $("#partnerWa").href = wa(t("waPartner"));
    $("#partnerCall").href = "tel:" + F.phone; $("#partnerCall").textContent = t("call") + " " + F.phoneDisplay;
  }

  function renderContact() {
    $("#loc").textContent = F.location; $("#landmark").textContent = pick(F, "landmark");
    $("#contactWa").textContent = "WhatsApp " + F.whatsappDisplay;
    $("#cWa").innerHTML = `<a href="${wa(t("waHello"))}" target="_blank" rel="noopener">${F.whatsappDisplay}</a>`;
    const hrs = F.hours || [];
    $("#hoursBox").hidden = !hrs.length;
    $("#hours").innerHTML = hrs.map(x => `<li><span>${pick(x, "days")}</span><b>${pick(x, "time")}</b></li>`).join("");
  }

  function renderAll() { renderStatic(); renderHero(); renderCrops(); renderCalc(); renderGallery(); renderPartner(); renderContact(); }

  /* ---------- Order calculator ---------- */
  function setQty(id, n) {
    qty[id] = Math.max(0, Math.round(+n || 0));
    const input = $(`.crow[data-id="${id}"] input`);
    if (input && +input.value !== qty[id]) input.value = qty[id];
    update();
  }
  function update() {
    let count = 0, sum = 0;
    F.seedlings.forEach(s => {
      const n = qty[s.id], sub = n * s.price;
      count += n; sum += sub;
      $(`.crow[data-id="${s.id}"] .sub`).textContent = n ? `${n.toLocaleString()} × ${priceTxt(s.price)} = ${money(sub)}` : "";
    });
    $("#tCount").textContent = count.toLocaleString();
    $("#tSum").textContent = money(sum);
    $("#calcSend").disabled = count === 0;
  }
  $("#calc").addEventListener("submit", e => {
    e.preventDefault();
    let lines = [], count = 0, sum = 0;
    F.seedlings.forEach(s => {
      const n = qty[s.id]; if (!n) return;
      count += n; sum += n * s.price;
      lines.push(`• ${s.name} (${s.local}): ${n.toLocaleString()} × ${priceTxt(s.price)} = ${money(n * s.price)}`);
    });
    const name = $("#cName").value.trim(), place = $("#cPlace").value.trim();
    const msg = [t("waHello"), "", ...lines, "", t("waTotalLine").replace("{n}", count.toLocaleString()).replace("{sum}", money(sum)),
      name ? `${t("waName")}: ${name}` : null, place ? `${t("waPlace")}: ${place}` : null, "",
      t("waConfirm").replace("{paybill}", F.payment.paybill).replace("{account}", F.payment.account)]
      .filter(x => x !== null).join("\n");
    window.open(wa(msg), "_blank", "noopener");
  });

  /* ---------- Fixed content ---------- */
  const heroImg = $("#heroImg"); if (heroImg && F.photos.hero) heroImg.src = F.photos.hero;
  $("#year").textContent = new Date().getFullYear();
  $("#payBill").textContent = F.payment.paybill; $("#payAcc").textContent = F.payment.account;
  $$(".copy").forEach(btn => btn.addEventListener("click", async () => {
    const v = $("#" + btn.dataset.copy).textContent;
    try { await navigator.clipboard.writeText(v); } catch { const ta = Object.assign(document.createElement("textarea"), { value: v }); document.body.append(ta); ta.select(); document.execCommand("copy"); ta.remove(); }
    btn.textContent = t("copied"); btn.classList.add("ok"); setTimeout(() => { btn.textContent = t("copy"); btn.classList.remove("ok"); }, 1500);
  }));
  $("#partnerMail").href = `mailto:${F.email}?subject=${encodeURIComponent("Partnership enquiry: Georges Asis Farm")}&body=${encodeURIComponent("Hello Nelson,\n\nWe are interested in working with Georges Asis Farm on:\n[ ] Seedlings for CBOs / farmer groups\n[ ] Training and demonstration at the farm\n[ ] Product demonstration and promotion\n\nOrganisation:\nContact person:\nPhone:\n\nRegards,\n")}`;
  $("#directions").href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(F.mapsQuery);
  $("#cPerson").textContent = F.contactPerson;
  $("#cPhone").innerHTML = `<a href="tel:${F.phone}">${F.phoneDisplay}</a>`;
  $("#cEmail").innerHTML = `<a href="mailto:${F.email}">${F.email}</a>`;
  const soc = $("#social");
  [["tiktok", "TikTok"], ["facebook", "Facebook"], ["instagram", "Instagram"]].forEach(([k, label]) => {
    if (F.social[k]) soc.append(Object.assign(h("a", null, label), { href: F.social[k], target: "_blank", rel: "noopener" }));
  });

  /* ---------- Lightbox ---------- */
  const lbEl = $("#lb");
  const closeLb = () => lbEl.classList.remove("open");
  $("#lbX").addEventListener("click", closeLb);
  lbEl.addEventListener("click", e => { if (e.target === lbEl) closeLb(); });
  addEventListener("keydown", e => { if (e.key === "Escape") closeLb(); });

  /* ---------- First render + language switch ---------- */
  renderAll();
  $("#langBtn").addEventListener("click", () => { lang = isSw() ? "en" : "sw"; store.set("lang", lang); renderAll(); });

  /* ---------- Nav, reveal, floating WhatsApp button ---------- */
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("solid", scrollY > 40);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  $("#menuBtn").addEventListener("click", () => $("#navLinks").classList.toggle("open"));
  $$("#navLinks a").forEach(a => a.addEventListener("click", () => $("#navLinks").classList.remove("open")));
  const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: .12 });
  $$(".reveal:not(.in)").forEach(el => io.observe(el));

  // Hide the floating button while the hero, the calculator's send button or the footer is on screen,
  // so it never covers the WhatsApp buttons already there
  const floatBtn = $("#waFloat"), covering = new Set();
  const fio = new IntersectionObserver(es => {
    es.forEach(en => en.isIntersecting ? covering.add(en.target) : covering.delete(en.target));
    floatBtn.classList.toggle("hide", covering.size > 0);
  });
  [".hero", "#calcSend", ".partner-cta", ".contact-btns", ".footer"].forEach(sel => { const el = $(sel); if (el) fio.observe(el); });
})();
