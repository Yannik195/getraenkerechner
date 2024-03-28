import styles from "./Sum.module.css";

function Sum({ resetOrderList, orderList }) {
  return (
    <div className={styles.sum}>
      <hr />
      <div>
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

export default Sum;
