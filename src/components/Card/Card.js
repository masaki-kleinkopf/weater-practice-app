import Itinerary from "../Itinerary/Itinerary"

const Card = ({date, high, low}) => {
  return (
    <div>
      <p>{date}</p>
      <p>High:{high}</p>
      <p>Low:{low}</p>
      <Itinerary/>
  </div>

  )
}

export default Card