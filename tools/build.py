# Genera index.html de La Bolera. Ejecutar: python3 tools/build.py
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
WA = '50374756008'

def img(id_, alt, key, subj, size='960', sizes='(max-width: 639px) 100vw, 560px', lazy=True, cls=''):
    return (f'<img{(" class=%s" % chr(34) + cls + chr(34)) if cls else ""} src="assets/img/photo-{id_}-{size}.webp" '
            f'srcset="assets/img/photo-{id_}-500.webp 500w, assets/img/photo-{id_}-960.webp 960w" sizes="{sizes}" '
            f'alt="{alt}" data-i18n-attr="alt:{key}"{" loading=" + chr(34) + "lazy" + chr(34) if lazy else ""} '
            f'data-source="stand-in" data-subject="{subj}">')

PLUS = '<svg viewBox="0 0 18 18" aria-hidden="true"><path d="M9 3v12M3 9h12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'
WA_ICON = '<svg class="ic-wa" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-wa"/></svg>'
ARROW = '<svg class="m-arrow" viewBox="0 0 12 12" aria-hidden="true"><path class="m-arrow__stem" d="M1 6h8"/><path class="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5"/></svg>'

DISHES = [
    ('cev-cam', 'f150823936', 'iCevCam', 'Ceviche de camarón', '$8.50', 'dCevCam', 'Curtido en limón, con tostones.', 'altCevCam', 'Ceviche de camarón servido en copa, con tostones'),
    ('coc-cam', 'f106167845', 'iCocCam', 'Cóctel de camarón', '$7.75', 'dCocCam', 'Con aguacate y tostadas.', 'altCocCam', 'Cóctel de camarón en vaso alto, con aguacate y tostadas'),
    ('calam', 'f197892795', 'iCalam', 'Calamares fritos', '$8.25', 'dCalam', 'Con limón y salsa picante.', 'altCalam', 'Calamares fritos con salsa picante y limón'),
    ('moj', 'f155940695', 'iMoj', 'Mojarra frita', '$9.50', 'dMoj', 'Con arroz, ensalada y papas.', 'altMoj', 'Mojarra frita entera con arroz, ensalada y papas'),
]

GROUPS = [
    ('gCev', 'Ceviches y cócteles', 'i-shrimp', '24 24', [
        ('cev-pes', 'iCevPes', 'Ceviche de pescado', '$7.25'), ('cev-mix', 'iCevMix', 'Ceviche mixto', '$9.75'),
        ('cev-con', 'iCevCon', 'Ceviche de concha negra', '$10.50'), ('coc-con', 'iCocCon', 'Cóctel de conchas', '$9.25'),
        ('camp', 'iCamp', 'Campechana', '$10.75')]),
    ('gMain', 'Platos fuertes', 'i-fish', '24 24', [
        ('pargo', 'iPargo', 'Pargo entero frito', '$13.75'), ('ajillo', 'iAjillo', 'Camarones al ajillo', '$10.25'),
        ('emp', 'iEmp', 'Camarones empanizados', '$9.75'), ('sopa', 'iSopa', 'Sopa de mariscos', '$11.25'),
        ('marisc', 'iMarisc', 'Mariscada en crema', '$15.50')]),
    ('gDrinks', 'Bebidas', 'i-mug', '24 30', [
        ('mich', 'iMich', 'Michelada', '$3.50'), ('beer', 'iBeer', 'Cerveza nacional', '$2.25'),
        ('lim', 'iLim', 'Limonada', '$1.85'), ('coco', 'iCoco', 'Coco helado', '$2.00'), ('soda', 'iSoda', 'Refresco', '$1.25')]),
]

GROUP_PHOTOS = {
    'gCev': ('f3749415', 'Ceviche de pescado con cebolla morada, maíz y camote', 'altGCev', 'ceviche de pescado'),
    'gMain': ('f31370074', 'Sopa de mariscos con camarones y almejas', 'altGMain', 'sopa de mariscos'),
    'gDrinks': ('f146030558', 'Michelada de tamarindo con limón y borde de chile', 'altGDrinks', 'michelada'),
}

