import React from 'react'
import BreweryDetail from './BreweryDetail'

const Brewery = ({ brewery }) => {
  return (
    <li>
        {brewery.name}
        <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target={"#modal" + brewery.id}>Open Modal</button>
        <div id={"modal" + brewery.id} className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body">
                <BreweryDetail brewery={brewery} />
              </div>
              <div className="modal-footer">
              </div>
            </div>
          </div>
        </div>
    </li>
  )
}

export default Brewery