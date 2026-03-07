---
layout: default
title: 🛡️ Вальхалла Зовёт
subtitle: Вечеринка в стиле скандинавской мифологии
footer: Skål! До встречи в Вальхалле! 🍺
---

<!-- О празднике -->
<section id="about" class="section">
  <h2>📜 Сага о Празднике</h2>
  <div class="content-block">
    <p class="intro-text">Друзья-викинги! Приглашаю вас в путешествие к древним богам Асгарда. Три дня пира, братства и скандинавских легенд ждут нас!</p>
    
    <div class="info-grid">
      <div class="info-card">
        <span class="info-icon">📅</span>
        <div>
          <strong>Даты</strong>
          <p>3-5 Апреля 2026</p>
        </div>
      </div>
      <div class="info-card">
        <span class="info-icon">🌅</span>
        <div>
          <strong>Заезд</strong>
          <p>3 апреля, вечер</p>
        </div>
      </div>
      <div class="info-card">
        <span class="info-icon">🌇</span>
        <div>
          <strong>Отъезд</strong>
          <p>5 или 6 апреля, вечер</p>
        </div>
      </div>
      <div class="info-card">
        <span class="info-icon">📍</span>
        <div>
          <strong>Место</strong>
          <p>Заречная улица, 1</p>
        </div>
      </div>
    </div>

    <div class="dress-code">
      <h3>🎭 Дресс-код</h3>
      <p>Приветствуются элементы в стиле викингов: плащи, мех, кожа, рунические символы, боевая раскраска. Но не обязательно — главное ваш дух!</p>
    </div>
  </div>
</section>

<!-- Подарки -->
{% include gifts.html %}

<!-- Мудборд -->
<section id="moodboard" class="section">
  <h2>🎨 Вдохновение: Скандинавская Мифология</h2>
  <div class="content-block">
    <p>Погрузитесь в атмосферу древних саг перед праздником:</p>
    
    <div class="moodboard-grid">
      <div class="moodboard-card">
        <h4>📌 Pinterest — Norse Mythology</h4>
        <p>Коллекции изображений богов, рун и скандинавской эстетики</p>
        <a href="https://www.pinterest.com/ideas/norse-mythology/" target="_blank" class="moodboard-link">Открыть →</a>
      </div>
      <div class="moodboard-card">
        <h4>🎬 Фильмы и Сериалы</h4>
        <p>«Викинги», «Последнее Королевство», «Вальхалла: Кровь Врагов»</p>
        <a href="https://www.netflix.com" target="_blank" class="moodboard-link">Смотреть →</a>
      </div>
      <div class="moodboard-card">
        <h4>📚 Книги</h4>
        <p>«Американские Боги» Н. Гейман, «Песнь Ахилла», скандинавские саги</p>
        <a href="https://mythicalarchives.com/uncategorized/norse-mythology-books-2025-complete-guide/" target="_blank" class="moodboard-link">Читать →</a>
      </div>
      <div class="moodboard-card">
        <h4>🎮 Игры</h4>
        <p>God of War Ragnarök, Assassin's Creed Valhalla, Valheim</p>
        <a href="https://www.playstation.com" target="_blank" class="moodboard-link">Играть →</a>
      </div>
    </div>

    <div class="gallery moodboard-gallery">
      <img src="https://images.unsplash.com/photo-1542259681-d4cd71d26e60?w=800" alt="Viking Aesthetic" onerror="this.style.display='none'">
      <img src="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=800" alt="Norse Runes" onerror="this.style.display='none'">
      <img src="https://images.unsplash.com/photo-1506459388126-24354c997431?w=800" alt="Nordic Nature" onerror="this.style.display='none'">
    </div>
    
    <p class="gallery-caption">🌲 Атмосфера: северные леса, древние руны, огонь и лёд</p>
  </div>
</section>

<!-- Место -->
<section id="location" class="section">
  <h2>🗺️ Путь в Вальхаллу</h2>
  <div class="content-block">
    <p><strong>Адрес:</strong> Московская область, Заречная улица, 1</p>
    <p><strong>Координаты:</strong> 55.454509, 38.622877</p>
    
    {% include map.html %}
    
    <div class="transport-info">
      <h3>🚗 На машине</h3>
      <p>Навигатор: <strong>Заречная улица, 1</strong> (координаты 55.454509, 38.622877)</p>
      <p class="important">⚠️ На шлагбауме скажите: <strong>«Первый дом»</strong></p>
      
      <h3>🚆 На электричке</h3>
      <p><strong>Маршрут:</strong> Москва (Казанский вокзал) → Виноградово</p>
      <p><strong>Далее:</strong> Такси от станции (~10 мин) или можем встретить на машине</p>
      <a href="https://www.tutu.ru/rasp.php?st1=20000&st2=10702" target="_blank" class="train-link">
        🚃 Расписание электричек на Tutu.ru →
      </a>
      
      <h3>📞 Встреча</h3>
      <p>Если нужна встреча на станции — напишите заранее в Telegram!</p>
    </div>
  </div>
</section>

<!-- FAQ -->
<section id="faq" class="section">
  <h2>❓ Мудрость Мимира (FAQ)</h2>
  {% include faq.html %}
</section>

<!-- Контакты -->
<section class="section contact">
  <h2>📞 Связь с Богами</h2>
  <p>По всем вопросам пишите в Telegram: <a href="https://t.me/yourusername">@yourusername</a></p>
  <p>Или звоните: <a href="tel:+79990000000">+7 (999) 000-00-00</a></p>
  <p class="skol">🍺 <strong>Skål!</strong> До встречи в Вальхалле!</p>
</section>
