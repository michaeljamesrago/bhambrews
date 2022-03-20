import { useState } from 'react'
import BreweryDetail from './BreweryDetail'

const BreweryList = ({ breweries }) => {
    const [showDetail, setShowDetail] = useState(false)
    const [currentBrewery, setCurrentBrewery] = useState(null)

    const handleClick = (brewery) => {
        setCurrentBrewery(brewery)
        setShowDetail(true)
    }

    return (
        <div className="container brewery-list">
            {breweries.length >0 ?  
                <p className="list-text">These are the breweries of Bellingham, Washington. Click on any of the links below for more information and a map.</p> :
                <p className="list-text">Sorry, the list is currently unavailable.</p>
            }
            <ul>
                {
                    breweries.map((brewery) =>
                        <li className="brewery-item" key={brewery.id}>
                            <a href="#" className="brewery-link" onClick={()=>handleClick(brewery)}>{brewery.name}</a>
                        </li>
                    )
                }
            </ul>
            <BreweryDetail show={showDetail} onClose={() => setShowDetail(false)} brewery={currentBrewery}/>
        </div>

    )
}

export default BreweryList