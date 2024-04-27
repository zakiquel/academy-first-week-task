# Eatly

## Описание проекта

Eatly - это веб-приложение для заказа еды. Главная страница предоставляет пользователю
обзор доступных блюд и услуг, а также позволяет ознакомиться с ценами. Дополнительно 
на данном сайте вы можете ознакомиться с различными новостями и оставить обратную связь.

## Цель задания

Основной целью данного задания является отработка следующих навыков:
- Семантическая верстка: Использование подходящих HTML тегов с учетом их семантики для лучшего понимания содержимого.
- Адаптивная верстка: Создание веб-страниц, которые корректно отображаются на различных устройствах и разрешениях экрана.
- Умение работать с разными браузерами: Гарантирование совместимости проекта с популярными браузерами, такими как Google Chrome, Firefox, Opera, Edge и т.д.
- Работа с декоративными элементами, псевдоэлементами: Использование CSS для стилизации и оформления элементов веб-страницы, включая использование псевдоэлементов для создания декоративных эффектов.
- Анимация: Реализация анимаций для улучшения пользовательского опыта и привлечения внимания к интерактивным элементам.

## Ресурсы

- Макет проекта доступен по ссылке: Figma
- Лайв-превью макета: Live Preview

## Запуск проекта

```
npm install - устанавливаем зависимости
npm run start:dev - запуск сервера + frontend проекта в dev режиме

Используемая версия Node - v18.17.0
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

## UI-компоненты

Для проекта были написаны собственные UI-компоненты, которые хранятся в /shared/ui

- ### [AppImage](/src/shared/ui/AppImage)

Компонент для работы с изображениями. Позволяет отрисовывать некоторый fallback,
пока картинка загружается, и отдельный fallback в случае ошибки при загрузке изображения.

- ### [Button](/src/shared/ui/Button)

Компонент кнопки. Включает в себя стандартные методы для кнопки + отдельными пропсами
мы можем задать стандартизированный размер, тему кнопки, радиус и т.д.

- ### [Modal](/src/shared/ui/Modal) 

Компонент модального окна, содержит все необходимые слушатели событий, иконку закрытия,
анимацию открытия/закрытия и обернут в React Portal.

- ### [Select](/src/shared/ui/Select)

Переиспользуемый компонент select`a. Типизирует стандартный select с помощью Generic props.

- ### [Loader](/src/shared/ui/Loader)

Компонент который может отображаться в качестве лоадера. Представляет из себя анимированную
крутящуюся окружность.

- ### [Portal](/src/shared/ui/Portal)

Компонент портала, телепортирует переданную ReactNode в указанный HTMLElement.

----

## Сущности (entities)
- ### [DishCard](/src/entities/DishCard)

Сущность описывающая карточку блюда. Содержит: изображение блюда, название,
тип, время приготовления, рейтинг и стоимость.


- ### [RestaurantCard](/src/entities/RestaurantCard)

Сущность описывающая карточку ресторана. Содержит: изображение ресторана, название,
тип, время, рейтинг.

- ### [Purchase](/src/entities/Purchase)

Сущность описывающая отзыв покупателя. Содержит: аватар, имя, слоган,
комментарий, рейтинг.

## Фичи (features)

- ### [Authorization](/src/features/Authorization)

Фича авторизации. В папке model хранятся связанные типы, 
предполагается что в будущем там же будет и стэйт.

В /Authorization/ui находятся:
   

   - [AuthModal](/src/features/Authorization/ui/AuthModal) - Модальное окно с формой.
   
   
   - [AuthForm](/src/features/Authorization/ui/AuthForm) - Отрисовывает форму авторизации, в зависимости от типа 
   переданной формы (SIGNIN/SIGNUP) в нее монтируется либо SignInForm, либо SignUpForm.
   
   
   - [SignInForm](/src/features/Authorization/ui/SignInForm) - Форма логина.
   
   
   - [SignUpForm](/src/features/Authorization/ui/SignUpForm) - Форма регистрации.
   
   
   - [ModalDecor](/src/features/Authorization/ui/ModalDecor) - Визуальный компонент модального окна, не содержит бизнес-
   логики.




