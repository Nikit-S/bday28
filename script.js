const API = 'https://script.google.com/macros/s/AKfycby6v5faSAHapgJ5p74qB3jf88PeAxSvXr5AY-Jh5gxBKYkHgtntVYb-aal4UGwm4mky/exec';

async function loadGifts() {
  try {
    const res = await fetch(API);
    const gifts = await res.json();
    render(gifts);
  } catch(e) {
    document.getElementById('gifts').innerHTML = '❌ Ошибка загрузки. Проверьте консоль (F12)';
    console.error('Load error:', e);
  }
}

function render(gifts) {
  const container = document.getElementById('gifts');
  container.innerHTML = '';
  
  if (gifts.length === 0) {
    container.innerHTML = '📭 Нет подарков в таблице';
    return;
  }
  
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
    // Используем fetch с no-cors для обхода CORS
    const response = await fetch(API + '?name=' + encodeURIComponent(name), {
      method: 'POST',
      mode: 'no-cors'
    });
    
    alert('✅ Забронировано! Обновляем страницу...');
    location.reload();
  } catch(e) {
    alert('❌ Ошибка: ' + e.message);
    console.error('Book error:', e);
  }
}

loadGifts();
