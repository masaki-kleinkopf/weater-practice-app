import styles from "./Itinerary.module.scss"

const Itinerary = () => {
  return (
    <form className={styles.form}>
      <textarea></textarea>
      <button type="submit">Add Plans</button>
    </form>
  )
}

export default Itinerary