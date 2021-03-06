import Image from "next/image";
import React from "react";
import styles from "../../styles/Order.module.css";

const Order = () => {
  const status = 0;
  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.trTitle}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>

              <th>Total</th>
            </tr>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>132443434</span>
              </td>
              <td>
                <span className={styles.name}>Cian Butler</span>
              </td>
              <td>
                <span className={styles.address}>1738 Fake St, Toronto</span>
              </td>

              <td>
                <span className={styles.total}>$39.98</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image alt="status" src="/img/paid.png" width={30} height={30} />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                alt="checked"
                src="/img/checked.png"
                className={styles.checkedIcon}
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image alt="status" src="/img/bake.png" width={30} height={30} />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image
                alt="checked"
                src="/img/checked.png"
                className={styles.checkedIcon}
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image alt="status" src="/img/bike.png" width={30} height={30} />
            <span>On The Way</span>
            <div className={styles.checkedIcon}>
              <Image
                alt="checked"
                src="/img/checked.png"
                className={styles.checkedIcon}
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image
              alt="status"
              src="/img/delivered.png"
              width={30}
              height={30}
            />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image
                alt="checked"
                src="/img/checked.png"
                className={styles.checkedIcon}
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
