import { useState, useEffect } from "react"
import './App.css';

const App = () => {
  const [weeklyForecast, setWeeklyForecast ] = useState([])

  useEffect(() => {
    const getData = () => {
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min&timezone=PST`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        let dailyForecast = data.daily.time.map((date,index) => {
          return {
            date:date, 
            high:data.daily.temperature_2m_max[index],
            low:data.daily.temperature_2m_min[index]
          }
        })
        setWeeklyForecast(dailyForecast)
      })
    }
    getData()
  },[])
  return (
    <div className="App">
      {weeklyForecast.length > 0 && weeklyForecast[0].date}
    </div>
  );
}

export default App;
