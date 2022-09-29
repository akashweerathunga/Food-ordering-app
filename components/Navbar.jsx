import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>Chinese fusion kitchen</div>
      <div className={styles.item}>Current order</div>
      <div className={styles.item}>Past order</div>

      </div>
  )
}

export default Navbar