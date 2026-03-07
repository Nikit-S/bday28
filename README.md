# 🛡️ Вальхалла Зовёт

Сайт-приглашение на вечеринку в стиле скандинавской мифологии.

## 🌐 Сайт

**https://nikit-s.github.io/bday28/**

---

## 📁 Структура проекта (Jekyll)

```
bday28/
├── _config.yml              # Настройки Jekyll
├── _layouts/
│   └── default.html         # Основной шаблон
├── _includes/
│   ├── gifts.html           # 🎁 Виджет подарков
│   ├── map.html             # 🗺️ Карта (обнови координаты!)
│   └── faq.html             # ❓ FAQ блок
├── _posts/
│   └── 2026-04-03-event.md  # ✏️ ТВОЙ КОНТЕНТ (редактируй этот файл!)
├── assets/
│   ├── style.css            # Стили (скандинавская тема)
│   └── script.js            # Логика подарков
├── images/                  # 📷 Папка для фото
└── README.md
```

---

## ✏️ Как редактировать контент

### 1. Основной контент → `_posts/2026-04-03-event.md`

Редактируй:
- Даты праздника
- Описание дресс-кода
- Тексты о мероприятии
- Контакты

### 2. Карта → `_includes/map.html`

Замени координаты в iframe:
```html
src="https://yandex.ru/map-widget/v1/?ll=38.622877%2C55.454509&z=15"
```

### 3. FAQ → `_includes/faq.html`

Добавляй/меняй вопросы и ответы.

### 4. Мудборд → `_posts/2026-04-03-event.md`

Секция `#moodboard` содержит ссылки на вдохновение:
- Pinterest коллекции
- Фильмы и сериалы
- Книги
- Игры

### 5. Изображения → папка `images/`

1. Загрузи фото в `images/`
2. Используй в контенте:
   ```html
   <img src="{{ '/images/your-photo.jpg' | relative_url }}" alt="Описание">
   ```

### 6. Подарки → Google Sheets

Таблица: `name` | `link` | `img` | `booked`

API в `assets/script.js` (переменная `API`).

---

## 🎨 Скандинавская Тема

Цвета в `assets/style.css`:
- 🌑 Фон: `#0a0a0f` (тёмный)
- 🏆 Акцент золото: `#c9a962`
- 🔵 Акцент синий: `#4a6fa5`
- 🔴 Акцент красный: `#8b2332`

---

## 🚀 Развёртывание

1. Settings → Pages → Branch: `main`
2. Jekyll соберёт сайт (1-2 минуты)
3. Сайт: https://nikit-s.github.io/bday28/

---

## 📍 Локация

**Адрес:** Заречная улица, 1  
**Координаты:** 55.454509, 38.622877  
**Шлагбаум:** сказать «Первый дом»

---

## 📅 Даты

- **Заезд:** 3 апреля, вечер
- **Праздник:** 3-5 апреля 2026
- **Отъезд:** 5 или 6 апреля, вечер

---

## 🔗 Полезные ссылки

- 🚆 [Расписание электричек](https://www.tutu.ru/rasp.php?st1=20000&st2=10702)
- 📌 [Pinterest: Norse Mythology](https://www.pinterest.com/ideas/norse-mythology/)
- 📚 [Norse Mythology Books 2025](https://mythicalarchives.com/uncategorized/norse-mythology-books-2025-complete-guide/)

---

**Skål! 🍺**
