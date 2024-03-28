import { useState } from "react";
import styles from "./CardSum.module.css";

function CardSum({ orderList }) {
  return (
    <div className={styles.card}>
      <h1>Getränkerechner</h1>
      <div className={styles.list}>
        {orderList.length === 0 && (
          <ul style={{ fontStyle: "italic", margin: "0" }}>
            <li>
              Wähle Getränke aus um den Gesamtpreis der Bestellung zu berechnen.
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
    </div>
  );
}

function calculateTotalSum(orderList) {
  return orderList.reduce((sum, item) => {
    return sum + item.price * item.amount;
  }, 0);
}

export default CardSum;
