/*
  App logic for RLA Canteen.
  Depends on MENU from js/menu-data.js.
*/

let lastSpecial = null;

/* ---------- Navigation ---------- */
function go(hash) {
  if (location.hash === hash) {
    route();
  } else {
    location.hash = hash;
  }
}

function showView(id) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function route() {
  const hash = location.hash || '#home';
  const parts = hash.split('/');
  const path = parts[0];
  const name = decodeURIComponent(parts.slice(1).join('/'));

  if (path === '#menu') {
    showView('view-menu');
  } else if (path === '#category') {
    renderCategory(name, false);
  } else if (path === '#special') {
    lastSpecial = name;
    renderCategory(name, true);
  } else if (path === '#map') {
    showView('view-map');
  } else {
    showView('view-home');
  }
}

/* ---------- Menu rendering ---------- */
function renderMenu() {
  const grid = document.getElementById('menuGrid');
  grid.innerHTML = '';
  Object.keys(MENU).forEach(cat => {
    const data = MENU[cat];
    const btn = document.createElement('button');
    btn.className = 'cat-card';
    btn.innerHTML = `
      <span class="cat-icon">${data.icon}</span>
      <span>
        <span class="cat-name">${cat}</span>
        <span class="cat-meta">${data.items.length} items</span>
      </span>
      <span class="cat-arrow">&rsaquo;</span>`;
    btn.onclick = () => go('#category/' + encodeURIComponent(cat));
    grid.appendChild(btn);
  });
}

function formatPriceTag(price) {
  return price === null
    ? '<span class="price muted">Ask at counter</span>'
    : `<span class="price">₹${price}</span>`;
}

function renderCategory(cat, isSpecial) {
  const data = MENU[cat];
  if (!data) { go('#menu'); return; }

  document.getElementById('catTitle').textContent = cat;
  document.getElementById('catSub').textContent = data.desc;

  const banner = document.getElementById('specialBanner');
  banner.innerHTML = isSpecial ? `
    <div class="banner">
      <div>
        <div class="banner-label">Today's special category</div>
        <div class="banner-cat">${data.icon} ${cat}</div>
      </div>
      <button class="reroll" onclick="showSpecial()">Pick another</button>
    </div>` : '';

  const list = document.getElementById('itemList');
  list.innerHTML = '';
  data.items.forEach((item, i) => {
    const row = document.createElement('div');
    row.className = 'item';
    row.innerHTML = `
      <span class="item-name"><span class="item-index">${String(i + 1).padStart(2, '0')}</span>${item.name}</span>
      ${formatPriceTag(item.price)}`;
    list.appendChild(row);
  });

  showView('view-category');
}

/* ---------- Specials: random category ---------- */
// Pick a random category, avoiding an immediate repeat when possible.
function pickRandomCategory() {
  const cats = Object.keys(MENU);
  const pool = cats.length > 1 ? cats.filter(c => c !== lastSpecial) : cats;
  return pool[Math.floor(Math.random() * pool.length)];
}

function showSpecial() {
  const cat = pickRandomCategory();
  lastSpecial = cat;
  const target = '#special/' + encodeURIComponent(cat);
  if (location.hash === target) {
    renderCategory(cat, true);
  } else {
    location.hash = target;
  }
}

/* ---------- Theme ---------- */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('themeBtn');
  if (btn) {
    btn.textContent = theme === 'dark' ? 'Light' : 'Dark';
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

/* ---------- Start ---------- */
(function init() {
  applyTheme('light');
  renderMenu();
  window.addEventListener('hashchange', route);
  route();
})();
