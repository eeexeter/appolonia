# Аполлония

Адаптивный лендинг сети стоматологий «Аполлония» в Луганске.

## Запуск

Откройте `index.html` в современном браузере. Для локального HTTP-сервера с Python 3 выполните в корне проекта:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Затем откройте [локальную страницу](http://127.0.0.1:8765/).

## Структура

- `index.html` — разметка и содержание.
- `styles.css` — адаптивная сетка, типографика и цветовые токены светлой темы.
- `script.js` — мобильное меню и окно записи по телефону.
- `assets/` — фотографии, логотип и значок вкладки.

## Источники

- [Адреса, телефоны и часы работы](https://apollonia-dent.com/kontakty/).
- [Прайс](https://apollonia-dent.com/czeny/) и [направления лечения](https://apollonia-dent.com/uslugi/).
- Отзывы загружаются через [виджет Яндекс Карт](https://yandex.ru/support/maps/ru/concept/get-map-reference) из [карточки филиала на Алексеева, 16](https://yandex.ru/maps/org/apolloniya/151310105015/reviews/).
- Фирменный оранжевый `#F29220` и цвет наведения `#CB7209` взяты из стилей [оригинального сайта](https://apollonia-dent.com/reviews/). Оранжево-чёрный логотип загружен [с сайта клиники](https://apollonia-dent.com/wp-content/uploads/2026/06/apolloniya_logo_novoe_polnoe_rus_1_oranzhchernyj.svg).
- Фотографии фасадов и эмблема предоставлены пользователем. Фото кабинета в разделе «О клинике» взято из [галереи клиники](https://apollonia-dent.com/nasha-klinika/).
- Иконки [Phosphor](https://github.com/phosphor-icons/core) версии 2.1.1, начертание Regular. Текст лицензии находится в `assets/PHOSPHOR-LICENSE.txt`.
