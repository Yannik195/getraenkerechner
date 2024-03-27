import { useState } from "react";
import styles from "./CardSum.module.css";

function CardSum({ orderList, resetOrderList }) {
  return (
    <div className={styles.card}>
      <h1>Getränkerechner</h1>
      {orderList.map((getränk) => {
        return (
          <p>
            <span>{getränk.amount}x </span>
            <span>{getränk.name}</span>
            <span> €{getränk.price * getränk.amount}</span>
          </p>
        );
      })}
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
