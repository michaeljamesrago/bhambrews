import { useState, useEffect } from 'react'
import axios from 'axios'
import BreweryList from './components/BreweryList'
import Notification from './components/Notification'

const App = () => {
  const [breweries, setBreweries] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    axios
      .get('https://api.openbrewerydb.org/breweries?by_city=bellingham')
      .then(response => {
        setBreweries(response.data)
      })
      .catch(error => {
        setErrorMessage("There was an error")
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
  }, [])

  return (
    <div>
      <div className="container">
        <div className="jumbotron">
          <h1>Bellingham Breweries</h1>
        </div>
      </div>
      <Notification message={errorMessage} />
      <BreweryList breweries={breweries} />
    </div>
  )
}

export default App