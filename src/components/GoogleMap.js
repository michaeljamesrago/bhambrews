import React from 'react'
import { useState, useEffect, useRef, Children, isValidElement, cloneElement } from 'react'

const GoogleMap = ({ onClick, onIdle, children, style, ...options }) => {
    const ref = useRef(null);
    const [map, setMap] = useState(null);
  
    useEffect(() => {
      if (ref.current && !map) {
        setMap(new window.google.maps.Map(ref.current, {}));
      }
    }, [ref, map]);
  
    useEffect(() => {
      if (map) {
        map.setOptions(options);
      }
    }, [map, options]);
  
    useEffect(() => {
      if (map) {
        ["click", "idle"].forEach((eventName) =>
          window.google.maps.event.clearListeners(map, eventName)
        );
  
        if (onClick) {
          map.addListener("click", onClick);
        }
  
        if (onIdle) {
          map.addListener("idle", () => onIdle(map));
        }
      }
    }, [map, onClick, onIdle]);
  
    return (
      <>
        <div ref={ref} style={style} />
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return cloneElement(child, { map });
          }
        })}
      </>
    );
  };

  export default GoogleMap