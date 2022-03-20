import axios from "axios"

const apiClient = {
    fetchBreweries(callback, errorHandler) {
        axios.get('https://api.openbrewerydb.org/breweries?by_city=bellingham')
        .then(response => {
            callback(response.data)
        })
        .catch(err => {
            errorHandler(err)
        })
    }
}

export default apiClient