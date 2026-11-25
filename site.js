/* La Bolera: idioma (ES/EN), horario de hoy, lista de pedido a WhatsApp, parallax y apariciones.
   El número de WhatsApp se cambia aquí (formato internacional, sin + ni espacios) y en el action del formulario. */
(() => {
  const WHATSAPP = '50374756008';

  const MENU = {
    'cev-cam': { es: 'Ceviche de camarón', en: 'Shrimp ceviche', p: 8.50 },
    'coc-cam': { es: 'Cóctel de camarón', en: 'Shrimp cocktail', p: 7.75 },
    'calam':   { es: 'Calamares fritos', en: 'Fried calamari', p: 8.25 },
    'moj':     { es: 'Mojarra frita', en: 'Fried tilapia', p: 9.50 },
    'cev-pes': { es: 'Ceviche de pescado', en: 'Fish ceviche', p: 7.25 },
    'cev-mix': { es: 'Ceviche mixto', en: 'Mixed ceviche', p: 9.75 },
    'cev-con': { es: 'Ceviche de concha negra', en: 'Black clam ceviche', p: 10.50 },
    'coc-con': { es: 'Cóctel de conchas', en: 'Black clam cocktail', p: 9.25 },
    'camp':    { es: 'Campechana', en: 'Mixed seafood cocktail', p: 10.75 },
    'pargo':   { es: 'Pargo entero frito', en: 'Whole fried snapper', p: 13.75 },
    'ajillo':  { es: 'Camarones al ajillo', en: 'Garlic shrimp', p: 10.25 },
    'emp':     { es: 'Camarones empanizados', en: 'Breaded shrimp', p: 9.75 },
    'sopa':    { es: 'Sopa de mariscos', en: 'Seafood soup', p: 11.25 },
    'marisc':  { es: 'Mariscada en crema', en: 'Creamy seafood stew', p: 15.50 },
    'mich':    { es: 'Michelada', en: 'Michelada', p: 3.50 },
    'beer':    { es: 'Cerveza nacional', en: 'Local beer', p: 2.25 },
    'lim':     { es: 'Limonada', en: 'Lemonade', p: 1.85 },
    'coco':    { es: 'Coco helado', en: 'Iced coconut', p: 2.00 },
    'soda':    { es: 'Refresco', en: 'Soft drink', p: 1.25 },
  };

  const EN = {
    skip: 'Skip to content', navMain: 'Main', navToggle: 'Menu', navMenu: 'Menu', navCarta: 'Full menu', navRev: 'Guests', navVisit: 'Visit',
    ctaOrder: 'Order on WhatsApp', ctaNav: 'Book or order', ctaReserve: 'Book a table', ctaPickup: 'Order for pickup',
    demoNote: 'Sample prices and photos for this preview; they will be replaced with the restaurant\'s real menu.',
    modeGroup: 'Request type', modeReserve: 'Book a table', modePickup: 'Pickup', fPeople: 'Guests', fDate: 'Day', fTimeReserve: 'Arrival time', fTimePickup: 'Pickup time',
    timeHint: '3:00 p.m. to 2:00 a.m.', errPeople: 'Write how many people are coming.', errDate: 'Choose the day; we are closed on Tuesdays.', errTime: 'Choose a time between 3:00 p.m. and 2:00 a.m.',
    cartReserve: 'Dishes to have ready (optional)', cartPickup: 'Your order', sendReserve: 'Send booking on WhatsApp', sendPickup: 'Send order on WhatsApp', seeMenu: 'See the menu', logoAlt: 'Restaurante La Bolera logo',
    heroH1: 'Seafood by the sea on the', heroH2: 'La Libertad Malecón',
    heroLead: 'Huge ceviches, calamari and micheladas made to order, with the night view of the port.',
    factRating: '5.0 rating', factHours: '3 p.m. to 2 a.m.', factPlace: 'Puerto de La Libertad',
    mq1: 'Ceviches', mq2: 'Shrimp cocktails', mq3: 'Calamari', mq4: 'Fried tilapia', mq5: 'Micheladas', mq6: 'Sea view',
    visitOrn: 'Hours and location', visitH: 'Visit us on the Malecón', addr1: 'Malecón del Puerto', seeArea: 'See the area',
    dMon: 'Monday', dTue: 'Tuesday', dWed: 'Wednesday', dThu: 'Thursday', dFri: 'Friday', dSat: 'Saturday', dSun: 'Sunday', closed: 'Closed',
    visitAlt: 'A palm tree and street lamps on the La Libertad Malecón at dusk',
    menuOrn: 'House favourites', menuH: 'Menu and prices', menuSide: 'Prices in US dollars. Every dish is made when you order it.',
    iCevCam: 'Shrimp ceviche', dCevCam: 'Cured in lime, with fried plantain.', altCevCam: 'Shrimp ceviche in a glass, with fried plantain',
    iCocCam: 'Shrimp cocktail', dCocCam: 'With avocado and tostadas.', altCocCam: 'Shrimp cocktail in a tall glass, with avocado and tostadas',
    iCalam: 'Fried calamari', dCalam: 'With lime and hot sauce.', altCalam: 'Fried calamari with hot sauce and lime',
    iMoj: 'Fried tilapia', dMoj: 'With rice, salad and fries.', altMoj: 'Whole fried tilapia with rice, salad and fries',
    add: 'Add', added: 'Added',
    cartaOrn: 'To share at the table', cartaH: 'The full menu',
    gCev: 'Ceviches and cocktails', gMain: 'Main plates', gDrinks: 'Drinks',
    altGCev: 'Fish ceviche with red onion, corn and sweet potato', altGMain: 'Seafood soup with shrimp and clams', altGDrinks: 'Tamarind michelada with lime and a chili rim',
    iCevPes: 'Fish ceviche', iCevMix: 'Mixed ceviche', iCevCon: 'Black clam ceviche', iCocCon: 'Black clam cocktail', iCamp: 'Mixed seafood cocktail',
    iPargo: 'Whole fried snapper', iAjillo: 'Garlic shrimp', iEmp: 'Breaded shrimp', iSopa: 'Seafood soup', iMarisc: 'Creamy seafood stew',
    iMich: 'Michelada', iBeer: 'Local beer', iLim: 'Lemonade', iCoco: 'Iced coconut', iSoda: 'Soft drink',
    revH: 'What our guests say', ratingTxt: '5.0 rating',
    revText: 'They come back for the night view from the Malecón, food made to order, the <strong>huge ceviches</strong> and the calamari.',
    rv1: 'The night view from the Malecón', rv2: 'Food made to order', rv3: 'The huge ceviches', rv4: 'The calamari',
    badgeTxt: 'RESTAURANT ✦ LA BOLERA ✦ LA LIBERTAD MALECÓN ✦',
    orderOrn: 'Bookings and pickup orders', orderH: 'Book a table or order for pickup', orderSide: 'Choose the time and we confirm on WhatsApp.',
    orderAlt: 'Fried tilapia served with avocado, tomato and rice',
    orderEmpty: 'No dishes yet. Tap Add on the menu.', total: 'Total',
    fName: 'Name', errName: 'Write the name for the booking or order.', fNote: 'Note (optional)',
    errEmpty: 'For pickup, add at least one dish from the menu.', orderNote: 'WhatsApp opens with your message ready; the restaurant confirms there.',
    closeH: 'See you on the Malecón', closeLead: 'Tables by the sea, seafood made to order and ice-cold beer. Open 3 p.m. to 2 a.m.; closed Tuesdays.',
    ciPlaceK: 'Where', ciPlaceV: 'Malecón, Puerto de La Libertad', ciHoursK: 'Hours', ciHoursV: 'Mon and Wed to Sun, 3 p.m. to 2 a.m.', ciGoK: 'Bookings and orders', ciGoV: 'On WhatsApp, at the time you choose',
    credits: 'Photographs via Wikimedia Commons',
    qtyLess: 'One less', qtyMore: 'One more', today: 'Today',
  };

  const store = {
    get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
  };

  /* ---------- idioma ---------- */
  const ES = { added: 'Agregado', qtyLess: 'Uno menos', qtyMore: 'Uno más', today: 'Hoy' };
  let lang = store.get('lb-lang') === 'en' ? 'en' : 'es';
  const t = (k) => (lang === 'en' ? EN[k] : ES[k]) ?? ES[k] ?? EN[k] ?? k;

  function snapshot() {
    document.querySelectorAll('[data-i18n]').forEach(el => { const k = el.dataset.i18n; if (!(k in ES)) ES[k] = el.textContent; });
    document.querySelectorAll('[data-i18n-html]').forEach(el => { const k = el.dataset.i18nHtml; if (!(k in ES)) ES[k] = el.innerHTML; });
    document.querySelectorAll('[data-i18n-attr]').forEach(el => el.dataset.i18nAttr.split(';').forEach(pair => {
      const [attr, k] = pair.split(':'); if (!(k in ES)) ES[k] = el.getAttribute(attr) || '';
    }));
  }

  function applyLang(first) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-attr]').forEach(el => el.dataset.i18nAttr.split(';').forEach(pair => {
      const [attr, k] = pair.split(':'); el.setAttribute(attr, t(k));
    }));
    if (!first) document.querySelectorAll('[data-i18n-html]').forEach(el => {
      el.innerHTML = t(el.dataset.i18nHtml);
      el.closest('[data-moment]')?.classList.add('is-done');
    });
    document.querySelectorAll('.add-icon[data-add]').forEach(b => b.setAttribute('aria-label', (lang === 'en' ? 'Add ' : 'Agregar ') + MENU[b.dataset.add][lang]));
    document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    document.querySelector('.actionbar')?.setAttribute('aria-label', lang === 'en' ? 'Quick actions' : 'Acciones rápidas');
    render();
    hoursToday();
  }

  /* ---------- horario: hoy y abierto / cerrado (lunes y de miércoles a domingo, 15:00 a 2:00) ---------- */
  function hoursToday() {
    const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/El_Salvador' }));
    const d = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
    const openDay = (x) => x !== 2;
    const open = (h >= 15 && openDay(d)) || (h < 2 && openDay((d + 6) % 7));
    const shiftDay = h < 2 ? (d + 6) % 7 : d;   // pasada la medianoche cuenta el turno de ayer
    document.querySelectorAll('[data-hours] > div').forEach(row => {
      const on = Number(row.dataset.day) === shiftDay;
      row.classList.toggle('is-today', on);
      const dt = row.querySelector('dt'); if (on) dt.dataset.today = t('today'); else delete dt.dataset.today;
    });
    const st = document.querySelector('[data-status]'); if (!st) return;
    let txt;
    if (open) txt = lang === 'en' ? 'Open now · until 2 a.m.' : 'Abierto ahora · hasta las 2 a. m.';
    else {
      const today = h < 15 && openDay(d), tomorrow = openDay((d + 1) % 7);
      if (lang === 'en') txt = today ? 'Closed now · opens today at 3 p.m.' : tomorrow ? 'Closed now · opens tomorrow at 3 p.m.' : 'Closed now · opens Wednesday at 3 p.m.';
      else txt = today ? 'Cerrado ahora · abre hoy a las 3 p. m.' : tomorrow ? 'Cerrado ahora · abre mañana a las 3 p. m.' : 'Cerrado ahora · abre el miércoles a las 3 p. m.';
    }
    st.classList.toggle('is-open', open); st.classList.toggle('is-closed', !open);
    st.querySelector('[data-status-text]').textContent = txt;
  }

  /* ---------- pedido ---------- */
  let cart = store.get('lb-cart') || {};
  for (const id of Object.keys(cart)) if (!MENU[id] || !(cart[id] > 0)) delete cart[id];
  const money = (n) => '$' + n.toFixed(2);
  const list = document.querySelector('[data-order-list]');
  const empty = document.querySelector('[data-order-empty]');
  const totalEl = document.querySelector('[data-order-total]');
  const errEmpty = document.querySelector('[data-order-error]');

  function render() {
    if (!list) return;
    const ids = Object.keys(cart);
    list.textContent = '';
    let total = 0, count = 0;
    for (const id of ids) {
      const it = MENU[id], q = cart[id]; total += it.p * q; count += q;
      const li = document.createElement('li');
      li.innerHTML = '<span class="order__name"></span><span class="order__qty"><button type="button"></button><output></output><button type="button"></button></span><span class="order__line-total"></span>';
      li.querySelector('.order__name').textContent = it[lang];
      const [less, more] = li.querySelectorAll('button');
      less.textContent = '−'; more.textContent = '+';
      less.setAttribute('aria-label', t('qtyLess') + ': ' + it[lang]);
      more.setAttribute('aria-label', t('qtyMore') + ': ' + it[lang]);
      less.addEventListener('click', () => change(id, -1));
      more.addEventListener('click', () => change(id, 1));
      li.querySelector('output').textContent = q;
      li.querySelector('.order__line-total').textContent = money(it.p * q);
      list.appendChild(li);
    }
    empty.hidden = ids.length > 0;
    totalEl.textContent = money(total);
    document.querySelectorAll('[data-order-count]').forEach(c => { c.textContent = count; c.hidden = count === 0; });
    document.querySelectorAll('[data-add]').forEach(b => {
      const on = cart[b.dataset.add] > 0;
      b.classList.toggle('is-added', on);
      const label = b.querySelector('[data-i18n="add"]');
      if (label) label.textContent = on ? t('added') + ' · ' + cart[b.dataset.add] : t('add');
    });
    if (ids.length && errEmpty) errEmpty.hidden = true;
  }
  function change(id, d) {
    cart[id] = (cart[id] || 0) + d;
    if (cart[id] <= 0) delete cart[id];
    store.set('lb-cart', cart);
    render();
  }

  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-add]');
    if (b) change(b.dataset.add, 1);
    const lb = e.target.closest('[data-lang]');
    if (lb && lb.dataset.lang !== lang) { lang = lb.dataset.lang; store.set('lb-lang', lang); applyLang(false); }
  });

  const form = document.getElementById('order-form');
  const setMode = (m) => { if (!form) return; form.dataset.mode = m; form.querySelector(`input[name="tipo"][value="${m}"]`).checked = true; errEmpty.hidden = true; };
  form?.addEventListener('change', (e) => { if (e.target.name === 'tipo') setMode(e.target.value); });
  document.querySelectorAll('[data-mode-link]').forEach(a => a.addEventListener('click', () => setMode(a.dataset.modeLink)));
  // día por defecto: hoy, o el siguiente día abierto (martes cerrado)
  if (form) {
    const sv = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/El_Salvador' }));
    if (sv.getDay() === 2) sv.setDate(sv.getDate() + 1);
    const iso = `${sv.getFullYear()}-${String(sv.getMonth() + 1).padStart(2, '0')}-${String(sv.getDate()).padStart(2, '0')}`;
    form.elements.dia.value = iso; form.elements.dia.min = iso;
  }
  const fmtDate = (v) => { const [y, m, d] = v.split('-').map(Number); return new Date(y, m - 1, d).toLocaleDateString(lang === 'en' ? 'en-US' : 'es-SV', { weekday: 'long', day: 'numeric', month: 'long' }); };
  const fmtTime = (v) => { let [h, mi] = v.split(':').map(Number); const pm = h >= 12; const h12 = ((h + 11) % 12) + 1; return `${h12}:${String(mi).padStart(2, '0')} ${lang === 'en' ? (pm ? 'p.m.' : 'a.m.') : (pm ? 'p. m.' : 'a. m.')}`; };
  function flag(input, errId, bad) {
    const err = document.getElementById(errId);
    err.hidden = !bad; if (bad) input.setAttribute('aria-invalid', 'true'); else input.removeAttribute('aria-invalid');
    return bad;
  }
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const mode = form.dataset.mode, el = form.elements;
    const ids = Object.keys(cart);
    const [hh, mm] = (el.hora.value || '').split(':').map(Number);
    const mins = hh * 60 + mm;
    const dayBad = !el.dia.value || new Date(el.dia.value + 'T12:00').getDay() === 2;
    const fails = [
      flag(el.nombre, 'o-name-err', !el.nombre.value.trim()) && el.nombre,
      mode === 'reserve' && flag(el.personas, 'o-people-err', !(Number(el.personas.value) >= 1)) && el.personas,
      flag(el.dia, 'o-date-err', dayBad) && el.dia,
      flag(el.hora, 'o-time-err', !el.hora.value || !(mins >= 15 * 60 || mins <= 2 * 60)) && el.hora,
    ].filter(Boolean);
    if (mode === 'reserve') flag(el.personas, 'o-people-err', !(Number(el.personas.value) >= 1)); else flag(el.personas, 'o-people-err', false);
    const cartBad = mode === 'pickup' && !ids.length;
    errEmpty.hidden = !cartBad;
    if (fails.length) { fails[0].focus(); return; }
    if (cartBad) { document.getElementById('menu').scrollIntoView({ behavior: 'smooth' }); return; }
    const en = lang === 'en';
    let total = 0;
    const lines = ids.map(id => { const it = MENU[id], q = cart[id]; total += it.p * q; return `• ${q} x ${it[lang]} (${money(it.p * q)})`; });
    const note = el.nota.value.trim();
    const msg = [];
    if (mode === 'reserve') {
      msg.push(en ? 'Hello, La Bolera. I would like to book a table:' : 'Hola, La Bolera. Quiero reservar una mesa:');
      msg.push(`${en ? 'Name' : 'Nombre'}: ${el.nombre.value.trim()}`, `${en ? 'Guests' : 'Personas'}: ${el.personas.value}`,
        `${en ? 'Day' : 'Día'}: ${fmtDate(el.dia.value)}`, `${en ? 'Arrival time' : 'Hora de llegada'}: ${fmtTime(el.hora.value)}`);
      if (lines.length) msg.push(en ? 'Dishes to have ready:' : 'Platos para tener listos:', ...lines, `Total: ${money(total)}`);
    } else {
      msg.push(en ? 'Hello, La Bolera. I would like to order for pickup:' : 'Hola, La Bolera. Quiero hacer un pedido para pasar a recoger:');
      msg.push(...lines, `Total: ${money(total)}`, `${en ? 'Name' : 'Nombre'}: ${el.nombre.value.trim()}`,
        `${en ? 'Day' : 'Día'}: ${fmtDate(el.dia.value)}`, `${en ? 'Pickup time' : 'Hora para recoger'}: ${fmtTime(el.hora.value)}`);
    }
    if (note) msg.push(`${en ? 'Note' : 'Nota'}: ${note}`);
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg.join('\n'))}`, '_blank', 'noopener');
  });

  /* ---------- movimiento: parallax por capas y giros ligados al scroll (solo gráficos y fotos, nunca texto) ---------- */
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const layers = [...document.querySelectorAll('[data-px]')];
  const orbImg = document.querySelector('[data-orb-img]');
  const frameImg = document.querySelector('.frame-offset__img img');
  const spins = [...document.querySelectorAll('[data-spin]')];
  const badge = document.querySelector('[data-badge]');
  const badgeText = badge?.querySelector('.seal__text');
  const closeLogo = document.querySelector('[data-float]');
  const progress = (el) => { const r = el.getBoundingClientRect(), vh = innerHeight; return { r, p: (vh - r.top) / (vh + r.height) }; };   // 0 entra, 1 sale
  let ticking = false;
  function frame() {
    ticking = false;
    if (reduce.matches) return;
    const y = scrollY, vh = innerHeight;
    if (y < vh * 1.3) {
      for (const el of layers) el.style.setProperty('--py', (y * parseFloat(el.dataset.px)).toFixed(1) + 'px');
      if (orbImg) orbImg.style.setProperty('--op', (45 + Math.min(1, y / vh) * 25).toFixed(1) + '%');
    }
    if (frameImg) { const { r, p } = progress(frameImg.parentElement); if (r.bottom > 0 && r.top < vh) frameImg.style.setProperty('--py', ((p - .5) * -60).toFixed(1) + 'px'); }
    for (const el of spins) { const { r, p } = progress(el); if (r.bottom > 0 && r.top < vh) el.style.setProperty('--rot', ((p - .5) * 120).toFixed(1) + 'deg'); }
    if (badge) { const { r, p } = progress(badge); if (r.bottom > 0 && r.top < vh) { badgeText.style.setProperty('--rot', (p * 200).toFixed(1) + 'deg'); badge.style.setProperty('--py', ((p - .5) * -50).toFixed(1) + 'px'); } }
    if (closeLogo) { const { r, p } = progress(closeLogo); if (r.bottom > 0 && r.top < vh) { closeLogo.style.setProperty('--py', ((p - .5) * -40).toFixed(1) + 'px'); closeLogo.style.setProperty('--rot', ((p - .5) * -10).toFixed(1) + 'deg'); } }
  }
  const req = () => { if (!ticking) { ticking = true; requestAnimationFrame(frame); } };
  addEventListener('scroll', req, { passive: true });
  addEventListener('resize', req);

  /* apariciones: cada bloque entra una vez, suave; sin script o con movimiento reducido todo se ve desde el inicio */
  const reveal = [...document.querySelectorAll('[data-reveal]')];
  if (reduce.matches || !('IntersectionObserver' in window)) reveal.forEach(el => el.classList.add('is-in'));
  else {
    const io = new IntersectionObserver((entries) => entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } }), { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    reveal.forEach(el => io.observe(el));
  }

  snapshot();
  applyLang(true);
  if (lang === 'en') applyLang(false);
  frame();
})();
