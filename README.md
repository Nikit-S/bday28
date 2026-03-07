# 🎉 День Рождения 28

Сайт-приглашение на День Рождения с системой бронирования подарков.

## 🌐 Сайт

**https://nikit-s.github.io/bday28/**

---

## 📁 Структура проекта (Jekyll)

```
bday28/
├── _config.yml           # Настройки Jekyll
├── _layouts/
│   └── default.html      # Основной шаблон
├── _includes/
│   ├── gifts.html        # Виджет подарков
│   ├── map.html          # Карта
│   └── faq.html          # FAQ блок
├── _posts/
│   └── 2026-03-07-event.md  # Твой контент (редактируй этот файл!)
├── assets/
│   ├── style.css         # Стили
│   └── script.js         # Логика подарков
├── images/               # Папка для фото
└── README.md
```

---

## ✏️ Как редактировать контент

### 1. Основной контент

Открой **`_posts/2026-03-07-event.md`** и редактируй:

- Текст о празднике
- Дату, время, место
- FAQ вопросы/ответы
- Контакты

### 2. Настройки страницы

В начале `_posts/2026-03-07-event.md` есть front matter:

```yaml
---
layout: default
title: День Рождения 28
subtitle: Приглашаю отпраздновать вместе!
footer: Жду вас! 🎉
---
```

Меняй `title`, `subtitle`, `footer` по желанию.

### 3. Изображения

1. Загрузи фото в папку `images/`
2. Используй в контенте:
   ```markdown
   <img src="{{ '/images/your-photo.jpg' | relative_url }}" alt="Описание">
   ```

### 4. Карта

Открой **`_includes/map.html`** и замени `iframe` на свой:

**Яндекс.Карты:**
1. https://yandex.ru/maps → найти место → Поделиться → Виджет
2. Скопируй код iframe
3. Вставь в `map.html`

### 5. FAQ

Открой **`_includes/faq.html`** и редактируй вопросы/ответы.

### 6. Подарки (Google Sheets)

Таблица должна иметь колонки:
| name | link | img | booked |
|------|------|-----|--------|
| Яндекс станция | https://... | https://... | FALSE |

API обновляется в `assets/script.js` (переменная `API`).

---

## 🚀 Развёртывание

1. Settings → Pages → Source: **GitHub Actions** (или Deploy from branch)
2. Branch: `main` → Save
3. Jekyll соберёт сайт автоматически (1-2 минуты)

---

## 📱 Адаптивность

| Устройство | Колонки подарков |
|------------|------------------|
| 📱 Мобильный (<600px) | 1 |
| 📱 Планшет (600-900px) | 2 |
| 💻 Десктоп (>900px) | 4 |

---

## 🔧 Полезные команды

### Локальная разработка (опционально):

```bash
# Установить Jekyll
gem install bundler jekyll

# Запустить локально
bundle exec jekyll serve

# Открыть http://localhost:4000/bday28/
```

---

## 📞 Контакты

По вопросам: Telegram @yourusername
