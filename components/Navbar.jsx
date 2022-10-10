import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <p>Chinese fusion kitchen</p>
      </div>
      <div className={styles.item}>
        <p className={styles.cname}>Current order</p>
      </div>
      <div className={styles.item}>
        <p className={styles.pname}> Past order</p>
      </div>
    </div>
  );
};

export default Navbar;
