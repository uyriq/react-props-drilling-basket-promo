# Learn React

### REACT-CONTEXT-API

В предыдущем уроке вы доработали функциональность корзины интернет-магазина. Теперь ваша задача — провести рефакторинг и при помощи ”React Context API” упростить взаимодействие разработчиков с состоянием приложения, ведь уследить за всеми пропсами становится сложно.
Сейчас приложение выглядит как страница корзины с возможностью добавлять товары и применять промокоды:
image
Внешне всё работает отлично, но внутри есть, что поправить.
Вносить исправления нужно в нескольких файлах: app/app.js, cart/index.js, cart/products-container.js, cart/products.js, common/total-price.js и ui/promo-button.js.
Для начала измените глобальный стейт, который хранится в компоненте App. Там определены состояния totalPrice и discount, и они передаются дочерним компонентам с помощью пропсов. Чтобы перенести эти состояния на механизм контекста, создайте файл appContext.js в директории services и определите в нём контексты для скидки и общей стоимости товаров:
export const TotalPriceContext = React.createContext(null);
export const DiscountContext = React.createContext(null);
После этого в компоненте App необходимо реализовать провайдеры контекста, создающие «область видимости», внутри которой любой компонент сможет получить содержимое контекста:
return (

  <div className={styles.app}>
    <TotalPriceContext.Provider value={{totalPrice, setTotalPrice}}>
      <DiscountContext.Provider value={{discount, setDiscount}}>
        <Title text={'Корзина'} />
        <Cart />
        <TotalPrice />
      </DiscountContext.Provider>
    </TotalPriceContext.Provider>
  </div>
); 
Теперь вы можете удалить все пропсы, с помощью которых передавали состояние другим компонентам, и получить состояния totalPrice и discount. Для этого нужно воспользоваться хуком useContext():
const { totalPrice, setTotalPrice } = useContext(TotalPriceContext);
const { discount, setDiscount } = useContext(DiscountContext); 
Похожим образом вы можете провести рефакторинг состояния компонента ProductsContainer. В директории services создайте файл productsContext.js и определите в нём контексты данных о товарах и названия промоакции:
export const DataContext = React.createContext([]);
export const PromoContext = React.createContext(''); 
Внутри ProductsContainer создайте провайдеры контекста и в качестве значения передайте им параметры стейтов data и promo:
<div className={`${styles.container}`}>
  <DataContext.Provider value={{ data, setData }}>
    <PromoContext.Provider value={{ promo, setPromo }}>
// ... 
Осталось только заменить все пропсы на контекст в дочерних компонентах:
const { data, setData } = useContext(DataContext);
const { promo, setPromo } = useContext(PromoContext); 
Если после всех исправлений приложение ещё работает, значит, рефакторинг удался, и теперь большая часть важных данных передаётся с помощью контекста.

! Не забудьте удалить пропсы в аргументах вызываемых компонентов и промежуточных компонентах, например в cart/index.js.
