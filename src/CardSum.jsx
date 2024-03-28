import { useState } from "react";
import styles from "./CardSum.module.css";

function CardSum({ orderList, resetOrderList }) {
  return (
    <div className={styles.card}>
      <h1>Getränkerechner</h1>

      <div className={styles.list}>
        {orderList.length === 0 && (
          <ul style={{ fontStyle: "italic", margin: "0" }}>
            <li>
              Tippe auf das blaue Label mit dem Preis, um ein Getränk
              auszuwählen.
            </li>
            <li>Entferne ein Getränk durch antippen des roten Labels.</li>
          </ul>
        )}
        {orderList.map((getränk) => {
          return (
            <p className={styles.item}>
              <span>{getränk.amount}x </span>
              <span>{getränk.name}</span>
              <span className={styles.price}>
                {" "}
                €{getränk.price * getränk.amount}
              </span>
            </p>
          );
        })}
      </div>

      <hr />
      <div className={styles.sum}>
        <button className={styles.button} onClick={resetOrderList}>
          Reset
        </button>
        <h2>€{calculateTotalSum(orderList)}</h2>
      </div>
    </div>
  );
}

function calculateTotalSum(orderList) {
  return orderList.reduce((sum, item) => {
    return sum + item.price * item.amount;
  }, 0);
}

export default CardSum;
