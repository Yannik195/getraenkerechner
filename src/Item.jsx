import { useState } from "react";

import styles from "./Item.module.css";

function Item({
  getränk,
  addItemToOrderList,
  removeItemFromOrderList,
  itemCounts,
}) {
  const handleIncreaseCount = () => {
    addItemToOrderList(getränk);
  };

  const handleDecreaseCount = () => {
    removeItemFromOrderList(getränk);
  };

  return (
    <div className={styles.item}>
      <div className={styles.count} onClick={handleDecreaseCount}>
        {itemCounts[getränk.name] > 0 && itemCounts[getränk.name]}
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
