# Learn React

### react-props-drilling-basket-promo

- PROMO10, PROMO20 ...

С помощью проброса пропсов вам нужно решить две проблемы:
Можно применить промокод, но удалить его не получается.
Блок «Итого» не отображает сумму заказа.
Вносить исправления нужно в несколько файлов:
  
 app/app.js, cart/index.js, cart/products-container.js, common/total-price.js, ui/promo-button.js.

1. Проблема с удалением промокода
   Изучите компонент PromoButton, в коде есть пара подсказок:
   const cancelPromo = () => {
   // TODO: обнулить название акции (promo)
   // TODO: сбросить скидку (discount)
   };
   Нужные вам функции-сеттеры называются setPromo и setDiscount. Вы найдёте их в компоненте ProductsContainer. Просто передайте их в компонент PromoButton в качестве пропсов и вызовите внутри функции cancelPromo.
   После этого кнопка с промоакцией станет функционировать как надо: при клике на неё состояния названия акции и размера скидки будут сброшены.
2. Проблема с суммой заказа
   В компоненте TotalPrice вы обнаружите необходимые ему захардкоженные данные: состояния totalPrice и discount. Сейчас оба этих состояния определены в компоненте ProductsContainer. Ваша задача:
   поднять стейты totalPrice и discount до общего родительского компонента с TotalPrice и ProductsContainer;
   через пропсы передать состояния totalPrice и discount всем дочерним компонентам, которые в них нуждаются.
   image
   Теперь TotalPrice станет реагировать на изменения в корзине товаров и показывать общую стоимость
