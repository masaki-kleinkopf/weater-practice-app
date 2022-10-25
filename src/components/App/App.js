import { useState, useEffect } from "react"
import './App.css';
import Cards from '../Cards/Cards'
import convertTemp from '../../util'

const App = () => {
  const [weeklyForecast, setWeeklyForecast ] = useState([])

  useEffect(() => {
    const getData = () => {
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min&timezone=PST`)
      .then(response => response.json())
      .then(data => {
        let dailyForecast = data.daily.time.map((date,index) => {
          return {
            date:date, 
            high:convertTemp(data.daily.temperature_2m_max[index]),
            low:convertTemp(data.daily.temperature_2m_min[index])
          }
        })
        setWeeklyForecast(dailyForecast)
      })
    }
    getData()
  },[])
  return (
    <div className="App">
      <p>Your Weekly Weather</p>
      { weeklyForecast.length > 0 && <Cards weeklyForecast={weeklyForecast}/> }
    </div>
  );
}

export default App;
