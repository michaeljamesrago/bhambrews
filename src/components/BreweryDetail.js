import React from 'react'

const BreweryDetail = ({ brewery }) => {
  return (
      <div>
          <ul>
              <li>{brewery.name}</li>
              <li>{brewery.street}</li>
              <li>{brewery.city}, {brewery.state} {brewery.postal_code}</li>
          </ul>
      </div>
  )
}

export default BreweryDetail