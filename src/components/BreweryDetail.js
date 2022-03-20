import React from 'react'
import GoogleMap from './GoogleMap'
import Marker from './Marker'
import { Wrapper } from "@googlemaps/react-wrapper";


const BreweryDetail = props => {
    if (!props.show) {
        return null
    }

    const coordinates = {
        lat: parseFloat(props.brewery.latitude),
        lng: parseFloat(props.brewery.longitude),
    }

    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">Brewery Details</h4>
                </div>
                <div className="modal-body">
                    <ul>
                        <li>{props.brewery.name}</li>
                        <li>{props.brewery.street}</li>
                        {props.brewery.address_2 ? <li>props.brewery.address2</li> : null}
                        {props.brewery.address_3 ? <li>props.brewery.address3</li> : null}
                        <li>{props.brewery.city}, {props.brewery.state} {props.brewery.postal_code}</li>
                    </ul>
                    <div style={{ display: "flex", height: "35vh", width: "100%" }}>
                        <Wrapper apiKey={process.env.REACT_APP_GOOGLEMAPS_API_KEY}>
                        <GoogleMap
                            center={coordinates}
                            zoom={18}
                            style={{ flexGrow: "1", height: "100%" }}
                        >
                            <Marker position={coordinates} />;
                        </GoogleMap>
                        </Wrapper>
                    </div>
                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose} className="button">Close</button>
                </div>
            </div>
        </div>
    )
}

export default BreweryDetail