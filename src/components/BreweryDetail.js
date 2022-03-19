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
                    <p>{props.brewery.name}</p>
                    <div style={{ display: "flex", height: "35vh", width: "35vw" }}>
                        <Wrapper apiKey={"AIzaSyDdK9NheJPLy2jDcxdoNoQj0FkWVM4HhZk"}>
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