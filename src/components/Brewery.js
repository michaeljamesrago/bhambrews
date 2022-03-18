import React from 'react'

const Brewery = ({ brewery }) => {
  return (
    <li>
        {brewery.name}
        <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
        <div id="myModal" class="modal fade" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              <div class="modal-body">
                <p>Some text in the modal.</p>
              </div>
              <div class="modal-footer">
              </div>
            </div>

          </div>
        </div>
    </li>
  )
}

export default Brewery