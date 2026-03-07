const API = 'https://script.google.com/macros/s/AKfycby6v5faSAHapgJ5p74qB3jf88PeAxSvXr5AY-Jh5gxBKYkHgtntVYb-aal4UGwm4mky/exec';

async function loadGifts() {
  try {
    const res = await fetch(API);
    const gifts = await res.json();
    render(gifts);
  } catch(e) {
    document.getElementById('gifts').innerHTML = '❌ Ошибка загрузки';
    console.error(e);
  }
}

function render(gifts) {
  const container = document.getElementById('gifts');
  container.innerHTML = '';
  gifts.forEach(g => {
    const isBooked = String(g.booked).toUpperCase() === 'TRUE';
    const div = document.createElement('div');
    div.className = `gift ${isBooked ? 'booked' : ''}`;
    div.innerHTML = `
      ${g.img ? `<img src="${g.img}" onerror="this.style.display='none'">` : ''}
      <strong>${g.name}</strong>
      ${g.link ? `<br><a href="${g.link}" target="_blank">🔗 Ссылка</a>` : ''}
      <div class="status">${isBooked ? '🔒 Занято' : '✅ Свободно'}</div>
      ${!isBooked ? `<button onclick="book('${g.name.replace(/'/g, "\\'")}')">Забронировать</button>` : ''}
    `;
    container.appendChild(div);
  });
}

async function book(name) {
  if(!confirm(`Забронировать "${name}"?`)) return;
  try {
    await fetch(API, { method: 'POST', mode: 'no-cors', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({name}) });
    alert('✅ Забронировано!');
    location.reload();
  } catch(e) { alert('❌ Ошибка: ' + e.message); }
}

loadGifts();