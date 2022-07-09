import React from "react";
import styles from "./app.module.css";
import { Title } from "../../ui/title/title";
import { Cart } from "../cart";
import { TotalPrice } from "../common/total-price";

function App() {
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [discount, setDiscount] = React.useState(null);

  React.useEffect(() => {
    let total = 0;
    setTotalPrice(total);
  }, []);
  return (
    <div className={styles.app}>
      <Title text={"Корзина"} />
      <Cart
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        discount={discount}
        setDiscount={setDiscount}
      />
      <TotalPrice totalPrice={totalPrice} discount={discount} />
    </div>
  );
}

export default App;
