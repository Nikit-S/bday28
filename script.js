const API = 'https://script.google.com/macros/s/AKfycby6v5faSAHapgJ5p74qB3jf88PeAxSvXr5AY-Jh5gxBKYkHgtntVYb-aal4UGwm4mky/exec';

// Smooth scroll for nav links
document.querySelectorAll('.nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Load gifts
async function loadGifts() {
  const container = document.getElementById('gifts-container');
  try {
    const res = await fetch(API + '?t=' + Date.now());
    const gifts = await res.json();
    renderGifts(gifts);
  } catch(e) {
    container.innerHTML = '<div class="loading">❌ Ошибка загрузки подарков</div>';
    console.error(e);
  }
}

function renderGifts(gifts) {
  const container = document.getElementById('gifts-container');
  container.innerHTML = '';
  
  if (!gifts || gifts.length === 0) {
    container.innerHTML = '<div class="loading">📭 Нет подарков в списке</div>';
    return;
  }
  
  gifts.forEach(g => {
    const isBooked = String(g.booked).toUpperCase() === 'TRUE';
    const div = document.createElement('div');
    div.className = 'gift';
    
    div.innerHTML = `
      <img src="${g.img || 'https://via.placeholder.com/300'}" alt="${g.name}" class="gift-image" onerror="this.src='https://via.placeholder.com/300'">
      <div class="gift-content">
        <div class="gift-name">${g.name}</div>
        ${g.link ? `<a href="${g.link}" target="_blank" class="gift-link">🔗 Ссылка</a>` : ''}
        <div class="gift-status ${isBooked ? 'booked' : ''}">
          ${isBooked ? '🔒 Занято' : '✅ Свободно'}
        </div>
        <div class="gift-actions">
          ${isBooked 
            ? `<button class="unbook-btn" onclick="unbook('${escapeHtml(g.name)}')">Разблокировать</button>`
            : `<button class="book-btn" onclick="book('${escapeHtml(g.name)}')">Забронировать</button>`
          }
        </div>
      </div>
    `;
    container.appendChild(div);
  });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML.replace(/'/g, "&apos;").replace(/"/g, "&quot;");
}

async function book(name) {
  if(!confirm(`Забронировать "${name}"?`)) return;
  
  try {
    await fetch(API, {
      method: 'POST',
      mode: 'no-cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, action: 'book'})
    });
    location.reload();
  } catch(e) {
    alert('❌ Ошибка: ' + e.message);
  }
}

async function unbook(name) {
  if(!confirm(`Разблокировать "${name}"?`)) return;
  
  try {
    await fetch(API, {
      method: 'POST',
      mode: 'no-cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, action: 'unbook'})
    });
    location.reload();
  } catch(e) {
    alert('❌ Ошибка: ' + e.message);
  }
}

loadGifts();
