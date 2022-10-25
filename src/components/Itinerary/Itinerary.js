import styles from "./Itinerary.module.scss"
import { useState } from "react"

const Itinerary = () => {
  const [ itinerary, setItinerary] = useState("");
  const [ isAdded, setIsAdded ] = useState(false)

  return (
    isAdded ? 
    <div>
      <p>{itinerary}</p>
      <button onClick={()=>setIsAdded(false)}>add more</button>
    </div> : 
    <form className={styles.form} >
      <textarea value={itinerary} onChange={(event) => setItinerary(event.target.value)}></textarea>
      <button type="submit" onClick={() =>setIsAdded(true)}>Add Plans</button>
    </form>
  )
}

export default Itinerary