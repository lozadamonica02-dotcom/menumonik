/* =========================================================
   AREPAS MONIK — MENÚ INTERACTIVO
   ---------------------------------------------------------
   CÓMO EDITAR EL MENÚ
   Todo el menú está en el objeto MENU (justo aquí abajo).
   - n: nombre del producto
   - d: descripción / ingredientes (opcional)
   - p: precio en pesos, solo números (ej. 12000). Si p es null
        se muestra "Consultar".
   - v: variantes con su propio precio, en vez de p
        (ej. v: [{ l: "Personal", p: 3500 }, { l: "Caja", p: 5000 }])
   - sep: true  → dibuja una línea separadora encima del producto
   ========================================================= */

// Hora (0-23) a partir de la cual se abre por defecto el "Menú noche".
// Antes de esa hora (y desde las 5 a. m.) se abre el "Menú día".
const HORA_NOCHE = 16;

// WhatsApp donde llegan los pedidos (código de país + número, sin "+" ni espacios).
const WHATSAPP = "573023904104";
const NOMBRE_NEGOCIO = "Arepas Monik";

const MENU = {
  dia: {
    titulo: "Menú día",
    nota: "Desayunos, arepas, bebidas y adicionales",
    categorias: [
      {
        id: "desayunos",
        nombre: "Desayunos",
        items: [
          { n: "Caldo de costilla", p: 7000 },
          { n: "Sudado de albóndigas", p: 11000 },
          { n: "Carne encebollada", d: "+ arroz + arepa + café", p: 11000 },
          { n: "Hígado encebollado", d: "+ arroz + arepa + café", p: 11000 },
          { n: "Calentado", p: 13000 },
          { n: "Perico", d: "+ arroz + arepa + café", p: 8000 },
          { n: "Huevos revueltos", d: "+ arroz + arepa + café", p: 8000 },
          { n: "Cacerola", d: "+ arroz + arepa + café", p: 8000 },
          { n: "Rancheros", d: "+ arroz + arepa + café", p: 11000 },
          { n: "Patacones + huevos", p: 10000 },
          { n: "Patacones + carne encebollada", p: 11000 },
          { n: "Patacones + arroz + carne", p: 13000 },
          { n: "Patacones + carne o hígado", p: 11000 },
          {
            n: "Omelette",
            d: "Pollo, queso, tocineta, guiso de cebolla blanca y tomate, champiñones. Acompañado de una arepa",
            p: 15000
          }
        ]
      },
      {
        id: "arepas-dia",
        nombre: "Arepas con",
        items: [
          { n: "Pollo", p: 9000 },
          { n: "Carne", p: 9000 },
          { n: "Con todo", d: "Pollo, carne, chicharrón, huevos", p: 12000 },
          { n: "Perico", p: 3500 },
          { n: "Queso", p: 3000 },
          { n: "Jamón, queso", p: 4500 },
          { n: "Chorizo", p: 8000 },
          { n: "Chicharrón", p: 7000 },
          { n: "Chicharrón + queso", p: 9000 },
          { n: "Carne hamburguesa", p: 9000 },
          { n: "Huevo revuelto rancheros", d: "Huevo, queso, salchicha", p: 9000 },
          { n: "Huevos revueltos", p: 5000 },
          { n: "Huevos cacerola", p: 5000 },
          { n: "Huevos cacerola y salchichas", p: 10000 },
          { n: "Huevos pericos", p: 5000 },
          { n: "Arepa con sal", p: 1000, sep: true },
          { n: "Arepa aliñada", p: 1300 },
          { n: "Arepa simple", v: [{ l: "Pequeña", p: 400 }, { l: "Grande", p: 1000 }] },
          { n: "Paquete de arepas con sal", p: 4500 },
          { n: "Paquete de arepas aliñadas", p: 6000 }
        ]
      },
      {
        id: "bebidas-dia",
        nombre: "Bebidas",
        items: [
          { n: "Café negro", p: 1500 },
          { n: "Milo", p: 4000 },
          { n: "Chocolate", p: 4000 },
          { n: "Chocolisto", p: 4000 },
          { n: "Jugo de naranja", p: 4000 },
          { n: "Jugos naturales", v: [{ l: "En agua", p: 4000 }, { l: "En leche", p: 8000 }] },
          { n: "Gaseosa", p: 4000 },
          { n: "Pony malta", v: [{ l: "Litro", p: 7000 }, { l: "Personal", p: 3500 }] },
          { n: "Jugo Hit", v: [{ l: "Personal", p: 3500 }, { l: "Caja", p: 5000 }] },
          { n: "Tisanas", p: 1500 },
          { n: "Agua de panela", p: 2000 },
          { n: "Agua de panela con queso", p: 6000 }
        ]
      },
      {
        id: "adicionales",
        nombre: "Adicionales",
        items: [
          { n: "Queso", p: 2000 },
          { n: "Salchicha", p: 2500 },
          { n: "Jamón", p: 1500 },
          { n: "Chorizo", p: 8000 },
          { n: "Chicharrón", p: 9000 }
        ]
      }
    ]
  },

  noche: {
    titulo: "Menú noche",
    nota: "Arepas, comidas rápidas y bebidas",
    categorias: [
      {
        id: "arepas-noche",
        nombre: "Arepas con",
        items: [
          { n: "Con todo", d: "Pollo, carne, chicharrón, huevos", p: 12000 },
          { n: "Pollo + chicharrón", p: 11000 },
          { n: "Pollo + carne", p: 11000 },
          { n: "Carne + chicharrón", p: 11000 },
          { n: "Arepa ranchera", d: "Salchicha, cebolla, queso, tocineta", p: 15000 },
          { n: "Queso", p: 3000, sep: true },
          { n: "Jamón queso", p: 4500 },
          { n: "Chorizo", p: 8000 },
          { n: "Chicharrón", p: 9000 },
          { n: "Chicharrón + queso", p: 9000 }
        ]
      },
      {
        id: "especiales",
        nombre: "Especiales",
        items: [
          { n: "Costiarepa", d: "Costilla BBQ, queso, lechuga, tomate", p: 15000 },
          { n: "Arepaburguer", d: "Arepa, carne, lechuga, tomate, cebolla, tocineta", p: 15000 },
          { n: "Choriárepa", d: "Chorizo, queso, ripio", p: 10000 }
        ]
      },
      {
        id: "maduros",
        nombre: "Maduros",
        items: [
          { n: "Maduros solos", p: 4000 },
          { n: "Maduros con queso", d: "Mozzarella, criollo o tajado", p: 6000 },
          { n: "Maduro con carne o pollo", p: 8000 },
          { n: "Maduro con todo", p: 10000 }
        ]
      },
      {
        id: "rapidas",
        nombre: "Comidas rápidas",
        items: [
          { n: "Hamburguesa", p: 17000 },
          { n: "Salchipapa", v: [{ l: "Sencilla", p: 16000 }, { l: "Con todo", p: 20000 }] }
        ]
      },
      {
        id: "bebidas-noche",
        nombre: "Bebidas",
        items: [
          { n: "Gaseosa", p: 1500 },
          { n: "Gaseosa litro", p: 7000 },
          { n: "Jugo Hit", v: [{ l: "Personal", p: 3500 }, { l: "Caja", p: 5000 }] },
          { n: "Pony malta", v: [{ l: "Litro", p: 7000 }, { l: "Personal", p: 3500 }] },
          { n: "Jugos naturales", v: [{ l: "En agua", p: 4000 }, { l: "En leche", p: 8000 }] },
          { n: "Jugo de naranja", p: 4000 },
          { n: "Café negro", p: 1500 },
          { n: "Leche", p: 2500 },
          { n: "Tisanas", p: 1500 },
          { n: "Agua de panela", p: 2000 },
          { n: "Agua de panela con leche", p: 3000 }
        ]
      }
    ]
  }
};

