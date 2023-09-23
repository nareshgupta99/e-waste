import React, { useState } from 'react';
import 'mapbox-gl/dist/style-spec/'
import ReactMapGl from 'react-map-gl';

function Location() {
  const [viewPos, setViewPos] = useState({
    latitude: 28.6448,
    longitude: 77.216,
    zoom: 6,
  });

  return (
    <div>
      <div id="map" style={{ width: "100vw", height: "100vh" }}></div>

      <ReactMapGl
      {...viewPos}
      mapboxApiAccessToken={
        "pk.eyJ1IjoibmFyZXNoMDg5OSIsImEiOiJjbG12dHNwZzIwNWRxMmluemE4Ymtjc2thIn0.VQytBk9W8xqgSieVskWGOA"
    }
    width="100%"
    height="100%"
        latitude={viewPos.latitude}
        longitude={viewPos.longitude}
        transitionDuration={200}
        mapStyle="https://api.mapbox.com/styles/v1/naresh0899/clmvug2x002pp01r47ii29ps0.html?title=view&access_token=pk.eyJ1IjoibmFyZXNoMDg5OSIsImEiOiJjbG12cW9mZjUwbnA1MmlvYzV6ODQxZjNoIn0.oOTvchda7eExFETKvDTjow&zoomwheel=true&fresh=true#2/37.75/-92.25"
        
      >
        {/* Add map content or markers here */}
      </ReactMapGl>
    </div>
  );
}

export default Location;