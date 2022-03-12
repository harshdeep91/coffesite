import styles from '../styles/Fourth.module.css'
import Card from './Card'
const Fourth = () => {

  const cards = () => {
    const array = [1, 2, 3, 4, 5];
    return array.map(number =>
       <Card key={number}
        group={styles.group}
        rectangle={styles.rectangle}
        avatar={styles.avatar}
        name={styles.name}
        desc={styles.desc} />
    )
  }
  const Abouts = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return array.map(() =><h1>About Us</h1>
    )
  }
  return (
    <div>
      <div className={styles.whatOurCus}>
      What Our Customers Says,
      </div>
      <div className={styles.group22}>
        {cards()}
      </div>
      <div className={styles.rectangleC}>
        <div className={styles.about}>
          {Abouts()}
          </div>
      </div>
    </div>
  )
}

export default Fourth