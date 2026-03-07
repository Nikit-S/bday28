const API = 'https://script.google.com/macros/s/AKfycby6v5faSAHapgJ5p74qB3jf88PeAxSvXr5AY-Jh5gxBKYkHgtntVYb-aal4UGwm4mky/exec';

async function loadGifts() {
  try {
    const res = await fetch(API + '?t=' + Date.now());
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const gifts = await res.json();
    render(gifts);
  } catch(e) {
    console.error('Load error:', e);
    document.getElementById('gifts').innerHTML = '❌ Ошибка загрузки';
  }
}

function render(gifts) {
  const container = document.getElementById('gifts');
  container.innerHTML = '';
  
  if (!gifts || gifts.length === 0) {
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
    // POST с JSON телом
    const res = await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ name: name })
    });
    
    const result = await res.json();
    if (result.success) {
      alert('✅ Забронировано!');
      location.reload();
    } else {
      alert('❌ Ошибка: ' + (result.error || 'Неизвестно'));
    }
  } catch(e) {
    console.error('Book error:', e);
    // Даже если ошибка CORS - пробуем перезагрузить (запрос мог уйти)
    alert('⚠️ Запрос отправлен. Проверьте таблицу!');
    location.reload();
  }
}

loadGifts();
