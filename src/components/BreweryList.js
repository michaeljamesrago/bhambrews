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
        <div>
            <ul>
                {
                    breweries.map((brewery) =>
                        <li key={brewery.id}>
                            {brewery.name} <button onClick={()=>handleClick(brewery)}>Show Modal</button>
                        </li>
                    )
                }
            </ul>
            <BreweryDetail show={showDetail} onClose={() => setShowDetail(false)} brewery={currentBrewery}/>
        </div>

    )
}

export default BreweryList