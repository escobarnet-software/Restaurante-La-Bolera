/* La Bolera: idioma (ES/EN), lista de pedido a WhatsApp y parallax de las fotos.
   El número de WhatsApp se cambia aquí (formato internacional, sin + ni espacios). */
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
    skip: 'Skip to content', navMain: 'Main', navToggle: 'Menu', navMenu: 'Menu', navPlace: 'The place', navOrder: 'Order', navVisit: 'Visit',
    navCev: 'Ceviches', navCevLine: 'From $7.25', navCoc: 'Cocktails', navCocLine: 'From $7.75', navFry: 'Fried and main plates', navFryLine: 'From $8.25',
    ctaOrder: 'Order on WhatsApp',
    heroH: 'Seafood on the La Libertad Malecón', heroLead: 'Ceviches and calamari made to order, 3 p.m. to 2 a.m. Closed Tuesdays.',
    heroAlt: 'The La Libertad Malecón at night, its lights reflected in the sea',
    visitH: 'Visit us on the Malecón', addr1: 'Malecón del Puerto', seeArea: 'See the area',
    dMon: 'Monday', dTue: 'Tuesday', dWedSun: 'Wednesday to Sunday', closed: 'Closed',
    rowOrderK: 'Takeaway', rowOrderV: 'Orders on WhatsApp', rowViewK: 'Tables', rowViewV: 'By the sea, next to the pier',
    visitAlt: 'A palm tree and street lamps on the La Libertad Malecón at dusk',
    menuH: 'Menu and prices', menuSide: 'Prices in US dollars. Every dish is made when you order it.',
    iCevCam: 'Shrimp ceviche', dCevCam: 'Cured in lime, with fried plantain.', altCevCam: 'Shrimp ceviche in a glass, with fried plantain',
    iCocCam: 'Shrimp cocktail', dCocCam: 'With avocado and tostadas.', altCocCam: 'Shrimp cocktail in a tall glass, with avocado and tostadas',
    iCalam: 'Fried calamari', dCalam: 'With lime and hot sauce.', altCalam: 'Fried calamari with hot sauce and lime',
    iMoj: 'Fried tilapia', dMoj: 'With rice, salad and fries.', altMoj: 'Whole fried tilapia with rice, salad and fries',
    add: 'Add', added: 'Added',
    cartaH: 'The full menu', gCev: 'Ceviches and cocktails', gMain: 'Main plates', gDrinks: 'Drinks',
    iCevPes: 'Fish ceviche', iCevMix: 'Mixed ceviche', iCevCon: 'Black clam ceviche', iCocCon: 'Black clam cocktail', iCamp: 'Mixed seafood cocktail',
    iPargo: 'Whole fried snapper', iAjillo: 'Garlic shrimp', iEmp: 'Breaded shrimp', iSopa: 'Seafood soup', iMarisc: 'Creamy seafood stew',
    iMich: 'Michelada', iBeer: 'Local beer', iLim: 'Lemonade', iCoco: 'Iced coconut', iSoda: 'Soft drink',
    revH: 'What our guests say on Google Maps',
    revText: 'The night view from the Malecón, food made to order, <strong>huge ceviches</strong> and the calamari.',
    placeH: 'The Malecón, from afternoon to night', placeLink: 'See the full menu',
    placeAlt1: 'People walking along the La Libertad Malecón by the sea', placeAlt2: 'Sunset over the Pacific on the coast of El Salvador',
    orderH: 'Your order on WhatsApp', orderSide: 'Add dishes from the menu; we confirm on WhatsApp.',
    orderAlt: 'Fried tilapia served with avocado, tomato and rice',
    altGCev: 'Fish ceviche with red onion, corn and sweet potato', altGMain: 'Seafood soup with shrimp and clams', altGDrinks: 'Tamarind michelada with lime and a chili rim',
    orderEmpty: 'No dishes yet. Tap Add on the menu.', total: 'Total',
    fName: 'Name', errName: 'Write the name for the order.', fMode: 'How you want it', modeHere: 'To eat here', modeGo: 'To take away', fNote: 'Note (optional)',
    errEmpty: 'Add at least one dish from the menu.', orderNote: 'WhatsApp opens with your order ready to send.',
    closeH: 'See you on the Malecón', closeLead: '3 p.m. to 2 a.m. Closed Tuesdays.',
    footLede: 'Seafood restaurant on the Malecón at Puerto de La Libertad.', addrShort: 'Malecón, La Libertad', footHours: 'Opening hours', footRev: 'Reviews', footWa: 'WhatsApp',
    credits: 'Photographs via Wikimedia Commons',
    qtyLess: 'One less', qtyMore: 'One more',
  };

  const store = {
    get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
  };

  /* ---------- idioma ---------- */
  const ES = {};
  let lang = store.get('lb-lang') === 'en' ? 'en' : 'es';
  const t = (k) => (lang === 'en' ? EN[k] : ES[k]) ?? ES[k] ?? EN[k] ?? k;

  function snapshot() {
    document.querySelectorAll('[data-i18n]').forEach(el => { const k = el.dataset.i18n; if (!(k in ES)) ES[k] = el.textContent; });
    document.querySelectorAll('[data-i18n-html]').forEach(el => { const k = el.dataset.i18nHtml; if (!(k in ES)) ES[k] = el.innerHTML; });
    document.querySelectorAll('[data-i18n-attr]').forEach(el => el.dataset.i18nAttr.split(';').forEach(pair => {
      const [attr, k] = pair.split(':'); if (!(k in ES)) ES[k] = el.getAttribute(attr) || '';
    }));
    ES.added = 'Agregado'; ES.qtyLess = 'Uno menos'; ES.qtyMore = 'Uno más';
  }

  function applyLang(first) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-attr]').forEach(el => el.dataset.i18nAttr.split(';').forEach(pair => {
      const [attr, k] = pair.split(':'); el.setAttribute(attr, t(k));
    }));
    // la frase de los clientes: el momento la parte en palabras; al cambiar de idioma se pone entera en tinta
    if (!first) document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); el.closest('[data-moment]')?.classList.add('is-done'); el.querySelectorAll('*').forEach(c => c.classList.add('is-on')); });
    document.querySelectorAll('[data-add]').forEach(b => {
      const name = MENU[b.dataset.add][lang];
      if (b.classList.contains('add-icon')) b.setAttribute('aria-label', (lang === 'en' ? 'Add ' : 'Agregar ') + name);
    });
    const tg = document.querySelector('[data-lang-toggle]');
    if (tg) {
      tg.textContent = lang === 'en' ? 'ES' : 'EN';
      tg.lang = lang === 'en' ? 'es' : 'en';
      tg.setAttribute('aria-label', lang === 'en' ? 'Leer en español' : 'Read in English');
    }
    document.querySelector('.actionbar')?.setAttribute('aria-label', lang === 'en' ? 'Quick actions' : 'Acciones rápidas');
    render();
    openLine();
  }

  /* ---------- abierto / cerrado (lunes y de miércoles a domingo, 15:00 a 2:00; martes cerrado) ---------- */
  function openLine() {
    const el = document.querySelector('[data-open-line]'); if (!el) return;
    const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/El_Salvador' }));
    const d = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
    const openDay = (x) => x !== 2;
    let open = false, until = '2:00';
    if (h >= 15 && openDay(d)) open = true;
    else if (h < 2 && openDay((d + 6) % 7)) open = true;
    let txt;
    if (open) txt = lang === 'en' ? `Open now, until ${until}` : `Abierto ahora, hasta las ${until}`;
    else {
      const today = h < 15 && openDay(d);
      const tomorrow = openDay((d + 1) % 7);
      if (lang === 'en') txt = today ? 'Closed, opens today at 15:00' : tomorrow ? 'Closed, opens tomorrow at 15:00' : 'Closed, opens Wednesday at 15:00';
      else txt = today ? 'Cerrado, abre hoy a las 15:00' : tomorrow ? 'Cerrado, abre mañana a las 15:00' : 'Cerrado, abre el miércoles a las 15:00';
    }
    el.textContent = txt;
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
      li.innerHTML = `<span class="order__name"></span><span class="order__qty"><button type="button" data-q="-1"></button><output></output><button type="button" data-q="1"></button></span><span class="order__line-total"></span>`;
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
    const tg = e.target.closest('[data-lang-toggle]');
    if (tg) { lang = lang === 'en' ? 'es' : 'en'; store.set('lb-lang', lang); applyLang(false); }
  });

  const form = document.getElementById('order-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.elements.nombre, nameErr = document.getElementById('o-name-err');
    const ids = Object.keys(cart);
    let bad = null;
    if (!ids.length) { errEmpty.hidden = false; bad = bad || document.querySelector('#menu'); }
    if (!name.value.trim()) { nameErr.hidden = false; name.setAttribute('aria-invalid', 'true'); bad = name; }
    else { nameErr.hidden = true; name.removeAttribute('aria-invalid'); }
    if (bad) { if (bad === name) name.focus(); return; }
    const L = lang === 'en'
      ? { hi: 'Hello, La Bolera. I would like to order:', total: 'Total', name: 'Name', note: 'Note' }
      : { hi: 'Hola, La Bolera. Quiero hacer este pedido:', total: 'Total', name: 'Nombre', note: 'Nota' };
    let total = 0;
    const lines = ids.map(id => { const it = MENU[id], q = cart[id]; total += it.p * q; return `${q} x ${it[lang]} (${money(it.p * q)})`; });
    const mode = form.elements.modo;
    const msg = [L.hi, ...lines, `${L.total}: ${money(total)}`, `${L.name}: ${name.value.trim()}`, mode.options[mode.selectedIndex].text]
      .concat(form.elements.nota.value.trim() ? [`${L.note}: ${form.elements.nota.value.trim()}`] : []).join('\n');
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  });

  /* ---------- parallax (solo fotos, dentro de su marco) ---------- */
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const px = [...document.querySelectorAll('[data-parallax]')];
  const sun = document.querySelector('[data-sun]');
  const heroImg = document.querySelector('.hero__bg img, img.hero__bg');
  let ticking = false;
  function frame() {
    ticking = false;
    if (reduce.matches) return;
    const vh = innerHeight;
    for (const img of px) {
      const box = img.parentElement.getBoundingClientRect();
      if (box.bottom < -100 || box.top > vh + 100) continue;
      const k = parseFloat(img.dataset.parallax) || 0.12;
      const mid = box.top + box.height / 2 - vh / 2;   // 0 cuando el marco está centrado
      const max = box.height * 0.06;
      const y = Math.max(-max, Math.min(max, -mid * k));
      img.style.setProperty('--px', y.toFixed(1) + 'px');
    }
    if (heroImg && scrollY < vh * 1.2) {
      // el hero: la foto (más alta que su marco) se desliza por object-position, sin salir de su caja
      const y = 42 + Math.min(1, scrollY / vh) * 30;
      heroImg.style.objectPosition = `50% ${y.toFixed(1)}%`;
    }
    if (sun) {
      const r = sun.closest('section').getBoundingClientRect();
      if (r.bottom > 0 && r.top < vh) {
        const t = Math.max(0, Math.min(1, (vh - r.top) / (vh + r.height)));   // 0 al entrar, 1 al salir
        sun.style.setProperty('--sun', ((t - 0.35) * 70).toFixed(1) + '%');
      }
    }
  }
  const req = () => { if (!ticking) { ticking = true; requestAnimationFrame(frame); } };
  addEventListener('scroll', req, { passive: true });
  addEventListener('resize', req);

  snapshot();
  applyLang(true);
  if (lang === 'en') applyLang(false);
  frame();
})();
