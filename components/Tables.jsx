import React, { useState } from "react";
import styles from "../styles/Tables.module.css";
import Cart1 from "./Cart1";

const Tables = () => {
  const [firstRowData, setFirstRowData] = useState([
    {
      name: "Table 1",
      id: 1,
      // subData:"sasa",
      data: [
        {
          name: "Set Menu Fried Rice",
          quntity: 10,
        },
        {
          name: "Chicken Devil Curry",
          quntity: 1,
        },
        {
          name: "Mango Milk Shake",
          quntity: 2,
        },
        {
          name: "Pepsi 500 ML",
          quntity: 2,
        },
      ],
    },
    {
      name: "Table 2",
      id: 1,
      // subData:"sasa",
      data: [
        {
          name: "Set Menu Fried Rice",
          quntity: 2,
        },
        {
          name: "Chicken Devil Curry",
          quntity: 1,
        },
        {
          name: "Mango Milk Shake",
          quntity: 2,
        },
        {
          name: "Pepsi 500 ML",
          quntity: 2,
        },
        {
          name: "+2 item",
          quntity: null,
        },
      ],
    },
    {
      name: "Table 3",
      data: [
        // {
        //   name: "+2 item",
        //   quntity: null,
        // }
      ],
    },
  ]);

  return (
    <div className={styles.tableContainer}>
      <div className={styles.row}>
        <div className={styles.left}>
          <div className={styles.heading}>
            <label>Tables</label>
          </div>
          <div className={styles.column}>
            <div className={styles.row}>
              {firstRowData.map((item) => (
                <Cart1
                  key={item.id}
                  cardTitle={item.name}
                  cardData={item.data}
                  subData={item.subData}
                />
              ))}
            </div>
          </div>
          <div className={styles.name}>
            <p className={styles.aname}>Add new Table</p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.tname}>
            Deliveries
            <div className={styles.sname}>
              No deliveries Available
              <div className={styles.lname}>Create Order</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tables;
