## Запуск проекта

```
npm install - устанавливаем зависимости
npm run start:dev - запуск сервера + frontend проекта в dev режиме
```

----

## Скрипты

- `npm run start` - Запуск frontend проекта на webpack dev server
- `npm run start:dev` - Запуск frontend проекта на webpack dev server + backend
- `npm run start:dev:server` - Запуск backend сервера
- `npm run build:prod` - Сборка в prod режиме
- `npm run build:dev` - Сборка в dev режиме (не минимизирован)
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером

----

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design. 

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Линтинг

В проекте используется eslint для проверки typescript кода.

Также для строгого контроля главных архитектурных принципов
используется собственный eslint plugin *eslint-plugin-zavalition-fsd*,
который содержит 3 правила
1) path-checker - запрещает использовать абсолютные импорты в рамках одного модуля
2) layer-imports - проверяет корректность использования слоев с точки зрения FSD
   (например widgets нельзя использовать в features и entities)
3) public-api-imports - разрешает импорт из других модулей только из public api. Имеет auto fix

##### Запуск линтеров
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
----

## Адаптив

Для корректного отображения на различных разрешениях используются медиа-запросы, которые поддерживают разрешения: 
1920px, 1024px, 375px, а также все промежуточные значения.


----

## Конфигурация проекта

Для разработки проект использует сборщик Webpack.

Сборщик адаптирован под основные фичи приложения.

Вся конфигурация хранится в /config
- /config/build - конфигурация webpack

В папке `scripts` находятся различные скрипты для рефакторинга\упрощения написания кода\генерации отчетов и тд.

----

### Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

----

## Сущности (entities)
- [DishCard](/src/entities/DishCard)

Сущность описывающая карточку блюда. Содержит: изображение блюда, название,
тип, время приготовления, рейтинг и стоимость.


- [RestaurantCard](/src/entities/RestaurantCard)

Сущность описывающая карточку ресторана. Содержит: изображение ресторана, название,
тип, время, рейтинг.

- [Purchase](/src/entities/Purchase)

Сущность описывающая отзыв покупателя. Содержит: аватар, имя, слоган,
комментарий, рейтинг.

## Фичи (features)

- [Authorization](/src/features/Authorization)

Фича авторизации. В папке model хранятся связанные типы, 
предполагается что в будущем там же будет и стэйт.

В папке ui хранятся:

- AuthModal - модальное окно с формой AuthForm.

- AuthForm отрисовывает форму авторизации, в зависимости от типа переданной формы 
(SIGNIN/SIGNUP) в нее монтируется либо SignInForm, либо SignUpForm.

- SignInForm форма логина.

- SignUpForm форма регистрации.

- ModalDecor - визуальный компонент модального окна, не содержит бизнес-логики.



