import { useState, useEffect } from 'react'
import BreweryList from './components/BreweryList'
import Notification from './components/Notification'
import PageHeader from './components/PageHeader'
import apiClient from './lib/apiClient'

const App = () => {
  const [breweries, setBreweries] = useState([])
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    apiClient.fetchBreweries(
      (data) => {
        setBreweries(data)
        if (errorMessage) { setErrorMessage("") }
      },
      (err) => {
        setErrorMessage(`Error: ${err.message}`)
      })
  }, [errorMessage])

  return (
    <div>
      <PageHeader />
      <Notification message={errorMessage} />
      <BreweryList breweries={breweries} />
    </div>
  )
}

export default App