import styles from "./Item.module.css";

function Item({ getränk }) {
  return (
    <div className={styles.item}>
      <span className={styles.volume}>{getränk.volume}l</span>
      <span className={styles.name}>{getränk.name}</span>
      <span className={styles.price}>€{getränk.price} </span>
    </div>
  );
}

export default Item;