/* =========================================================
   LÓGICA (no hace falta tocar nada de aquí para editar precios)
   ========================================================= */
(() => {
  "use strict";

  const ORDER = ["dia", "noche"];
  const $ = (s, r = document) => r.querySelector(s);

  const el = {
    body: document.body,
    sticky: $("#sticky"),
    tabs: $("#tabs"),
    tabBtns: Array.from(document.querySelectorAll(".tab")),
    chips: $("#chips"),
    panel: $("#panel"),
    title: $("#menuTitle"),
    note: $("#menuNote"),
    q: $("#q"),
    qClear: $("#qClear"),
    empty: $("#empty"),
    emptyQ: $("#emptyQ"),
    emptyClear: $("#emptyClear"),
    cross: $("#crossHint"),
    toTop: $("#toTop"),
    // pedido
    cta: $("#orderCta"),
    ctaCount: $("#ctaCount"),
    bar: $("#orderBar"),
    barCount: $("#barCount"),
    barTotal: $("#barTotal"),
    dlg: $("#orderDialog"),
    orderClose: $("#orderClose"),
    orderBack: $("#orderBack"),
    orderEmpty: $("#orderEmpty"),
    orderList: $("#orderList"),
    orderForm: $("#orderForm"),
    fNombre: $("#fNombre"),
    fDir: $("#fDir"),
    fDirWrap: $("#fDirWrap"),
    fNota: $("#fNota"),
    formError: $("#formError"),
    formOk: $("#formOk"),
    clearOrder: $("#clearOrder")
  };

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let current = "dia";
  let query = "";
  let sections = [];

  /* ---------- utilidades ---------- */
  const norm = (s) =>
    String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const money = (n) => "$" + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Catálogo plano: cada producto (o variante) con precio recibe un id estable para el pedido.
  const CATALOG = {};
  Object.keys(MENU).forEach((mk) => {
    MENU[mk].categorias.forEach((cat) => {
      cat.items.forEach((it, i) => {
        it._id = mk + "." + cat.id + "." + i;
        if (it.v) {
          it.v.forEach((v, vi) => {
            v._id = it._id + "." + vi;
            if (v.p != null) CATALOG[v._id] = { id: v._id, menu: mk, cat: cat.nombre, name: it.n + " (" + v.l + ")", price: v.p };
          });
        } else if (it.p != null) {
          CATALOG[it._id] = { id: it._id, menu: mk, cat: cat.nombre, name: it.n, price: it.p };
        }
      });
    });
  });

  // Marca las coincidencias de la búsqueda sin importar tildes/mayúsculas.
  function hl(text, q) {
    const safe = esc(text);
    if (!q) return safe;
    const chars = Array.from(text);
    const nt = chars
      .map((c) => {
        const r = c.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
        return r.length === 1 ? r : c.toLowerCase();
      })
      .join("");
    if (nt.length !== chars.length) return safe;
    let out = "";
    let i = 0;
    while (i < chars.length) {
      const at = nt.indexOf(q, i);
      if (at === -1) { out += esc(chars.slice(i).join("")); break; }
      out += esc(chars.slice(i, at).join("")) + "<mark>" + esc(chars.slice(at, at + q.length).join("")) + "</mark>";
      i = at + q.length;
    }
    return out;
  }

  function itemMatches(item, cat, q) {
    if (!q) return true;
    const hay = [cat.nombre, item.n, item.d || "", ...(item.v ? item.v.map((v) => v.l) : [])]
      .map(norm)
      .join(" ");
    return hay.includes(q);
  }

  // Devuelve las categorías con los productos que pasan el filtro.
  function filtered(menuKey, q) {
    return MENU[menuKey].categorias
      .map((cat) => {
        const catHit = q && norm(cat.nombre).includes(q);
        const items = cat.items.filter((it) => catHit || itemMatches(it, cat, q));
        return { cat, items };
      })
      .filter((x) => x.items.length);
  }

  const countItems = (list) => list.reduce((n, x) => n + x.items.length, 0);

  /* ---------- render ---------- */
  function priceHTML(p, small) {
    const cls = "price" + (small ? " price--sm" : "") + (p == null ? " price--ask" : "");
    return `<span class="${cls}">${p == null ? "Consultar" : money(p)}</span>`;
  }

  // Botón "+" (o contador − 1 +) de cada producto. Se actualiza sin redibujar la tarjeta.
  function ctlInner(id) {
    const c = CATALOG[id];
    if (!c) return "";
    const q = cart[id] || 0;
    const nom = esc(c.name);
    if (!q) {
      return `<button class="add" type="button" data-act="inc" data-id="${id}" aria-label="Agregar ${nom}">+</button>`;
    }
    return `<span class="stepper"><button type="button" data-act="dec" data-id="${id}" aria-label="Quitar uno de ${nom}">−</button><b>${q}</b><button type="button" data-act="inc" data-id="${id}" aria-label="Agregar otro ${nom}">+</button></span>`;
  }
  const ctlHTML = (id) => (CATALOG[id] ? `<span class="ctl" data-ctl="${id}">${ctlInner(id)}</span>` : "");

  function itemHTML(it, q) {
    const sep = it.sep ? " item--sep" : "";
    if (it.v) {
      const rows = it.v
        .map(
          (v) => `<div class="row row--var"><span class="vlabel">${hl(v.l, q)}</span><span class="leader"></span>${priceHTML(v.p, true)}${ctlHTML(v._id)}</div>`
        )
        .join("");
      return `<li class="item${sep}"><div class="name">${hl(it.n, q)}</div>${it.d ? `<p class="desc">${hl(it.d, q)}</p>` : ""}<div class="variants">${rows}</div></li>`;
    }
    return `<li class="item${sep}"><div class="row"><span class="name">${hl(it.n, q)}</span><span class="leader"></span>${priceHTML(it.p)}${ctlHTML(it._id)}</div>${it.d ? `<p class="desc">${hl(it.d, q)}</p>` : ""}</li>`;
  }

  function render(direction) {
    const q = norm(query);
    const data = MENU[current];
    const list = filtered(current, q);
    const total = countItems(list);

    el.title.textContent = data.titulo;
    el.note.textContent = q
      ? total
        ? `${total} ${total === 1 ? "resultado" : "resultados"} para “${query.trim()}”`
        : ""
      : data.nota;
    document.title = `${data.titulo} · Arepas Monik`;

    el.panel.innerHTML = list
      .map(
        ({ cat, items }, i) => `
      <article class="card" id="cat-${esc(cat.id)}" data-cat="${esc(cat.id)}" style="--i:${i}">
        <h3 class="card-title"><span>${esc(cat.nombre)}</span></h3>
        <ul class="items">${items.map((it) => itemHTML(it, q)).join("")}</ul>
      </article>`
      )
      .join("");

    el.chips.innerHTML = list
      .map(({ cat }) => `<button class="chip" type="button" data-target="cat-${esc(cat.id)}">${esc(cat.nombre)}</button>`)
      .join("");
    el.chips.hidden = list.length === 0;

    sections = Array.from(el.panel.querySelectorAll(".card"));

    // estado vacío + aviso del otro menú
    el.empty.hidden = total !== 0 || !q;
    el.emptyQ.textContent = query.trim();
    el.panel.hidden = total === 0 && !!q;

    const other = ORDER.find((k) => k !== current);
    if (q) {
      const otherTotal = countItems(filtered(other, q));
      if (otherTotal) {
        el.cross.hidden = false;
        el.cross.innerHTML = `También hay ${otherTotal} ${otherTotal === 1 ? "resultado" : "resultados"} en el <button type="button" class="link" data-go="${other}">${esc(MENU[other].titulo)}</button>`;
      } else {
        el.cross.hidden = true;
      }
    } else {
      el.cross.hidden = true;
    }

    if (direction && !reduceMotion) {
      el.panel.classList.remove("enter-left", "enter-right");
      void el.panel.offsetWidth;
      el.panel.classList.add(direction > 0 ? "enter-right" : "enter-left");
    }
    updateSpy();
  }

  /* ---------- pestañas ---------- */
  function setMenu(key, { push = true, scroll = true } = {}) {
    if (!MENU[key]) return;
    if (key === current && el.panel.childElementCount) return;
    const dir = ORDER.indexOf(key) - ORDER.indexOf(current);
    current = key;
    el.body.dataset.menu = key;
    el.tabs.dataset.active = String(ORDER.indexOf(key));
    el.tabBtns.forEach((b) => {
      const on = b.dataset.menu === key;
      b.setAttribute("aria-selected", on ? "true" : "false");
      b.tabIndex = on ? 0 : -1;
    });
    el.panel.setAttribute("aria-labelledby", "tab-" + key);
    if (push) {
      try { history.replaceState(null, "", "#" + key); } catch (e) { /* file:// u otros */ }
    }
    render(dir);
    if (scroll) scrollToContentTop();
  }

  function scrollToContentTop() {
    const head = $(".menu-head");
    const top = head.getBoundingClientRect().top + window.scrollY - stickyH() - 8;
    if (window.scrollY > top) window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
  }

  el.tabBtns.forEach((b, i) => {
    b.addEventListener("click", () => setMenu(b.dataset.menu));
    b.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        const next = el.tabBtns[(i + (e.key === "ArrowRight" ? 1 : -1) + ORDER.length) % ORDER.length];
        next.focus();
        setMenu(next.dataset.menu);
      }
    });
  });

  window.addEventListener("hashchange", () => {
    const k = location.hash.replace("#", "");
    if (MENU[k]) setMenu(k, { push: false });
  });

  /* ---------- buscador ---------- */
  let qTimer;
  el.q.addEventListener("input", () => {
    el.qClear.hidden = !el.q.value;
    clearTimeout(qTimer);
    qTimer = setTimeout(() => {
      query = el.q.value;
      render();
    }, 120);
  });

  function clearSearch() {
    el.q.value = "";
    query = "";
    el.qClear.hidden = true;
    render();
  }
  el.qClear.addEventListener("click", () => { clearSearch(); el.q.focus(); });
  el.emptyClear.addEventListener("click", clearSearch);
  el.q.addEventListener("keydown", (e) => { if (e.key === "Escape") clearSearch(); });

  el.cross.addEventListener("click", (e) => {
    const b = e.target.closest("[data-go]");
    if (b) setMenu(b.dataset.go);
  });

  /* ---------- chips + scroll-spy ---------- */
  // En celulares horizontales (pantalla muy baja) la barra no se queda fija, así que no resta espacio.
  const stickyH = () => (getComputedStyle(el.sticky).position === "sticky" ? el.sticky.offsetHeight : 0);

  function syncStickyVar() {
    document.documentElement.style.setProperty("--sticky-h", stickyH() + "px");
  }

  el.chips.addEventListener("click", (e) => {
    const b = e.target.closest(".chip");
    if (!b) return;
    const target = document.getElementById(b.dataset.target);
    if (target) target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  });

  let spyId = null;
  function updateSpy() {
    if (!sections.length) return;
    const line = stickyH() + 40;
    let active = sections[0];
    for (const s of sections) {
      if (s.getBoundingClientRect().top <= line) active = s;
    }
    // al llegar al final de la página, activa la última categoría
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      active = sections[sections.length - 1];
    }
    if (active.id === spyId) return;
    spyId = active.id;
    el.chips.querySelectorAll(".chip").forEach((c) => {
      const on = c.dataset.target === spyId;
      c.classList.toggle("is-active", on);
      if (on) {
        const box = el.chips;
        const left = c.offsetLeft - box.clientWidth / 2 + c.offsetWidth / 2;
        box.scrollTo({ left, behavior: reduceMotion ? "auto" : "smooth" });
      }
    });
  }

  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateSpy();
        el.toTop.hidden = window.scrollY < 700;
        ticking = false;
      });
    },
    { passive: true }
  );

  el.toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));

  window.addEventListener("resize", () => { syncStickyVar(); updateSpy(); });
  if ("ResizeObserver" in window) new ResizeObserver(syncStickyVar).observe(el.sticky);

  /* ---------- pedido (carrito) ---------- */
  const LS_CART = "monik-pedido-v1";
  const LS_CLIENTE = "monik-cliente-v1";
  const MAX_QTY = 20;
  let cart = {};

  const lsGet = (k) => { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } };
  const lsSet = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* sin almacenamiento */ } };

  function loadCart() {
    const saved = lsGet(LS_CART) || {};
    cart = {};
    Object.keys(saved).forEach((id) => {
      const q = parseInt(saved[id], 10);
      if (CATALOG[id] && q > 0) cart[id] = Math.min(q, MAX_QTY);
    });
  }

  function cartTotals() {
    const lines = Object.keys(CATALOG)
      .filter((id) => cart[id] > 0)
      .map((id) => Object.assign({}, CATALOG[id], { qty: cart[id] }));
    return {
      lines,
      count: lines.reduce((n, l) => n + l.qty, 0),
      total: lines.reduce((n, l) => n + l.qty * l.price, 0)
    };
  }

  function updateCtl(id) {
    document.querySelectorAll('[data-ctl="' + id + '"]').forEach((c) => { c.innerHTML = ctlInner(id); });
  }

  function updateBar() {
    const { count, total } = cartTotals();
    const open = el.dlg.open;
    el.bar.hidden = count === 0 || open;
    document.body.classList.toggle("has-cart", count > 0 && !open);
    el.barCount.textContent = count;
    el.barTotal.textContent = money(total);
    el.ctaCount.textContent = count ? " · " + count : "";
  }

  function setQty(id, q) {
    q = Math.max(0, Math.min(MAX_QTY, q));
    if (q) cart[id] = q; else delete cart[id];
    lsSet(LS_CART, cart);
    updateCtl(id);
    updateBar();
    if (el.dlg.open) renderOrder();
  }

  // + y − (funciona en el menú y dentro de la ventana del pedido)
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-act]");
    if (!b || !CATALOG[b.dataset.id]) return;
    const id = b.dataset.id;
    const now = cart[id] || 0;
    setQty(id, b.dataset.act === "inc" ? now + 1 : now - 1);
    // devuelve el foco al botón + para quien navega con teclado
    const root = el.dlg.open ? el.dlg : document;
    const again = root.querySelector('[data-act="inc"][data-id="' + id + '"]');
    if (again) again.focus({ preventScroll: true });
  });

  function renderOrder() {
    const { lines, count, total } = cartTotals();
    el.orderEmpty.hidden = count !== 0;
    el.orderList.hidden = count === 0;
    el.orderForm.hidden = count === 0;
    if (!count) { el.orderList.innerHTML = ""; return; }

    const several = new Set(lines.map((l) => l.menu)).size > 1;
    let html = '<ul class="olines">';
    let lastMenu = "", lastCat = "";
    lines.forEach((l) => {
      if (l.menu !== lastMenu) {
        lastMenu = l.menu; lastCat = "";
        if (several) html += '<li class="ogroup">' + esc(MENU[l.menu].titulo) + "</li>";
      }
      if (l.cat !== lastCat) {
        lastCat = l.cat;
        html += '<li class="ocat">' + esc(l.cat) + "</li>";
      }
      html += '<li class="oline"><div class="oline-info"><span class="oline-name">' + esc(l.name) + '</span><span class="oline-meta">' + money(l.price) + ' c/u</span></div>' +
        ctlHTML(l.id) + '<span class="oline-total">' + money(l.price * l.qty) + "</span></li>";
    });
    html += '</ul><div class="ototal"><span>Total</span><strong>' + money(total) + "</strong></div>";
    el.orderList.innerHTML = html;
  }

  function fillCliente() {
    const c = lsGet(LS_CLIENTE) || {};
    if (c.nombre && !el.fNombre.value) el.fNombre.value = c.nombre;
    if (c.dir && !el.fDir.value) el.fDir.value = c.dir;
    if (c.entrega) {
      const r = el.orderForm.querySelector('input[name="entrega"][value="' + c.entrega + '"]');
      if (r) r.checked = true;
    }
    syncEntrega();
  }

  const entregaValue = () => el.orderForm.querySelector('input[name="entrega"]:checked').value;

  function syncEntrega() {
    el.fDirWrap.hidden = entregaValue() !== "Domicilio";
  }

  function saveCliente() {
    lsSet(LS_CLIENTE, { nombre: el.fNombre.value.trim(), dir: el.fDir.value.trim(), entrega: entregaValue() });
  }

  function openOrder() {
    el.formError.hidden = true;
    el.formOk.hidden = true;
    renderOrder();
    fillCliente();
    if (typeof el.dlg.showModal === "function") el.dlg.showModal(); else el.dlg.setAttribute("open", "");
    document.body.classList.add("modal-open");
    updateBar();
  }

  el.dlg.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
    updateBar();
  });
  el.dlg.addEventListener("click", (e) => { if (e.target === el.dlg) el.dlg.close(); }); // clic en el fondo
  el.orderClose.addEventListener("click", () => el.dlg.close());
  el.orderBack.addEventListener("click", () => el.dlg.close());
  el.cta.addEventListener("click", openOrder);
  el.bar.addEventListener("click", openOrder);

  el.orderForm.addEventListener("change", (e) => {
    if (e.target.name === "entrega") { syncEntrega(); saveCliente(); }
  });
  el.fNombre.addEventListener("input", saveCliente);
  el.fDir.addEventListener("input", saveCliente);

  el.clearOrder.addEventListener("click", () => {
    if (!window.confirm("¿Vaciar todo el pedido?")) return;
    cart = {};
    lsSet(LS_CART, cart);
    document.querySelectorAll("[data-ctl]").forEach((c) => { c.innerHTML = ctlInner(c.dataset.ctl); });
    renderOrder();
    updateBar();
  });

  // Arma el texto del pedido (WhatsApp entiende *negrita* y _cursiva_)
  function buildMessage(cli) {
    const { lines, total } = cartTotals();
    const out = ["Hola " + NOMBRE_NEGOCIO + ", quiero hacer este pedido:"];
    let lastMenu = "", lastCat = "";
    lines.forEach((l) => {
      if (l.menu !== lastMenu) {
        lastMenu = l.menu; lastCat = "";
        out.push("", "*" + MENU[l.menu].titulo + "*");
      }
      if (l.cat !== lastCat) {
        lastCat = l.cat;
        out.push("_" + l.cat + "_");
      }
      out.push("• " + l.qty + " x " + l.name + " — " + money(l.price * l.qty));
    });
    out.push("", "*Total: " + money(total) + "*", "", "Nombre: " + cli.nombre, "Entrega: " + cli.entrega);
    if (cli.entrega === "Domicilio") out.push("Dirección: " + cli.dir);
    if (cli.nota) out.push("Nota: " + cli.nota);
    return out.join("\n");
  }

  el.orderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const cli = { nombre: el.fNombre.value.trim(), entrega: entregaValue(), dir: el.fDir.value.trim(), nota: el.fNota.value.trim() };
    const fail = (msg, field) => {
      el.formOk.hidden = true;
      el.formError.textContent = msg;
      el.formError.hidden = false;
      field.focus();
    };
    if (!cartTotals().count) return;
    if (!cli.nombre) return fail("Escribe tu nombre para el pedido.", el.fNombre);
    if (cli.entrega === "Domicilio" && !cli.dir) return fail("Escribe la dirección para el domicilio.", el.fDir);

    el.formError.hidden = true;
    saveCliente();
    const url = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(buildMessage(cli));
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
    el.formOk.hidden = false;
  });

  /* ---------- inicio ---------- */
  function initialMenu() {
    const h = location.hash.replace("#", "");
    if (MENU[h]) return h;
    const hour = new Date().getHours();
    return hour >= HORA_NOCHE || hour < 5 ? "noche" : "dia";
  }

  loadCart();
  updateBar();

  // Dibuja el menú inicial sin animación de pestaña
  current = initialMenu() === "dia" ? "noche" : "dia"; // fuerza el cambio en setMenu
  setMenu(initialMenu(), { push: false, scroll: false });
  el.panel.classList.remove("enter-left", "enter-right");
  syncStickyVar();
})();