def dish_cards():
    out = []
    for i, (id_, ph, k, name, price, dk, desc, ak, alt) in enumerate(DISHES):
        out.append(f'''          <article class="dish" data-reveal style="--i: {i}">
            <div class="dish__plate"><span class="dish__ring" aria-hidden="true"></span>{img(ph, alt, ak, name.lower(), sizes="(max-width: 639px) 60vw, 240px")}</div>
            <div class="dish__body">
              <p class="dish__name" data-i18n="{k}">{name}</p>
              <p class="dish__desc" data-i18n="{dk}">{desc}</p>
              <div class="dish__foot"><span class="dish__price" data-assumed>{price}</span>
                <button class="add-btn" type="button" data-add="{id_}">{PLUS}<span data-i18n="add">Agregar</span></button></div>
            </div>
          </article>''')
    return '\n'.join(out)

def groups():
    out = []
    for gk, gname, icon, vb, rows in GROUPS:
        ph, alt, ak, subj = GROUP_PHOTOS[gk]
        lis = '\n'.join(
            f'              <li><span class="rows__name" data-i18n="{k}">{n}</span><span class="rows__value" data-assumed>{p}</span>'
            f'<button class="add-icon" type="button" data-add="{id_}" aria-label="Agregar {n}">{PLUS}</button></li>'
            for id_, k, n, p in rows)
        out.append(f'''        <div class="carta-group span-4" data-reveal>
          <div class="carta-group__head">
            <figure class="carta-group__photo">{img(ph, alt, ak, subj, sizes="120px")}</figure>
            <p class="carta-group__label"><svg class="ic" viewBox="0 0 {vb}" aria-hidden="true"><use href="#{icon}"/></svg><span data-i18n="{gk}">{gname}</span></p>
          </div>
          <ul class="rows rows--menu">
{lis}
          </ul>
        </div>''')
    return '\n'.join(out)

MARQUEE_ITEMS = [('mq1', 'Ceviches'), ('mq2', 'Cócteles de camarón'), ('mq3', 'Calamares'), ('mq4', 'Mojarra frita'), ('mq5', 'Micheladas'), ('mq6', 'Vista al mar')]
def marquee():
    one = ''.join(f'<span data-i18n="{k}">{t}</span><svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-spark"/></svg>' for k, t in MARQUEE_ITEMS)
    return f'<div class="marquee" aria-hidden="true"><div class="marquee__track">{one}{one}</div></div>'

HOURS = '''<dl class="hours-list" data-hours>
              <div data-day="1"><dt data-i18n="dMon">Lunes</dt><dd>3:00 p.&nbsp;m. – 2:00 a.&nbsp;m.</dd></div>
              <div data-day="2" class="is-closed"><dt data-i18n="dTue">Martes</dt><dd data-i18n="closed">Cerrado</dd></div>
              <div data-day="3"><dt data-i18n="dWed">Miércoles</dt><dd>3:00 p.&nbsp;m. – 2:00 a.&nbsp;m.</dd></div>
              <div data-day="4"><dt data-i18n="dThu">Jueves</dt><dd>3:00 p.&nbsp;m. – 2:00 a.&nbsp;m.</dd></div>
              <div data-day="5"><dt data-i18n="dFri">Viernes</dt><dd>3:00 p.&nbsp;m. – 2:00 a.&nbsp;m.</dd></div>
              <div data-day="6"><dt data-i18n="dSat">Sábado</dt><dd>3:00 p.&nbsp;m. – 2:00 a.&nbsp;m.</dd></div>
              <div data-day="0"><dt data-i18n="dSun">Domingo</dt><dd>3:00 p.&nbsp;m. – 2:00 a.&nbsp;m.</dd></div>
            </dl>'''

MAP = 'https://www.openstreetmap.org/search?query=Malec%C3%B3n%20Puerto%20de%20La%20Libertad%20El%20Salvador'

REVIEWS = [
    ('i-moon', 'rv1', 'La vista de noche desde el Malecón'),
    ('i-flame', 'rv2', 'La comida hecha al momento'),
    ('i-shrimp', 'rv3', 'Los ceviches enormes'),
    ('i-ring', 'rv4', 'Los calamares'),
]
def reviews():
    return '\n'.join(f'''          <li class="review" data-reveal style="--i: {i}"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><use href="#{ic}"/></svg><span data-i18n="{k}">{t}</span></li>'''
                     for i, (ic, k, t) in enumerate(REVIEWS))

STARS = ''.join('<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-star"/></svg>' for _ in range(5))

SPRITE = Path(ROOT / 'tools' / 'sprite.svg').read_text()
HEAD = Path(ROOT / 'tools' / 'head.html').read_text()
CSS = Path(ROOT / 'tools' / 'page.css').read_text()

