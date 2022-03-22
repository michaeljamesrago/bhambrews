import React from 'react'
import { useState, useEffect } from 'react'

const Marker = (options) => {
    const [marker, setMarker] = useState();
  
    useEffect(() => {
      if (!marker) {
        setMarker(new window.google.maps.Marker());
      }
  
      return () => {
        if (marker) {
          marker.setMap(null);
        }
      };
    }, [marker]);
  
    useEffect(() => {
      if (marker) {
        const infowindow = new window.google.maps.InfoWindow({
          content: `Here`
        });
        marker.setOptions(options);
  
        marker.addListener("click", () => {
          infowindow.open({
            anchor: marker,
            shouldFocus: false
          });
        });
      }
    }, [marker, options]);
  
    return null;
  };

  export default Marker