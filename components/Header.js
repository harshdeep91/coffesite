import styles from '../styles/Header.module.css'
const Header = () => {
    return (
      <div className={styles.group17}>
          {/* left section */}
          <div className={styles.group16}>
              <img src='https://lun-us.icons8.com/a/3NyPdiM-M0WGs2DiJFmRPw/GJiaGiGT0k6mdqZNnY61zQ/Koala_icon.png' className={styles.koalaicon} />
              <div className={styles.coffeeShop}>
                  CoffeeShop
              </div>
          </div>
          {/* Right Section */}
              <div className={styles.group15}>
                  <div className={styles.homeText}>Home</div>
                  <div className={styles.products}>Products</div>
                  <div className={styles.benefits}>Benefits</div>
                  <div className={styles.contacts}>Contacts</div>
                  <div className={styles.signIn}>Sign In</div>
              </div>
        
            </div>
  )
}

export default Header