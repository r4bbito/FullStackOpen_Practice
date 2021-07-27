import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = (props) => {
  return(
    <div>
        find countries <input value={props.filter} onChange={props.filterChange}/>
    </div>
  )
}
const Countries = ({ countries, setFilter, filter }) => {
  const [weather, setWeather] = useState([])
  const [city, setCity] = useState('')


  let countriesResult=''
  const countriesNames = countries.map(country => country.name)
  const filteredCountries = countriesNames.filter(string => string.toUpperCase().includes(filter.toUpperCase()))

  useEffect(() => {
    axios
      .get('/current')
      .then(response => {
        setWeather(response.data)
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)})
  }, []) 

    useEffect(()=>{
      if(filteredCountries.length===1){
        const shownCountry = countries[ countries.findIndex(country => country.name===filteredCountries[0]) ]
        setCity(shownCountry.capital)
        console.log(city)
      }
    }, [city])


  const handleCountryShown = (event) =>{
    event.preventDefault()
    const countryName = event.target.innerText.substring(0,event.target.innerText.length-5)
    setFilter(countryName)
  }

  // let countriesResult=''
  // const countriesNames = countries.map(country => country.name)
  // const filteredCountries = countriesNames.filter(string => string.toUpperCase().includes(filter.toUpperCase()))

  if (filteredCountries.length > 10 && filter.length > 0){
    countriesResult = <div>
      Too many matches, specify another filler
    </div>
  }
  if (filteredCountries.length < 10 && filteredCountries.length > 1){
      countriesResult=filteredCountries.map((country,i) => 
        <form onSubmit={handleCountryShown} key={i}>{country+"     "}
          <button type='submit'>show</button>
        </form>
      )
  }
  if (filteredCountries.length===1){

    const shownCountry = countries[ countries.findIndex(country => country.name===filteredCountries[0]) ]
    // setCity(shownCountry.capital)

    countriesResult = 
    <>
      <h1><strong>{shownCountry.name}</strong></h1>
      <div>capital {shownCountry.capital}</div>
      <div>population {shownCountry.population}</div>
      <h2><strong>languages</strong></h2>
      <ul>
        {shownCountry['languages'].map((country,i) => 
          <li key={i}>{country.name}</li>)}
      </ul>
      <img src={shownCountry.flag} width="150" height="150" alt="Flag of country"></img>
    </>
  }
  return(
    <div>
      {countriesResult}
    </div>

  )
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('/rest/v2/all')
      .then(res => {
        setCountries(res.data)
      })
  }, [])  

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <Filter filter={filter} filterChange={handleFilterChange}/>
      <Countries countries={countries} filter={filter} setFilter={setFilter}/>
    </div>
  )
}

export default App
