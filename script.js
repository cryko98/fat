// ---------- config ----------
// Put the real X profile URL and the contract address here when ready.
const X_URL = 'https://x.com/fatasspussypf';
const CA = '7Q3NgSm398AMJaeiKcRYjhNhAb3mRGdFc55LvV2Kpump';

const page = document.getElementById('page');
function shake() {
  page.classList.remove('shake');
  void page.offsetWidth;
  page.classList.add('shake');
}

// ---------- toast ----------
const toast = document.getElementById('toast');
let toastTimer;
function say(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

// ---------- he lands on the headline ----------
const dropper = document.getElementById('dropper');
const hAss = document.getElementById('hAss');
const dropZone = dropper.parentElement;
const ASS_SQUASH_X = 1.7, ASS_SQUASH_Y = .55; // keep in sync with .h-ass.sat
const CAT_BODY = .645; // lying cat height / width in the cutout
function fitDropper() {
  const w = hAss.offsetWidth * ASS_SQUASH_X;
  const h = w * CAT_BODY;
  dropZone.style.paddingTop = Math.round(h * .62) + 'px';
  // he lies on the squashed word, sinking in a little
  const bottom = hAss.offsetTop + hAss.offsetHeight * (1 - ASS_SQUASH_Y) + hAss.offsetHeight * .12;
  Object.assign(dropper.style, {
    width: w + 'px',
    height: h + 'px',
    left: hAss.offsetLeft + hAss.offsetWidth / 2 - w / 2 + 'px',
    top: bottom - h + 'px',
  });
}
fitDropper();
addEventListener('resize', fitDropper);
document.fonts.ready.then(fitDropper);
// drop only once he is loaded and the word is measured, and squash the
// word exactly when the fall ends (not on a timer, slow networks broke that)
dropper.addEventListener('animationend', (e) => {
  if (e.animationName !== 'drop') return;
  hAss.classList.add('sat');
  shake();
});
const catImg = dropper.querySelector('img');
Promise.all([
  catImg.decode().catch(() => {}),
  document.fonts.ready,
]).then(() => {
  fitDropper();
  setTimeout(() => dropper.classList.add('landed'), 250);
});

// ---------- belt ----------
const belt = document.getElementById('belt');
const beltWords = 'FAT ASS PUSSY <b>$FAP</b> IT IS A CAT <b>$FAP</b> WIDE LOAD <b>$FAP</b> ABSOLUTE UNIT <b>$FAP</b> ';
belt.innerHTML = beltWords.repeat(6);

// ---------- X links ----------
document.querySelectorAll('.js-x').forEach((a) => {
  a.href = X_URL;
  a.addEventListener('click', (e) => {
    if (X_URL === '#') { e.preventDefault(); say('X COMING SOON. HE TYPES SLOW. FAT PAWS.'); }
  });
});

// ---------- CA ----------
if (CA) {
  document.getElementById('ca').textContent = CA;
  document.getElementById('caFoot').textContent = 'CA: ' + CA;
}
document.getElementById('caCopy').addEventListener('click', async () => {
  if (!CA) return say('NOTHING TO COPY. HE IS SITTING ON IT.');
  try { await navigator.clipboard.writeText(CA); say('COPIED. NOW GO.'); }
  catch { say('COPY FAILED. DO IT BY HAND.'); }
});

// ---------- video sound ----------
const vid = document.getElementById('vid');
const sound = document.getElementById('sound');
sound.addEventListener('click', () => {
  vid.muted = !vid.muted;
  if (!vid.muted) vid.play();
  sound.textContent = vid.muted ? 'TURN ON SOUND' : 'TURN OFF SOUND';
});

// ---------- make him wider ----------
const widerCat = document.getElementById('widerCat');
const widerMsg = document.getElementById('widerMsg');
const widerLines = [
  'he can take it.', 'wider.', 'WIDER.', 'ok he is thicc now', 'the frame is sweating',
  'he is leaving the screen', 'someone call NASA', 'he can see your house from here',
  'this is now a landscape photo', 'absolute unit achieved', 'he is still not done',
];
let wide = 1;
function renderWide() {
  widerCat.style.aspectRatio = wide;
  widerMsg.textContent = widerLines[Math.min(Math.round((wide - 1) / 0.5), widerLines.length - 1)];
}
document.getElementById('widerBtn').addEventListener('click', () => {
  wide = Math.min(wide + 0.5, 8);
  renderWide();
  shake();
});
document.getElementById('dietBtn').addEventListener('click', () => {
  wide = Math.max(wide - 0.25, 1);
  renderWide();
  setTimeout(() => {
    wide = Math.min(wide + 1, 8);
    renderWide();
    shake();
    say('HE SAID NO.');
  }, 450);
});

// ---------- meme wall ----------
// a 4th field marks wide (16:9) images, shown uncropped
const memes = [
  ['17-poster', 'coming to cinemas', 'as soon as he fits through the door', true],
  ['15-ufo', 'aliens came for a sample', 'tractor beam: not strong enough', true],
  ['16-ship', 'they said it was unsinkable', 'then he got on board', true],
  ['01-cat-door', 'I\'ll just pop out for a sec', '3 days later'],
  ['02-scale', 'steps on scale', 'scale: I\'m out'],
  ['03-buffet', 'all you can eat?', 'say less'],
  ['04-couch', 'it was a 3 seater', 'now it\'s a 0 seater'],
  ['05-sumo', 'opponent: 180 kg', 'him: yes'],
  ['06-box', 'if I fits I sits', 'I do not fits. I sits.'],
  ['07-elevator', 'max load: 8 people', 'or 1 fat ass pussy'],
  ['08-beach', 'save the whale', 'guys it\'s a cat'],
  ['09-kaiju', 'he didn\'t attack the city', 'he just sat down'],
  ['10-treadmill', 'leg day', 'donut day'],
  ['11-hallway', 'the hallway is closed', 'forever'],
  ['12-weigh-station', 'sir this is a truck scale', 'and?'],
  ['13-throne', 'bow before', 'the fat ass pussy'],
  ['14-pool', 'cannonball', 'pool: gone'],
];
const wall = document.getElementById('wall');
const tilts = [-2, 1.5, -1, 2.5, -2.5, 1, -1.5, 2];
memes.forEach(([file, top, bot, isWide], i) => {
  const t = document.createElement('figure');
  t.className = isWide ? 'tile meme wide' : 'tile meme';
  t.style.setProperty('--r', tilts[i % tilts.length] + 'deg');
  t.innerHTML = `<img src="assets/gallery/${file}.jpg" alt="${top} ${bot}" loading="lazy">
    <p class="cap cap-top">${top}</p><p class="cap cap-bot">${bot}</p>`;
  t.addEventListener('click', (e) => { e.stopPropagation(); openLightbox(t); });
  wall.appendChild(t);
});
const lightbox = document.getElementById('lightbox');
function openLightbox(tile) {
  lightbox.firstElementChild.innerHTML = tile.innerHTML;
  lightbox.classList.add('open');
}
lightbox.addEventListener('click', (e) => { e.stopPropagation(); lightbox.classList.remove('open'); });
addEventListener('keydown', (e) => { if (e.key === 'Escape') lightbox.classList.remove('open'); });

// ---------- click anywhere: more cats fall from the sky ----------
let fallers = 0;
document.addEventListener('click', (e) => {
  if (e.target.closest('a, button, .tile, video, .lightbox')) return;
  if (fallers > 25) return;
  fallers++;
  const c = document.createElement('img');
  c.src = 'assets/cat-cutout.png';
  c.alt = '';
  c.className = 'faller';
  c.style.left = (e.clientX - 75) + 'px';
  c.style.top = '-160px';
  c.style.setProperty('--fall', (innerHeight + 10) + 'px');
  c.style.setProperty('--spin', (Math.random() * 120 - 60) + 'deg');
  document.body.appendChild(c);
  setTimeout(shake, 750);
  setTimeout(() => c.classList.add('gone'), 1300);
  setTimeout(() => { c.remove(); fallers--; }, 2000);
});
