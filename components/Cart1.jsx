import React, { useState } from "react";
import styles from "../styles/Cart1.module.css";

const Cart1 = ({ cardTitle, cardData, }) => {
  return (
    <div className={styles.cartContainer}>
      <div className={styles.elementContainer}>
        <div className={styles.cartDataContainer}>
          <div className={styles.cartHeading}>{cardTitle}</div>
          <div className={styles.cartData}>
            {cardData.map((item) => (
              <div className={styles.row}>
                <div className={styles.cartDataRight}>{item.name}</div>
                <div className={styles.cartDataLeft}>
                  {item.quntity == null ? null : item.quntity}
                </div>
              </div>
            ))}

            <div className={styles.row}></div>
            <div className={styles.checkoutRow}>
              <div className={styles.row}>
                <div className={styles.cartDataRight}>
                  <div className={styles.rname}>
                    <p
                      className={cardData.length ? styles.mname : styles.mname}
                    >
                      {" "}
                      {cardData.length ? "Modify Order" : "Vacent"}{" "}
                    </p>
                  </div>
                </div>
                <div className={styles.cartDataLeft}>
                  <div className={styles.bname}>
                    <p>{cardData.length ? "Check out" : "Create Order"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart1;
