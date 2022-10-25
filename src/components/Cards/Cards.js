import Card from '../Card/Card'
import styles from './Cards.module.scss'

const Cards = ({ weeklyForecast }) => {

  const cardComponents = weeklyForecast.map((data,index) => {
    return <Card date={data.date} high={data.high} low={data.low} key={index}/>
  })
  return (
    <div className={styles.container}>
      {cardComponents}
    </div>
  )
}

export default Cards