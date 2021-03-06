## Для запуска понадобиться
```
git submodule update --init --recursive
npm i
npm run build
npm start
```
После, открыть ссылку [localhost:8000](http://localhost:8000/events)
## Версия Node.js
### v8.12.0
## Версия npm
### v6.4.1
## Роуты
* [Главная страничка, со всеми событиями](http://localhost:8000/events)
* [Страничка для задания "мультимедия"](http://localhost:8000/video)
* [Страничка, которая возвращает отфильстрованный JSON (type=info:critical)](http://localhost:8000/api/events?type=info:critical)
* [Страничка, которая возвращает время, с момента запуска сервера](http://localhost:8000/status)
## Выполненые дополнительные задания
* Сдлеать пагинацию: к примеру, по ссылке /events/1:5 - вы получите события с 1го по 5е
* Привязать к основной верстке
* Сделать api/events еще и в пост запросе
## Проблемы миграции с JavaScript на TypeScript
### Сборка
Т.к. до этого сборка была расчитана на чистый JS (ES6), то к примеру тот же eslint - не вписывался в сборку с TypeScript.
### Конфигурация
Много времени ушло на то, чтобы просто понять, что я хочу писать - настройка tslint, tsconfig и т.п. заняла довольно много времени.
### @types/*
Довольно много нового пришлось сверху установить, для того чтобы проект мог быть рабочим, такие пакеты как @types/cors, @types/express и @types/node, должны были быть установленны для работы уже существующего приложения.
### @types/express
Пришлось чутка почитать гайды, для того чтобы понять, как нужно переписать сервер на express.
## Выбор инструментов
Для удобства работы, и разделения частей, использовал сборку webpack:
1. Pug - для разделения и шаблонизации кода.
1. PostCSS - для разделения, и удобства написания кода.
1. ESLint - для соблюдения стиля.
1. Babel - хоть мы и работаем в "вечно зеленых" браузерах, но перестраховаться не мешает.
## Почему Pug?
* Для разделения компонентов, удобнее всего использовать include pugа.
* Присутствует возможностей таких как: mixin, block, extends, include; и т.д.
* Привычка использования данной технологии ускоряет работу.
## PostCSS плагины
* postcss-import
* autoprefixer
* precss
* postcss-assets
* postcss-preset-env
