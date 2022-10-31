import { useState, useEffect } from "react"
import './App.css';
import Cards from '../Cards/Cards'
import convertTemp from '../../util'
import Switch from '../Switch/Switch'
import Brewery from '../Brewery/Brewery'

const App = () => {
  const [weeklyForecast, setWeeklyForecast ] = useState([])
  const [ isChecked, setIsChecked ] = useState(false)
  const [ breweries, setBreweries] = useState([])
  const [ randomBrewery, setRandomBrewery ] = useState("")

  useEffect(() => {
    const getWeatherData = () => {
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

    const getBreweryData = () => {
      fetch('https://api.openbrewerydb.org/breweries?by_city=los_angeles')
        .then(response => response.json())
        .then(data => {
          let breweryData = data.map(breweryData => {
            return {brewery:breweryData.name}
          })
          setBreweries(breweryData)
        })
    }

    getWeatherData()
    getBreweryData()
  },[])

  useEffect(() => {
    if (breweries.length > 0) {
      let brewery = breweries[Math.floor((Math.random()*breweries.length))+1].brewery
      setRandomBrewery(brewery)
    }
  },[breweries])


  return (
    <div className= {!isChecked ? "App" : "AppDark"}>
      <p>Your Weekly LA Weather Journal</p>
      {randomBrewery && <Brewery breweries={breweries} setRandomBrewery={setRandomBrewery} randomBrewery={randomBrewery}/>}
      <Switch isChecked={isChecked} setIsChecked={setIsChecked}/>
      { weeklyForecast.length > 0 && <Cards weeklyForecast={weeklyForecast}/> }
    </div>
  );
}

export default App;