html = f'''<!doctype html>
<html lang="es" data-type="place" data-radius="soft" data-buttons="solid" data-motion>
<head>
{HEAD}
<style>
{CSS}
</style>
</head>
<body>
{SPRITE}
<header class="nav nav--split lb-nav">
  <div class="wrap nav__bar">
    <a class="skip-link" href="#top" data-i18n="skip">Ir al contenido</a>
    <a class="nav__logo" href="#top" aria-label="Restaurante La Bolera, inicio"><img class="nav__logo-img" src="assets/brand/logo-200.webp" alt="" width="200" height="200"></a>
    <nav class="nav__links" aria-label="Principal" data-i18n-attr="aria-label:navMain">
      <div class="nav__item"><a class="nav__link" href="#menu" data-i18n="navMenu">Menú</a></div>
      <div class="nav__item"><a class="nav__link" href="#carta" data-i18n="navCarta">Carta</a></div>
      <div class="nav__item"><a class="nav__link" href="#clientes" data-i18n="navRev">Clientes</a></div>
      <div class="nav__item"><a class="nav__link" href="#visita" data-i18n="navVisit">Visita</a></div>
    </nav>
    <div class="nav__actions">
      <div class="lang" role="group" aria-label="Idioma / Language">
        <button type="button" class="lang__opt" data-lang="es" aria-pressed="true" lang="es">ES</button>
        <button type="button" class="lang__opt" data-lang="en" aria-pressed="false" lang="en">EN</button>
      </div>
      <a class="btn btn--primary btn--wa" href="#pedido">{WA_ICON}<span data-i18n="ctaNav">Reservar o pedir</span><span class="order-count" data-order-count hidden>0</span></a>
    </div>
    <button class="nav__toggle" type="button" aria-expanded="false" aria-label="Menú" data-i18n-attr="aria-label:navToggle">
      <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2 5h14M2 13h14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
    </button>
  </div>
</header>

<main id="top">
  <section class="hero lb-hero" aria-labelledby="hero-h">
    <div class="lb-hero__glow" aria-hidden="true"></div>
    <svg class="lb-hero__waves" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true"><path d="M0 40c120 0 120-24 240-24s120 24 240 24 120-24 240-24 120 24 240 24 120-24 240-24 120 24 240 24 120-24 240-24v104H0z"/><path class="w2" d="M0 72c120 0 120-24 240-24s120 24 240 24 120-24 240-24 120 24 240 24 120-24 240-24 120 24 240 24 120-24 240-24v72H0z"/></svg>
    <div class="wrap"><div class="lb-hero__grid">
      <div class="lb-hero__text">
        <img class="lb-hero__logo e-1" src="assets/brand/logo.webp" alt="Logo de Restaurante La Bolera" data-i18n-attr="alt:logoAlt" width="640" height="640" fetchpriority="high">
        <h1 id="hero-h" class="e-2"><span data-i18n="heroH1">Mariscos frente al mar en el</span> <span class="gold" data-i18n="heroH2">Malecón de La Libertad</span></h1>
        <p class="lb-hero__lead e-3" data-i18n="heroLead">Ceviches enormes, calamares y micheladas hechos al momento, con la vista nocturna del Puerto.</p>
        <div class="lb-hero__actions e-4">
          <a class="btn btn--primary btn--wa btn--lg" href="#pedido" data-mode-link="reserve">{WA_ICON}<span data-i18n="ctaReserve">Reservar mesa</span></a>
          <a class="btn btn--ghost btn--lg" href="#menu"><span data-i18n="seeMenu">Ver el menú</span>{ARROW}</a>
        </div>
        <ul class="lb-hero__facts e-5">
          <li><span class="stars stars--sm" aria-hidden="true">{STARS}</span><span data-i18n="factRating">5.0 de calificación</span></li>
          <li><svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-clock"/></svg><span data-i18n="factHours">3 p.&nbsp;m. a 2 a.&nbsp;m.</span></li>
          <li><svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-pin"/></svg><span data-i18n="factPlace">Puerto de La Libertad</span></li>
        </ul>
      </div>
      <div class="lb-hero__art" aria-hidden="true">
        <div class="orb orb--main e-art1" data-px="-0.06">
          <svg class="orb__ring" viewBox="0 0 400 400"><circle class="orb__ring-line" cx="200" cy="200" r="192" pathLength="100"/><g class="orb__fork" transform="translate(64 44) rotate(-42) scale(3)"><path d="M12 7v19"/><path d="M8 1v6a4 4 0 0 0 8 0V1M12 1v6"/></g></svg>
          <div class="orb__img"><img data-orb-img src="assets/img/photo-f139470769.webp" alt="" fetchpriority="high"></div>
        </div>
        <div class="orb orb--a e-art2" data-px="0.10"><div class="orb__img"><img src="assets/img/photo-f150823936-500.webp" alt=""></div></div>
        <div class="orb orb--b e-art3" data-px="0.16"><div class="orb__img"><img src="assets/img/photo-f197892795-500.webp" alt=""></div></div>
        <svg class="float-ic float-ic--fish e-art4" data-px="0.22" viewBox="0 0 24 24"><use href="#i-fish"/></svg>
        <svg class="float-ic float-ic--shrimp e-art4" data-px="-0.18" viewBox="0 0 24 24"><use href="#i-shrimp"/></svg>
        <svg class="spark spark--1" viewBox="0 0 24 24"><use href="#i-spark"/></svg>
        <svg class="spark spark--2" viewBox="0 0 24 24"><use href="#i-spark"/></svg>
        <svg class="spark spark--3" viewBox="0 0 24 24"><use href="#i-spark"/></svg>
      </div>
    </div></div>
  </section>

  <section class="section lb-visit" id="visita" data-place="visit" aria-labelledby="visita-h">
    <div class="wrap">
      <div class="lb-head" data-reveal>
        <p class="orn"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-spark"/></svg><span data-i18n="visitOrn">Horario y ubicación</span></p>
        <h2 id="visita-h" data-i18n="visitH">Visítenos en el Malecón</h2>
      </div>
      <div class="grid grid--top lb-visit__grid">
        <div class="visit-card span-6" data-reveal>
          <p class="status" data-status><span class="status__dot" aria-hidden="true"></span><span data-status-text>Abrimos de 3 p.&nbsp;m. a 2 a.&nbsp;m.</span></p>
          {HOURS}
          <div class="visit-card__foot">
            <address class="visit-card__addr"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-pin"/></svg><span><span data-i18n="addr1">Malecón del Puerto</span><br>La Libertad, El Salvador</span></address>
            <a class="link" href="{MAP}" target="_blank" rel="noopener" data-i18n="seeArea">Ver la zona</a>
          </div>
        </div>
        <figure class="frame-offset span-6" data-reveal>
          <div class="frame-offset__img">{img('f22459896', 'Palmera y faroles en el paseo del Malecón de La Libertad al anochecer', 'visitAlt', 'Malecón de La Libertad', sizes='(max-width: 1023px) 100vw, 560px', cls='')}</div>
          <img class="frame-offset__badge" src="assets/brand/logo-200.webp" alt="" width="200" height="200" data-spin>
        </figure>
      </div>
    </div>
  </section>

  <section class="section ground-surface lb-menu" id="menu" aria-labelledby="menu-h">
    <div class="wrap">
      <div class="lb-head lb-head--split" data-reveal>
        <div>
          <p class="orn"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-spark"/></svg><span data-i18n="menuOrn">Los favoritos</span></p>
          <h2 id="menu-h" data-i18n="menuH">Menú y precios</h2>
        </div>
        <div class="lb-head__side"><p data-i18n="menuSide">Precios en dólares. Cada plato se prepara al pedirlo.</p><p class="demo-note"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-info"/></svg><span data-i18n="demoNote">Precios y fotos de muestra para esta vista previa; se reemplazan por el menú real del restaurante.</span></p></div>
      </div>
      <div class="dishes">
{dish_cards()}
      </div>
    </div>
  </section>

  <section class="section ground-surface lb-carta" id="carta" aria-labelledby="carta-h">
    <div class="wrap">
      <div class="lb-head" data-reveal>
        <p class="orn"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-cutlery"/></svg><span data-i18n="cartaOrn">Para compartir en la mesa</span></p>
        <h2 id="carta-h" data-i18n="cartaH">La carta completa</h2>
      </div>
      <div class="grid grid--top">
{groups()}
      </div>
    </div>
  </section>

  <section class="section statement ground-inverse lb-reviews" id="clientes" data-moment="word-highlight" aria-labelledby="clientes-h">
    <div class="wrap grid grid--top">
      <div class="span-7 lb-reviews__text">
        <div class="lb-reviews__top">
          <h2 id="clientes-h" data-i18n="revH">Lo que cuentan nuestros clientes</h2>
          <p class="rating"><span class="stars" aria-hidden="true">{STARS}</span><span data-i18n="ratingTxt">5.0 de calificación</span></p>
        </div>
        <p class="mo-wh__text" data-i18n-html="revText">Vuelven por la vista de noche desde el Malecón, la comida hecha al momento, los <strong>ceviches enormes</strong> y los calamares.</p>
        <ul class="reviews">
{reviews()}
        </ul>
      </div>
      <div class="span-5 lb-reviews__seal" aria-hidden="true">
        <div class="seal" data-badge>
          <svg class="seal__text" viewBox="0 0 300 300"><defs><path id="badge-circle" d="M150 150m-126 0a126 126 0 1 1 252 0a126 126 0 1 1-252 0"/></defs><text><textPath href="#badge-circle" data-i18n="badgeTxt">RESTAURANTE ✦ LA BOLERA ✦ MALECÓN DE LA LIBERTAD ✦</textPath></text></svg>
          <div class="seal__disc"><img src="assets/brand/logo.webp" alt="" width="640" height="640"></div>
        </div>
      </div>
    </div>
  </section>

  <section class="section lb-order" id="pedido" aria-labelledby="pedido-h">
    <div class="wrap">
      <div class="lb-head lb-head--split" data-reveal>
        <div>
          <p class="orn"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-wa"/></svg><span data-i18n="orderOrn">Reservas y pedidos para recoger</span></p>
          <h2 id="pedido-h" data-i18n="orderH">Reserve su mesa o pida para recoger</h2>
        </div>
        <p class="lb-head__side" data-i18n="orderSide">Elija la hora y le confirmamos por WhatsApp.</p>
      </div>
      <div class="grid grid--top lb-order__grid">
        <form class="order span-6" id="order-form" action="https://wa.me/{WA}" method="get" target="_blank" novalidate data-mode="reserve">
          <div class="mode" role="radiogroup" aria-label="Tipo de solicitud" data-i18n-attr="aria-label:modeGroup">
            <label class="mode__opt"><input type="radio" name="tipo" value="reserve" checked><span><svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-cutlery"/></svg><span data-i18n="modeReserve">Reservar mesa</span></span></label>
            <label class="mode__opt"><input type="radio" name="tipo" value="pickup"><span><svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-bag"/></svg><span data-i18n="modePickup">Pasar a recoger</span></span></label>
          </div>
          <div class="order__fields">
            <div class="field"><label for="o-name" data-i18n="fName">Nombre</label>
              <input id="o-name" name="nombre" type="text" autocomplete="name" aria-describedby="o-name-err">
              <p class="field__error" id="o-name-err" hidden data-i18n="errName">Escriba el nombre para la reserva o el pedido.</p></div>
            <div class="field" data-only="reserve"><label for="o-people" data-i18n="fPeople">Personas</label>
              <input id="o-people" name="personas" type="number" inputmode="numeric" min="1" max="40" value="2" aria-describedby="o-people-err">
              <p class="field__error" id="o-people-err" hidden data-i18n="errPeople">Escriba cuántas personas vienen.</p></div>
            <div class="field"><label for="o-date" data-i18n="fDate">Día</label>
              <input id="o-date" name="dia" type="date" aria-describedby="o-date-err">
              <p class="field__error" id="o-date-err" hidden data-i18n="errDate">Elija el día; los martes estamos cerrados.</p></div>
            <div class="field"><label for="o-time"><span data-only="reserve" data-i18n="fTimeReserve">Hora de llegada</span><span data-only="pickup" data-i18n="fTimePickup">Hora para recoger</span></label>
              <input id="o-time" name="hora" type="time" step="900" value="19:00" aria-describedby="o-time-err o-time-hint">
              <p class="field__hint" id="o-time-hint" data-i18n="timeHint">De 3:00 p. m. a 2:00 a. m.</p>
              <p class="field__error" id="o-time-err" hidden data-i18n="errTime">Elija una hora entre las 3:00 p. m. y las 2:00 a. m.</p></div>
          </div>
          <div class="order__cart">
            <p class="order__cart-label"><span data-only="reserve" data-i18n="cartReserve">Platos para tener listos (opcional)</span><span data-only="pickup" data-i18n="cartPickup">Su pedido</span></p>
            <ul class="order__list" data-order-list aria-live="polite"></ul>
            <p class="order__empty" data-order-empty data-i18n="orderEmpty">Todavía no hay platos. Toque Agregar en el menú.</p>
            <div class="order__total"><span data-i18n="total">Total</span><span data-order-total>$0.00</span></div>
          </div>
          <div class="field"><label for="o-note" data-i18n="fNote">Nota (opcional)</label>
            <input id="o-note" name="nota" type="text" autocomplete="off"></div>
          <input type="hidden" name="text" value="">
          <p class="order__error" data-order-error hidden role="alert" data-i18n="errEmpty">Para pasar a recoger, agregue al menos un plato del menú.</p>
          <button class="btn btn--primary btn--wa btn--lg order__send" type="submit">{WA_ICON}<span data-only="reserve" data-i18n="sendReserve">Enviar reserva por WhatsApp</span><span data-only="pickup" data-i18n="sendPickup">Enviar pedido por WhatsApp</span></button>
          <p class="t-small muted" data-i18n="orderNote">Se abre WhatsApp con su mensaje listo; el restaurante le confirma por ahí.</p>
        </form>
        <figure class="frame-ticket span-6 start-7" data-moment="picture-develops"><img src="assets/img/photo-f106961743.webp" alt="Mojarra frita servida con aguacate, tomate y arroz" data-i18n-attr="alt:orderAlt" loading="lazy" data-source="stand-in" data-subject="mojarra frita"></figure>
      </div>
    </div>
  </section>
</main>

<footer class="footer closing lb-close" id="contact" aria-labelledby="close-h">
  <div class="lb-close__glow" aria-hidden="true"></div>
  <div class="wrap">
    <div class="closing__cta lb-close__cta">
      <img class="lb-close__logo" src="assets/brand/logo.webp" alt="" width="640" height="640" data-float>
      <div class="lb-close__copy" data-reveal>
        <h2 id="close-h" data-i18n="closeH">Le esperamos en el Malecón</h2>
        <p class="lb-close__lead" data-i18n="closeLead">Mesas frente al mar, mariscos al momento y la cerveza bien fría. Abrimos de 3 p.&nbsp;m. a 2 a.&nbsp;m.; martes cerrado.</p>
        <div class="lb-hero__actions">
          <a class="btn btn--primary btn--wa btn--lg" href="#pedido" data-mode-link="reserve">{WA_ICON}<span data-i18n="ctaReserve">Reservar mesa</span></a>
          <a class="btn btn--ghost btn--lg" href="#pedido" data-mode-link="pickup"><span data-i18n="ctaPickup">Pedir para recoger</span>{ARROW}</a>
        </div>
        <ul class="close-info">
          <li><svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-pin"/></svg><span><strong data-i18n="ciPlaceK">Dónde</strong><span data-i18n="ciPlaceV">Malecón del Puerto de La Libertad</span></span></li>
          <li><svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-clock"/></svg><span><strong data-i18n="ciHoursK">Horario</strong><span data-i18n="ciHoursV">Lun y mié a dom, 3 p.&nbsp;m. a 2 a.&nbsp;m.</span></span></li>
          <li><svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-wa"/></svg><span><strong data-i18n="ciGoK">Reservas y pedidos</strong><span data-i18n="ciGoV">Por WhatsApp, con la hora que usted elija</span></span></li>
        </ul>
      </div>
    </div>
    <div class="closing__links">
      <div class="lb-legal">
        <span>&copy; 2026 Restaurante La Bolera</span>
        <nav class="lb-legal__nav" aria-label="Pie de página"><a href="#menu" data-i18n="navMenu">Menú</a><a href="#carta" data-i18n="navCarta">Carta</a><a href="#clientes" data-i18n="navRev">Clientes</a><a href="#visita" data-i18n="navVisit">Visita</a></nav>
        <a class="lb-legal__credits" href="credits.html" data-i18n="credits">Fotografías vía Wikimedia Commons</a>
      </div>
    </div>
  </div>
</footer>

<nav class="actionbar" aria-label="Acciones rápidas">
  <a class="btn btn--primary btn--wa" href="#pedido">{WA_ICON}<span data-i18n="ctaNav">Reservar o pedir</span><span class="order-count" data-order-count hidden>0</span></a>
</nav>

<script type="module" src="assets/system.js"></script>
<script type="module" src="assets/motion/motion.js"></script>
<script src="site.js" defer></script>
</body>
</html>
'''
(ROOT / 'index.html').write_text(html)
print('index.html', len(html))
