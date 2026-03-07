const API = 'https://script.google.com/macros/s/AKfycby6v5faSAHapgJ5p74qB3jf88PeAxSvXr5AY-Jh5gxBKYkHgtntVYb-aal4UGwm4mky/exec';

async function loadGifts() {
  try {
    // Добавляем timestamp чтобы избежать кэширования
    const res = await fetch(API + '?t=' + Date.now(), {
      method: 'GET',
      redirect: 'follow'
    });
    
    if (!res.ok) throw new Error('HTTP ' + res.status);
    
    const gifts = await res.json();
    render(gifts);
  } catch(e) {
    console.error('Load error:', e);
    document.getElementById('gifts').innerHTML = '❌ Ошибка загрузки. Проверьте консоль (F12)';
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
    // no-cors необходим для Google Apps Script
    await fetch(API, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name })
    });
    
    alert('✅ Забронировано!');
    location.reload();
  } catch(e) {
    console.error('Book error:', e);
    alert('❌ Ошибка при бронировании');
  }
}

loadGifts();
