import React from 'react'

const GoogleMap = ({ onClick, onIdle, children, style, ...options }) => {
    const ref = React.useRef(null);
    const [map, setMap] = React.useState();
  
    React.useEffect(() => {
      if (ref.current && !map) {
        setMap(new window.google.maps.Map(ref.current, {}));
      }
    }, [ref, map]);
  
    React.useEffect(() => {
      if (map) {
        map.setOptions(options);
      }
    }, [map, options]);
  
    React.useEffect(() => {
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
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { map });
          }
        })}
      </>
    );
  };

  export default GoogleMap