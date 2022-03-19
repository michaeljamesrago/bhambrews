import { useState, useEffect } from 'react'
import axios from 'axios'
import BreweryList from './components/BreweryList'
import Notification from './components/Notification'
import GoogleMap from './components/GoogleMap'
import Marker from './components/Marker'
import { Wrapper } from "@googlemaps/react-wrapper";

const markers = [
  { lat: 48.7601273, lng: -122.4645645 },
];

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
      <div style={{ display: "flex", height: "50vh", width: "50vw" }}>
        <Wrapper apiKey={"AIzaSyDdK9NheJPLy2jDcxdoNoQj0FkWVM4HhZk"}>
          <GoogleMap
            center={{ lat: 48.7601273, lng: -122.4645645 }}
            zoom={18}
            style={{ flexGrow: "1", height: "100%" }}
          >
            <Marker position={{ lat: 48.7601273, lng: -122.4645645 }} />;
          </GoogleMap>
        </Wrapper>
      </div>
    </div>
  )
}

export default App