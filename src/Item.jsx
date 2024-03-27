import { useState } from "react";

import styles from "./Item.module.css";

function Item({ getränk, addItemToOrderList, removeItemFromOrderList }) {
  const [count, setCount] = useState(0);

  const handleIncreaseCount = () => {
    setCount(count + 1);
    addItemToOrderList(getränk);
  };

  const handleDecreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    removeItemFromOrderList(getränk);
  };

  return (
    <div className={styles.item}>
      <div className={styles.count} onClick={handleDecreaseCount}>
        {count > 0 && count}
      </div>
      <span className={styles.volume}>{getränk.volume}l</span>
      <span className={styles.name}>{getränk.name}</span>
      <div className={styles.price} onClick={handleIncreaseCount}>
        €{getränk.price}{" "}
      </div>
    </div>
  );
}

export default Item;
