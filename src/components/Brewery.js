import React from 'react'

const Brewery = ({ brewery }) => {
  return (
    <li>
        {brewery.name}
        <button type="button" 
          className="btn btn-info btn-lg"
          data-toggle="modal"
          data-target="#modal"
          >Open</button>
    </li>
  )
}

export default Brewery