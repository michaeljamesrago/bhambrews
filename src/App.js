import { useState, useEffect } from 'react'
import axios from 'axios'
import BreweryList from './components/BreweryList'
import Notification from './components/Notification'
import PageHeader from './components/PageHeader'

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
      <PageHeader />
      <Notification message={errorMessage} />
      <BreweryList breweries={breweries} />
    </div>
  )
}

export default App