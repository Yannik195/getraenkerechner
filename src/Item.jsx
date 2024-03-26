import { useState } from "react";

import styles from "./Item.module.css";

function Item({ getränk }) {
  const [count, setCount] = useState(1);
  return (
    <div className={styles.item}>
      <div className={styles.count}>{count > 0 && count}</div>
      <span className={styles.volume}>{getränk.volume}l</span>
      <span className={styles.name}>{getränk.name}</span>
      <div className={styles.price}>€{getränk.price} </div>
    </div>
  );
}

export default Item;
