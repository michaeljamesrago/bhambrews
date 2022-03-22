import React from 'react'
import GoogleMap from './GoogleMap'
import Marker from './Marker'
import { Wrapper } from "@googlemaps/react-wrapper";


const BreweryDetail = ({ show, onClose, brewery}) => {
    if (!show) {
        return null
    }

    const coordinates = {
        lat: parseFloat(brewery.latitude),
        lng: parseFloat(brewery.longitude),
    }

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">Brewery Details</h4>
                </div>
                <div className="modal-body">
                    <ul>
                        <li>{brewery.name}</li>
                        <li>{brewery.street}</li>
                        {brewery.address_2 ? <li>brewery.address2</li> : null}
                        {brewery.address_3 ? <li>brewery.address3</li> : null}
                        <li>{brewery.city}, {brewery.state} {brewery.postal_code}</li>
                        {brewery.website_url ? <li><a href={brewery.website_url} target="_blank">Visit Website</a></li> : null}
                    </ul>
                    <div style={{ display: "flex", height: "35vh", width: "100%" }}>
                        <Wrapper apiKey={process.env.REACT_APP_GOOGLEMAPS_API_KEY}>
                            <GoogleMap
                                center={coordinates}
                                zoom={18}
                                style={{ flexGrow: "1", height: "100%" }}>
                                <Marker position={coordinates} />;
                            </GoogleMap>
                        </Wrapper>
                    </div>
                </div>
                <div className="modal-footer">
                    <button onClick={onClose} className="button">Close</button>
                </div>
            </div>
        </div>
    )
}

export default BreweryDetail