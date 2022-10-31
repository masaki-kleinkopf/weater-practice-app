const Brewery = ({randomBrewery, setRandomBrewery, breweries}) => {
  const handleClick = () => {
    let brewery = breweries[Math.floor((Math.random()*breweries.length))+1].brewery
    setRandomBrewery(brewery)
  }

  return (
    <div>
      <p>{randomBrewery}</p>
      <button onClick={handleClick}>get random brewery</button>
    </div>
  )
}

export default Brewery